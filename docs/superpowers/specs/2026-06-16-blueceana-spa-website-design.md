# Blueceana Spa — Website Design Spec

**Date:** 2026-06-16
**Status:** Approved (user said "go")

## Goal
A professional, calming marketing website for Blueceana Spa (Cabuyao, Laguna) with a
light-blue "ocean" theme, smooth animations, and an easy-to-extend codebase.

## Business Details
- **Name:** Blueceana Spa
- **Address:** 228 JP Rizal Street, Brgy. Uno, Cabuyao, Laguna, Philippines
- **Contacts:** 0949 585 4130 · 0926 491 3689
- **Promo:** ₱199 Promo Time — 1:00 PM to 5:00 PM (loyalty card holders only)
- **Tagline:** Reservation & Home Services
- **Map:** Google Maps place (lat 14.2789991, lng 121.1227396)
- **Services:** Body Massage · Foot Spa & Reflexology · Body Scrub / Sauna

## Tech Stack
- **Build:** Vite
- **UI:** React 18 + React Router (multi-page)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveal, entrance, hover micro-interactions)
- **Decorative motion:** Animated SVG ocean waves + lightweight CSS bubble particles

## Theme (Light-Blue Ocean)
- Primary light blue `#5BB8E8`, deep ocean `#0E7CB0`, navy text `#0B3A53`
- Accents: white, soft cream/sand `#FAF7F0`
- Generous whitespace, rounded cards, soft shadows, calm spa feel.

## Pages (multi-page with shared Navbar + Footer)
1. **Home** — hero w/ animated waves + bubbles, intro blurb, featured services,
   ₱199 promo banner, testimonials, CTA to contact.
2. **Services** — detailed cards for the 3 services + Home Service note + booking CTA.
3. **About** — story, "why choose us" pillars, calming imagery.
4. **Contact** — phone numbers, address, embedded Google Map, hours, promo, CTA buttons
   (call / Facebook message).

## Component Structure
- `src/components/` — Navbar, Footer, Layout, WaveDivider, Bubbles, SectionReveal,
  ServiceCard, PromoBanner, Button.
- `src/pages/` — Home, Services, About, Contact.
- `src/data/` — services.js, business.js (single source of truth for contact info etc.).
- Centralized business data → easy to update phone/address/promo in one place.

## Images
Professional spa placeholder photos (Unsplash) wired through a config so the owner can
swap in real photos later without code changes.

## Non-Goals (YAGNI)
- No backend / online payment / live booking system (CTA links to phone + Facebook).
- No CMS. Content edited in `src/data/`.
- Heavy WebGL 3D avoided for mobile performance; motion via SVG + Framer Motion.

## Success Criteria
- `npm run build` succeeds; `npm run dev` serves the site.
- All 4 pages render with navigation, responsive on mobile + desktop.
- Light-blue theme consistent; animations smooth; contact details accurate.
