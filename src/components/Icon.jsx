import { ICONS, ICON_ALIAS } from '../data/icons';

const FALLBACK = '<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><circle cx="12" cy="16" r="0.6" fill="currentColor" stroke="none"/>';

// Renders one of the app's line icons as inline SVG.
// name: key into ICONS (or ICON_ALIAS), e.g. "home", "search", "id-badge-2"
export default function Icon({ name, size = 18, color = 'currentColor', style, className }) {
  const key = ICON_ALIAS[name] || name;
  const body = ICONS[key] || FALLBACK;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
