import Icon from '../components/Icon';
import { SERVICES } from '../data/services';

const CATEGORIES = [
  { key: 'all', icon: 'layout-grid', color: 'var(--saffron)', labelKey: 'cat-all-lbl' },
  { key: 'identity', icon: 'id-badge', color: '#5563DE', labelKey: 'cat-identity-lbl' },
  { key: 'land', icon: 'home-2', color: '#D97706', labelKey: 'cat-land-lbl' },
  { key: 'welfare', icon: 'heart', color: '#D94F5C', labelKey: 'cat-welfare-lbl' },
];

export default function HomeScreen({ lang, t, category, setCategory, search, setSearch, onOpenService }) {
  const list = SERVICES.filter((s) => {
    const inCat = category === 'all' || s.cat === category;
    const q = search.toLowerCase();
    const matchesSearch = !q || s.name[lang].toLowerCase().includes(q) || s.name.en.toLowerCase().includes(q);
    return inCat && matchesSearch;
  });

  return (
    <div id="screen-home" className="screen">
      <div style={{ background: 'linear-gradient(135deg,var(--navy) 0%,#2A4A7A 100%)', padding: '1.5rem 1rem 2rem' }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 6 }}>{t('home-sub')}</div>
        <div style={{ color: '#fff', fontSize: 20, fontWeight: 500, marginBottom: '1rem', lineHeight: 1.3 }}>
          {t('home-title')}
        </div>
        <div style={{ position: 'relative' }}>
          <Icon
            name="search"
            size={18}
            color="var(--muted)"
            style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            value={search}
            placeholder={t('searchPlaceholder')}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              borderRadius: 'var(--radius)',
              border: 'none',
              fontSize: 14,
              background: '#fff',
              color: 'var(--text)',
            }}
          />
        </div>
      </div>

      <div style={{ margin: '-1rem 1rem 0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {CATEGORIES.map((c) => {
          const active = category === c.key;
          return (
            <div
              key={c.key}
              onClick={() => setCategory(c.key)}
              tabIndex={0}
              role="button"
              className={`cat-btn${active ? ' active-cat' : ''}`}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCategory(c.key)}
              style={{
                background: '#fff',
                borderRadius: 'var(--radius)',
                padding: '10px 6px',
                textAlign: 'center',
                cursor: 'pointer',
                border: `1.5px solid ${active ? 'var(--saffron)' : 'var(--border-col)'}`,
              }}
            >
              <Icon name={c.icon} size={20} color={c.color} className="cat-icon" />
              <div
                className="cat-label"
                style={{ fontSize: 10, marginTop: 4, fontWeight: active ? 500 : 400, color: active ? 'var(--navy)' : 'var(--muted)' }}
              >
                {t(c.labelKey)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: '1rem' }}>
        {list.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, padding: '2rem 0' }}>{t('noResults')}</div>
        ) : (
          list.map((s) => (
            <div
              key={s.id}
              className="svc-card"
              tabIndex={0}
              role="button"
              onClick={() => onOpenService(s.id)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenService(s.id)}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: s.color + '1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={s.icon.replace(/^ti-/, '')} size={22} color={s.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{s.name[lang]}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{s.desc[lang]}</div>
              </div>
              <Icon name="chevron-right" size={18} color="var(--muted)" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
