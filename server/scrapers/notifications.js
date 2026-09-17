import * as cheerio from 'cheerio';
import { fetchHtml, langBlock } from './shared.js';

// Scrapes a notice page into rows shaped for the NewsItem model
// (headline as per-language object, id/date/relatedServiceId scalars).
export async function scrapeNotifications(url) {
  const $ = cheerio.load(await fetchHtml(url));
  const notices = [];
  $('li.notice').each((_, el) => {
    const $el = $(el);
    notices.push({
      id: $el.attr('data-id'),
      date: $el.attr('data-date'),
      relatedServiceId: $el.attr('data-related') || undefined,
      headline: langBlock($, el, 'n-headline'),
    });
  });
  return notices;
}