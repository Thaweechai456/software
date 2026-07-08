# ?? Tech Stack — ??????????????? ???????? 2026
### Udon Thani International Horticultural Expo 2026 — Educational Project Website

---

## ?? Core Technologies

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Structure** | HTML5 | Semantic markup, `lang="th"` default, ARIA labels |
| **Styling** | Vanilla CSS3 | Custom properties, glassmorphism, animations |
| **Logic** | Vanilla JavaScript (ES6+) | No frameworks or build tools required |

---

## ?? Styling & Design System

### CSS Architecture
- **Methodology**: Custom Properties (CSS Variables) design token system defined in `:root`
- **Layout**: CSS Grid & Flexbox
- **Approach**: Vanilla CSS — no preprocessors (Sass/Less), no utility frameworks (Tailwind)

### Design Tokens (`style.css`)
```css
/* Color Palette */
--color-primary:       #0d7c3d   /* Forest Green */
--color-primary-dark:  #065a2b
--color-primary-light: #3ca86a
--color-accent:        #c9a43e   /* Gold */
--color-accent-light:  #e8cc73
--color-dark:          #0a1628   /* Deep Navy */

/* Gradients */
--gradient-primary    /* Green diagonal */
--gradient-dark       /* Dark navy vertical */
--gradient-accent     /* Gold diagonal */
--gradient-hero       /* Hero overlay fade */
--gradient-glass      /* Glassmorphism overlay */
```

### Visual Effects
- **Glassmorphism** — `backdrop-filter: blur()` on navbar, countdown items, info cards
- **Parallax** — Hero image scrolls at 0.4× speed via `transform: translateY()`
- **3D Card Tilt** — `perspective(1000px) rotateX/Y` on hover for highlight & attraction cards
- **Particle System** — Dynamically generated mist, glow & droplet particles floating upward
- **Scroll Progress Bar** — Fixed top bar that fills based on scroll percentage
- **Scroll Reveal** — `IntersectionObserver`-based fade-in with staggered delay classes

---

## ??? Typography

Loaded from **Google Fonts** via `<link>` preconnect:

| Font | Weights | Usage |
|------|---------|-------|
| **Inter** | 300–900 | Primary Latin / UI font |
| **Noto Sans Thai** | 300–800 | Thai language text |
| **Noto Sans SC** | 300–800 | Simplified Chinese text |

Font stack fallback: `system-ui, sans-serif`

---

## ?? Internationalisation (i18n)

- **Languages supported**: Thai ???? (`th`), English ???? (`en`), Simplified Chinese ???? (`zh`)
- **Implementation**: Data attributes on HTML elements (`data-th`, `data-en`, `data-zh`)
- **Language persistence**: `localStorage` key `expo-lang`
- **HTML `lang` attribute**: Dynamically updated on switch (`th` / `en` / `zh-CN`)
- **Transition**: Subtle `opacity` fade (0.2 s) on language change

---

## ?? JavaScript Modules (`script.js`)

All modules are plain ES6 object literals, initialised on `DOMContentLoaded`.

| Module | Purpose |
|--------|---------|
| `LanguageManager` | i18n switcher — reads/writes `localStorage`, updates DOM |
| `CountdownTimer` | Live countdown to `2026-11-01T00:00:00+07:00` using `setInterval` |
| `Navigation` | Sticky navbar scroll effect, mobile hamburger menu, active link tracking |
| `StatsCounter` | Animated number count-up using `requestAnimationFrame` + ease-out cubic easing |
| `ParticleEffect` | Procedurally generates 20–45 CSS-animated particles (mist / glow / droplet) |
| `ScrollReveal` | `IntersectionObserver` scroll-triggered `.reveal` ? `.visible` transitions |
| `ScrollToTop` | Floating back-to-top button, visible after 500 px scroll |
| `AdvancedEffects` | Progress bar, hero parallax, 3D card tilt on `mousemove` |

---

## ?? External Dependencies

| Resource | Type | Provider | URL |
|----------|------|----------|-----|
| Google Fonts | CDN CSS | Google | `fonts.googleapis.com` |
| Google Maps Embed | iframe | Google Maps | `maps.google.com` |

> **No npm packages, no build step, no bundler.** The project runs directly in a browser as static files.

---

## ??? Project Structure

```
d:\software\
+-- index.html        # Single-page application shell (479 lines)
+-- style.css         # Full design system & component styles (1,530 lines)
+-- script.js         # All JS modules (362 lines)
+-- images/           # Static image assets
¦   +-- hero-banner.png
¦   +-- about-section.png     # Expo master plan map
¦   +-- agri-innovation.png
¦   +-- highlights.png
¦   +-- cultural-performance.png
¦   +-- local-cuisine.png
¦   +-- red-lotus.png
¦   +-- ban-chiang.png
¦   +-- nong-prajak.png
+-- techstax.md       # This document
+-- .github/          # GitHub workflows / config
+-- .gitattributes
```

---

## ??? Browser APIs Used

| API | Usage |
|-----|-------|
| `localStorage` | Language preference persistence |
| `IntersectionObserver` | Scroll reveal & stats counter trigger |
| `requestAnimationFrame` | Smooth counter animation |
| `setInterval` | Countdown timer (1-second tick) |
| `CSS Custom Properties` | Design token system |
| `backdrop-filter` | Glassmorphism effects |
| CSS `@keyframes` | Hero zoom, particle float, mist drift, blink |

---

## ?? Responsive Design

- **Breakpoints**: `max-width: 991px` (tablet), `max-width: 768px` (mobile)
- **Mobile Nav**: Hamburger toggle with slide-in menu and body scroll lock
- **Particle count**: Reduced to 20 on mobile (`window.innerWidth < 768`), 45 on desktop
- **Typography**: `clamp()` for fluid font sizes (e.g., hero title scales `28px ? 80px`)
- **Grid**: `repeat(auto-fit, minmax(...))` for self-adjusting card grids

---

## ?? Performance & Accessibility

- Images use `loading="lazy"` (deferred loading for below-the-fold images)
- Hero background image uses CSS `object-fit: cover`
- `<meta name="viewport">` set for proper mobile scaling
- ARIA labels on interactive icon-only buttons (social links, mobile toggle)
- `scroll-behavior: smooth` + `scroll-padding-top: 80px` for anchor navigation offset
- Google Fonts loaded with `rel="preconnect"` for faster DNS resolution

---

## ?? Project Context

| Field | Detail |
|-------|--------|
| **Project type** | Educational / Academic website |
| **Subject** | Udon Thani International Horticultural Expo 2026 (??????????????? ???????? 2569) |
| **Expo theme** | *Diversity of Life — Taste for Greens, Living in Harmony* |
| **Expo dates** | 1 November 2026 – 14 March 2027 (135 days) |
| **Venue** | Nong Daeng Wetland (??????), Udon Thani, Thailand |
| **Certification** | AIPH A1-level exposition (highest tier) |
| **Reference site** | udonthaniexpo2026.com |
| **Commercial intent** | None — educational purposes only |
