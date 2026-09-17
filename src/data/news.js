// Mock local-news-style updates. Swap in a live feed later by replacing
// fetchNews() in src/api/client.js — the component just consumes this shape.
export const NEWS = [
  {
    id: 'n1',
    date: '2026-09-10',
    relatedServiceId: 'ration',
    headline: {
      en: 'Ration card renewal deadline extended to 30 September 2026',
      hi: 'राशन कार्ड नवीनीकरण की अंतिम तिथि 30 सितंबर 2026 तक बढ़ाई गई',
      gu: 'રેશન કાર્ડ નવીકરણની અંતિમ તારીખ 30 સપ્ટેમ્બર 2026 સુધી લંબાવાઈ',
    },
  },
  {
    id: 'n2',
    date: '2026-09-12',
    relatedServiceId: 'scholarship',
    headline: {
      en: 'Scholarship portal now open for 2026 applications',
      hi: '2026 आवेदनों के लिए छात्रवृत्ति पोर्टल अब खुला',
      gu: '2026 અરજીઓ માટે શિષ્યવૃત્તિ પોર્ટલ હવે ખુલ્લું',
    },
  },
  {
    id: 'n3',
    date: '2026-09-14',
    relatedServiceId: 'driving',
    headline: {
      en: 'RTO learner’s licence tests now bookable online',
      hi: 'RTO लर्नर लाइसेंस परीक्षा अब ऑनलाइन बुक कर सकते हैं',
      gu: 'RTO લર્નર લાઇસન્સ ટેસ્ટ હવે ઓનલાઈન બુક કરી શકાય છે',
    },
  },
  {
    id: 'n4',
    date: '2026-09-15',
    relatedServiceId: null,
    headline: {
      en: 'Helpline 1800-233-1000 available in Gujarati, Hindi and English',
      hi: 'हेल्पलाइन 1800-233-1000 गुजराती, हिंदी और अंग्रेजी में उपलब्ध',
      gu: 'હેલ્પલાઈન 1800-233-1000 ગુજરાતી, હિન્દી અને અંગ્રેજીમાં ઉપલબ્ધ',
    },
  },
];
export default NEWS;