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

    // 2. Language Auto-Detection
    try {
        var rawLang = (navigator.language || navigator.userLanguage || "en");
        var langCode = rawLang.split("-")[0].toLowerCase();
        var domainKey = "autocops_cookie_lang_demo-secure-bank.onrender.com";
        if (!localStorage.getItem(domainKey)) {
            localStorage.setItem(domainKey, langCode);
        }
        if (location.hostname) {
            localStorage.setItem("autocops_cookie_lang_" + location.hostname, langCode);
        }
    } catch (e) {}

    var vid = visitorId();

    // 3. Render Banner if preferences not set
    var consentKey = "_ac_cookie_consent_saved";
    if (localStorage.getItem(consentKey)) return;

    var style = document.createElement('style');
    style.innerHTML = `
        .ac-banner-overlay { position: fixed; bottom: 20px; left: 20px; right: 20px; max-width: 800px; margin: 0 auto; z-index: 9999; background: #0F172A; color: #F8FAFC; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); font-family: 'Inter', sans-serif; }
        .ac-banner-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .ac-banner-title { font-size: 16px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; gap: 8px; }
        .ac-banner-desc { font-size: 13px; color: #94A3B8; line-height: 1.5; margin-bottom: 16px; }
        .ac-custom-panel { display: flex; flex-wrap: wrap; gap: 10px; margin: 16px 0; width: 100%; }
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
    `;
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.className = 'ac-banner-overlay';
    div.innerHTML = `
        <div class="ac-banner-header">
            <div class="ac-banner-title">
                <span class="material-symbols-outlined" style="color:#10B981;">cookie</span>
                AutoCOPS DPDP Privacy & Cookie Preferences
            </div>
            <a href="privacy.html" style="color:#10B981; font-size:12px; text-decoration:underline;">Privacy Policy</a>
        </div>
        <div class="ac-banner-desc">
            Secure Bank uses essential cookies and data categories under DPDP Act 2023 to provide secure banking, analytics, and personalized features.
        </div>
        <div class="ac-custom-panel">
            <label class="ac-card-label">
                <input type="checkbox" checked disabled id="ac-cat-essential"> Essential (Required)
            </label>
            <label class="ac-card-label">
                <input type="checkbox" checked id="ac-cat-analytics"> Analytics
            </label>
            <label class="ac-card-label">
                <input type="checkbox" checked id="ac-cat-functional"> Functional
            </label>
            <label class="ac-card-label">
                <input type="checkbox" checked id="ac-cat-marketing"> Marketing
            </label>
        </div>
        <div class="ac-actions">
            <button class="ac-btn ac-btn-reject" id="ac-btn-reject">Reject Optional</button>
            <button class="ac-btn ac-btn-accept" id="ac-btn-save">Save Selected</button>
            <button class="ac-btn ac-btn-accept" style="background:#FFFFFF; color:#0F172A;" id="ac-btn-accept-all">Accept All</button>
        </div>
    `;
    document.body.appendChild(div);

    function sendConsentPayload(accepted, rejected, method) {
        var payload = {
            categories_accepted: accepted,
            categories_rejected: rejected,
            consent_method: method,
            data_principal_id: vid,
            domain: "demo-secure-bank.onrender.com",
            geo_jurisdiction: "IN",
            user_agent: navigator.userAgent,
            observed_cookies: ["_ac_visitor_id", "_ac_cookie_consent_saved", "autocops_cookie_lang_demo-secure-bank.onrender.com"]
        };

        try {
            fetch("https://app.autocops.org/v1/cookies/consents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": "dpdp_3d2343b3674c92594b5c96e762becd169777be399e877eef"
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

    document.getElementById('ac-btn-save').addEventListener('click', function() {
        var acc = ["STRICTLY_NECESSARY"];
        var rej = [];
        if (document.getElementById('ac-cat-analytics').checked) acc.push("ANALYTICS"); else rej.push("ANALYTICS");
        if (document.getElementById('ac-cat-functional').checked) acc.push("FUNCTIONAL"); else rej.push("FUNCTIONAL");
        if (document.getElementById('ac-cat-marketing').checked) acc.push("MARKETING"); else rej.push("MARKETING");
        sendConsentPayload(acc, rej, "BANNER_CUSTOMIZE_CONFIRMED");
    });
})();
