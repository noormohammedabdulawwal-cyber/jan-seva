export const SERVICES = [
  {
    id:"ration",cat:"welfare",icon:"ti-receipt",color:"#D94F5C",
    name:{en:"Ration Card",hi:"राशन कार्ड",gu:"રેશન કાર્ડ"},
    desc:{en:"Get subsidised food grains",hi:"सब्सिडी पर खाद्यान्न पाएं",gu:"સબ્સિડી પર અનાજ મેળવો"},
    fee:"₹0",time:{en:"30–45 days",hi:"30–45 दिन",gu:"30–45 દિવસ"},timeBucket:"longer",
    portal:"https://epds.gujarat.gov.in",
    eligibility:{
      en:["Indian citizen residing in Gujarat","Annual household income below ₹1,20,000","No existing ration card in family","Aadhar linked to family members"],
      hi:["गुजरात में रहने वाले भारतीय नागरिक","परिवार की वार्षिक आय ₹1,20,000 से कम","परिवार में कोई मौजूदा राशन कार्ड नहीं","परिवार के सदस्यों से आधार लिंक"],
      gu:["ગુજરાતમાં રહેતા ભારતીય નાગરિક","પરિવારની વાર્ષિક આવક ₹1,20,000 થી ઓછી","પરિવારમાં કોઈ હાલનું રેશન કાર્ડ નહીં","પરિવારના સભ્યો સાથે આધાર જોડાયેલ"]
    },
    questions:[
      {id:"rationType",
        label:{en:"Is this a new application or updating an existing card?",hi:"क्या यह नया आवेदन है या मौजूदा कार्ड को अपडेट करना है?",gu:"શું આ નવી અરજી છે કે હાલના કાર્ડને અપડેટ કરવાનું છે?"},
        options:[
          {value:"new",label:{en:"New application",hi:"नया आवेदन",gu:"નવી અરજી"}},
          {value:"correction",label:{en:"Add/remove member or correction",hi:"सदस्य जोड़ें/हटाएं या सुधार",gu:"સભ્ય ઉમેરો/દૂર કરો અથવા સુધારો"}}
        ],
        default:"new"}
    ],
    docs:[
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"12-digit UID card issued by UIDAI",hi:"UIDAI द्वारा जारी 12 अंकों का UID कार्ड",gu:"UIDAI દ્વારા જારી 12 અંકનો UID કાર્ડ"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:"https://uidai.gov.in/en/my-aadhaar/about-your-aadhaar.html"},
      {name:{en:"Income Certificate",hi:"आय प्रमाण पत्र",gu:"આવક પ્રમાણ પત્ર"},desc:{en:"Issued by Mamlatdar/Tehsildar office",hi:"ममलतदार/तहसीलदार कार्यालय द्वारा जारी",gu:"મામલતદાર/તહેસીલદાર ઓફિસ દ્વારા જારી"},icon:"ti-file-certificate",previewType:"certificate",color:"#2E7D32",link:"https://www.digitalgujarat.gov.in",sample:null},
      {name:{en:"Residence Proof",hi:"निवास प्रमाण",gu:"નિવાસ પ્રમાણ"},desc:{en:"Electricity bill, rental agreement, or voter ID",hi:"बिजली बिल, किराया समझौता, या मतदाता पहचान पत्र",gu:"વીજળી બિલ, ભાડા કરાર, અથવા મતદાર ઓળખ પત્ર"},icon:"ti-home",previewType:"receipt",color:"#D97706",link:null,sample:null},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent photo, white background, 3.5×4.5 cm",hi:"हाल की फोटो, सफेद पृष्ठभूमि, 3.5×4.5 सेमी",gu:"તાજો ફોટો, સફેદ પૃષ્ઠભૂ, 3.5×4.5 સે.મી."},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null},
      {name:{en:"Existing Ration Card (original)",hi:"मौजूदा राशन कार्ड (मूल)",gu:"હાલનું રેશન કાર્ડ (મૂળ)"},desc:{en:"Required when adding/removing a member or correcting details",hi:"सदस्य जोड़ने/हटाने या विवरण सुधारने पर आवश्यक",gu:"સભ્ય ઉમેરવા/દૂર કરવા અથવા વિગતો સુધારવા માટે જરૂરી"},icon:"ti-files",previewType:"idcard",color:"#D94F5C",link:null,sample:null,when:{rationType:"correction"}}
    ],
    steps:{
      en:["Visit the e-EPIC portal or nearest ration office","Fill Form RC-1 with all family details","Attach all required documents","Submit form and get acknowledgement slip","Field verification will be done at your residence","Collect card from office or receive by post"],
      hi:["e-EPIC पोर्टल या नजदीकी राशन कार्यालय पर जाएं","सभी परिवार विवरण के साथ फॉर्म RC-1 भरें","सभी आवश्यक दस्तावेज संलग्न करें","फॉर्म जमा करें और पावती पर्ची प्राप्त करें","आपके निवास पर क्षेत्र सत्यापन किया जाएगा","कार्यालय से कार्ड प्राप्त करें या डाक द्वारा मिलेगा"],
      gu:["e-EPIC પોર્ટલ અથવા નજીકની રેશન ઓફિસ પર જાઓ","તમામ પરિવારની વિગતો સાથે ફોર્મ RC-1 ભરો","તમામ જરૂરી દસ્તાવેજો જોડો","ફોર્મ સબમિટ કરો અને એક્નોલેજમેન્ટ સ્લિપ મેળવો","તમારા નિવાસસ્થાને ક્ષેત્ર ચકાસણી કરવામાં આવશે","ઓફિસ પરથી કાર્ડ લો અથવા ટપાલ દ્વારા મળશે"]
    },
    mistakes:{
      en:["Submitting photocopies instead of self-attested copies","Income certificate older than 3 months","Mismatch in name spelling across documents","Missing even one family member's Aadhar"],
      hi:["स्व-प्रमाणित प्रतियों की जगह फोटोकॉपी जमा करना","3 महीने से पुराना आय प्रमाण पत्र","दस्तावेजों में नाम की वर्तनी में अंतर","किसी एक परिवार सदस्य का आधार छूटना"],
      gu:["સ્વ-પ્રમાણિત નકલોની જગ્યાએ ફોટોકોપી સબમિટ કરવી","3 મહિના કરતા જૂનું આવક પ્રમાણ પત્ર","દસ્તાવેજોમાં નામની જોડણીમાં તફાવત","એક પણ પરિવારના સભ્યનું આધાર ચૂકી જવું"]
    }
  },
  {
    id:"birth",cat:"identity",icon:"ti-certificate",color:"#3B6FE8",
    name:{en:"Birth Certificate",hi:"जन्म प्रमाण पत्र",gu:"જન્મ પ્રમાણ પત્ર"},
    desc:{en:"Official record of birth registration",hi:"जन्म पंजीकरण का आधिकारिक रिकॉर्ड",gu:"જન્મ નોંધણીનો સત્તાવાર રેકોર્ડ"},
    fee:"₹5",time:{en:"7–15 days",hi:"7–15 दिन",gu:"7–15 દિવસ"},timeBucket:"underMonth",
    portal:"https://crsorgi.gov.in",
    eligibility:{
      en:["Applicable to all citizens born in India","Must register within 21 days of birth (free); after 21 days, fees apply","Hospital births: hospital provides letter","Home births: local body verification needed"],
      hi:["भारत में जन्मे सभी नागरिकों पर लागू","जन्म के 21 दिनों के भीतर पंजीकरण (निःशुल्क); 21 दिनों के बाद शुल्क लागू","अस्पताल में जन्म: अस्पताल पत्र प्रदान करता है","घर पर जन्म: स्थानीय निकाय सत्यापन आवश्यक"],
      gu:["ભારતમાં જન્મેલા તમામ નાગરિકો માટે લાગુ","જન્મના 21 દિવસ અંદર નોંધણી (મફત); 21 દિવસ પછી ફી","હોસ્પિટલ જન્મ: હોસ્પિટલ પત્ર આપે છે","ઘરે જન્મ: સ્થાનિક સંસ્થા ચકાસણી જરૂરી"]
    },
    questions:[
      {id:"regTiming",
        label:{en:"Are you registering within 21 days of birth?",hi:"क्या आप जन्म के 21 दिनों के भीतर पंजीकरण कर रहे हैं?",gu:"શું તમે જન્મના 21 દિવસમાં નોંધણી કરી રહ્યા છો?"},
        options:[
          {value:"onTime",label:{en:"Yes, within 21 days",hi:"हां, 21 दिनों के भीतर",gu:"હા, 21 દિવસમાં"}},
          {value:"late",label:{en:"No, after 21 days",hi:"नहीं, 21 दिनों के बाद",gu:"ના, 21 દિવસ પછી"}}
        ],
        default:"onTime"}
    ],
    docs:[
      {name:{en:"Hospital Discharge Slip",hi:"अस्पताल डिस्चार्ज पर्ची",gu:"હોસ્પિટલ ડિસ્ચાર્જ સ્લિપ"},desc:{en:"Issued by hospital at time of birth",hi:"जन्म के समय अस्पताल द्वारा जारी",gu:"જન્મ સમયે હોસ્પિટલ દ્વારા જારી"},icon:"ti-clipboard-text",previewType:"medical",color:"#3B6FE8",link:null,sample:null},
      {name:{en:"Parents' Aadhar Cards",hi:"माता-पिता के आधार कार्ड",gu:"માતા-પિતાના આધાર કાર્ડ"},desc:{en:"Both mother and father Aadhar cards required",hi:"माँ और पिताजी दोनों के आधार कार्ड आवश्यक",gu:"માતા અને પિતા બંનેના આધાર કાર્ડ જરૂરી"},icon:"ti-users",previewType:"idcard",color:"#7C3AED",link:"https://myaadhaar.uidai.gov.in/",sample:"https://uidai.gov.in/en/my-aadhaar/about-your-aadhaar.html"},
      {name:{en:"Marriage Certificate",hi:"विवाह प्रमाण पत्र",gu:"લગ્ન પ્રમાણ પત્ર"},desc:{en:"Parents' marriage certificate (if applicable)",hi:"माता-पिता का विवाह प्रमाण पत्र (यदि लागू हो)",gu:"માતા-પિતાનું લગ્ન પ્રમાણ પત્ર (જો લાગુ હોય)"},icon:"ti-heart",previewType:"marriage",color:"#D94F5C",link:null,sample:null},
      {name:{en:"Delayed Registration Affidavit",hi:"विलंबित पंजीकरण शपथ पत्र",gu:"વિલંબિત નોંધણી એફિડેવિટ"},desc:{en:"Notarized affidavit explaining the delay; required after 21 days along with extra fee",hi:"देरी बताने वाला नोटरीकृत शपथ पत्र; 21 दिनों के बाद अतिरिक्त शुल्क सहित आवश्यक",gu:"વિલંબ સમજાવતું નોટરાઈઝ્ડ એફિડેવિટ; 21 દિવસ પછી વધારાની ફી સાથે જરૂરી"},icon:"ti-file-text",previewType:"form",color:"#D97706",link:null,sample:null,when:{regTiming:"late"}}
    ],
    steps:{
      en:["Obtain discharge slip from hospital","Visit municipal office or online CRS portal","Fill Form 1 (birth registration form)","Submit with all documents","Pay ₹5 registration fee","Collect certificate in 7–15 days"],
      hi:["अस्पताल से डिस्चार्ज पर्ची प्राप्त करें","नगरपालिका कार्यालय या ऑनलाइन CRS पोर्टल पर जाएं","फॉर्म 1 (जन्म पंजीकरण फॉर्म) भरें","सभी दस्तावेजों के साथ जमा करें","₹5 पंजीकरण शुल्क का भुगतान करें","7–15 दिनों में प्रमाण पत्र प्राप्त करें"],
      gu:["હોસ્પિટલમાંથી ડિસ્ચાર્જ સ્લિપ મેળવો","મ્યુનિસિપલ ઓફિસ અથવા ઓનલાઈન CRS પોર્ટલ પર જાઓ","ફોર્મ 1 (જન્મ નોંધણી ફોર્મ) ભરો","તમામ દસ્તાવેજો સાથે સબમિટ કરો","₹5 નોંધણી ફી ભરો","7–15 દિવસમાં પ્રમાણ પત્ર મેળવો"]
    },
    mistakes:{
      en:["Delaying registration beyond 21 days, leading to extra fees and affidavits","Spelling mismatch between hospital slip and Aadhar","Missing parents' Aadhar copies","Not collecting the hospital discharge slip before leaving"],
      hi:["21 दिनों के बाद पंजीकरण में देरी, जिससे अतिरिक्त शुल्क और शपथ पत्र लगता है","अस्पताल पर्ची और आधार में नाम की वर्तनी में अंतर","माता-पिता के आधार की प्रतियां छूटना","अस्पताल छोड़ने से पहले डिस्चार्ज पर्ची न लेना"],
      gu:["21 દિવસ પછી નોંધણીમાં વિલંબ, જેના કારણે વધારાની ફી અને એફિડેવિટ લાગે છે","હોસ્પિટલ સ્લિપ અને આધાર વચ્ચે નામની જોડણીમાં તફાવત","માતા-પિતાના આધારની નકલો ચૂકી જવી","હોસ્પિટલ છોડતા પહેલા ડિસ્ચાર્જ સ્લિપ ન લેવી"]
    }
  },
  {
    id:"landrecord",cat:"land",icon:"ti-map-2",color:"#D97706",
    name:{en:"Land Record (7/12 Extract)",hi:"भूमि अभिलेख (7/12 उतारा)",gu:"જમીન રેકોર્ડ (7/12 ઉતારો)"},
    desc:{en:"Official ownership record of agricultural land",hi:"कृषि भूमि का आधिकारिक स्वामित्व अभिलेख",gu:"ખેતીની જમીનનો સત્તાવાર માલિકી રેકોર્ડ"},
    fee:"₹15",time:{en:"Same day (online)",hi:"उसी दिन (ऑनलाइन)",gu:"તે જ દિવસે (ઓનલાઈન)"},timeBucket:"sameDay",
    portal:"https://anyror.gujarat.gov.in",
    eligibility:{
      en:["Land owner or co-owner in Gujarat","Tenant with valid cultivation rights (for some extracts)","Legal heir with succession documentation"],
      hi:["गुजरात में भूमि स्वामी या सह-स्वामी","वैध खेती अधिकार वाला किरायेदार (कुछ उतारों के लिए)","उत्तराधिकार दस्तावेज के साथ कानूनी उत्तराधिकारी"],
      gu:["ગુજરાતમાં જમીન માલિક અથવા સહ-માલિક","માન્ય ખેતી અધિકાર ધરાવતો ભાડૂત (કેટલાક ઉતારા માટે)","વારસાઈ દસ્તાવેજ સાથે કાનૂની વારસદાર"]
    },
    questions:[
      {id:"hasPrevDoc",
        label:{en:"Do you have a previous 7/12 extract or sale deed for this land?",hi:"क्या आपके पास इस भूमि का पूर्व 7/12 उतारा या बिक्री विलेख है?",gu:"શું તમારી પાસે આ જમીનનો અગાઉનો 7/12 ઉતારો અથવા વેચાણ ડીડ છે?"},
        options:[
          {value:"yes",label:{en:"Yes, I have it",hi:"हां, मेरे पास है",gu:"હા, મારી પાસે છે"}},
          {value:"no",label:{en:"No, I don't have it",hi:"नहीं, मेरे पास नहीं है",gu:"ના, મારી પાસે નથી"}}
        ],
        default:"yes"}
    ],
    docs:[
      {name:{en:"Survey/Block Number",hi:"सर्वे/ब्लॉक नंबर",gu:"સર્વે/બ્લોક નંબર"},desc:{en:"Land identification number from village records",hi:"गांव अभिलेख से भूमि पहचान संख्या",gu:"ગામ રેકોર્ડ પરથી જમીન ઓળખ નંબર"},icon:"ti-map-pin",color:"#D97706",link:null,sample:null},
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"For applicant identity verification",hi:"आवेदक पहचान सत्यापन के लिए",gu:"અરજદાર ઓળખ ચકાસણી માટે"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:"https://uidai.gov.in/en/my-aadhaar/about-your-aadhaar.html"},
      {name:{en:"Previous Land Document",hi:"पूर्व भूमि दस्तावेज",gu:"અગાઉનો જમીન દસ્તાવેજ"},desc:{en:"Sale deed or earlier 7/12 extract",hi:"बिक्री विलेख या पूर्व 7/12 उतारा",gu:"વેચાણ ડીડ અથવા અગાઉનો 7/12 ઉતારો"},icon:"ti-file-text",previewType:"ledger",color:"#2E7D32",link:null,sample:null,when:{hasPrevDoc:"yes"}},
      {name:{en:"Village Form No. 6 Request",hi:"ग्राम फॉर्म नंबर 6 अनुरोध",gu:"ગામ ફોર્મ નંબર 6 વિનંતી"},desc:{en:"File this at the Talati office to retrieve past land records if you don't have your own copy",hi:"पूर्व भूमि अभिलेख प्राप्त करने हेतु तलाटी कार्यालय में यह फाइल करें",gu:"અગાઉના જમીન રેકોર્ડ મેળવવા તલાટી ઓફિસમાં આ ફાઈલ કરો"},icon:"ti-file-text",previewType:"form",color:"#D97706",link:null,sample:null,when:{hasPrevDoc:"no"}}
    ],
    steps:{
      en:["Visit AnyROR Gujarat portal","Select district, taluka, and village","Enter survey number to search the record","Pay the nominal extract fee online","Download or print the 7/12 extract"],
      hi:["AnyROR गुजरात पोर्टल पर जाएं","जिला, तालुका और गांव चुनें","अभिलेख खोजने के लिए सर्वे नंबर दर्ज करें","ऑनलाइन मामूली उतारा शुल्क भरें","7/12 उतारा डाउनलोड या प्रिंट करें"],
      gu:["AnyROR ગુજરાત પોર્ટલ પર જાઓ","જિલ્લો, તાલુકો અને ગામ પસંદ કરો","રેકોર્ડ શોધવા માટે સર્વે નંબર દાખલ કરો","ઓનલાઈન નજીવી ઉતારા ફી ભરો","7/12 ઉતારો ડાઉનલોડ અથવા પ્રિન્ટ કરો"]
    },
    mistakes:{
      en:["Entering the wrong survey or block number","Confusing village name with similarly named villages in another taluka","Not checking for pending mutation entries before relying on the extract"],
      hi:["गलत सर्वे या ब्लॉक नंबर दर्ज करना","गांव के नाम को दूसरे तालुका के समान नाम वाले गांव से भ्रमित करना","उतारे पर भरोसा करने से पहले लंबित परिवर्तन प्रविष्टियों की जांच न करना"],
      gu:["ખોટો સર્વે અથવા બ્લોક નંબર દાખલ કરવો","ગામનું નામ બીજા તાલુકાના સમાન નામવાળા ગામ સાથે ગૂંચવવું","ઉતારા પર આધાર રાખતા પહેલા બાકી મ્યુટેશન એન્ટ્રીઓ ચકાસવી નહીં"]
    }
  },
  {
    id:"pension",cat:"welfare",icon:"ti-coin-rupee",color:"#2E7D32",
    name:{en:"Old Age Pension Scheme",hi:"वृद्धावस्था पेंशन योजना",gu:"વૃદ્ધ પેન્શન યોજના"},
    desc:{en:"Monthly financial support for senior citizens",hi:"वरिष्ठ नागरिकों के लिए मासिक वित्तीय सहायता",gu:"વરિષ્ઠ નાગરિકો માટે માસિક નાણાકીય સહાય"},
    fee:"₹0",time:{en:"45–60 days",hi:"45–60 दिन",gu:"45–60 દિવસ"},timeBucket:"longer",
    portal:"https://nsap.nic.in",
    eligibility:{
      en:["Age 60 years or above","Annual family income below state-defined poverty line","Resident of Gujarat for at least 1 year","No regular pension from any other government scheme"],
      hi:["आयु 60 वर्ष या अधिक","राज्य द्वारा निर्धारित गरीबी रेखा से कम वार्षिक परिवार आय","कम से कम 1 वर्ष से गुजरात का निवासी","किसी अन्य सरकारी योजना से नियमित पेंशन नहीं"],
      gu:["ઉંમર 60 વર્ષ અથવા વધુ","રાજ્ય દ્વારા નિર્ધારિત ગરીબી રેખાથી ઓછી વાર્ષિક પરિવાર આવક","ઓછામાં ઓછા 1 વર્ષથી ગુજરાતનો રહેવાસી","અન્ય કોઈ સરકારી યોજનામાંથી નિયમિત પેન્શન નહીં"]
    },
    questions:[
      {id:"hasBank",
        label:{en:"Do you already have an active bank account?",hi:"क्या आपके पास पहले से सक्रिय बैंक खाता है?",gu:"શું તમારી પાસે પહેલેથી સક્રિય બેંક ખાતું છે?"},
        options:[
          {value:"yes",label:{en:"Yes",hi:"हां",gu:"હા"}},
          {value:"no",label:{en:"No",hi:"नहीं",gu:"ના"}}
        ],
        default:"yes"}
    ],
    docs:[
      {name:{en:"Age Proof",hi:"आयु प्रमाण",gu:"ઉંમરનો પુરાવો"},desc:{en:"Aadhar card or birth certificate showing date of birth",hi:"जन्म तिथि दर्शाने वाला आधार कार्ड या जन्म प्रमाण पत्र",gu:"જન્મ તારીખ દર્શાવતું આધાર કાર્ડ અથવા જન્મ પ્રમાણ પત્ર"},icon:"ti-calendar",previewType:"idcard",color:"#3B6FE8",link:null,sample:null},
      {name:{en:"Income Certificate",hi:"आय प्रमाण पत्र",gu:"આવક પ્રમાણ પત્ર"},desc:{en:"Issued by Mamlatdar/Tehsildar office",hi:"ममलतदार/तहसीलदार कार्यालय द्वारा जारी",gu:"મામલતદાર/તહેસીલદાર ઓફિસ દ્વારા જારી"},icon:"ti-file-certificate",previewType:"certificate",color:"#2E7D32",link:"https://www.digitalgujarat.gov.in",sample:null},
      {name:{en:"Bank Passbook",hi:"बैंक पासबुक",gu:"બેંક પાસબુક"},desc:{en:"For direct benefit transfer of pension amount",hi:"पेंशन राशि के सीधे लाभ हस्तांतरण के लिए",gu:"પેન્શન રકમના સીધા લાભ ટ્રાન્સફર માટે"},icon:"ti-building-bank",previewType:"passbook",color:"#D97706",link:null,sample:null,when:{hasBank:"yes"}},
      {name:{en:"Bank Account Opening Form",hi:"बैंक खाता खोलने का फॉर्म",gu:"બેંક ખાતું ખોલવાનું ફોર્મ"},desc:{en:"Open a zero-balance Jan Dhan account first; pension cannot be credited without one",hi:"पहले जीरो-बैलेंस जन धन खाता खोलें; इसके बिना पेंशन जमा नहीं होगी",gu:"પ્રથમ ઝીરો-બેલેન્સ જન ધન ખાતું ખોલો; તેના વિના પેન્શન જમા થશે નહીં"},icon:"ti-building-bank",previewType:"passbook",color:"#D97706",link:"https://pmjdy.gov.in",sample:null,when:{hasBank:"no"}}
    ],
    steps:{
      en:["Visit nearest Gram Panchayat or Mamlatdar office","Fill the pension application form","Attach age proof, income certificate, and bank details","Submit application for verification","Approved applicants start receiving monthly pension via bank"],
      hi:["नजदीकी ग्राम पंचायत या ममलतदार कार्यालय जाएं","पेंशन आवेदन फॉर्म भरें","आयु प्रमाण, आय प्रमाण पत्र और बैंक विवरण संलग्न करें","सत्यापन के लिए आवेदन जमा करें","स्वीकृत आवेदकों को बैंक के माध्यम से मासिक पेंशन मिलना शुरू होती है"],
      gu:["નજીકની ગ્રામ પંચાયત અથવા મામલતદાર ઓફિસની મુલાકાત લો","પેન્શન અરજી ફોર્મ ભરો","ઉંમરનો પુરાવો, આવક પ્રમાણ પત્ર અને બેંક વિગતો જોડો","ચકાસણી માટે અરજી સબમિટ કરો","મંજૂર અરજદારોને બેંક દ્વારા માસિક પેન્શન મળવાનું શરૂ થાય છે"]
    },
    mistakes:{
      en:["Applying without an active, linked bank account","Submitting an outdated income certificate","Missing the local Anganwadi or Panchayat verification step"],
      hi:["सक्रिय, लिंक किए गए बैंक खाते के बिना आवेदन करना","पुराना आय प्रमाण पत्र जमा करना","स्थानीय आंगनवाड़ी या पंचायत सत्यापन चरण छूटना"],
      gu:["સક્રિય, લિંક કરેલા બેંક ખાતા વિના અરજી કરવી","જૂનું આવક પ્રમાણ પત્ર સબમિટ કરવું","સ્થાનિક આંગણવાડી અથવા પંચાયત ચકાસણી પગલું ચૂકી જવું"]
    }
  },
  {
    // fee & portal are illustrative — government amounts/URLs change; verify before relying on them.
    id:"income",cat:"certificates",icon:"ti-file-certificate",color:"#2E7D32",
    name:{en:"Income Certificate",hi:"आय प्रमाण पत्र",gu:"આવક પ્રમાણ પત્ર"},
    desc:{en:"Proof of annual family income for benefits",hi:"लाभों के लिए वार्षिक पारिवारिक आय का प्रमाण",gu:"લાભો માટે વાર્ષિક પરિવાર આવકનો પુરાવો"},
    fee:"₹0",time:{en:"About 7 days",hi:"लगभग 7 दिन",gu:"લગભગ 7 દિવસ"},timeBucket:"underWeek",
    portal:"https://www.digitalgujarat.gov.in",
    eligibility:{
      en:["Indian citizen resident in Gujarat","Applicable for self or family members","Income figures should match your actual family income"],
      hi:["गुजरात में रहने वाले भारतीय नागरिक","स्वयं या परिवार के सदस्यों के लिए लागू","आय के आंकड़े आपकी वास्तविक पारिवारिक आय से मेल खाने चाहिए"],
      gu:["ગુજરાતમાં રહેતા ભારતીય નાગરિક","સ્વયં અથવા પરિવારના સભ્યો માટે લાગુ","આવકના આંકડા તમારી વાસ્તવિક પારિવારિક આવક સાથે મેળ ખાતા હોવા જોઈએ"]
    },
    questions:[
      {id:"certType",
        label:{en:"Is this a new application or a renewal?",hi:"क्या यह नया आवेदन है या नवीनीकरण?",gu:"શું આ નવી અરજી છે કે નવીકરણ?"},
        options:[
          {value:"new",label:{en:"New application",hi:"नया आवेदन",gu:"નવી અરજી"}},
          {value:"renewal",label:{en:"Renewal",hi:"नवीनीकरण",gu:"નવીકરણ"}}
        ],
        default:"new"}
    ],
    docs:[
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"12-digit UID card of applicant",hi:"आवेदक का 12 अंकों का UID कार्ड",gu:"અરજદારનું 12 અંકનું UID કાર્ડ"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:null},
      {name:{en:"Address Proof",hi:"पता प्रमाण",gu:"સરનામું પુરાવો"},desc:{en:"Electricity bill, rental agreement, or voter ID",hi:"बिजली बिल, किराया समझौता, या मतदाता पहचान पत्र",gu:"વીજળી બિલ, ભાડા કરાર, અથવા મતદાર ઓળખ પત્ર"},icon:"ti-home",previewType:"receipt",color:"#D97706",link:null,sample:null},
      {name:{en:"Income Proof",hi:"आय प्रमाण",gu:"આવક પુરાવો"},desc:{en:"Previous year income details, salary slip, or ITR",hi:"पिछले वर्ष की आय विवरण, वेतन पर्ची, या ITR",gu:"પાછલા વર્ષની આવક વિગત, પગાર સ્લિપ, અથવા ITR"},icon:"ti-file-text",previewType:"certificate",color:"#2E7D32",link:null,sample:null},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent photo, white background",hi:"हाल की फोटो, सफेद पृष्ठभूमि",gu:"તાજો ફોટો, સફેદ પૃષ્ઠભૂમિ"},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null}
    ],
    steps:{
      en:["Visit the Digital Gujarat / eDistrict portal or nearest Mamlatdar office","Select 'Income Certificate' and fill the application form","Upload the required documents","Submit and take the acknowledgement","Certificate is issued or sent to your registered address"],
      hi:["डिजिटल गुजरात / eDistrict पोर्टल या नजदीकी ममलतदार कार्यालय पर जाएं","'आय प्रमाण पत्र' चुनें और आवेदन फॉर्म भरें","आवश्यक दस्तावेज अपलोड करें","जमा करें और पावती लें","प्रमाण पत्र जारी होता है या पंजीकृत पते पर भेजा जाता है"],
      gu:["ડિજિટલ ગુજરાત / eDistrict પોર્ટલ અથવા નજીકની મામલતદાર ઓફિસની મુલાકાત લો","'આવક પ્રમાણ પત્ર' પસંદ કરો અને અરજી ફોર્મ ભરો","જરૂરી દસ્તાવેજો અપલોડ કરો","સબમિટ કરો અને એક્નોલેજમેન્ટ લો","પ્રમાણ પત્ર જારી થાય છે અથવા નોંધાયેલા સરનામે મોકલાય છે"]
    },
    mistakes:{
      en:["Submitting income figures that don't match other records","Income certificate older than its validity period","Name spelling mismatch across documents"],
      hi:["अन्य अभिलेखों से न मेल खाती आय के आंकड़े जमा करना","वैधता अवधि से पुराना आय प्रमाण पत्र","दस्तावेजों में नाम की वर्तनी में अंतर"],
      gu:["અન્ય રેકોર્ડ સાથે ન મળતા આવકના આંકડા સબમિટ કરવા","માન્યતા અવધિ કરતાં જૂનું આવક પ્રમાણ પત્ર","દસ્તાવેજોમાં નામની જોડણીમાં તફાવત"]
    }
  },
  {
    // fee & portal are illustrative.
    id:"caste",cat:"certificates",icon:"ti-certificate",color:"#7C3AED",
    name:{en:"Caste Certificate",hi:"जाति प्रमाण पत्र",gu:"જ્ઞાતિ પ્રમાણ પત્ર"},
    desc:{en:"Proof of caste category for benefits & reservations",hi:"लाभ व आरक्षण हेतु जाति श्रेणी का प्रमाण",gu:"લાભ અને આરક્ષણ માટે જ્ઞાતિ શ્રેણીનો પુરાવો"},
    fee:"₹0",time:{en:"About 15 days",hi:"लगभग 15 दिन",gu:"લગભગ 15 દિવસ"},timeBucket:"underMonth",
    portal:"https://www.digitalgujarat.gov.in",
    eligibility:{
      en:["Indian citizen resident of Gujarat","Belongs to a recognised SC / ST / SEBC / OBC category","Usually a family member already holds a caste certificate","Caste is recorded in your local revenue or school records"],
      hi:["गुजरात में रहने वाला भारतीय नागरिक","मान्यता प्राप्त SC / ST / SEBC / OBC श्रेणी से संबंधित","आमतौर पर परिवार का सदस्य पहले से जाति प्रमाण पत्र रखता है","जाति आपके स्थानीय राजस्व या स्कूल अभिलेखों में दर्ज है"],
      gu:["ગુજરાતમાં રહેતો ભારતીય નાગરિક","માન્યતા પ્રાપ્ત SC / ST / SEBC / OBC શ્રેણીનો","સામાન્ય રીતે કુટુંબનો સભ્ય પહેલેથી જ્ઞાતિ પ્રમાણપત્ર ધરાવે છે","જ્ઞાતિ તમારા સ્થાનિક મહેસૂલ અથવા શાળાના રેકોર્ડમાં નોંધાયેલી છે"]
    },
    questions:[
      {id:"hasFamilyCert",
        label:{en:"Does any family member already hold a caste certificate?",hi:"क्या किसी परिवार सदस्य के पास पहले से जाति प्रमाण पत्र है?",gu:"શું કોઈ કુટુંબ સભ્ય પાસે પહેલેથી જ્ઞાતિ પ્રમાણપત્ર છે?"},
        options:[
          {value:"yes",label:{en:"Yes",hi:"हां",gu:"હા"}},
          {value:"no",label:{en:"No",hi:"नहीं",gu:"ના"}}
        ],
        default:"yes"}
    ],
    docs:[
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"Applicant identity proof",hi:"आवेदक पहचान प्रमाण",gu:"અરજદાર ઓળખ પુરાવો"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:null},
      {name:{en:"School Records",hi:"स्कूल अभिलेख",gu:"શાળાના રેકોર્ડ"},desc:{en:"School leaving certificate showing caste",hi:"जाति दर्शाने वाले स्कूल छोड़ने का प्रमाण पत्र",gu:"જ્ઞાતિ દર્શાવતું શાળા છોડવાનું પ્રમાણ પત્ર"},icon:"ti-file-text",previewType:"form",color:"#2E7D32",link:null,sample:null},
      {name:{en:"Family Caste Certificate",hi:"परिवार का जाति प्रमाण पत्र",gu:"કુટુંબનું જ્ઞાતિ પ્રમાણપત્ર"},desc:{en:"A family member's existing certificate, if available",hi:"परिवार सदस्य का मौजूदा प्रमाण पत्र, यदि उपलब्ध हो",gu:"કુટુંબ સભ્યનું હાલનું પ્રમાણપત્ર, જો ઉપલબ્ધ હોય"},icon:"ti-files",previewType:"certificate",color:"#7C3AED",link:null,sample:null,when:{hasFamilyCert:"yes"}},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent photo, white background",hi:"हाल की फोटो, सफेद पृष्ठभूमि",gu:"તાજો ફોટો, સફેદ પૃષ્ઠભૂમિ"},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null}
    ],
    steps:{
      en:["Apply on the Digital Gujarat / eSamaj Kalyan portal","Select the correct caste category (SC/ST/OBC/etc.)","Upload documents and submit","Verification by the competent authority","Collect the certificate or receive it by post"],
      hi:["डिजिटल गुजरात / eSamaj Kalyan पोर्टल पर आवेदन करें","सही जाति श्रेणी चुनें (SC/ST/OBC आदि)","दस्तावेज अपलोड करें और जमा करें","सक्षम प्राधिकारी द्वारा सत्यापन","प्रमाण पत्र प्राप्त करें या डाक से मिलेगा"],
      gu:["ડિજિટલ ગુજરાત / eSamaj Kalyan પોર્ટલ પર અરજી કરો","યોગ્ય જ્ઞાતિ શ્રેણી પસંદ કરો (SC/ST/OBC વગેરે)","દસ્તાવેજો અપલોડ કરો અને સબમિટ કરો","સક્ષમ સત્તાવાળા દ્વારા ચકાસણી","પ્રમાણપત્ર મેળવો અથવા ટપાલથી મળશે"]
    },
    mistakes:{
      en:["Applying under the wrong caste category code","Incomplete family particulars","Name mismatch with school or revenue records"],
      hi:["गलत जाति श्रेणी कोड के तहत आवेदन करना","अधूरे पारिवारिक विवरण","स्कूल या राजस्व अभिलेखों से नाम में अंतर"],
      gu:["ખોટા જ્ઞાતિ શ્રેણી કોડ હેઠળ અરજી કરવી","અધૂરી પારિવારિક વિગતો","શાળા અથવા મહેસૂલ રેકોર્ડ સાથે નામનો તફાવત"]
    }
  },
  {
    // fee & portal are illustrative.
    id:"domicile",cat:"certificates",icon:"ti-home",color:"#D97706",
    name:{en:"Domicile / Residence Certificate",hi:"डोमिसाइल / निवास प्रमाण पत्र",gu:"ડોમિસાઇલ / નિવાસ પ્રમાણપત્ર"},
    desc:{en:"Proof of long-term residence in Gujarat",hi:"गुजरात में दीर्घकालिक निवास का प्रमाण",gu:"ગુજરાતમાં લાંબા ગાળાના નિવાસનો પુરાવો"},
    fee:"₹0",time:{en:"About 10 days",hi:"लगभग 10 दिन",gu:"લગભગ 10 દિવસ"},timeBucket:"underMonth",
    portal:"https://www.digitalgujarat.gov.in",
    eligibility:{
      en:["Indian citizen living in Gujarat","Can prove continuous residence for the required period","Employed, self-employed, spouse of Gujarat resident, or a student"],
      hi:["गुजरात में रहने वाला भारतीय नागरिक","आवश्यक अवधि से निरंतर निवास सिद्ध कर सकता है","कर्मचारी, स्व-रोज़गार, गुजरात निवासी का जीवनसाथी, या छात्र"],
      gu:["ગુજરાતમાં રહેતો ભારતીય નાગરિક","જરૂરી સમયગાળાથી સતત નિવાસ સાબિત કરી શકે","કર્મચારી, સ્વ-નોકરી, ગુજરાત નિવાસીનો જીવનસાથી, અથવા વિદ્યાર્થી"]
    },
    questions:[
      {id:"basis",
        label:{en:"What is your basis for the certificate?",hi:"प्रमाण पत्र के लिए आपका आधार क्या है?",gu:"પ્રમાણપત્ર માટે તમારો આધાર શું છે?"},
        options:[
          {value:"residence",label:{en:"Long-term residence",hi:"दीर्घकालिक निवास",gu:"લાંબા ગાળાનો નિવાસ"}},
          {value:"employment",label:{en:"Employment / business",hi:"नौकरी / व्यवसाय",gu:"નોકરી / ધંધો"}}
        ],
        default:"residence"}
    ],
    docs:[
      {name:{en:"Address Proof",hi:"पता प्रमाण",gu:"સરનામું પુરાવો"},desc:{en:"Electricity bill, rental agreement, or property tax",hi:"बिजली बिल, किराया समझौता, या संपत्ति कर",gu:"વીજળી બિલ, ભાડા કરાર, અથવા મિલકત કર"},icon:"ti-home",previewType:"receipt",color:"#D97706",link:null,sample:null},
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"Applicant identity proof",hi:"आवेदक पहचान प्रमाण",gu:"અરજદાર ઓળખ પુરાવો"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:null},
      {name:{en:"Supporting Proof",hi:"सहायक प्रमाण",gu:"સહાયક પુરાવો"},desc:{en:"School / bank / office records indicating your stay",hi:"निवास दर्शाने वाले स्कूल / बैंक / कार्यालय अभिलेख",gu:"નિવાસ દર્શાવતા શાળા / બેંક / કાર્યાલય રેકોર્ડ"},icon:"ti-file-text",previewType:"form",color:"#2E7D32",link:null,sample:null},
      {name:{en:"Affidavit",hi:"शपथ पत्र",gu:"એફિડેવિટ"},desc:{en:"Self-declaration of residence period",hi:"निवास अवधि की स्व-घोषणा",gu:"નિવાસ અવધિની સ્વ-ઘોષણા"},icon:"ti-file-text",previewType:"form",color:"#7C3AED",link:null,sample:null,when:{basis:"employment"}},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent photo, white background",hi:"हाल की फोटो, सफेद पृष्ठभूमि",gu:"તાજો ફોટો, સફેદ પૃષ્ઠભૂમિ"},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null}
    ],
    steps:{
      en:["Apply on the Digital Gujarat / eDistrict portal","Select 'Domicile / Residence Certificate'","Upload address proof and supporting records","Verification is done against local records","Collect the certificate or receive it by post"],
      hi:["डिजिटल गुजरात / eDistrict पोर्टल पर आवेदन करें","'डोमिसाइल / निवास प्रमाण पत्र' चुनें","पता प्रमाण और सहायक अभिलेख अपलोड करें","स्थानीय अभिलेखों के विरुद्ध सत्यापन","प्रमाण पत्र प्राप्त करें या डाक से मिलेगा"],
      gu:["ડિજિટલ ગુજરાત / eDistrict પોર્ટલ પર અરજી કરો","'ડોમિસાઇલ / નિવાસ પ્રમાણપત્ર' પસંદ કરો","સરનામું પુરાવો અને સહાયક રેકોર્ડ અપલોડ કરો","સ્થાનિક રેકોર્ડ સામે ચકાસણી","પ્રમાણપત્ર મેળવો અથવા ટપાલથી મળશે"]
    },
    mistakes:{
      en:["Proving less residence than the certificate claims","Submitting expired bills or agreements","Name mismatch with the documents supplied"],
      hi:["प्रमाण पत्र से कम निवास सिद्ध करना","समाप्त हो चुके बिल या समझौते जमा करना","आपूर्ति किए दस्तावेजों से नाम में अंतर"],
      gu:["પ્રમાણપત્ર કરતાં ઓછો નિવાસ સાબિત કરવો","સમાપ્ત થયેલા બિલ અથવા કરાર સબમિટ કરવા","પૂરા પાડેલા દસ્તાવેજો સાથે નામનો તફાવત"]
    }
  },
  {
    // fee & portal are illustrative.
    id:"scholarship",cat:"education",icon:"ti-graduation-cap",color:"#5563DE",
    name:{en:"Scholarship (Pre/Post-Matric)",hi:"छात्रवृत्ति (प्री/पोस्ट-मैट्रिक)",gu:"શિષ્યવૃત્તિ (પ્રે/પોસ્ટ-મેટ્રિક)"},
    desc:{en:"Financial aid for eligible students",hi:"पात्र विद्यार्थियों के लिए वित्तीय सहायता",gu:"પાત્ર વિદ્યાર્થીઓ માટે નાણાકીય સહાય"},
    fee:"₹0",time:{en:"Varies by scheme (30–90 days)",hi:"योजना अनुसार (30–90 दिन)",gu:"યોજના મુજબ (30–90 દિવસ)"},timeBucket:"longer",
    portal:"https://www.digitalgujarat.gov.in",
    eligibility:{
      en:["Enrolled in a recognised school, college, or institution","Family income within the scheme's limit","Category and course eligibility as per the specific scheme","Apply within the scholarship application window"],
      hi:["मान्यता प्राप्त स्कूल, कॉलेज या संस्थान में नामांकित","पारिवारिक आय योजना की सीमा के भीतर","योजना के अनुसार श्रेणी और पाठ्यक्रम पात्रता","छात्रवृत्ति आवेदन अवधि के भीतर आवेदन करें"],
      gu:["માન્યતા પ્રાપ્ત શાળા, કૉલેજ અથવા સંસ્થામાં નોંધાયેલ","પારિવારિક આવક યોજનાની મર્યાદામાં","યોજના મુજબ શ્રેણી અને અભ્યાસક્રમ પાત્રતા","શિષ્યવૃત્તિ અરજી સમયગાળામાં અરજી કરો"]
    },
    questions:[
      {id:"level",
        label:{en:"Which level are you applying for?",hi:"आप किस स्तर के लिए आवेदन कर रहे हैं?",gu:"તમે કયા સ્તર માટે અરજી કરી રહ્યા છો?"},
        options:[
          {value:"pre",label:{en:"Pre-matric (school)",hi:"प्री-मैट्रिक (स्कूल)",gu:"પ્રે-મેટ્રિક (શાળા)"}},
          {value:"post",label:{en:"Post-matric (college)",hi:"पोस्ट-मैट्रिक (कॉलेज)",gu:"પોસ્ટ-મેટ્રિક (કૉલેજ)"}}
        ],
        default:"post"}
    ],
    docs:[
      {name:{en:"Aadhar Card",hi:"आधार कार्ड",gu:"આધાર કાર્ડ"},desc:{en:"Applicant identity proof",hi:"आवेदक पहचान प्रमाण",gu:"અરજદાર ઓળખ પુરાવો"},icon:"ti-id-badge-2",previewType:"idcard",color:"#3B6FE8",link:"https://myaadhaar.uidai.gov.in/",sample:null},
      {name:{en:"Bank Passbook",hi:"बैंक पासबुक",gu:"બેંક પાસબુક"},desc:{en:"For direct transfer of the scholarship",hi:"छात्रवृत्ति के सीधे हस्तांतरण के लिए",gu:"શિષ્યવૃત્તિના સીધા ટ્રાન્સફર માટે"},icon:"ti-building-bank",previewType:"passbook",color:"#D97706",link:null,sample:null},
      {name:{en:"Admission / Enrollment Proof",hi:"प्रवेश / नामांकन प्रमाण",gu:"પ્રવેશ / નોંધણી પુરાવો"},desc:{en:"Admission letter or bonafide from the institution",hi:"संस्थान से प्रवेश पत्र या प्रमाण",gu:"સંસ્થાના પ્રવેશ પત્ર અથવા પ્રમાણ"},icon:"ti-file-text",previewType:"form",color:"#2E7D32",link:null,sample:null},
      {name:{en:"Income Certificate",hi:"आय प्रमाण पत्र",gu:"આવક પ્રમાણ પત્ર"},desc:{en:"Family income proof within scheme limits",hi:"योजना सीमा के भीतर पारिवारिक आय का प्रमाण",gu:"યોજનાની મર્યાદામાં પારિવારિક આવકનો પુરાવો"},icon:"ti-file-certificate",previewType:"certificate",color:"#2E7D32",link:null,sample:null},
      {name:{en:"Previous Year Marksheet",hi:"पिछले वर्ष की अंकसूची",gu:"ગયા વર્ષની માર્કશીટ"},desc:{en:"Previous exam results",hi:"पिछली परीक्षा के परिणाम",gu:"ગયા પરીક્ષાના પરિણામો"},icon:"ti-file-text",previewType:"form",color:"#7C3AED",link:null,sample:null}
    ],
    steps:{
      en:["Check the current scheme's application window","Apply online on the scholarship portal within the window","Upload all documents and submit","Institute and nodal officer verify the application","Scholarship is credited to the linked bank account"],
      hi:["योजना की वर्तमान आवेदन अवधि जांचें","अवधि के भीतर छात्रवृत्ति पोर्टल पर ऑनलाइन आवेदन करें","सभी दस्तावेज अपलोड करें और जमा करें","संस्थान और नोडल अधिकारी आवेदन की पुष्टि करते हैं","छात्रवृत्ति लिंक किए बैंक खाते में जमा होती है"],
      gu:["યોજનાનો વર્તમાન અરજી સમયગાળો તપાસો","સમયગાળામાં શિષ્યવૃત્તિ પોર્ટલ પર ઓનલાઈન અરજી કરો","બધા દસ્તાવેજો અપલોડ કરો અને સબમિટ કરો","સંસ્થા અને નોડલ અધિકારી અરજી ચકાસે છે","શિષ્યવૃત્તિ લિંક બેંક ખાતામાં જમા થાય છે"]
    },
    mistakes:{
      en:["Missing the application window / deadline","Entering incorrect bank details","Submitting an outdated income certificate"],
      hi:["आवेदन अवधि / समय सीमा से चूकना","गलत बैंक विवरण दर्ज करना","पुराना आय प्रमाण पत्र जमा करना"],
      gu:["અરજી સમયગાળો / અંતિમ તારીખ ચૂકી જવી","ખોટી બેંક વિગતો દાખલ કરવી","જૂનું આવક પ્રમાણ પત્ર સબમિટ કરવું"]
    }
  },
  {
    // fee & portal are illustrative.
    id:"voter",cat:"identity",icon:"ti-id-badge",color:"#5563DE",
    name:{en:"Voter ID (EPIC) Registration",hi:"मतदाता पहचान पत्र (EPIC) पंजीकरण",gu:"મતદાર ઓળખ પત્ર (EPIC) નોંધણી"},
    desc:{en:"Register as a voter and get your EPIC card",hi:"मतदाता के रूप में पंजीकरण और EPIC कार्ड पाएं",gu:"મતદાર તરીકે નોંધણી કરો અને EPIC કાર્ડ મેળવો"},
    fee:"₹0",time:{en:"30–60 days",hi:"30–60 दिन",gu:"30–60 દિવસ"},timeBucket:"longer",
    portal:"https://voters.eci.gov.in",
    eligibility:{
      en:["Indian citizen","At least 18 years old on the qualifying date","Ordinarily resident of the constituency where you register","Not already registered as a voter elsewhere"],
      hi:["भारतीय नागरिक","निर्धारित तिथि पर कम से कम 18 वर्ष का","जिस निर्वाचन क्षेत्र में पंजीकरण करते हैं वहां आम निवासी","कहीं और पहले से मतदाता के रूप में पंजीकृत नहीं"],
      gu:["ભારતીય નાગરિક","નિર્ધારિત તારીખે ઓછામાં ઓછા 18 વર્ષનો","જ્યાં નોંધણી કરે છે તે નિર્વાચન ક્ષેત્રમાં સામાન્ય નિવાસી","બીજે પહેલેથી મતદાર તરીકે નોંધાયેલ નથી"]
    },
    questions:[
      {id:"registered",
        label:{en:"Are you registering for the first time?",hi:"क्या आप पहली बार पंजीकरण कर रहे हैं?",gu:"શું તમે પ્રથમ વખત નોંધણી કરી રહ્યા છો?"},
        options:[
          {value:"new",label:{en:"Yes, new registration",hi:"हां, नया पंजीकरण",gu:"હા, નવી નોંધણી"}},
          {value:"shift",label:{en:"Shifting constituency",hi:"निर्वाचन क्षेत्र बदल raha",gu:"નિર્વાચન ક્ષેત્ર બદલવું"}}
        ],
        default:"new"}
    ],
    docs:[
      {name:{en:"Age Proof",hi:"आयु प्रमाण",gu:"ઉંમર પુરાવો"},desc:{en:"Aadhar, birth certificate, or school leaving certificate",hi:"आधार, जन्म प्रमाण पत्र, या स्कूल छोड़ने का प्रमाण पत्र",gu:"આધાર, જન્મ પ્રમાણપત્ર, અથવા શાળા છોડવાનું પ્રમાણપત્ર"},icon:"ti-calendar",previewType:"idcard",color:"#3B6FE8",link:null,sample:null},
      {name:{en:"Address Proof",hi:"पता प्रमाण",gu:"સરનામું પુરાવો"},desc:{en:"Electricity bill, ration card, or passbook",hi:"बिजली बिल, राशन कार्ड, या पासबुक",gu:"વીજળી બિલ, રેશન કાર્ડ, અથવા પાસબુક"},icon:"ti-home",previewType:"receipt",color:"#D97706",link:null,sample:null},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent colour photo",hi:"हाल की रंगीन फोटो",gu:"તાજો રંગીન ફોટો"},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null},
      {name:{en:"Previous EPIC (if shifting)",hi:"पिछला EPIC (यदि क्षेत्र बदल रहे हों)",gu:"અગાઉનું EPIC (જો ક્ષેત્ર બદલતા હો)"},desc:{en:"Old voter card when changing constituency",hi:"निर्वाचन क्षेत्र बदलते समय पुराना मतदाता कार्ड",gu:"નિર્વાચન ક્ષેત્ર બદલતી વખતે જૂનું મતદાર કાર્ડ"},icon:"ti-id-badge-2",previewType:"idcard",color:"#5563DE",link:null,sample:null,when:{registered:"shift"}}
    ],
    steps:{
      en:["Go to the NVSP / Voter Helpline portal","Fill Form 6 with your details and constituency","Upload your photo and ID proof","Booth Level Officer verifies residence","EPIC is issued and delivered to your address"],
      hi:["NVSP / मतदाता हेल्पलाइन पोर्टल पर जाएं","फॉर्म 6 में विवरण और निर्वाचन क्षेत्र भरें","फोटो और पहचान प्रमाण अपलोड करें","मतदान केंद्र अधिकारी निवास सत्यापित करता है","EPIC जारी होकर आपके पते पर पहुंचता है"],
      gu:["NVSP / મતદાર હેલ્પલાઈન પોર્ટલ પર જાઓ","ફોર્મ 6 માં વિગતો અને નિર્વાચન ક્ષેત્ર ભરો","ફોટો અને ઓળખ પુરાવો અપલોડ કરો","મતદાન કેન્દ્ર અધિકારી નિવાસ ચકાસે છે","EPIC જારી થઈને તમારા સરનામે પહોંચે છે"]
    },
    mistakes:{
      en:["Registering in the wrong constituency","Name spelling that doesn't match your identity proof","Applying before you turn 18 on the qualifying date"],
      hi:["गलत निर्वाचन क्षेत्र में पंजीकरण","पहचान प्रमाण से न मेल खाती नाम की वर्तनी","निर्धारित तिथि पर 18 वर्ष से पहले आवेदन"],
      gu:["ખોટા નિર્વાચન ક્ષેત્રમાં નોંધણી","ઓળખ પુરાવા સાથે બંધબેસતી ન હોય તેવી જોડણી","નિર્ધારિત તારીખે 18 વર્ષ થાય તે પહેલાં અરજી"]
    }
  },
  {
    // fee & portal are illustrative — actual RTO fees vary by state/licence type.
    id:"driving",cat:"identity",icon:"ti-car",color:"#D94F5C",
    name:{en:"Driving / Learner's Licence",hi:"ड्राइविंग / लर्नर लाइसेंस",gu:"ડ્રાઇવિંગ / લર્નર લાયસન્સ"},
    desc:{en:"Apply for a learner's or permanent driving licence",hi:"लर्नर या स्थायी ड्राइविंग लाइसेंस के लिए आवेदन",gu:"લર્નર કે કાયમી ડ્રાઇવિંગ લાઇસન્સ માટે અરજી કરો"},
    fee:"₹300 approx",time:{en:"Learner's: a few days; Permanent: ~1 month later",hi:"लर्नर: कुछ दिन; स्थायी: ~1 महीने बाद",gu:"લર્નર: થોડા દિવસ; કાયમી: ~1 મહિના પછી"},timeBucket:"underMonth",
    portal:"https://sarathi.parivahan.gov.in",
    eligibility:{
      en:["Age 18 years or above (16+ for certain light motorcycles)","Able to read and write in any state language","Adequate basic knowledge of traffic rules"],
      hi:["आयु 18 वर्ष या अधिक (कुछ लाइट मोटरसाइकिलों के लिए 16+)","किसी भी राज्य भाषा में पढ़ और लिख सकता है","यातायात नियमों का पर्याप्त बुनियादी ज्ञान"],
      gu:["ઉંમર 18 વર્ષ કે તેથી વધુ (ચોક્કસ લાઇટ મોટરસાઇકલ માટે 16+)","કોઈ પણ રાજ્ય ભાષામાં વાંચી અને લખી શકે","ટ્રાફિક નિયમોનું પૂરતું મૂળભૂત જ્ઞાન"]
    },
    questions:[
      {id:"licenceType",
        label:{en:"Which licence do you need?",hi:"आपको कौन सा लाइसेंस चाहिए?",gu:"તમારે કયું લાઇસન્સ જોઈએ?"},
        options:[
          {value:"learner",label:{en:"Learner's licence",hi:"लर्नर लाइसेंस",gu:"લર્નર લાઇસન્સ"}},
          {value:"permanent",label:{en:"Permanent licence",hi:"स्थायी लाइसेंस",gu:"કાયમી લાઇસન્સ"}}
        ],
        default:"learner"}
    ],
    docs:[
      {name:{en:"Age Proof",hi:"आयु प्रमाण",gu:"ઉંમર પુરાવો"},desc:{en:"Aadhar, birth certificate, or school certificate",hi:"आधार, जन्म प्रमाण पत्र, या स्कूल प्रमाण",gu:"આધાર, જન્મ પ્રમાણપત્ર, અથવા શાળા પ્રમાણ"},icon:"ti-calendar",previewType:"idcard",color:"#3B6FE8",link:null,sample:null},
      {name:{en:"Address Proof",hi:"पता प्रमाण",gu:"સરનામું પુરાવો"},desc:{en:"Passport, bank statement, or utility bill",hi:"पासपोर्ट, बैंक विवरण, या उपयोगिता बिल",gu:"પાસપોર્ટ, બેંક સ્ટેટમેન્ટ, અથવા યુટિલિટી બિલ"},icon:"ti-home",previewType:"receipt",color:"#D97706",link:null,sample:null},
      {name:{en:"Passport Photo",hi:"पासपोर्ट फोटो",gu:"પાસપોર્ટ ફોટો"},desc:{en:"Recent colour photo",hi:"हाल की रंगीन फोटो",gu:"તાજો રંગીન ફોટો"},icon:"ti-camera",previewType:"photo",color:"#7C3AED",link:null,sample:null},
      {name:{en:"Learner's Licence + Medical Certificate",hi:"लर्नर लाइसेंस + चिकित्सा प्रमाण पत्र",gu:"લર્નર લાઇસન્સ + તબીબી પ્રમાણપત્ર"},desc:{en:"Existing learner's licence and medical fitness for permanent licence",hi:"स्थायी लाइसेंस के लिए मौजूदा लर्नर लाइसेंस और चिकित्सा फिटनेस",gu:"કાયમી લાઇસન્સ માટે હાલનું લર્નર લાઇસન્સ અને તબીબી ફિટનેસ"},icon:"ti-clipboard-text",previewType:"medical",color:"#2E7D32",link:null,sample:null,when:{licenceType:"permanent"}}
    ],
    steps:{
      en:["Apply on the Sarathi (Parivahan) portal","Book a slot at your nearest RTO for the test","Pass the learner's test and get the learner's licence","After ~30 days, apply for the permanent licence","Pass the driving test and collect the licence"],
      hi:["सारथी (परिवहन) पोर्टल पर आवेदन करें","नजदीकी RTO में परीक्षा के लिए स्लॉट बुक करें","लर्नर परीक्षा पास करें और लर्नर लाइसेंस पाएं","~30 दिनों के बाद स्थायी लाइसेंस के लिए आवेदन करें","ड्राइविंग परीक्षा पास करें और लाइसेंस प्राप्त करें"],
      gu:["સારથી (પરિવહન) પોર્ટલ પર અરજી કરો","નજીકના RTO ખાતે પરીક્ષા માટે સ્લોટ બુક કરો","લર્નર ટેસ્ટ પાસ કરો અને લર્નર લાઇસન્સ મેળવો","~30 દિવસ પછી કાયમી લાઇસન્સ માટે અરજી કરો","ડ્રાઇવિંગ ટેસ્ટ પાસ કરો અને લાઇસન્સ મેળવો"]
    },
    mistakes:{
      en:["Letting the learner's licence expire before the driving test","Carrying photocopies instead of original documents to the RTO","Incorrect or partial address proof"],
      hi:["ड्राइविंग परीक्षा से पहले लर्नर लाइसेंस समाप्त हो जाना","RTO में मूल दस्तावेजों की जगह फोटोकॉपी ले जाना","गलत या अधूरा पता प्रमाण"],
      gu:["ડ્રાઇવિંગ ટેસ્ટ પહેલાં લર્નર લાઇસન્સ સમાપ્ત થઈ જવું","RTO ખાતે મૂળ દસ્તાવેજોને બદલે ફોટોકોપી લઈ જવી","ખોટું અથવા અધૂરું સરનામું પુરાવો"]
    }
  }
];
export default SERVICES;
