import Icon from '../components/Icon';
import { docPreviewSvg } from '../utils/docPreview';

function docApplies(doc, answers) {
  if (!doc.when) return true;
  return Object.keys(doc.when).every((k) => answers[k] === doc.when[k]);
}

export default function ServiceDetailScreen({ lang, t, svc, answers, setAnswer, onBack, onFindOffice, onBookAppointment }) {
  if (!svc) return null;

  const svcAnswers = { ...answers };
  (svc.questions || []).forEach((q) => {
    if (!(q.id in svcAnswers)) svcAnswers[q.id] = q.default;
  });

  const applicableDocs = svc.docs.filter((d) => docApplies(d, svcAnswers));
  const isFree = svc.fee === '₹0';

  return (
    <div id="screen-service" className="screen">
      <div style={{ background: 'var(--navy)', padding: '1rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <button className="back-btn" onClick={onBack}>
          <Icon name="arrow-left" size={16} color="#fff" /> {t('backBtn')}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: svc.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon name={svc.icon.replace(/^ti-/, '')} size={20} color="#fff" />
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: 17, fontWeight: 500 }}>{svc.name[lang]}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{svc.desc[lang]}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '1rem 1rem 0' }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 'var(--radius)', padding: 10, textAlign: 'center', border: '1px solid var(--border-col)' }}>
          <div style={{ fontSize: 10, color: 'var(--muted)' }}>{t('fee')}</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: isFree ? 'var(--green)' : 'var(--navy)' }}>
            {isFree ? t('freeLabel') : svc.fee}
          </div>
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 'var(--radius)', padding: 10, textAlign: 'center', border: '1px solid var(--border-col)' }}>
          <div style={{ fontSize: 10, color: 'var(--muted)' }}>{t('processingTime')}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{svc.time[lang]}</div>
        </div>
      </div>

      {isFree && (
        <div style={{ margin: '10px 1rem 0', padding: 10, background: '#FFF3E0', borderRadius: 'var(--radius)', fontSize: 12, color: '#E65100', fontWeight: 500 }}>
          {t('agentWarn')}
        </div>
      )}

      <div style={{ padding: '1rem 0 0' }}>
        <div className="detail-section">
          <h3>
            <Icon name="shield-check" size={16} color="var(--green)" /> {t('eligibility')}
          </h3>
          <ul>
            {svc.eligibility[lang].map((item, i) => (
              <li key={i}>
                <Icon name="check" size={16} color="var(--green)" style={{ marginTop: 1 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {svc.questions && svc.questions.length > 0 && (
          <div className="detail-section" style={{ background: '#F0F4FF', borderColor: '#C7D6FA' }}>
            <h3>
              <Icon name="users" size={16} color="#5563DE" /> {t('personalizeTitle')}
            </h3>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 10 }}>{t('personalizeHint')}</div>
            {svc.questions.map((q) => (
              <div key={q.id} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 12, color: 'var(--navy)', fontWeight: 500, marginBottom: 6 }}>{q.label[lang]}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {q.options.map((o) => {
                    const active = svcAnswers[q.id] === o.value;
                    return (
                      <button
                        key={o.value}
                        onClick={() => setAnswer(svc.id, q.id, o.value)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 20,
                          border: `1.5px solid ${active ? 'var(--saffron)' : 'var(--border-col)'}`,
                          background: active ? 'var(--saffron)' : '#fff',
                          color: active ? '#fff' : 'var(--navy)',
                          fontSize: 11.5,
                          cursor: 'pointer',
                          fontWeight: active ? 500 : 400,
                        }}
                      >
                        {o.label[lang]}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="detail-section">
          <h3>
            <Icon name="files" size={16} color="#3B6FE8" /> {t('documents')}
          </h3>
          {applicableDocs.map((d, i) => (
            <div className="doc-row" key={i}>
              <img
                src={d.photo || docPreviewSvg(d)}
                alt={d.name[lang]}
                loading="lazy"
                style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover', flexShrink: 0, border: '1px solid var(--border-col)' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>{d.name[lang]}</div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 1 }}>{d.desc[lang]}</div>
                {(d.sample || d.link) && (
                  <div style={{ display: 'flex', gap: 14, marginTop: 5 }}>
                    {d.sample && (
                      <a href={d.sample} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#3B6FE8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                        <Icon name="photo" size={13} /> {t('viewSample')}
                      </a>
                    )}
                    {d.link && (
                      <a href={d.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                        <Icon name="external-link" size={13} /> {t('doOnline')}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="detail-section">
          <h3>
            <Icon name="list-numbers" size={16} color="var(--saffron)" /> {t('steps')}
          </h3>
          <ul>
            {svc.steps[lang].map((step, i) => (
              <li key={i}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'var(--lightgreen)',
                    color: 'var(--green)',
                    fontSize: 11,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h3>
            <Icon name="alert-triangle" size={16} color="#D97706" /> {t('mistakes')}
          </h3>
          <ul>
            {svc.mistakes[lang].map((m, i) => (
              <li key={i}>
                <Icon name="alert-triangle" size={16} color="#D97706" style={{ marginTop: 1 }} />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {svc.portal && (
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(svc.name.en + ' apply online tutorial Gujarat')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div style={{ margin: '0 1rem 1rem', background: '#000', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg,#222,#000)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="player-play-filled" size={20} color="#D94F5C" />
              </div>
            </div>
            <div style={{ background: '#fff', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="brand-youtube" size={16} color="#D94F5C" />
              <span style={{ fontSize: 12, color: 'var(--navy)', fontWeight: 500 }}>{t('videoTutorial')}</span>
            </div>
          </div>
        </a>
      )}

      <div style={{ padding: '0 1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <a href={svc.portal} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button className="primary-btn">
            <Icon name="external-link" size={16} color="#fff" /> {t('applyBtn')}
          </button>
        </a>
        <button className="secondary-btn" onClick={onFindOffice}>
          <Icon name="map-pin" size={16} /> {t('officeBtn')}
        </button>
        {onBookAppointment && (
          <button className="secondary-btn" onClick={onBookAppointment} style={{ borderColor: 'var(--saffron)', color: 'var(--saffron)' }}>
            <Icon name="calendar-plus" size={16} color="var(--saffron)" /> {t('bookAppt')}
          </button>
        )}
      </div>
    </div>
  );
}
