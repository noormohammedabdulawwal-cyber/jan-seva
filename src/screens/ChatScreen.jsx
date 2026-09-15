import { useEffect, useRef, useState } from 'react';
import Icon from '../components/Icon';
import { getBotReply } from '../utils/botReply';

export default function ChatScreen({ lang, t, history, setHistory, onBack }) {
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const msgAreaRef = useRef(null);

  useEffect(() => {
    if (history.length === 0) {
      setHistory([{ role: 'bot', text: t('chatGreet') }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (msgAreaRef.current) msgAreaRef.current.scrollTop = msgAreaRef.current.scrollHeight;
  }, [history]);

  function send(text) {
    const query = (text ?? input).trim();
    if (!query) return;
    setHistory((h) => [...h, { role: 'user', text: query }]);
    setInput('');
    setTimeout(() => {
      const reply = getBotReply(query, lang);
      setHistory((h) => [...h, { role: 'bot', text: reply }]);
    }, 350);
  }

  function startVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(t('voiceNotSupported'));
      return;
    }
    const recog = new SpeechRecognition();
    recog.lang = lang === 'hi' ? 'hi-IN' : lang === 'gu' ? 'gu-IN' : 'en-IN';
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    setListening(true);
    recog.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      send(transcript);
    };
    recog.onerror = () => setListening(false);
    recog.onend = () => setListening(false);
    recog.start();
  }

  return (
    <div id="screen-chat" className="screen">
      <div style={{ background: 'var(--navy)', padding: '1rem', display: 'flex', alignItems: 'center', gap: 10, position: 'sticky', top: 0, zIndex: 50 }}>
        <button className="back-btn" onClick={onBack}>
          <Icon name="arrow-left" size={16} color="#fff" />
        </button>
        <div style={{ width: 32, height: 32, background: 'var(--saffron)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="robot" size={16} color="#fff" />
        </div>
        <div style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{t('chat-title-home')}</div>
      </div>

      <div ref={msgAreaRef} style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: 4, minHeight: '50vh' }}>
        {history.map((m, i) => (
          <div className={`chat-bubble ${m.role}`} key={i}>
            {m.text}
          </div>
        ))}
      </div>

      <div style={{ position: 'sticky', bottom: 0, background: '#fff', borderTop: '1px solid var(--border-col)', padding: '0.75rem', display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          placeholder={t('chatPlaceholder')}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          style={{ flex: 1, padding: '10px 12px', borderRadius: 20, border: '1px solid var(--border-col)', fontSize: 13 }}
        />
        <button
          onClick={startVoiceInput}
          title={t('speakBtn')}
          style={{
            background: listening ? 'var(--saffron)' : '#fff',
            color: listening ? '#fff' : 'var(--saffron)',
            border: '1.5px solid var(--saffron)',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <Icon name="microphone" size={18} color={listening ? '#fff' : 'var(--saffron)'} />
        </button>
        <button
          onClick={() => send()}
          title={t('chatSend')}
          style={{
            background: 'var(--saffron)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <Icon name="send" size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}
