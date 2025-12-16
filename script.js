// mobile nav toggle
const headerInner = document.querySelector(".main-header__inner");
const toggleBtn = document.querySelector(".nav-toggle");

if (toggleBtn && headerInner) {
    toggleBtn.addEventListener("click", () => {
        headerInner.classList.toggle("nav-open");
    });
}

// simple dropdown for "Store"
const dropdownBtn = document.querySelector(".nav-dropdown__btn");
const dropdownMenu = document.querySelector(".nav-dropdown__menu");

if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
}

// size button active state
document.querySelectorAll(".product-card").forEach((card) => {
    const sizeButtons = card.querySelectorAll(".size-btn");
    sizeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            sizeButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});

// tabs just visual (no filtering yet)
document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    });
});


// login page scripts

// Password Toggle Functionality
function togglePassword() {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
}

// Toggle between Login and Register Forms (optional)
const toggleFormBtn = document.querySelector(".forgot-password a");
toggleFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const formContainer = document.querySelector(".auth-form-container");
    formContainer.classList.toggle("active");
});




// -------------------- Cookie helpers --------------------
function setCookie(name, value, days, options = {}) {
  const { path = '/', SameSite = 'Lax', secure = (location.protocol === 'https:') } = options;
  const maxAge = days ? `; Max-Age=${days * 24 * 60 * 60}` : '';
  const secureAttr = secure ? '; Secure' : '';
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${maxAge}; Path=${path}; SameSite=${SameSite}${secureAttr}`;
}

function getCookie(name) {
  const target = encodeURIComponent(name) + '=';
  const found = document.cookie.split(';').map(c => c.trim()).find(c => c.startsWith(target));
  return found ? decodeURIComponent(found.slice(target.length)) : null;
}

function eraseCookie(name, path = '/') {
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0`;
}

// Banner show/hide
function showCookieBannerIfNeeded() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.add('show'); // সবসময় দেখাও
  }
}


function bindCookieBannerEvents() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      // setCookie('cookie_consent', 'accepted', 180);
      banner.classList.remove('show');
    });
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      // setCookie('cookie_consent', 'declined', 180);
      banner.classList.remove('show');
    });
  }
}

// Optional API
window.CookieConsent = {
  reset() {
    eraseCookie('cookie_consent');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('show');
  },
  status() {
    return getCookie('cookie_consent');
  }
};
// -------------------- Init after DOM ready --------------------
function initCookieBanner() {
  bindCookieBannerEvents();
  showCookieBannerIfNeeded();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
  initCookieBanner();
}