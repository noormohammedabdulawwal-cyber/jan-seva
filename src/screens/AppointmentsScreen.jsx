import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import { listAppointments, createAppointment, cancelAppointment } from '../api/client';
import { nextWorkingDays, SLOTS, isSlotBooked, formatDate } from '../utils/workingDays';

export default function AppointmentsScreen({ lang, t, services, offices, prefillService, onBack }) {
  // Booking wizard state (only when opened from a service).
  const [step, setStep] = useState(prefillService ? 0 : -1); // -1 = just the list
  const [officeId, setOfficeId] = useState('');
  const [dateIso, setDateIso] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [confirmed, setConfirmed] = useState(null); // full doc returned by API

  // List state.
  const [appts, setAppts] = useState(null); // null = loading
  const [error, setError] = useState('');

  const days = nextWorkingDays(10);
  const office = offices.find((o) => o.id === officeId);
  const service = prefillService;
  const coreDocs = (service && service.docs ? service.docs.filter((d) => !d.when) : []);

  function load() {
    setAppts(null);
    setError('');
    listAppointments().then(setAppts).catch(() => setError(t('apptLoadError')));
  }

  useEffect(load, []);

  async function submit() {
    try {
      const doc = await createAppointment({ serviceId: service.id, officeId, date: dateIso, timeSlot });
      setConfirmed(doc);
      load();
    } catch {
      setError(t('apptLoadError'));
    }
  }

  async function cancel(id) {
    await cancelAppointment(id);
    load();
  }

  function openBooking() {
    setStep(0);
    setOfficeId('');
    setDateIso('');
    setTimeSlot('');
    setConfirmed(null);
  }

  const stepLabel = (n) => (n === 0 ? t('apptChooseOffice') : n === 1 ? t('apptChooseDate') : t('apptChooseTime'));

  return (
    <div id="screen-appointments" className="screen">
      <div style={{ background: 'var(--navy)', padding: '1rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <button className="back-btn" onClick={onBack}>
          <Icon name="arrow-left" size={16} color="#fff" /> {t('backBtn')}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
          <div style={{ color: '#fff', fontSize: 17, fontWeight: 500 }}>{t('myAppointments')}</div>
          {prefillService && (
            <button onClick={openBooking} style={{ background: 'var(--saffron)', border: 'none', color: '#fff', borderRadius: 20, padding: '7px 12px', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>
              <Icon name="calendar-plus" size={14} /> {t('bookAppt')}
            </button>
          )}
        </div>
      </div>

      <div style={{ padding: '1rem' }}>
        {error && <div style={{ fontSize: 12, color: '#E65100', background: '#FFF3E0', borderRadius: 8, padding: 8, marginBottom: '0.75rem' }}>{error}</div>}

        {appts === null ? (
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, padding: '2rem 0' }}>{t('loading')}</div>
        ) : appts.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, padding: '2rem 0' }}>{t('apptNoAppointments')}</div>
        ) : (
          appts.map((a) => {
            const s = services.find((x) => x.id === a.serviceId);
            const o = offices.find((x) => x.id === a.officeId);
            return (
              <div key={a.id} className="office-card" style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--saffron)', letterSpacing: 0.3 }}>{a.referenceNumber}</div>
                  <button onClick={() => cancel(a.id)} style={{ background: 'none', border: 'none', color: '#D94F5C', fontSize: 12, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                    <Icon name="trash" size={14} /> {t('apptCancel')}
                  </button>
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginTop: 6 }}>{s ? s.name[lang] : a.serviceId}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                  {formatDate(a.date, lang)} · {a.timeSlot}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{o ? o.name[lang] : a.officeId}</div>
              </div>
            );
          })
        )}
      </div>

      {prefillService && step >= 0 && !confirmed && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: '1rem', borderTop: '3px solid var(--saffron)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>{stepLabel(step)}</div>
              <button onClick={() => setStep(-1)} aria-label={t('apptClose')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Icon name="x" size={20} color="var(--muted)" />
              </button>
            </div>

            {step === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {offices.map((o) => (
                  <button key={o.id} onClick={() => { setOfficeId(o.id); setStep(1); }} style={{ textAlign: 'left', padding: '10px 12px', borderRadius: 10, border: '1.5px solid var(--border-col)', background: '#fff', cursor: 'pointer' }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>{o.name[lang]}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{o.addr}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
                {days.map((d) => (
                  <button key={d} onClick={() => { setDateIso(d); setStep(2); }} style={{ padding: '10px', borderRadius: 10, border: '1.5px solid var(--border-col)', background: '#fff', cursor: 'pointer', fontSize: 12, color: 'var(--navy)' }}>
                    {formatDate(d, lang)}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 8 }}>{t('apptFewerSlotsNote')}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {SLOTS.map((sl) => {
                    const booked = isSlotBooked(officeId, dateIso, sl);
                    return (
                      <button key={sl} disabled={booked} onClick={() => setTimeSlot(sl)} style={{ padding: '9px', borderRadius: 10, border: '1.5px solid var(--border-col)', background: booked ? '#F2F4F7' : '#fff', color: booked ? 'var(--muted)' : 'var(--navy)', fontSize: 12, cursor: booked ? 'not-allowed' : 'pointer', textDecoration: booked ? 'line-through' : 'none' }}>
                        {sl}
                        {booked && <div style={{ fontSize: 9, textDecoration: 'none' }}>{t('apptBooked')}</div>}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 2 && timeSlot && (
              <>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 8 }}>{t('apptClose')}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Summary label={t('apptOffice')} value={office ? office.name[lang] : ''} />
                  <Summary label={t('apptDate')} value={formatDate(dateIso, lang)} />
                  <Summary label={t('apptTime')} value={timeSlot} />
                </div>
                <button className="primary-btn" onClick={submit} style={{ marginTop: 12 }}>
                  <Icon name="calendar-plus" size={16} color="#fff" /> {t('apptConfirm')}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {confirmed && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: 400, borderRadius: 18, padding: '1rem', borderTop: '3px solid var(--green)' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="check" size={18} color="var(--green)" /> {t('apptConfirmedTitle')}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{t('apptRef')}: <b style={{ color: 'var(--navy)' }}>{confirmed.referenceNumber}</b></div>
            <div style={{ marginTop: 8, fontSize: 12, color: 'var(--navy)' }}>
              {service.name[lang]} · {formatDate(confirmed.date, lang)} · {confirmed.timeSlot}
            </div>
            {coreDocs.length > 0 && (
              <div style={{ marginTop: 10, fontSize: 12, color: 'var(--muted)' }}>
                <div style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{t('apptDocuments')}:</div>
                {coreDocs.map((d, i) => (
                  <div key={i} style={{ marginBottom: 2 }}>• {d.name[lang]}</div>
                ))}
              </div>
            )}
            <button className="secondary-btn" onClick={() => { setConfirmed(null); setStep(-1); }} style={{ marginTop: 12 }}>
              {t('apptDone')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Summary({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: '#F4F6FA', borderRadius: 8, fontSize: 12.5 }}>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <span style={{ color: 'var(--navy)', fontWeight: 500 }}>{value}</span>
    </div>
  );
}