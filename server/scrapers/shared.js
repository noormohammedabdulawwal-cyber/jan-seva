import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Branch so one accessor serves a local demo (file:// fixture — undici's fetch
// refuses the file: scheme) and a live http(s) target later. Add jsdom
// rendering here only if a real page provably needs JS to populate content.
export async function fetchHtml(url) {
  if (url.startsWith('file://')) return await readFile(fileURLToPath(url), 'utf8');
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
  return await res.text();
}

// Collects a per-language text block from elements tagged [data-lang] inside one
// item. Returns {en, hi, gu} etc. — the shape the schema's Mixed fields store.
export function langBlock($, rootEl, cls) {
  const out = {};
  $(rootEl).find('.' + cls).each((_, el) => {
    out[$(el).attr('data-lang') || 'en'] = $(el).text().trim();
  });
  return out;
}