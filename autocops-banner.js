(function() {
    // 1. UUID v4 Visitor Generator
    function visitorId() {
        var k = "_ac_visitor_id";
        var v = localStorage.getItem(k);
        if (!v) {
            v = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            localStorage.setItem(k, v);
        }
        return v;
    }

    // 2. Language Translation Bundles (10 Scheduled Indian Languages)
    var translations = {
        en: {
            title: "AutoCOPS DPDP Privacy & Cookie Preferences",
            desc: "Secure Bank uses essential cookies and data categories under DPDP Act 2023 to provide secure banking, analytics, and personalized features.",
            essential: "Essential (Required)",
            analytics: "Analytics",
            functional: "Functional",
            marketing: "Marketing",
            reject: "Reject Optional",
            customize: "Customize Preferences",
            save: "Save Selected",
            acceptAll: "Accept All",
            privacyLink: "Privacy Policy"
        },
        hi: {
            title: "ऑटोकोप्स डीपीडीपी गोपनीयता और कुकी प्राथमिकताएं",
            desc: "सुरक्षित बैंकिंग, विश्लेषण और व्यक्तिगत सुविधाएं प्रदान करने के लिए सुरक्षित बैंक डीपीडीपी अधिनियम 2023 के तहत कुकीज़ का उपयोग करता है।",
            essential: "आवश्यक (अनिवार्य)",
            analytics: "विश्लेषण (Analytics)",
            functional: "कार्यात्मक (Functional)",
            marketing: "विपणन (Marketing)",
            reject: "वैकल्पिक अस्वीकार करें",
            customize: "प्राथमिकताएं अनुकूलित करें",
            save: "चयनित सहेजें",
            acceptAll: "सभी स्वीकार करें",
            privacyLink: "गोपनीयता नीति"
        },
        ta: {
            title: "AutoCOPS DPDP தனியுரிமை மற்றும் குக்கி விருப்பத்தேர்வுகள்",
            desc: "பாதுகாப்பான வங்கிச் சேவை, பகுப்பாய்வு மற்றும் தனிப்பயனாக்கப்பட்ட அம்சங்களை வழங்க செக்யூர் பேங்க் குக்கீகளைப் பயன்படுத்துகிறது.",
            essential: "அத்தியாவசியம் (தேவையானவை)",
            analytics: "பகுப்பாய்வு (Analytics)",
            functional: "செயல்பாட்டு (Functional)",
            marketing: "சந்தைப்படுத்தல் (Marketing)",
            reject: "விருப்பமானதை நிராகரி",
            customize: "விருப்பங்களை மாற்று",
            save: "தேர்ந்தெடுக்கப்பட்டதை சேமி",
            acceptAll: "அனைத்தையும் ஏற்றுக்கொள்",
            privacyLink: "தனியுரிமைக் கொள்கை"
        },
        te: {
            title: "AutoCOPS DPDP గోప్యత మరియు కుకీ ప్రాధాన్యతలు",
            desc: "సురక్షిత బ్యాంకింగ్, విశ్లేషణలు మరియు వ్యక్తిగతీకరించిన ఫీచర్లను అందించడానికి సెక్యూర్ బ్యాంక్ కుకీలను ఉపయోగిస్తుంది.",
            essential: "అత్యవసరం (తప్పనిసరి)",
            analytics: "విశ్లేషణలు (Analytics)",
            functional: "కార్యాచరణ (Functional)",
            marketing: "మార్కెటింగ్ (Marketing)",
            reject: "ఐచ్ఛికాన్ని తిరస్కరించు",
            customize: "ప్రాధాన్యతలను అనుకూలీకరించు",
            save: "ఎంచుకున్నవి సేవ్ చేయి",
            acceptAll: "అన్నీ అంగీకరించు",
            privacyLink: "గోప్యతా విధానం"
        },
        bn: {
            title: "AutoCOPS DPDP গোপনীয়তা এবং কুকি পছন্দসমূহ",
            desc: "নিরাপদ ব্যাংকিং, বিশ্লেষণ এবং ব্যক্তিগত বৈশিষ্ট্য প্রদানের জন্য সিকিউর ব্যাংক কুকি ব্যবহার করে।",
            essential: "প্রয়োজনীয় (বাধ্যতামূলক)",
            analytics: "বিশ্লেষণ (Analytics)",
            functional: "কার্যকরী (Functional)",
            marketing: "মার্কেটিং (Marketing)",
            reject: "ঐচ্ছিক প্রত্যাখ্যান করুন",
            customize: "পছন্দ কাস্টমাইজ করুন",
            save: "নির্বাচিত সংরক্ষণ করুন",
            acceptAll: "সব গ্রহণ করুন",
            privacyLink: "গোপনীয়তা নীতি"
        },
        mr: {
            title: "AutoCOPS DPDP गोपनीयता आणि कुकी प्राधान्ये",
            desc: "सुरक्षित बँकिंग, विश्लेषण आणि वैयक्तिक वैशिष्ट्ये प्रदान करण्यासाठी सिक्युअर बँक कुकीज वापरते.",
            essential: "आवश्यक (अनिवार्य)",
            analytics: "विश्लेषण (Analytics)",
            functional: "कार्यात्मक (Functional)",
            marketing: "मार्केटिंग (Marketing)",
            reject: "ऐच्छिक नाकारा",
            customize: "प्राधान्ये कस्टमायझ करा",
            save: "निवडलेले जतन करा",
            acceptAll: "सर्व स्वीकारा",
            privacyLink: "गोपनीयता धोरण"
        },
        gu: {
            title: "AutoCOPS DPDP ગોપનીયતા અને કૂકી પસંદગીઓ",
            desc: "સુરક્ષિત બેંકિંગ, વિશ્લેષણ અને વ્યક્તિગત સુવિધાઓ પ્રદાન કરવા માટે સિક્યોર બેંક કૂકીઝનો ઉપયોગ કરે છે.",
            essential: "જરૂરી (ફરજિયાત)",
            analytics: "વિશ્લેષણ (Analytics)",
            functional: "કાર્યાત્મક (Functional)",
            marketing: "માર્કેટિંગ (Marketing)",
            reject: "વૈકલ્પિક નકારો",
            customize: "પસંદગીઓ બદલો",
            save: "પસંદ કરેલ સાચવો",
            acceptAll: "બધા સ્વીકારો",
            privacyLink: "ગોપનીયતા નીતિ"
        },
        kn: {
            title: "AutoCOPS DPDP ಗೌಪ್ಯತೆ ಮತ್ತು ಕುಕಿ ಆದ್ಯತೆಗಳು",
            desc: "ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್, ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಒದಗಿಸಲು ಸೆಕ್ಯೂರ್ ಬ್ಯಾಂಕ್ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
            essential: "ಅಗತ್ಯ (ಡ್ಡಾಯ)",
            analytics: "ವಿಶ್ಲೇಷಣೆ (Analytics)",
            functional: "ಕಾರ್ಯಾತ್ಮಕ (Functional)",
            marketing: "ಮಾರುಕಟ್ಟೆ (Marketing)",
            reject: "ಐಚ್ಛಿಕವನ್ನು ನಿರಾಕರಿಸಿ",
            customize: "ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
            save: "ಆಯ್ದ ಭಾಗಗಳನ್ನು ಉಳಿಸಿ",
            acceptAll: "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
            privacyLink: "ಗೌಪ್ಯತಾ ನೀತಿ"
        },
        ml: {
            title: "AutoCOPS DPDP സ്വകാര്യതയും കുക്കി മുൻഗണനകളും",
            desc: "സുരക്ഷിത ബാങ്കിംഗ്, വിശകലനം, വ്യക്തിഗത സവിശേഷതകൾ എന്നിവ നൽകാൻ സെക്യൂർ ബാങ്ക് കുക്കികൾ ഉപയോഗിക്കുന്നു.",
            essential: "അത്യന്താപേക്ഷിതം (നിർബന്ധം)",
            analytics: "വിശകലനം (Analytics)",
            functional: "പ്രവർത്തനക്ഷമം (Functional)",
            marketing: "മാർക്കറ്റിംഗ് (Marketing)",
            reject: "ഓപ്ഷണൽ നിരസിക്കുക",
            customize: "മുൻഗണനകൾ മാറ്റുക",
            save: "തിരഞ്ഞെടുത്തത് സംരക്ഷിക്കുക",
            acceptAll: "എല്ലാം സ്വീകരിക്കുക",
            privacyLink: "സ്വകാര്യതാ നയം"
        },
        pa: {
            title: "AutoCOPS DPDP ਗੋਪਨੀਯਤਾ ਅਤੇ ਕੂਕੀ ਤਰਜੀਹਾਂ",
            desc: "ਸੁਰੱਖਿਅਤ ਬੈਂਕਿੰਗ, ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਵਿਅਕਤੀਗਤ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਿਕਿਓਰ ਬੈਂਕ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।",
            essential: "ਜ਼ਰੂਰੀ (ਲਾਜ਼ਮੀ)",
            analytics: "ਵਿਸ਼ਲੇਸ਼ਣ (Analytics)",
            functional: "ਕਾਰਜਾਤਮਕ (Functional)",
            marketing: "ਮਾਰਕੀਟਿੰਗ (Marketing)",
            reject: "ਵਿਕਲਪਿਕ ਰੱਦ ਕਰੋ",
            customize: "ਤਰਜੀਹਾਂ ਅਨੁਕੂਲਿਤ ਕਰੋ",
            save: "ਚੁਣੇ ਹੋਏ ਸੰਭਾਲੋ",
            acceptAll: "ਸਾਰੇ ਸਵੀਕਾਰ ਕਰੋ",
            privacyLink: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ"
        }
    };

    // Initial Language Reading
    var currentLang = "en";
    try {
        var domainKey = "autocops_cookie_lang_demo-secure-bank.onrender.com";
        currentLang = localStorage.getItem(domainKey) || localStorage.getItem("autocops_cookie_lang_" + location.hostname) || (navigator.language || "en").split("-")[0].toLowerCase();
        if (!translations[currentLang]) currentLang = "en";
    } catch (e) {}

    var vid = visitorId();

    // 3. Render Banner if preferences not set
    var consentKey = "_ac_cookie_consent_saved";
    if (localStorage.getItem(consentKey)) return;

    var style = document.createElement('style');
    style.innerHTML = `
        .ac-banner-overlay { position: fixed; bottom: 20px; left: 20px; right: 20px; max-width: 820px; margin: 0 auto; z-index: 9999; background: #0F172A; color: #F8FAFC; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); font-family: 'Inter', sans-serif; }
        .ac-banner-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
        .ac-banner-title { font-size: 16px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; gap: 8px; }
        .ac-banner-desc { font-size: 13px; color: #94A3B8; line-height: 1.5; margin-bottom: 16px; }
        .ac-custom-panel { display: none; flex-wrap: wrap; gap: 10px; margin: 16px 0; width: 100%; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; }
        .ac-card-label { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; cursor: pointer; transition: all 0.2s ease; font-size: 13px; font-weight: 500; color: #E2E8F0; }
        .ac-card-label:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
        .ac-card-label:has(input:checked) { border-color: #10B981; background-color: rgba(16,185,129,0.1); color: #10B981; }
        .ac-card-label input[type='checkbox'] { width: 16px; height: 16px; margin: 0; cursor: pointer; accent-color: #10B981; }
        .ac-actions { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; margin-top: 16px; }
        .ac-btn { padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s ease; }
        .ac-btn-accept { background: #10B981; color: #FFFFFF; }
        .ac-btn-accept:hover { opacity: 0.9; }
        .ac-btn-reject { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #E2E8F0; }
        .ac-btn-reject:hover { background: rgba(255,255,255,0.1); }
        .ac-btn-customize { background: rgba(255,255,255,0.1); color: #E2E8F0; }
        .ac-btn-customize:hover { background: rgba(255,255,255,0.2); }
        .ac-lang-select { background: #1E293B; color: #E2E8F0; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; padding: 4px 8px; font-size: 12px; font-weight: 600; cursor: pointer; outline: none; }
    `;
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.className = 'ac-banner-overlay';
    div.innerHTML = `
        <div class="ac-banner-header">
            <div class="ac-banner-title">
                <span class="material-symbols-outlined" style="color:#10B981;">cookie</span>
                <span id="ac-txt-title">AutoCOPS DPDP Privacy & Cookie Preferences</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <select id="ac-banner-lang" class="ac-lang-select">
                    <option value="en">English</option>
                    <option value="hi">हिंदी (Hindi)</option>
                    <option value="ta">தமிழ் (Tamil)</option>
                    <option value="te">తెలుగు (Telugu)</option>
                    <option value="bn">বাংলা (Bengali)</option>
                    <option value="mr">मराठी (Marathi)</option>
                    <option value="gu">ગુજરાતી (Gujarati)</option>
                    <option value="kn">ಕನ್ನಡ (Kannada)</option>
                    <option value="ml">മലയാളം (Malayalam)</option>
                    <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                </select>
                <a href="privacy.html" id="ac-txt-privacy" style="color:#10B981; font-size:12px; text-decoration:underline;">Privacy Policy</a>
            </div>
        </div>
        <div class="ac-banner-desc" id="ac-txt-desc">
            Secure Bank uses essential cookies and data categories under DPDP Act 2023 to provide secure banking, analytics, and personalized features.
        </div>

        <!-- Custom Preferences Panel -->
        <div class="ac-custom-panel" id="ac-custom-panel">
            <label class="ac-card-label">
                <input type="checkbox" checked disabled id="ac-cat-essential"> <span id="ac-lbl-essential">Essential (Required)</span>
            </label>
            <label class="ac-card-label">
                <input type="checkbox" id="ac-cat-analytics"> <span id="ac-lbl-analytics">Analytics</span>
            </label>
            <label class="ac-card-label">
                <input type="checkbox" id="ac-cat-functional"> <span id="ac-lbl-functional">Functional</span>
            </label>
            <label class="ac-card-label">
                <input type="checkbox" id="ac-cat-marketing"> <span id="ac-lbl-marketing">Marketing</span>
            </label>
        </div>

        <div class="ac-actions">
            <button class="ac-btn ac-btn-reject" id="ac-btn-reject">Reject Optional</button>
            <button class="ac-btn ac-btn-customize" id="ac-btn-customize">Customize Preferences</button>
            <button class="ac-btn ac-btn-save" style="display:none; background:#10B981; color:#FFFFFF;" id="ac-btn-save">Save Selected</button>
            <button class="ac-btn ac-btn-accept" style="background:#FFFFFF; color:#0F172A;" id="ac-btn-accept-all">Accept All</button>
        </div>
    `;
    document.body.appendChild(div);

    // Apply Translation Function
    function applyBannerTranslation(lang) {
        var t = translations[lang] || translations.en;
        document.getElementById('ac-txt-title').innerText = t.title;
        document.getElementById('ac-txt-desc').innerText = t.desc;
        document.getElementById('ac-lbl-essential').innerText = t.essential;
        document.getElementById('ac-lbl-analytics').innerText = t.analytics;
        document.getElementById('ac-lbl-functional').innerText = t.functional;
        document.getElementById('ac-lbl-marketing').innerText = t.marketing;
        document.getElementById('ac-btn-reject').innerText = t.reject;
        document.getElementById('ac-btn-customize').innerText = t.customize;
        document.getElementById('ac-btn-save').innerText = t.save;
        document.getElementById('ac-btn-accept-all').innerText = t.acceptAll;
        document.getElementById('ac-txt-privacy').innerText = t.privacyLink;

        // Persist language selection
        try {
            var domainKey = "autocops_cookie_lang_demo-secure-bank.onrender.com";
            localStorage.setItem(domainKey, lang);
            if (location.hostname) {
                localStorage.setItem("autocops_cookie_lang_" + location.hostname, lang);
            }
        } catch(e) {}

        // Fetch i18n bundle from backend proxy
        try {
            fetch("/api/v1/public/i18n/demo-secure-bank.onrender.com/" + lang)
                .then(r => r.json())
                .then(bundle => console.log("Loaded AutoCops i18n bundle for [" + lang + "]:", bundle))
                .catch(e => {});
        } catch(e) {}
    }

    // Set initial dropdown value & translate
    var selectEl = document.getElementById('ac-banner-lang');
    selectEl.value = currentLang;
    applyBannerTranslation(currentLang);

    // Handle Language Switch Event
    selectEl.addEventListener('change', function(e) {
        applyBannerTranslation(e.target.value);
    });

    function sendConsentPayload(accepted, rejected, method) {
        var activeLang = selectEl.value || "en";
        var payload = {
            categories_accepted: accepted,
            categories_rejected: rejected,
            consent_method: method,
            data_principal_id: vid,
            domain: "demo-secure-bank.onrender.com",
            geo_jurisdiction: "IN",
            language: activeLang,
            user_agent: navigator.userAgent,
            observed_cookies: ["_ac_visitor_id", "_ac_cookie_consent_saved", "autocops_cookie_lang_demo-secure-bank.onrender.com"]
        };

        try {
            fetch("/api/consent/cookies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).catch(function(err){ console.log("AutoCops consent logged."); });
        } catch(e){}

        localStorage.setItem(consentKey, "true");
        localStorage.setItem("_ac_accepted_categories", JSON.stringify(accepted));
        div.remove();
    }

    document.getElementById('ac-btn-accept-all').addEventListener('click', function() {
        sendConsentPayload(["STRICTLY_NECESSARY", "ANALYTICS", "FUNCTIONAL", "MARKETING"], [], "BANNER_ACCEPT_ALL");
    });

    document.getElementById('ac-btn-reject').addEventListener('click', function() {
        sendConsentPayload(["STRICTLY_NECESSARY"], ["ANALYTICS", "FUNCTIONAL", "MARKETING"], "BANNER_REJECT_OPTIONAL");
    });

    document.getElementById('ac-btn-customize').addEventListener('click', function() {
        document.getElementById('ac-custom-panel').style.display = 'flex';
        document.getElementById('ac-btn-customize').style.display = 'none';
        document.getElementById('ac-btn-save').style.display = 'inline-block';
    });

    document.getElementById('ac-btn-save').addEventListener('click', function() {
        var acc = ["STRICTLY_NECESSARY"];
        var rej = [];
        if (document.getElementById('ac-cat-analytics').checked) acc.push("ANALYTICS"); else rej.push("ANALYTICS");
        if (document.getElementById('ac-cat-functional').checked) acc.push("FUNCTIONAL"); else rej.push("FUNCTIONAL");
        if (document.getElementById('ac-cat-marketing').checked) acc.push("MARKETING"); else rej.push("MARKETING");
        sendConsentPayload(acc, rej, "BANNER_CUSTOMIZE_CONFIRMED");
    });
})();
