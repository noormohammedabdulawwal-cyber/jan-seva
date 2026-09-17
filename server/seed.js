import 'dotenv/config';
import { connectDB } from './db.js';
import mongoose from 'mongoose';
import { Service, Office, NewsItem } from './models.js';
import { SERVICES } from '../src/data/services.js';
import { OFFICES } from '../src/data/offices.js';
import { NEWS } from '../src/data/news.js';

// Upserts the bundled static content into MongoDB. Idempotent — safe to re-run.
const offices = OFFICES.map((o, i) => ({ ...o, id: o.id || 'office-' + (i + 1) }));
const services = SERVICES.map((s, i) => ({ ...s, id: s.id || 'service-' + (i + 1) }));
const news = NEWS.map((n, i) => ({ ...n, id: n.id || 'news-' + (i + 1) }));

const upsert = (Model, rows, label) =>
  Model.bulkWrite(rows.map((r) => ({ updateOne: { filter: { id: r.id }, update: { $set: r }, upsert: true } }))).then(
    () => console.log(`seeded ${rows.length} ${label}`)
  );

await connectDB();
try {
  await upsert(Service, services, 'services');
  await upsert(Office, offices, 'offices');
  await upsert(NewsItem, news, 'news');
} finally {
  await mongoose.disconnect();
}