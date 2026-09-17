import { useState } from 'react';
import Icon from './Icon';
import useNewsRotation from '../hooks/useNewsRotation';

const navBtn = {
  background: 'transparent',
  border: 'none',
  color: 'var(--muted)',
  padding: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

// Rotating service-news strip. Auto-advances every 30s (pausing while the
// tab is hidden), supports manual prev/next, and taps through to a related
// service when the item names one.
export default function NewsBanner({ items, lang, t, onOpenService }) {
  const { index, next, prev } = useNewsRotation(items, 30000);
  const [dismissed, setDismissed] = useState(false);

  if (!items.length || dismissed) return null;
  const it = items[index];
  if (!it) return null;

  const clickable = !!it.relatedServiceId;
  const headline = (it.headline && it.headline[lang]) || it.headline?.en || '';

  return (
    <div
      style={{
        margin: '0 1rem',
        overflow: 'hidden',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border-col)',
        background: '#FBEFE2',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'stretch', minHeight: 48 }}>
        <button
          key={it.id + index}
          onClick={() => clickable && onOpenService(it.relatedServiceId)}
          aria-label={headline}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 6px 8px 10px',
            textAlign: 'left',
            background: 'transparent',
            border: 'none',
            cursor: clickable ? 'pointer' : 'default',
            color: 'var(--navy)',
            fontSize: 12,
            animation: 'newsFade .5s ease',
          }}
        >
          <span style={{ flexShrink: 0, display: 'flex', color: 'var(--saffron)' }}>
            <Icon name="alert-triangle" size={15} />
          </span>
          <span style={{ lineHeight: 1.35 }}>{headline}</span>
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 4 }}>
          <button aria-label={t('newsPrev') || 'Previous'} onClick={prev} style={navBtn}>
            <Icon name="chevron-left" size={14} />
          </button>
          <button aria-label={t('newsNext') || 'Next'} onClick={next} style={navBtn}>
            <Icon name="chevron-right" size={14} />
          </button>
        </div>
        <button aria-label={t('apptClose')} onClick={() => setDismissed(true)} style={navBtn}>
          <Icon name="x" size={14} />
        </button>
      </div>
    </div>
  );
}