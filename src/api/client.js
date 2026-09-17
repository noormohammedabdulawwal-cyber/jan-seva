// Thin data layer. Content (services/offices/news) degrades to the bundled
// static data when the backend is down, so the app never white-screens.
// Appointments are real persistence — no fallback; failures surface as errors.
import { SERVICES } from '../data/services';
import { OFFICES } from '../data/offices';
import { NEWS } from '../data/news';

const BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

async function req(path, opts = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- content (server-first, static fallback) ---
export const getServices = () => req('/services').catch(() => SERVICES);
export const getOffices = () => req('/offices').catch(() => OFFICES);
export const getNews = () => req('/news').catch(() => NEWS);

// --- appointments (must persist, so a failure means the backend is down) ---
export function getDeviceId() {
  let id = localStorage.getItem('deviceId');
  if (!id) {
    id = (crypto.randomUUID && crypto.randomUUID()) || 'd-' + Math.random().toString(36).slice(2);
    localStorage.setItem('deviceId', id);
  }
  return id;
}
export const listAppointments = () =>
  req(`/appointments?deviceId=${encodeURIComponent(getDeviceId())}`);
export const createAppointment = (data) =>
  req('/appointments', { method: 'POST', body: JSON.stringify({ ...data, deviceId: getDeviceId() }) });
export const cancelAppointment = (id) => req(`/appointments/${id}`, { method: 'DELETE' });