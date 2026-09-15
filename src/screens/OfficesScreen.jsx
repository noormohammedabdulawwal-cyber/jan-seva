import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Icon from '../components/Icon';
import { OFFICES } from '../data/offices';

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function OfficesScreen({ lang, t, userLocation, setUserLocation, locationStatus, setLocationStatus, onBack }) {
  const mapElRef = useRef(null);
  const mapRef = useRef(null);

  let officeList = OFFICES.slice();
  if (userLocation) {
    officeList = officeList
      .map((o) => ({ ...o, dist: distanceKm(userLocation.lat, userLocation.lng, o.lat, o.lng) }))
      .sort((a, b) => a.dist - b.dist);
  }

  function requestLocation() {
    setLocationStatus('locating');
    if (!('geolocation' in navigator)) {
      setLocationStatus('unavailable');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocationStatus('granted');
      },
      () => setLocationStatus('denied'),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  }

  useEffect(() => {
    if (!mapElRef.current) return;
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    const center = userLocation ? [userLocation.lat, userLocation.lng] : [23.0258, 72.5715];
    const zoom = userLocation ? 13 : 12;
    const map = L.map(mapElRef.current).setView(center, zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    officeList.forEach((o) => {
      L.marker([o.lat, o.lng]).addTo(map).bindPopup(o.name[lang]);
    });

    if (userLocation) {
      const youIcon = L.divIcon({
        html: '<div style="width:16px;height:16px;border-radius:50%;background:#1A73E8;border:3px solid #fff;box-shadow:0 0 0 4px rgba(26,115,232,0.3)"></div>',
        className: '',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });
      L.marker([userLocation.lat, userLocation.lng], { icon: youIcon }).addTo(map).bindPopup(t('youAreHere'));
    }

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, lang, JSON.stringify(officeList.map((o) => o.name.en))]);

  return (
    <div id="screen-offices" className="screen">
      <div style={{ background: 'var(--navy)', padding: '1rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <button className="back-btn" onClick={onBack}>
          <Icon name="arrow-left" size={16} color="#fff" /> {t('backBtn')}
        </button>
        <div style={{ color: '#fff', fontSize: 17, fontWeight: 500, marginTop: 8 }}>{t('officesTitle')}</div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>{t('officeNote')}</div>
      </div>

      <div style={{ padding: '1rem 1rem 0' }}>
        {locationStatus === 'locating' ? (
          <button className="secondary-btn" disabled style={{ opacity: 0.7 }}>
            <Icon name="loader-2" size={16} /> {t('locating')}
          </button>
        ) : (
          <button className="secondary-btn" onClick={requestLocation} style={{ borderColor: 'var(--saffron)', color: 'var(--saffron)' }}>
            <Icon name="current-location" size={16} color="var(--saffron)" /> {t('useLocation')}
          </button>
        )}

        {locationStatus === 'denied' && (
          <div style={{ marginTop: 8, fontSize: 11.5, color: '#E65100', background: '#FFF3E0', borderRadius: 8, padding: 8 }}>
            {t('locationDenied')}
          </div>
        )}
        {locationStatus === 'unavailable' && (
          <div style={{ marginTop: 8, fontSize: 11.5, color: '#E65100', background: '#FFF3E0', borderRadius: 8, padding: 8 }}>
            {t('locationUnavailable')}
          </div>
        )}
        {locationStatus === 'granted' && (
          <div style={{ marginTop: 8, fontSize: 11.5, color: 'var(--green)' }}>
            <Icon name="check" size={13} color="var(--green)" /> {t('sortedByDistance')}
          </div>
        )}
      </div>

      <div id="offices-map" ref={mapElRef} style={{ height: 240, width: '100%', marginTop: '1rem' }} />

      <div style={{ padding: '1rem' }}>
        {officeList.map((o, i) => (
          <div className="office-card" key={i}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>{o.name[lang]}</div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{o.addr}</div>
            {typeof o.dist === 'number' && (
              <div style={{ fontSize: 11.5, color: 'var(--saffron)', fontWeight: 500, marginTop: 4 }}>
                <Icon name="route" size={13} color="var(--saffron)" /> {o.dist.toFixed(1)} {t('kmAway')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
