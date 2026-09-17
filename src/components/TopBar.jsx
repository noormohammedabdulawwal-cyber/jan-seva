import Icon from './Icon';

const LANGS = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'brx', name: 'बोड़ो' },
  { code: 'doi', name: 'डोगरी' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ks', name: 'کٲشُر' },
  { code: 'kok', name: 'कोंकणी' },
  { code: 'mai', name: 'मैथिली' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'mni', name: 'ꯃꯤꯇꯩꯂꯣꯟ' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ne', name: 'नेपाली' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'sa', name: 'संस्कृतम्' },
  { code: 'sat', name: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { code: 'sd', name: 'سنڌي' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ur', name: 'اردو' },
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
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label="Select language / भाषा चुनें"
          style={{
            padding: '5px 8px',
            borderRadius: 8,
            border: '1.5px solid rgba(255,255,255,0.4)',
            background: 'var(--navy)',
            color: '#fff',
            fontSize: 12,
            maxWidth: '58%',
            cursor: 'pointer',
          }}
        >
          {LANGS.map(({ code, name, label }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
