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

      var submitBtn = applyForm.querySelector('.submit-btn');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      // ── FORMSPREE ENDPOINT ──
      // 1. Go to https://formspree.io and create a free account
      // 2. Create a new form, copy your endpoint URL
      // 3. Replace YOUR_FORM_ID below with your actual ID (e.g. xpzvwqab)
      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(applyForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) {
        if (res.ok) {
          applyForm.style.display = 'none';
          document.getElementById('success-state').classList.add('visible');
          window.scrollTo({ top: document.getElementById('form-container').offsetTop - 100, behavior: 'smooth' });
        } else {
          submitBtn.textContent = 'Submit application';
          submitBtn.disabled = false;
          submitBtn.style.background = '#c0392b';
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Submit application';
        submitBtn.disabled = false;
        submitBtn.style.background = '#c0392b';
      });
    });
  }

});
