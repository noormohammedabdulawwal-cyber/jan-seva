function initialsOf(nameEn) {
  return nameEn
    .trim()
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

// Builds a small illustrative mockup image (as a data: URI) for a document,
// based on its previewType. Falls back to initials if no previewType is set.
export function docPreviewSvg(d) {
  const bg = d.color || '#3B6FE8';
  const common = `<rect x="4" y="4" width="88" height="88" rx="14" fill="${bg}"/>`;
  let inner;
  switch (d.previewType) {
    case 'idcard':
      inner =
        `<rect x="16" y="28" width="64" height="40" rx="5" fill="#fff"/>` +
        `<circle cx="32" cy="46" r="8" fill="${bg}" opacity="0.85"/>` +
        `<rect x="46" y="38" width="26" height="4" rx="2" fill="${bg}" opacity="0.6"/>` +
        `<rect x="46" y="46" width="20" height="4" rx="2" fill="${bg}" opacity="0.4"/>` +
        `<rect x="46" y="54" width="24" height="4" rx="2" fill="${bg}" opacity="0.4"/>` +
        `<rect x="16" y="62" width="64" height="3" fill="${bg}" opacity="0.25"/>`;
      break;
    case 'certificate':
      inner =
        `<rect x="14" y="14" width="68" height="68" rx="4" fill="#fff"/>` +
        `<rect x="20" y="20" width="56" height="56" rx="2" fill="none" stroke="${bg}" stroke-width="1.5" opacity="0.5"/>` +
        `<rect x="30" y="30" width="36" height="4" rx="2" fill="${bg}" opacity="0.6"/>` +
        `<rect x="30" y="38" width="28" height="3" rx="1.5" fill="${bg}" opacity="0.35"/>` +
        `<circle cx="48" cy="56" r="9" fill="none" stroke="${bg}" stroke-width="2" opacity="0.55"/>` +
        `<path d="M44 56l3 3 6-6" stroke="${bg}" stroke-width="1.8" fill="none" opacity="0.55"/>`;
      break;
    case 'receipt':
      inner =
        `<path d="M22 14h52v58l-6-5-6 5-6-5-6 5-6-5-6 5-6-5-6 5V14z" fill="#fff"/>` +
        `<rect x="30" y="26" width="36" height="3.5" rx="1.5" fill="${bg}" opacity="0.5"/>` +
        `<rect x="30" y="34" width="28" height="3" rx="1.5" fill="${bg}" opacity="0.35"/>` +
        `<rect x="30" y="42" width="32" height="3" rx="1.5" fill="${bg}" opacity="0.35"/>` +
        `<rect x="30" y="50" width="20" height="3" rx="1.5" fill="${bg}" opacity="0.35"/>`;
      break;
    case 'photo':
      inner =
        `<rect x="18" y="14" width="60" height="68" rx="4" fill="#fff"/>` +
        `<rect x="26" y="22" width="44" height="52" rx="2" fill="${bg}" opacity="0.12"/>` +
        `<circle cx="48" cy="40" r="9" fill="${bg}" opacity="0.5"/>` +
        `<path d="M32 66c3-10 12-14 16-14s13 4 16 14" fill="${bg}" opacity="0.5"/>`;
      break;
    case 'ledger':
      inner =
        `<rect x="14" y="16" width="68" height="64" rx="4" fill="#fff"/>` +
        `<line x1="14" y1="32" x2="82" y2="32" stroke="${bg}" stroke-width="1.5" opacity="0.4"/>` +
        `<line x1="14" y1="46" x2="82" y2="46" stroke="${bg}" stroke-width="1.5" opacity="0.4"/>` +
        `<line x1="14" y1="60" x2="82" y2="60" stroke="${bg}" stroke-width="1.5" opacity="0.4"/>` +
        `<line x1="40" y1="16" x2="40" y2="80" stroke="${bg}" stroke-width="1.5" opacity="0.4"/>` +
        `<line x1="62" y1="16" x2="62" y2="80" stroke="${bg}" stroke-width="1.5" opacity="0.4"/>`;
      break;
    case 'passbook':
      inner =
        `<rect x="20" y="12" width="46" height="66" rx="4" fill="#fff" opacity="0.85"/>` +
        `<rect x="28" y="18" width="46" height="66" rx="4" fill="#fff"/>` +
        `<rect x="36" y="30" width="28" height="20" rx="2" fill="${bg}" opacity="0.25"/>` +
        `<rect x="36" y="56" width="30" height="3" rx="1.5" fill="${bg}" opacity="0.4"/>` +
        `<rect x="36" y="64" width="22" height="3" rx="1.5" fill="${bg}" opacity="0.3"/>`;
      break;
    case 'medical':
      inner =
        `<rect x="16" y="14" width="64" height="68" rx="4" fill="#fff"/>` +
        `<rect x="42" y="26" width="8" height="24" rx="2" fill="${bg}" opacity="0.55"/>` +
        `<rect x="34" y="34" width="24" height="8" rx="2" fill="${bg}" opacity="0.55"/>` +
        `<rect x="26" y="58" width="40" height="3" rx="1.5" fill="${bg}" opacity="0.35"/>` +
        `<rect x="26" y="66" width="30" height="3" rx="1.5" fill="${bg}" opacity="0.3"/>`;
      break;
    case 'marriage':
      inner =
        `<rect x="14" y="18" width="68" height="56" rx="4" fill="#fff"/>` +
        `<circle cx="40" cy="46" r="10" fill="none" stroke="${bg}" stroke-width="2.5" opacity="0.6"/>` +
        `<circle cx="54" cy="46" r="10" fill="none" stroke="${bg}" stroke-width="2.5" opacity="0.6"/>` +
        `<rect x="26" y="60" width="42" height="3" rx="1.5" fill="${bg}" opacity="0.3"/>`;
      break;
    case 'form':
      inner =
        `<rect x="16" y="12" width="64" height="72" rx="4" fill="#fff"/>` +
        `<rect x="26" y="24" width="6" height="6" rx="1" fill="none" stroke="${bg}" stroke-width="1.5" opacity="0.6"/>` +
        `<rect x="38" y="24" width="30" height="4" rx="2" fill="${bg}" opacity="0.35"/>` +
        `<rect x="26" y="38" width="6" height="6" rx="1" fill="none" stroke="${bg}" stroke-width="1.5" opacity="0.6"/>` +
        `<rect x="38" y="38" width="34" height="4" rx="2" fill="${bg}" opacity="0.35"/>` +
        `<rect x="26" y="52" width="6" height="6" rx="1" fill="none" stroke="${bg}" stroke-width="1.5" opacity="0.6"/>` +
        `<rect x="38" y="52" width="24" height="4" rx="2" fill="${bg}" opacity="0.35"/>` +
        `<line x1="26" y1="68" x2="72" y2="68" stroke="${bg}" stroke-width="1.5" opacity="0.3"/>`;
      break;
    default:
      inner = `<text x="48" y="58" font-family="system-ui,sans-serif" font-size="30" font-weight="600" fill="#fff" text-anchor="middle">${initialsOf(
        d.name.en
      )}</text>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">${common}${inner}</svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}
