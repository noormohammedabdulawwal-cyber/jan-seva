import cron from 'node-cron';
import { scrapeGovernmentPages } from '../scrapers/governmentPages.js';
import { scrapeNotifications } from '../scrapers/notifications.js';
import { diffAndSync } from '../services/diffAndSync.js';
import { Service, NewsItem } from '../models.js';

const FIXTURE = (name) => new URL('../fixtures/' + name, import.meta.url).href;

// One full sync pass: scrape both branches in parallel, diff against Mongo,
// write only what changed, log a timestamped report. Never throws to the
// caller — a scrape/DB error is caught, logged, and reported via ok:false so
// a bad run can't take down the server or stop the next scheduled run.
export async function runSync() {
  const ts = new Date().toISOString();
  try {
    const [services, notices] = await Promise.all([
      scrapeGovernmentPages(process.env.SCRAPE_TARGET_URL || FIXTURE('mock-gov-services.html')),
      scrapeNotifications(process.env.SCRAPE_NOTIFICATIONS_URL || FIXTURE('mock-notifications.html')),
    ]);
    const reports = [
      await diffAndSync(Service, services, 'services'),
      await diffAndSync(NewsItem, notices, 'news'),
    ];
    const result = { ts, ok: true, wrote: reports.some((r) => r.changed.length), reports };
    console.log('[sync] ' + JSON.stringify(result));
    return result;
  } catch (err) {
    const result = { ts, ok: false, wrote: false, error: err.message };
    console.error('[sync] FAILED ' + JSON.stringify(result));
    return result;
  }
}

// wire up the 30-min cron; SYNC_INTERVAL_MINUTES overrides (default 30).
export function startSyncScheduler() {
  const minutes = Math.max(1, parseInt(process.env.SYNC_INTERVAL_MINUTES || '30', 10));
  const expr = '*/' + minutes + ' * * * *';
  const task = cron.schedule(expr, () => runSync());
  console.log(`[sync] scheduler started — every ${minutes} min (${expr})`);
  return task;
}