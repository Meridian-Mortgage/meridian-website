# CLAUDE.md — Meridian Website

This file is the master instruction set for building and maintaining the Meridian website. Read this entire file before touching any code.

---

## Project overview

**Client:** Meridian  
**Tagline:** Built for Lending  
**Type:** Design & marketing firm for mortgage professionals  
**Founder:** Emmanuel Howard  
**Market:** North America, English only  
**Primary conversion:** Application form at `/apply`

---

## File structure

```
/
├── meridian-home.html
├── meridian-services.html
├── meridian-work.html
├── meridian-about.html
├── meridian-apply.html
├── Photo_professionnel_Emmanuel.jpg
├── CLAUDE.md                  ← this file
├── ANIMATIONS.md              ← animation specs
└── BRAND_GUIDELINES.docx      ← full visual spec
```

When moving to a framework (Next.js, Astro, etc.), maintain this page structure:
- `/` → Home
- `/services` → Services
- `/work` → Work (not linked in nav at launch — see Launch notes)
- `/about` → About
- `/apply` → Apply

---

## Brand identity — quick reference

### Colors (CSS variables — defined in every HTML file)

```css
--obsidian:    #0D0D0B   /* primary dark bg — hero, nav, footer */
--ink:         #141412   /* secondary dark bg */
--charcoal:    #3D3D34   /* dark borders */
--bone:        #D4C4A8   /* shared accent across both modes */
--cream:       #E8DDD0   /* dark mode headlines */
--amber:       #D4A853   /* primary accent, logo, eyebrows */
--parchment:   #FAF8F5   /* primary light bg */
--sand:        #EDE8E0   /* light cards, gaps */
--near-black:  #1A1612   /* light mode headlines */
--muted:       #6b5f50   /* light body text */
--faint:       #9a8f82   /* light secondary text */
--dark-muted:  #4a4a42   /* dark body text */
--dark-faint:  #333330   /* dark secondary text */
--dark-border: #1e1e18   /* dark mode borders */
--light-border:#EDE8E0   /* light mode borders */
```

### Fonts

```html
<!-- Always load both, in this order -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

- **Playfair Display 400** — all display headlines and pull quotes
- **DM Sans 300** — body copy
- **DM Sans 400** — nav links, labels
- **DM Sans 500** — buttons, eyebrow labels, UI elements

### Typography rules

| Element | Font | Size | Weight | Color (dark bg) | Color (light bg) |
|---|---|---|---|---|---|
| Hero H1 | Playfair Display | clamp(48px, 6vw, 80px) | 400 | `--cream` | `--near-black` |
| Section H2 | Playfair Display | clamp(28px, 3vw, 40px) | 400 | `--cream` | `--near-black` |
| Card title | Playfair Display | 20–24px | 400 | `--bone` | `--near-black` |
| Eyebrow | DM Sans | 10–11px | 500 | `--amber` | `--amber` |
| Body | DM Sans | 15–16px | 300 | `--dark-muted` | `--muted` |
| Small | DM Sans | 13px | 300 | `--dark-faint` | `--faint` |
| Nav links | DM Sans | 12px | 400 | `--dark-muted` | — |
| Buttons | DM Sans | 11–13px | 500 | — | — |

---

## Design rules — critical, do not break

### No rounded corners
The entire site uses **zero border-radius** on panels, cards, buttons, inputs, and containers.  
The only exception: `border-radius: 50%` on avatar/profile photo circles.

### No shadows
No `box-shadow` or `drop-shadow` on any element.

### No gradients on surfaces
The hero overlay gradient is functional (text legibility). No decorative gradients anywhere else.

### Backgrounds — only two
- **Obsidian** `#0D0D0B` — dark sections
- **Parchment** `#FAF8F5` — light sections  
Never introduce a third background color.

### Grid panels — use gap technique
Cards and step panels use a 1px hairline gap. Do this by setting:
```css
.grid-parent {
  display: grid;
  grid-template-columns: repeat(N, 1fr);
  gap: 1px;
  background: var(--light-border); /* or --dark-border */
}
.grid-child {
  background: var(--parchment); /* or --obsidian */
}
```
Never use borders or box-shadows on individual cards.

### Buttons
```css
/* Bone button — dark sections */
background: var(--bone); color: var(--obsidian);
padding: 15px 32px; font-size: 12px; font-weight: 500;
text-transform: uppercase; letter-spacing: 0.06em;

/* Dark button — light sections */
background: var(--near-black); color: var(--cream);
padding: 14px 32px;

/* Hover: lighten one step (bone → cream, near-black → charcoal) */
```

---

## Page-by-page notes

### Home (`meridian-home.html`)
- Hero uses a CSS grid texture as background placeholder. Replace `.hero-bg-image` background with a real image/video when available.
- The closing CTA headline is `[Your closing headline here.]` — update when finalized.
- Testimonials section uses placeholder copy — swap in real quotes when available.
- Emmanuel's photo is referenced as `Photo_professionnel_Emmanuel.jpg` — keep in same folder.

### Services (`meridian-services.html`)
- Hero uses oversized Playfair Display typography (Harvey.ai reference). Do not reduce the font size — it is intentionally large.
- System flow track: phases 1–3 (Brand, Web, SEO) are active. Phase 4 (Acquisition) is `opacity: 0.3` to signal coming soon.
- Branding visual shows a live color palette mockup using real Meridian colors.

### Work (`meridian-work.html`)
- This is State B (live portfolio). It is **not linked in the nav at launch**.
- At launch, the nav "Work" link should point to `/#services` (the services section on the home page) with `id="services"` added to that section.
- Add `id="services"` to the services section in `meridian-home.html`.
- When first client sites are ready, update the nav href back to `/work`.
- Replace all placeholder content (featured case, case grid) with real client data.

### About (`meridian-about.html`)
- Hero is a split layout: photo left, text right. Emmanuel's photo fills the entire left column.
- The story nav (left sidebar) uses scroll-based IntersectionObserver to highlight the active section. Do not remove this JS.
- The founder signature section uses Emmanuel's photo again — same file reference.
- Voice: use "we" and "our" throughout. Only About page may reference Emmanuel by name.

### Apply (`meridian-apply.html`)
- Form submits to a placeholder endpoint. Wire up to Formspree, Netlify Forms, or a custom endpoint.
- Replace the `// TODO: Replace with actual form submission` comment with the real fetch call.
- The form has client-side validation — required fields turn red `#c0392b` on submit if empty.
- On successful submit, the form hides and a success state shows. Test this before launch.
- Sidebar is `position: sticky; top: 80px` — stays visible as the user scrolls the form.

---

## Animations

See `ANIMATIONS.md` for full animation specifications.

**Summary:**
- Page load: hero content fades up in sequence (eyebrow → H1 → subhead → CTA)
- Scroll: `.reveal` elements fade up 28px as they enter the viewport
- Hover: subtle background shifts on panels (parchment → white), color transitions on links
- No layout shifts. No heavy JS animation libraries. CSS-first.

---

## Launch checklist

- [ ] Replace hero background image placeholder with real image or video
- [ ] Add `id="services"` to the services section in `meridian-home.html`
- [ ] Change Work nav link to `/#services` in all files
- [ ] Wire up apply form to submission endpoint
- [ ] Replace `[Your closing headline here.]` in home and other pages
- [ ] Swap in real testimonial quotes when available
- [ ] Set correct `<meta>` description on each page
- [ ] Add favicon (use the Meridian logomark SVG at 32×32)
- [ ] Test form validation and success state
- [ ] Test responsive layout at 375px, 768px, 1024px, 1440px
- [ ] Confirm Google Fonts loads correctly (check Network tab)
- [ ] Check all internal links (`/services`, `/work`, `/about`, `/apply`)

---

## What NOT to do

- Do not add border-radius to any panels, cards, or buttons (avatars excepted)
- Do not add box-shadows
- Do not add a third background color
- Do not use Inter, Roboto, Arial, or system fonts
- Do not change the CSS variable names — they are consistent across all 5 files
- Do not add rounded corners to form inputs
- Do not make the hero headline smaller — the oversized type is intentional
- Do not use "I" in copy unless specifically on About page for a direct founder quote
- Do not refer to all clients as "mortgage brokers" — use "mortgage professionals" or "lenders"
- Do not add pricing anywhere on the site
- Do not link to the Work page in nav at launch (use scroll anchor instead)
