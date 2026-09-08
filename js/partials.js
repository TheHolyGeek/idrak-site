/* ==========================================================================
   نادي إدراك - partials.js
   يحقن الشعار (SVG) داخل كل عنصر يحمل class="emblem"
   ويُفعّل رابط التنقل النشط بحسب الصفحة الحالية
   ========================================================================== */

(function () {
  var EMBLEM_SVG =
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="شعار نادي إدراك">' +
      '<circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1.5"/>' +
      '<circle cx="50" cy="50" r="40" fill="#0f1830"/>' +
      // العقل (أعلى)
      '<path d="M50 20 C42 20 36 26 36 33 C36 37 38 40 41 42 L41 46 L59 46 L59 42 C62 40 64 37 64 33 C64 26 58 20 50 20 Z" fill="#17c3cf" opacity="0.92"/>' +
      // السن (يسار سفلي)
      '<path d="M31 55 C31 51 34 49 37 49 C39 49 40 50 41 51 C42 50 43 49 45 49 C48 49 51 51 51 55 C51 60 47 70 44 74 C43 75 42 75 41.5 74 L40 68 L38.5 74 C38 75 37 75 36 74 C33 70 31 60 31 55 Z" fill="#d9a441" opacity="0.92" transform="translate(-6,0)"/>' +
      // الكتاب (يمين سفلي)
      '<g transform="translate(52,50)" opacity="0.92">' +
        '<path d="M0 4 C4 1 9 0 13 1 L13 20 C9 19 4 20 0 23 Z" fill="#5c7fb8"/>' +
        '<path d="M0 4 C-4 1 -9 0 -13 1 L-13 20 C-9 19 -4 20 0 23 Z" fill="#7c9cd4"/>' +
      '</g>' +
    '</svg>';

  function injectEmblems() {
    document.querySelectorAll('.emblem').forEach(function (el) {
      if (!el.querySelector('svg')) {
        el.innerHTML = EMBLEM_SVG;
      }
    });
  }

  function setActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = (link.getAttribute('href') || '').split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectEmblems();
    setActiveNav();
  });
})();
