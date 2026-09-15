import { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import ChatScreen from './screens/ChatScreen';
import OfficesScreen from './screens/OfficesScreen';
import { T } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('en');
  const [screen, setScreen] = useState('home'); // home | service | chat | offices
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [checklistAnswers, setChecklistAnswers] = useState({}); // { [serviceId]: { [questionId]: value } }
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('idle');

  function t(key) {
    return (T[lang] && T[lang][key]) || T.en[key] || key;
  }

  function openService(id) {
    setCurrentServiceId(id);
    setScreen('service');
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
          <HomeScreen lang={lang} t={t} category={category} setCategory={setCategory} search={search} setSearch={setSearch} onOpenService={openService} />
        )}

        {screen === 'service' && currentServiceId && (
          <ServiceDetailScreen
            lang={lang}
            t={t}
            serviceId={currentServiceId}
            answers={checklistAnswers[currentServiceId] || {}}
            setAnswer={setAnswer}
            onBack={goHome}
            onFindOffice={openOffices}
          />
        )}

        {screen === 'chat' && <ChatScreen lang={lang} t={t} history={chatHistory} setHistory={setChatHistory} onBack={goHome} />}

        {screen === 'offices' && (
          <OfficesScreen
            lang={lang}
            t={t}
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            locationStatus={locationStatus}
            setLocationStatus={setLocationStatus}
            onBack={goHome}
          />
        )}

        <BottomNav activeScreen={screen} onNavigate={navigate} t={t} />
      </div>
    </>
  );
}
