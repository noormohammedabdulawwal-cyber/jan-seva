import Icon from './Icon';

export default function BottomNav({ activeScreen, onNavigate, t }) {
  const items = [
    { key: 'home', icon: 'home', label: t('nav-home-lbl') },
    { key: 'chat', icon: 'message-circle', label: t('nav-chat-lbl') },
    { key: 'appointments', icon: 'calendar', label: t('myAppointments') },
    { key: 'offices', icon: 'map-pin', label: t('nav-offices-lbl') },
  ];

  return (
    <>
      <div style={{ height: 64 }} />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          borderTop: '1px solid var(--border-col)',
          display: 'flex',
          zIndex: 100,
        }}
      >
        {items.map(({ key, icon, label }) => {
          const active = key === activeScreen || (key === 'home' && activeScreen === 'service');
          const color = active ? 'var(--saffron)' : 'var(--muted)';
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              style={{
                flex: 1,
                padding: '10px 4px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Icon name={icon} size={22} color={color} />
              <span style={{ fontSize: 10, color, fontWeight: active ? 500 : 'normal' }}>{label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
