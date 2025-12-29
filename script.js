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

// Delegated handlers to ensure selection works across pages and dynamic content
document.addEventListener('click', function(e){
  var btn = e.target.closest && e.target.closest('.size-btn');
  if(btn){
    var sizesRow = btn.closest('.sizes');
    if(sizesRow){
      sizesRow.querySelectorAll('.size-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      // store selected size on product-card element for later use
      var card = btn.closest('.product-card');
      if(card) card.dataset.selectedSize = btn.textContent.trim();
    }
  }

  // handle product-card primary button (select options) to save product and go to product page
  var pbtn = e.target.closest && e.target.closest('.product-card .primary-btn');
  if(pbtn){
    var card = pbtn.closest('.product-card');
    if(card){
      var img = card.querySelector('.product-image img');
      var title = (card.querySelector('.product-title') || {}).textContent || '';
      var oldPrice = (card.querySelector('.old-price') || {}).textContent || '';
      var newPrice = (card.querySelector('.new-price') || {}).textContent || '';
      var sizes = Array.from(card.querySelectorAll('.sizes .size-btn')).map(function(b){ return b.textContent.trim(); });
      var selectedSize = card.dataset.selectedSize || '';
      var prod = {
        id: (card.dataset.productId || ('p_' + (title.replace(/\s+/g,'_').toLowerCase()))),
        title: title.trim(),
        image: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : '',
        oldPrice: oldPrice,
        newPrice: newPrice,
        sizes: sizes,
        description: '',
        selectedSize: selectedSize
      };
      try{ localStorage.setItem('selectedProduct', JSON.stringify(prod)); }catch(err){ console.error(err); }
      window.location.href = 'product.html';
      e.preventDefault();
    }
  }
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

// -------------------- Cart helpers --------------------
function getCart(){
  try{ return JSON.parse(localStorage.getItem('cart')||'[]'); }catch(e){ return []; }
}

function saveCart(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item){
  if(!item || !item.id) return;
  var cart = getCart();
  var existing = cart.find(function(ci){ return ci.id === item.id && ci.size === item.size; });
  if(existing){ existing.qty = (existing.qty || 0) + (item.qty || 1); }
  else { cart.push(Object.assign({}, item, { qty: item.qty || 1 })); }
  saveCart(cart);
}

function updateCartCount(){
  var cart = getCart();
  var count = cart.reduce(function(s,i){ return s + (i.qty||0); }, 0);
  var fab = document.querySelector('.cart-fab');
  if(!fab) return;
  var badge = fab.querySelector('.cart-badge');
  if(!badge){ badge = document.createElement('span'); badge.className = 'cart-badge'; badge.style.cssText = 'position:absolute;right:6px;top:6px;background:#ff2d2d;color:#fff;border-radius:999px;padding:2px 7px;font-size:12px;'; fab.appendChild(badge); }
  badge.textContent = count;
}

// Make cart FAB open cart page
document.addEventListener('DOMContentLoaded', function(){
  updateCartCount();
  var fab = document.querySelector('.cart-fab');
  if(fab){
    fab.addEventListener('click', function(){ window.location.href = 'cart.html'; });
  }
});