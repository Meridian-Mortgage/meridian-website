document.addEventListener('DOMContentLoaded', function () {

  // ── SCROLL REVEAL (all pages) ──
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  // ── ABOUT PAGE — story nav scroll sync ──
  var storyNavItems = document.querySelectorAll('.story-nav-item');
  if (storyNavItems.length) {
    var storySections = document.querySelectorAll('#the-story, #the-gap, #why-lending');
    var storyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          storyNavItems.forEach(function (item) { item.classList.remove('active'); });
          var active = document.querySelector('.story-nav-item[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    storySections.forEach(function (s) { storyObserver.observe(s); });
  }

  // ── APPLY PAGE — form validation ──
  var applyForm = document.getElementById('apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = applyForm.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#c0392b';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;
      applyForm.style.display = 'none';
      document.getElementById('success-state').classList.add('visible');
      window.scrollTo({ top: document.getElementById('form-container').offsetTop - 100, behavior: 'smooth' });
      // TODO: Replace with actual form submission endpoint (Formspree, Netlify Forms, etc.)
      // fetch('/api/apply', { method: 'POST', body: new FormData(applyForm) });
    });
  }

});
