import mongoose from 'mongoose';

const { Schema, model } = mongoose;
// Content blobs (name/eligibility/docs/steps...) are opaque per-language
// objects the frontend reads verbatim — declared Mixed so the seed can
// store them exactly as-is without a 50-field schema.
const Mixed = Schema.Types.Mixed;

export const Service = model(
  'Service',
  new Schema({
    id: { type: String, required: true, unique: true, index: true },
    cat: String,
    icon: String,
    color: String,
    name: Mixed,
    desc: Mixed,
    fee: String,
    time: Mixed,
    timeBucket: String,
    portal: String,
    eligibility: Mixed,
    questions: [Mixed],
    docs: [Mixed],
    steps: Mixed,
    mistakes: Mixed,
  })
);

export const Office = model(
  'Office',
  new Schema({
    id: { type: String, required: true, unique: true, index: true },
    name: Mixed,
    lat: Number,
    lng: Number,
    addr: String,
  })
);

export const NewsItem = model(
  'NewsItem',
  new Schema({
    id: { type: String, required: true, unique: true, index: true },
    date: String,
    relatedServiceId: String,
    headline: Mixed,
  })
);

export const Appointment = model(
  'Appointment',
  new Schema({
    deviceId: { type: String, index: true },
    serviceId: String,
    officeId: String,
    date: String,
    timeSlot: String,
    referenceNumber: { type: String, unique: true },
    status: { type: String, default: 'confirmed' },
    createdAt: { type: Date, default: Date.now },
  })
);