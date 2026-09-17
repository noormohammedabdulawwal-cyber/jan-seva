import { useState } from 'react';
import Icon from '../components/Icon';
import NewsBanner from '../components/NewsBanner';

const CATEGORIES = [
  { key: 'all', icon: 'layout-grid', color: 'var(--saffron)', labelKey: 'cat-all-lbl' },
  { key: 'identity', icon: 'id-badge', color: '#5563DE', labelKey: 'cat-identity-lbl' },
  { key: 'land', icon: 'home-2', color: '#D97706', labelKey: 'cat-land-lbl' },
  { key: 'welfare', icon: 'heart', color: '#D94F5C', labelKey: 'cat-welfare-lbl' },
  { key: 'education', icon: 'graduation-cap', color: '#5563DE', labelKey: 'cat-education-lbl' },
  { key: 'certificates', icon: 'certificate', color: '#7C3AED', labelKey: 'cat-certificates-lbl' },
];

const TIME_FILTERS = ['sameDay', 'underWeek', 'underMonth', 'longer'];

// Core (unconditional) documents — the baseline a fresh applicant needs.
const coreDocs = (s) => (s.docs || []).filter((d) => !d.when).length;

export default function HomeScreen({ services, status, news, lang, t, category, setCategory, search, setSearch, onOpenService }) {
  const [filters, setFilters] = useState({ fee: '', time: '', docs: '' });
  const [sort, setSort] = useState('alpha');
  const [showFilter, setShowFilter] = useState(false);

  const activeFilterCount = (filters.fee ? 1 : 0) + (filters.time ? 1 : 0) + (filters.docs ? 1 : 0);

  function toggle(group, value) {
    setFilters((f) => ({ ...f, [group]: f[group] === value ? '' : value }));
  }

  let list = services.filter((s) => {
    if (category !== 'all' && s.cat !== category) return false;
    const q = search.trim().toLowerCase();
    if (q && !((s.name && s.name[lang]) || '').toLowerCase().includes(q) && !(s.name && s.name.en || '').toLowerCase().includes(q)) return false;
    if (filters.fee === 'free' && s.fee !== '₹0') return false;
    if (filters.fee === 'paid' && s.fee === '₹0') return false;
    if (filters.time && s.timeBucket !== filters.time) return false;
    if (filters.docs === 'few' && coreDocs(s) >= 3) return false;
    if (filters.docs === 'many' && coreDocs(s) < 3) return false;
    return true;
  });
  list = list.slice();
  if (sort === 'docs') list.sort((a, b) => coreDocs(a) - coreDocs(b));
  else list.sort((a, b) => (a.name[lang] || '').localeCompare(b.name[lang] || ''));

  return (
    <div id="screen-home" className="screen">
      <div style={{ background: 'linear-gradient(135deg,var(--navy) 0%,#2A4A7A 100%)', padding: '1rem 1rem 2rem' }}>
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
              padding: '12px 52px 12px 40px',
              borderRadius: 'var(--radius)',
              border: 'none',
              fontSize: 14,
              background: '#fff',
              color: 'var(--text)',
            }}
          />
          <button
            aria-label={t('filterBtn')}
            aria-expanded={showFilter}
            onClick={() => setShowFilter((v) => !v)}
            style={{
              position: 'absolute',
              right: 6,
              top: '50%',
              transform: 'translateY(-50%)',
              background: showFilter ? 'var(--saffron)' : '#fff',
              border: '1.5px solid var(--saffron)',
              borderRadius: 8,
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: showFilter ? '#fff' : 'var(--saffron)',
            }}
          >
            <Icon name="filter" size={18} />
            {activeFilterCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  background: 'var(--saffron)',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 600,
                  borderRadius: '50%',
                  minWidth: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: showFilter ? '2px solid #fff' : 'none',
                }}
              >
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {showFilter && (
        <div className="filter-panel" style={{ margin: '0 1rem', padding: '0.75rem', background: '#fff', borderRadius: 'var(--radius)', border: '1px solid var(--saffron)' }}>
          <Section label={t('filterFee')}>
            <Pill active={filters.fee === 'free'} onClick={() => toggle('fee', 'free')} label={t('filterFeeFree')} />
            <Pill active={filters.fee === 'paid'} onClick={() => toggle('fee', 'paid')} label={t('filterFeePaid')} />
          </Section>
          <Section label={t('filterTime')}>
            {TIME_FILTERS.map((k) => (
              <Pill key={k} active={filters.time === k} onClick={() => toggle('time', k)} label={t('filterTime' + cap(k))} />
            ))}
          </Section>
          <Section label={t('filterDocs')}>
            <Pill active={filters.docs === 'few'} onClick={() => toggle('docs', 'few')} label={t('filterDocsFew')} />
            <Pill active={filters.docs === 'many'} onClick={() => toggle('docs', 'many')} label={t('filterDocsMany')} />
          </Section>
          <button
            onClick={() => setFilters({ fee: '', time: '', docs: '' })}
            style={{ marginTop: 4, background: 'none', border: 'none', color: 'var(--saffron)', fontWeight: 500, fontSize: 12, cursor: 'pointer', padding: 0 }}
          >
            {t('clearFilters')}
          </button>
        </div>
      )}

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
                padding: '10px 4px',
                textAlign: 'center',
                cursor: 'pointer',
                border: `1.5px solid ${active ? 'var(--saffron)' : 'var(--border-col)'}`,
              }}
            >
              <Icon name={c.icon} size={20} color={c.color} className="cat-icon" />
              <div className="cat-label" style={{ fontSize: 10, marginTop: 4, fontWeight: active ? 500 : 400, color: active ? 'var(--navy)' : 'var(--muted)' }}>
                {t(c.labelKey)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: '1rem' }}>
        <NewsBanner items={news} lang={lang} t={t} onOpenService={onOpenService} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.75rem 0' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[
              { key: 'alpha', label: t('sortAlpha') },
              { key: 'docs', label: t('sortDocs') },
            ].map((o) => {
              const active = sort === o.key;
              return (
                <button
                  key={o.key}
                  onClick={() => setSort(o.key)}
                  aria-pressed={active}
                  style={{
                    padding: '5px 10px',
                    borderRadius: 16,
                    border: `1.5px solid ${active ? 'var(--saffron)' : 'var(--border-col)'}`,
                    background: active ? 'var(--saffron)' : '#fff',
                    color: active ? '#fff' : 'var(--navy)',
                    fontSize: 11.5,
                    cursor: 'pointer',
                  }}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          {status === 'error' && (
            <span style={{ fontSize: 10.5, color: 'var(--muted)' }}>
              <Icon name="alert-triangle" size={12} /> {t('networkNote')}
            </span>
          )}
        </div>

        {status === 'loading' && <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, padding: '1rem' }}>{t('loading')}</div>}
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
                  background: (s.color || '#3B6FE8') + '1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={(s.icon || '').replace(/^ti-/, '')} size={22} color={s.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{s.name && s.name[lang]}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{s.desc && s.desc[lang]}</div>
              </div>
              <Icon name="chevron-right" size={18} color="var(--muted)" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 6, fontWeight: 500 }}>{label}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

function Pill({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      style={{
        padding: '6px 12px',
        borderRadius: 20,
        border: `1.5px solid ${active ? 'var(--saffron)' : 'var(--border-col)'}`,
        background: active ? 'var(--saffron)' : '#fff',
        color: active ? '#fff' : 'var(--navy)',
        fontSize: 11.5,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);