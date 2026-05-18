# Élise Montague — Modeling Portfolio

A cinematic, scroll-animated modeling portfolio built with **React** + **Vite**.
Dark editorial aesthetic with gold accents, parallax effects, and IntersectionObserver animations.

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  ← React entry point
    ├── App.jsx                   ← Root component (assembles all sections)
    │
    ├── data/
    │   └── portfolioData.js      ← All content: photos, collabs, skills, works, stats
    │
    ├── hooks/
    │   └── usePortfolio.js       ← useInView · useCounter · useScrollY · useHeroLoad
    │
    ├── styles/
    │   └── globals.css           ← Animations, utility classes, global resets
    │
    └── components/
        ├── Navbar.jsx            ← Fixed nav, transparent → opaque on scroll
        ├── Hero.jsx              ← Full-screen parallax hero with staggered reveal
        ├── About.jsx             ← Split layout with floating badge
        ├── Stats.jsx             ← Animated counters (campaigns, publications, continents)
        ├── PhotoGallery.jsx      ← 3-column masonry grid with hover overlays
        ├── PhotoModal.jsx        ← Click-to-open lightbox modal
        ├── Skills.jsx            ← Animated progress bars
        ├── Collabs.jsx           ← Brand/magazine collaboration cards
        ├── Works.jsx             ← Project cards with hover slide-up info
        ├── Contact.jsx           ← Contact form with background image
        └── Footer.jsx            ← Simple footer with logo + agency
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ Customization

### Change model content
Edit **`src/data/portfolioData.js`** — all text, images, stats, skills, collabs, and works are defined there.

### Change colors
The gold accent color `#C8A96E` is used throughout. Do a global find-and-replace in `globals.css` and the component files to restyle with your brand color.

### Add/remove sections
Each section is a self-contained component. Import/remove them in `App.jsx`.

### Replace images
Swap out Unsplash URLs in `portfolioData.js` with your own hosted images.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary background | `#0a0a0a` |
| Surface | `#0d0d0d` / `#0e0e0e` |
| Gold accent | `#C8A96E` |
| Text primary | `#f5f0eb` |
| Text muted | `#888` / `#666` |
| Display font | Playfair Display (serif) |
| Body / UI font | Montserrat (sans-serif) |

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `vite` + `@vitejs/plugin-react` | Dev server & bundler |

No extra libraries needed — animations use pure CSS + IntersectionObserver.
