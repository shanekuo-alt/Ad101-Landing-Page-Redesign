# Ad101 Landing Page Redesign — Developer Handoff

**Repo:** https://github.com/shanekuo-alt/Ad101-Landing-Page-Redesign

**Date:** March 1, 2026
**From:** Shane
**To:** Jackie

---

## Quick Start

```bash
git clone https://github.com/shanekuo-alt/Ad101-Landing-Page-Redesign.git
cd Ad101-Landing-Page-Redesign
npm install
npm run dev        # → localhost:3000
```

**Node version used:** v24.13.0
**Build command:** `npm run build` (zero-config Next.js — Vercel auto-detects)

---

## Tech Stack

| Layer       | Tool                          | Version  |
|-------------|-------------------------------|----------|
| Framework   | Next.js (App Router)          | 16.1.6   |
| UI          | React                         | 19.2.3   |
| Styling     | Tailwind CSS                  | 4        |
| Animation   | Framer Motion + GSAP          | 12.x / 3.14 |
| Scroll      | Lenis (smooth scroll)         | 1.3.17   |
| Icons       | Lucide React                  | 0.575    |
| Language    | TypeScript (strict)           | 5.x      |

---

## Project Structure

```
ad101-landing/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Tailwind @theme tokens, base styles
├── components/
│   ├── Navbar.tsx           # Fixed nav, scroll-triggered glassmorphism
│   ├── HeroSection.tsx      # Split hero with typewriter + dual CTAs
│   ├── FunnelSection.tsx    # 6 interactive cards, Zansei hover images, tilt
│   ├── HeroFunnelWrapper.tsx# Layout wrapper for Hero + Funnel
│   ├── HowItWorks.tsx      # 3-step process
│   ├── WhatYoullGet.tsx    # Strategy plan breakdown + comparison tables
│   ├── WhoIsZan.tsx        # Founder bio, pull quote, stats
│   ├── Testimonials.tsx    # Social proof section
│   ├── FAQ.tsx             # Accordion Q&A
│   ├── Footer.tsx          # Dark footer
│   ├── SmoothScroll.tsx    # Lenis + GSAP ScrollTrigger sync wrapper
│   ├── CurveDivider.tsx    # Reusable curved SVG section transitions
│   ├── FolderDivider.tsx   # Alternate divider variant
│   └── ui/
│       ├── button.tsx               # CVA-based button component
│       ├── typewriter-text.tsx      # Typewriter animation (hero)
│       ├── testimonials-columns-1.tsx # Testimonial layout
│       └── background-paths.tsx     # Decorative SVG background
├── lib/
│   ├── animations.ts       # GSAP ScrollTrigger utilities (scroll reveal, stagger)
│   └── utils.ts            # Class name helpers (clsx + tailwind-merge)
└── public/
    ├── ad101-logo.png
    ├── icon.png
    ├── hero-bg.png, hero-top-bg.png, hero-bottom-bg.png
    ├── plan-page-1.png, plan-page-2.png, plan-page-3.png
    └── zansei/             # 7 PNGs — AI advisor character hover states
        ├── Zansei_Hoverv2_Base.png
        ├── Zansei_Hoverv2_Left.png
        ├── Zansei_Hoverv2_Right.png
        ├── Zansei_Hoverv2_UpperLeft.png
        ├── Zansei_Hoverv2_UpperRight.png
        ├── Zansei_Hoverv2_LowerLeft.png
        └── Zansei_Hoverv2_LowerRight.png
```

---

## Design System

### Color Tokens (defined in `globals.css` via `@theme inline`)

| Token              | Hex       | Usage                                   |
|--------------------|-----------|-----------------------------------------|
| `base`             | `#F5F5F5` | Page background                         |
| `surface`          | `#FFFFFF` | Cards, content containers               |
| `section`          | `#EBEBEB` | Section background alternate            |
| `dark-primary`     | `#1E2024` | Footer, dark sections                   |
| `dark-text`        | `#2F2F2F` | Body copy                               |
| `green-highlight`  | `#4A7C52` | Tags, badges, accents                   |
| `gold-cta`         | `#C8A650` | Buttons, CTAs, text selection highlight |
| `sage-light`       | `#8FA88E` | Secondary accents, hover states         |

### Section Backgrounds (alternating pattern)

The page alternates between two background colors, connected by `CurveDivider` components:

| Section        | Background |
|----------------|------------|
| Hero + Funnel  | `#FEF1E5` (warm peach) |
| How It Works   | `#FAFAFA` (cool near-white) |
| What You'll Get| `#FEF1E5` |
| Who Is Zan     | `#FAFAFA` |
| Testimonials   | `#FAFAFA` |
| FAQ            | `#FEF1E5` |
| Footer         | `#1E2024` (dark) |

The `CurveDivider` handles transitions between these. It takes `fill` (color above), `bg` (color below), and optional `flip`/`overlap` props.

### Typography

| Role    | Font            | CSS Variable             | Weights      |
|---------|-----------------|--------------------------|--------------|
| Display | Source Serif 4  | `--font-source-serif-4`  | 400–700      |
| Body    | DM Sans         | `--font-dm-sans`         | 400–700      |

Loaded via `next/font/google` in `layout.tsx`. Use Tailwind classes `font-display` and `font-body`.

---

## Animation Architecture

Two animation systems are used together:

1. **Framer Motion** — Component-level entrance animations (fade-ups, reveals). Used inline in components via `motion.div` with `whileInView`.

2. **GSAP + ScrollTrigger** — Scroll-linked animations and stagger effects. Shared utilities in `lib/animations.ts`:
   - `createScrollReveal()` — Fade-in + translate-up on viewport entry
   - `createStaggerReveal()` — Sequential reveal for groups of elements

3. **Lenis** — Smooth scroll wrapper in `SmoothScroll.tsx`. Synced with GSAP's ticker so ScrollTrigger works correctly with the smooth scroll position.

### Reduced Motion

`globals.css` includes a `prefers-reduced-motion` media query that kills all animations/transitions for accessibility.

---

## Things To Know

- **Path alias:** `@/*` maps to the project root (configured in `tsconfig.json`).
- **No API routes or server actions** — this is a purely static marketing page.
- **`copy-review.md`** in the project root has the full approved copy for all sections. Reference this for any copy questions.
- **Image optimization:** All images use Next.js `<Image>` component. No external image domains are configured in `next.config.ts` — everything is local in `/public`.
- **Zansei hover images:** The funnel section swaps between 7 Zansei character PNGs based on which card the user hovers. The images are directional (Left, Right, UpperLeft, etc.).

---

## Build & Deploy

```bash
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # ESLint check
```

Vercel deployment will be connected separately — zero-config, auto-detects Next.js.
