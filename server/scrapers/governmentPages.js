import * as cheerio from 'cheerio';
import { fetchHtml, langBlock } from './shared.js';

// Scrapes a government service page into rows shaped for the Service model
// (name/desc/time as per-language Mixed objects, matching seeded data). Each
// .service article must carry a stable data-id that becomes the Mongo _id.
export async function scrapeGovernmentPages(url) {
  const $ = cheerio.load(await fetchHtml(url));
  const services = [];
  $('article.service').each((_, el) => {
    const $el = $(el);
    services.push({
      id: $el.attr('data-id'),
      cat: $el.attr('data-cat'),
      icon: $el.attr('data-icon') || 'ti-feather',
      color: $el.attr('data-color'),
      name: langBlock($, el, 'f-name'),
      desc: langBlock($, el, 'f-desc'),
      fee: $el.find('.f-fee').text().trim(),
      time: langBlock($, el, 'f-time'),
      timeBucket: $el.find('.f-timebucket').text().trim() || undefined,
      portal: $el.find('.f-portal').attr('href'),
    });
  });
  return services;
}