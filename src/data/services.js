export const SERVICES = [
  {
    id:"ration",cat:"welfare",icon:"ti-receipt",color:"#D94F5C",
    name:{en:"Ration Card",hi:"राशन कार्ड",gu:"રેશન કાર્ડ"},
    desc:{en:"Get subsidised food grains",hi:"सब्सिडी पर खाद्यान्न पाएं",gu:"સબ્સિડી પર અનાજ મેળવો"},
    fee:"₹0",time:{en:"30–45 days",hi:"30–45 दिन",gu:"30–45 દિવસ"},
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
    fee:"₹5",time:{en:"7–15 days",hi:"7–15 दिन",gu:"7–15 દિવસ"},
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
    fee:"₹15",time:{en:"Same day (online)",hi:"उसी दिन (ऑनलाइन)",gu:"તે જ દિવસે (ઓનલાઈન)"},
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
    fee:"₹0",time:{en:"45–60 days",hi:"45–60 दिन",gu:"45–60 દિવસ"},
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
  }
];
export default SERVICES;
