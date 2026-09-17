// Next N working days, skipping weekends and Gujarat public holidays.
// ponytail: holiday list is a small static subset for the demo; extend in data when real.
export const GUJARAT_HOLIDAYS_2026 = [
  '2026-01-26', // Republic Day
  '2026-03-21', // Holi
  '2026-04-14', // Ambedkar Jayanti / New Year
  '2026-08-15', // Independence Day
  '2026-10-02', // Gandhi Jayanti
  '2026-11-15', // Diwali (approx)
  '2026-12-25', // Christmas
].map((d) => new Date(d + 'T00:00:00').getTime());

export function isWorkingDay(d) {
  const day = d.getDay();
  if (day === 0 || day === 6) return false;
  const t = new Date(d);
  t.setHours(0, 0, 0, 0);
  return GUJARAT_HOLIDAYS_2026.indexOf(t.getTime()) === -1;
}

// Next `n` working days starting tomorrow.
export function nextWorkingDays(n = 10) {
  const out = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < n) {
    if (isWorkingDay(d)) out.push(isoDate(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

export function isoDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// 22 Official-languages labels -> <lang>-IN locale for date formatting.
const LOCALES = {
  en: 'en-IN', hi: 'hi-IN', gu: 'gu-IN', as: 'as-IN', bn: 'bn-IN', brx: 'brx-IN',
  doi: 'doi-IN', kn: 'kn-IN', ks: 'ks-IN', kok: 'kok-IN', mai: 'mai-IN', ml: 'ml-IN',
  mni: 'mni-IN', mr: 'mr-IN', ne: 'ne-IN', or: 'or-IN', pa: 'pa-IN', sa: 'sa-IN',
  sat: 'sat-IN', sd: 'sd-IN', ta: 'ta-IN', te: 'te-IN', ur: 'ur-IN',
};

export function formatDate(iso, lang) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString(LOCALES[lang] || 'en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

// 30-min slots from 10:00–13:00 and 14:00–16:30.
export const SLOTS = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
];

// Deterministic mock: ~1/3 of slots are pre-booked for a given office+date.
export function isSlotBooked(officeId, date, timeSlot) {
  const h = (officeId + date + timeSlot).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return h % 3 === 0;
}