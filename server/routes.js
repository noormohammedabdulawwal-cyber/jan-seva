import { Router } from 'express';
import { Service, Office, NewsItem, Appointment } from './models.js';
import { runSync } from './jobs/syncScheduler.js';

export const router = Router();

// dev-only manual sync trigger (POST /api/sync/run) — disable via ENABLE_MANUAL_SYNC=false
if (process.env.ENABLE_MANUAL_SYNC !== 'false') {
  router.post('/sync/run', async (_req, res) => {
    const result = await runSync();
    res.status(result.ok ? 200 : 500).json(result);
  });
}

// --- content ---
router.get('/services', async (_req, res) => res.json(await Service.find()));
router.get('/services/:id', async (req, res) => {
  const s = await Service.findOne({ id: req.params.id });
  if (!s) return res.status(404).json({ error: 'not found' });
  res.json(s);
});
router.get('/offices', async (_req, res) => res.json(await Office.find()));
router.get('/news', async (_req, res) => res.json(await NewsItem.find()));

// --- appointments ---
const ref = () => 'JS-' + Math.random().toString(36).slice(2, 8).toUpperCase();

router.get('/appointments', async (req, res) => {
  const docs = await Appointment.find({ deviceId: req.query.deviceId, status: 'confirmed' }).sort({ date: 1, timeSlot: 1 });
  res.json(docs.map((d) => ({ id: d._id, ...d.toObject(), _id: undefined })));
});

router.post('/appointments', async (req, res) => {
  const { deviceId, serviceId, officeId, date, timeSlot } = req.body;
  if (!deviceId || !serviceId || !officeId || !date || !timeSlot) {
    return res.status(400).json({ error: 'deviceId, serviceId, officeId, date, timeSlot required' });
  }
  const appt = await Appointment.create({ deviceId, serviceId, officeId, date, timeSlot, referenceNumber: ref() });
  res.status(201).json({ id: appt._id, ...appt.toObject(), _id: undefined });
});

router.delete('/appointments/:id', async (req, res) => {
  const removed = await Appointment.findByIdAndDelete(req.params.id);
  if (!removed) return res.status(404).json({ error: 'not found' });
  res.json({ ok: true });
});