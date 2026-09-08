/* ==========================================================================
   نادي إدراك - main.js
   وظائف مشتركة عبر جميع الصفحات: القائمة، الأيقونات، نموذج التواصل بالواتساب
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // تفعيل أيقونات Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // -------------------- القائمة على الجوال --------------------
  var toggle = document.getElementById('mobileToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      var isOpen = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      var icon = toggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        var icon = toggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // -------------------- نموذج التواصل عبر الواتساب --------------------
  var WHATSAPP_NUMBER = '9647713303524';
  var contactForm = document.getElementById('quickContactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('contactName').value.trim();
      var phone = document.getElementById('contactPhone').value.trim();
      var msg = document.getElementById('contactMsg').value.trim();

      var text =
        'السلام عليكم، أنا ' + name + ' (' + phone + ').' +
        '\n\nرسالتي إلى نادي إدراك:\n' + msg;

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }

});
