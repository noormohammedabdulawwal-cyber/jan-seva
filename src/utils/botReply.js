import { SERVICES } from '../data/services';

const LABELS = {
  en: { fee: 'Fee', time: 'Processing time', docs: 'Documents needed', elig: 'Eligibility', steps: 'Steps to apply', portal: 'Apply online at' },
  hi: { fee: 'शुल्क', time: 'प्रसंस्करण समय', docs: 'आवश्यक दस्तावेज़', elig: 'पात्रता', steps: 'आवेदन के चरण', portal: 'यहां ऑनलाइन आवेदन करें' },
  gu: { fee: 'ફી', time: 'પ્રક્રિયા સમય', docs: 'જરૂરી દસ્તાવેજો', elig: 'પાત્રતા', steps: 'અરજીના પગલા', portal: 'અહીં ઓનલાઈન અરજી કરો' },
};

const FALLBACK = {
  en: 'I can help with ration cards, birth certificates, land records, and pension schemes. Try asking about one of these, or browse services on the Home tab.',
  hi: 'मैं राशन कार्ड, जन्म प्रमाण पत्र, भूमि अभिलेख और पेंशन योजनाओं में मदद कर सकता हूँ। इनमें से किसी एक के बारे में पूछें, या होम टैब पर सेवाएं देखें।',
  gu: 'હું રેશન કાર્ડ, જન્મ પ્રમાણ પત્ર, જમીન રેકોર્ડ અને પેન્શન યોજનાઓમાં મદદ કરી શકું છું. આમાંથી કોઈ એક વિશે પૂછો, અથવા હોમ ટેબ પર સેવાઓ જુઓ.',
};

export function getBotReply(query, lang) {
  const q = query.toLowerCase();
  const match = SERVICES.find(
    (s) =>
      q.includes(s.id) ||
      q.includes(s.name.en.toLowerCase()) ||
      s.name[lang].toLowerCase().split(' ').some((w) => w.length > 3 && q.includes(w.toLowerCase()))
  );

  if (match) {
    const docsList = match.docs.map((d) => d.name[lang]).join(', ');
    const stepsList = match.steps[lang].map((s, i) => `${i + 1}. ${s}`).join('\n');
    const eligList = match.eligibility[lang].map((e) => `• ${e}`).join('\n');
    const isFree = match.fee === '₹0';
    const labels = LABELS[lang] || LABELS.en;
    return (
      match.name[lang] +
      '\n\n' +
      labels.fee + ': ' + (isFree ? 'FREE' : match.fee) + '  |  ' + labels.time + ': ' + match.time[lang] +
      '\n\n' +
      labels.elig + ':\n' + eligList +
      '\n\n' +
      labels.docs + ': ' + docsList +
      '\n\n' +
      labels.steps + ':\n' + stepsList +
      '\n\n' +
      labels.portal + ': ' + match.portal
    );
  }

  return FALLBACK[lang] || FALLBACK.en;
}
