import { isDeepStrictEqual } from 'node:util';

// Compare on business fields only: drop Mongo bookkeeping (_id/__v) and the
// natural key (id), which already selects the row. Also drop top-level keys
// that hold no content (undefined/null/empty-array) — Mongoose materializes
// array schema paths like docs/questions as [] on insert, so "absent" in the
// scraped row must count as equal to "empty default" in the stored doc.
const normalize = (doc) => {
  const { _id, __v, ...fields } = doc;
  delete fields.id; // natural key selects the row, not business content
  for (const k of Object.keys(fields)) {
    const v = fields[k];
    if (v === undefined || v === null) delete fields[k];
    else if (Array.isArray(v) && v.length === 0) delete fields[k];
  }
  return fields;
};

// Tradeoff — isDeepStrictEqual vs a content hash: deep-equal is exact, handles
// the nested Mixed blobs the schema stores, and is O(fields), which is nothing
// at this doc count (a handful per branch). A hash needs stable serialization
// plus somewhere to store the old value, for zero gain here. Revisit only if a
// branch grows to thousands of rows and the scan shows up in profiling.

// Upserts every scraped row that differs from what's already stored. Rows
// whose meaningful fields are unchanged are skipped — no write, no churn.
// Returns a report of what ran and what changed.
export async function diffAndSync(Model, rows, label) {
  const report = { label, checked: rows.length, changed: [] };
  for (const row of rows) {
    const existing = await Model.findOne({ id: row.id });
    if (existing && isDeepStrictEqual(normalize(existing.toObject()), normalize(row))) continue;
    await Model.updateOne({ id: row.id }, { $set: row }, { upsert: true });
    report.changed.push(row.id);
  }
  return report;
}