document.addEventListener("DOMContentLoaded", function() {
    var KEY = 'cookieConsent';
    var consent = localStorage.getItem(KEY);

    var bannerHtml = `
    <div id="cookie-consent" class="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent" hidden>
        <div class="cookie-consent__message">
            This site uses local storage to save your preferences. 
            <a class="cookie-link" href="https://oleksandrlypka.github.io/PrivacyPolicy.html">Privacy Policy</a>
        </div>
        <div class="cookie-consent__actions">
            <button id="decline-cookies" class="cookie-btn cookie-btn--decline" type="button">Decline</button>
            <button id="accept-cookies" class="cookie-btn cookie-btn--accept" type="button">Accept</button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', bannerHtml);

    var banner = document.getElementById('cookie-consent');
    var acceptBtn = document.getElementById('accept-cookies');
    var declineBtn = document.getElementById('decline-cookies');
    var changeLink = document.getElementById('change-cookie-settings');

    function hideBanner() { if (banner) banner.setAttribute('hidden', ''); }
    function showBanner() { if (banner) banner.removeAttribute('hidden'); }
    function onAccept() { localStorage.setItem(KEY, 'accepted'); hideBanner(); }
    function onDecline() { localStorage.setItem(KEY, 'declined'); hideBanner(); }

    if (acceptBtn) acceptBtn.addEventListener('click', onAccept);
    if (declineBtn) declineBtn.addEventListener('click', onDecline);
    if (changeLink) {
        changeLink.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem(KEY);
            showBanner();
        });
    }
    
    if (!consent) {
        setTimeout(showBanner, 300);
    }
});
