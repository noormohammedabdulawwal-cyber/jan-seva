import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import ChatScreen from './screens/ChatScreen';
import OfficesScreen from './screens/OfficesScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import { T } from './data/translations';
import { SERVICES } from './data/services';
import { OFFICES } from './data/offices';
import { NEWS } from './data/news';
import { getServices, getOffices, getNews } from './api/client';
import useContent from './hooks/useContent';

export default function App() {
  const [lang, setLang] = useState('en');
  const [screen, setScreen] = useState('home'); // home | service | chat | offices | appointments
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [apptService, setApptService] = useState(null); // service passed into booking wizard
  const [chatHistory, setChatHistory] = useState([]);
  const [checklistAnswers, setChecklistAnswers] = useState({}); // { [serviceId]: { [questionId]: value } }
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('idle');

  // Sindhi (sd) and Urdu (ur) read right-to-left; flip the page direction (ponytail: bare dir flip, no per-screen RTL styles).
  useEffect(() => {
    document.documentElement.dir = lang === 'sd' || lang === 'ur' ? 'rtl' : 'ltr';
  }, [lang]);

  const services = useContent(SERVICES, getServices);
  const offices = useContent(OFFICES, getOffices, [lang]);
  const news = useContent(NEWS, getNews);

  // Prefer server data; fall back to static by id when resolving a service.
  function findService(id) {
    return services.data.find((s) => s.id === id) || SERVICES.find((s) => s.id === id);
  }

  function t(key) {
    return (T[lang] && T[lang][key]) || T.en[key] || key;
  }

  function openService(id) {
    setCurrentServiceId(id);
    setApptService(null);
    setScreen('service');
    window.scrollTo(0, 0);
  }

  function openBooking(serviceId) {
    setApptService(findService(serviceId));
    setCurrentServiceId(serviceId);
    setScreen('appointments');
    window.scrollTo(0, 0);
  }

  function openMyAppointments() {
    setApptService(null);
    setScreen('appointments');
    window.scrollTo(0, 0);
  }

  function goHome() {
    setScreen('home');
    window.scrollTo(0, 0);
  }

  function openChat() {
    setScreen('chat');
    window.scrollTo(0, 0);
  }

  function openOffices() {
    setScreen('offices');
    window.scrollTo(0, 0);
  }

  function navigate(key) {
    if (key === 'home') goHome();
    else if (key === 'chat') openChat();
    else if (key === 'offices') openOffices();
    else if (key === 'appointments') openMyAppointments();
  }

  function setAnswer(serviceId, questionId, value) {
    setChecklistAnswers((prev) => ({
      ...prev,
      [serviceId]: { ...(prev[serviceId] || {}), [questionId]: value },
    }));
  }

  return (
    <>
      <h2 className="sr-only">Jan Seva — Citizen Government Services Portal</h2>
      <div id="app">
        <TopBar lang={lang} setLang={setLang} t={t} />

        {screen === 'home' && (
          <HomeScreen
            lang={lang}
            t={t}
            services={services.data}
            status={services.status}
            news={news.data}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
            onOpenService={openService}
          />
        )}

        {screen === 'service' && currentServiceId && (
          <ServiceDetailScreen
            lang={lang}
            t={t}
            svc={findService(currentServiceId)}
            answers={checklistAnswers[currentServiceId] || {}}
            setAnswer={setAnswer}
            onBack={goHome}
            onFindOffice={openOffices}
            onBookAppointment={() => openBooking(currentServiceId)}
          />
        )}

        {screen === 'chat' && <ChatScreen lang={lang} t={t} history={chatHistory} setHistory={setChatHistory} onBack={goHome} />}

        {screen === 'offices' && (
          <OfficesScreen
            lang={lang}
            t={t}
            offices={offices.data}
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            locationStatus={locationStatus}
            setLocationStatus={setLocationStatus}
            onBack={goHome}
          />
        )}

        {screen === 'appointments' && (
          <AppointmentsScreen
            lang={lang}
            t={t}
            services={services.data}
            offices={offices.data}
            prefillService={apptService}
            onBack={goHome}
          />
        )}

        <BottomNav activeScreen={screen} onNavigate={navigate} t={t} />
      </div>
    </>
  );
}