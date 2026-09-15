import Icon from './Icon';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'gu', label: 'ગુ' },
];

export default function TopBar({ lang, setLang, t }) {
  return (
    <>
      <div style={{ height: 4, display: 'flex' }}>
        <div style={{ flex: 1, background: '#FF9933' }} />
        <div style={{ flex: 1, background: '#fff' }} />
        <div style={{ flex: 1, background: '#138808' }} />
      </div>
      <div
        style={{
          background: '#EEF1F6',
          padding: '4px 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 10.5,
          color: 'var(--navy)',
          borderBottom: '1px solid var(--border-col)',
        }}
      >
        <span>govt.gujarat.gov.in / नागरिक सेवा</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Icon name="headset" size={12} /> Helpline: 1800-233-1000
        </span>
      </div>

      <div
        id="header"
        style={{
          background: 'var(--navy)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 4,
          zIndex: 100,
          borderBottom: '2px solid var(--saffron)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'var(--saffron)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="building-community" size={20} color="#fff" />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 500, fontSize: 15, lineHeight: 1 }}>Jan Seva</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11 }}>{t('tagline')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {LANGS.map(({ code, label }) => {
            const active = lang === code;
            return (
              <button
                key={code}
                onClick={() => setLang(code)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 20,
                  border: active ? '1.5px solid var(--saffron)' : '1.5px solid rgba(255,255,255,0.4)',
                  background: active ? 'var(--saffron)' : 'transparent',
                  color: active ? '#fff' : 'rgba(255,255,255,0.8)',
                  fontSize: 12,
                  cursor: 'pointer',
                  fontWeight: active ? 500 : 400,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
