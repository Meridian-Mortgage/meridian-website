# ANIMATIONS.md — Meridian

Animation specification for the Meridian website. All animations are CSS-first. No animation libraries are used or needed. The goal is **subtle, confident, premium** — not flashy.

---

## Philosophy

- Animations should feel like the page is breathing, not performing
- Every animation has a purpose: guide attention, confirm interaction, or reward scroll
- Nothing moves unless the user causes it (scroll, hover) or it is part of the initial page load
- Duration sweet spot: 0.6–0.9s for reveals, 0.15–0.25s for hovers
- Easing: `ease` for reveals, `ease-out` for page load, linear for infinite loops only
- Never animate layout properties (width, height, top, left) — only opacity and transform

---

## 1. Page load animations (hero section only)

These fire automatically when the page loads. Only the hero section animates on load. Everything else is scroll-triggered.

### Keyframe definition (already in all HTML files)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### Hero sequence — staggered load

Each element starts at `opacity: 0` and animates in sequence:

```css
/* Eyebrow label — first */
.hero-eyebrow {
  opacity: 0;
  animation: fadeUp 0.8s ease 0.2s forwards;
}

/* H1 headline */
.hero-h1 {
  opacity: 0;
  animation: fadeUp 0.9s ease 0.35s forwards;
}

/* Subhead body text */
.hero-sub {
  opacity: 0;
  animation: fadeUp 0.9s ease 0.5s forwards;
}

/* CTA buttons */
.hero-actions {
  opacity: 0;
  animation: fadeUp 0.9s ease 0.65s forwards;
}

/* Scroll indicator */
.hero-scroll {
  opacity: 0;
  animation: fadeIn 1s ease 1.2s forwards;
}

/* Right-column elements (Work page hero, About hero) */
.hero-right {
  opacity: 0;
  animation: fadeIn 1s ease 0.6s forwards;
}
```

### Timing sequence summary

| Element | Delay | Duration | Effect |
|---|---|---|---|
| Eyebrow | 0.2s | 0.8s | fadeUp 24px |
| H1 | 0.35s | 0.9s | fadeUp 24px |
| Subhead | 0.5s | 0.9s | fadeUp 24px |
| CTA | 0.65s | 0.9s | fadeUp 24px |
| Scroll indicator | 1.2s | 1.0s | fadeIn only |
| Hero right col | 0.6s | 1.0s | fadeIn only |

---

## 2. Scroll reveal animations

Elements below the fold animate in as they enter the viewport. This uses `IntersectionObserver` — already implemented in all HTML files.

### CSS classes

```css
/* Base state — invisible, shifted down */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

/* Triggered state — JS adds this class */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for sibling elements */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
```

### JavaScript (already in all HTML files)

```javascript
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fire once, never reverse
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
```

### Where `.reveal` is applied

**Home page:**
- Statement section: left col (`.reveal`), right col (`.reveal.reveal-delay-1`)
- System steps: each step gets `.reveal`, `.reveal.reveal-delay-1`, `.reveal.reveal-delay-2`
- Services cards: same stagger pattern
- About section: text col (`.reveal`), photo col (`.reveal.reveal-delay-1`)
- Testimonials: featured quote (`.reveal`), grid items staggered

**Services page:**
- Web intro: two columns staggered
- Web grid items: parent gets `.reveal`
- Process track: parent gets `.reveal`
- Branding visual (`.reveal`), branding text (`.reveal.reveal-delay-1`)
- Coming soon box: `.reveal`

**Work page:**
- Featured case: `.reveal`
- Each case card: `.reveal`, `.reveal.reveal-delay-1`

**About page:**
- Mission block: `.reveal`
- Story content: `.reveal.reveal-delay-1`
- Each value item: staggered
- Process list: parent `.reveal`
- Founder sig: `.reveal`

**Apply page:**
- Form wrap: `.reveal`
- Sidebar: `.reveal.reveal-delay-1`
- Each "what happens next" step: staggered

---

## 3. Hover animations

All hover states use CSS transitions only — no JavaScript.

### Nav links

```css
.nav-links a {
  color: var(--dark-muted);
  transition: color 0.2s ease;
}
.nav-links a:hover {
  color: var(--bone);
}
```

### CTA button (nav)

```css
.nav-cta {
  transition: opacity 0.2s ease;
}
.nav-cta:hover {
  opacity: 0.88;
}
```

### Primary buttons

```css
.btn-bone {
  background: var(--bone);
  transition: background 0.2s ease;
}
.btn-bone:hover {
  background: var(--cream);
}

.btn-dark {
  background: var(--near-black);
  transition: background 0.2s ease;
}
.btn-dark:hover {
  background: var(--charcoal);
}
```

### Ghost / text links

```css
.btn-ghost {
  color: var(--dark-faint);
  border-bottom: 1px solid var(--charcoal);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.btn-ghost:hover {
  color: var(--bone);
  border-color: var(--bone);
}
```

### Panel / card hover (parchment → white)

```css
.step,
.svc-card,
.web-item,
.process-step,
.value-item,
.process-row,
.case-card {
  transition: background 0.2s ease;
}
/* Dark bg panels → ink on hover */
.flow-node {
  transition: background 0.2s ease;
}
.flow-node:hover {
  background: var(--ink);
}
/* Light bg panels → white on hover */
.step:hover,
.svc-card:hover,
.web-item:hover {
  background: #ffffff;
}
```

### Underline links

```css
.svc-link,
.case-link,
.about-link {
  border-bottom: 1px solid var(--bone);
  transition: border-color 0.2s ease;
}
.svc-link:hover,
.case-link:hover,
.about-link:hover {
  border-color: var(--near-black);
}
```

### Form inputs (focus state)

```css
.form-input,
.form-textarea,
.form-select {
  transition: border-color 0.2s ease;
}
.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  border-color: var(--amber); /* all four sides */
  outline: none;
}
```

---

## 4. Scroll indicator animation (hero)

The vertical scroll line on the hero pulses subtly:

```css
.hero-scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, var(--charcoal));
  /* Optional: animate the gradient mask for a "scanning" effect */
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%   { opacity: 0.4; transform: scaleY(0.7); transform-origin: top; }
  50%  { opacity: 1;   transform: scaleY(1);   transform-origin: top; }
  100% { opacity: 0.4; transform: scaleY(0.7); transform-origin: top; }
}
```

---

## 5. Story nav scroll (About page only)

The left-side story navigation highlights the active section as the user scrolls:

```javascript
// Already implemented in meridian-about.html
const sections = document.querySelectorAll('#the-story, #the-gap, #why-lending');
const navItems = document.querySelectorAll('.story-nav-item');
const storyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.remove('active'));
      const active = document.querySelector(`.story-nav-item[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => storyObserver.observe(s));
```

CSS for the active state:

```css
.story-nav-item {
  border-left: 2px solid transparent;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.story-nav-item.active {
  color: var(--near-black);
  border-left-color: var(--amber);
  background: #ffffff;
}
```

---

## 6. Form validation feedback (Apply page only)

Invalid fields get a red border on attempted submit:

```javascript
// Already implemented in meridian-apply.html
required.forEach(field => {
  if (!field.value.trim()) {
    field.style.borderColor = '#c0392b';
    valid = false;
  } else {
    field.style.borderColor = '';
  }
});
```

On success, the form fades out and the success state fades in:

```javascript
form.style.display = 'none';
document.getElementById('success-state').classList.add('visible');
```

```css
.success-state {
  display: none;
}
.success-state.visible {
  display: block;
  animation: fadeUp 0.7s ease forwards;
}
```

---

## 7. Animations to add when framework is set up

These are enhancement animations not yet in the HTML files. Add them when migrating to Next.js or Astro:

### Nav scroll behavior
```javascript
// Add scrolled class to nav when user scrolls past 60px
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 60);
});
```
```css
nav { transition: border-color 0.3s ease; }
nav.scrolled { border-bottom-color: rgba(255,255,255,0.08); }
```

### Hero background parallax (subtle)
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBg = document.querySelector('.hero-bg-image');
  if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
```
Only implement if a real background image is in place. Skip for the placeholder.

### Stat number count-up (Home page statement section)
When the stats section enters the viewport, animate the numbers counting up:
```javascript
function countUp(el, target, duration = 1200) {
  const start = 0;
  const startTime = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
// Trigger when .stats-grid enters viewport
```
Note: The "3 sec", "94%", "$0", and "1" stats need special handling since they aren't all pure numbers.

### Smooth page transitions
If using Next.js, wrap page content in a motion.div with:
```javascript
// Using Framer Motion
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.3 } }
};
```

---

## 8. What NOT to animate

- Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` — use `transform` instead
- Never use animation on the nav logo or the Meridian wordmark
- Never use bounce, elastic, or spring easing on reveals — `ease` only
- Never auto-play video or looping animations without a `prefers-reduced-motion` check
- Never animate the color palette swatches on the Services/Branding section
- Never use `animation-iteration-count: infinite` except on the scroll indicator

### Reduced motion respect (add to all files)

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .hero-eyebrow,
  .hero-h1,
  .hero-sub,
  .hero-actions,
  .hero-scroll,
  .hero-right {
    opacity: 1;
    animation: none;
  }
  .hero-scroll-line {
    animation: none;
  }
}
```

Add this block to the `<style>` section of every HTML file.
