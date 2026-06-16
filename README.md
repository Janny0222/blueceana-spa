# Blueceana Spa — Website

Professional marketing website for **Blueceana Spa** (Cabuyao, Laguna).
Built with **React + Vite + Tailwind CSS + Framer Motion**.

## Running locally

```bash
npm install      # first time only
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # build for production (outputs to /dist)
npm run preview  # preview the production build
```

## How to update content (no deep coding needed)

All business info and content live in **`src/data/`** — edit these and the whole
site updates automatically:

| What to change | File |
| --- | --- |
| Phone numbers, address, hours, promo, Facebook link, map | `src/data/business.js` |
| Services (name, description, tags, photo) + "Why choose us" | `src/data/services.js` |

### Swapping in real photos
Each service has an `image:` URL in `src/data/services.js`. Replace the Unsplash
links with your own photo URLs (or drop images into the `public/` folder and use
`/your-photo.jpg`). The hero and About photos are set in `src/pages/Home.jsx` and
`src/pages/About.jsx`.

### Theme colors
The light-blue "ocean" palette is defined in `src/index.css` under `@theme`
(`--color-ocean-*`). Adjust there to retune the whole site.

## Project structure

```
src/
  components/   reusable UI (Navbar, Footer, ServiceCard, WaveDivider, ...)
  pages/        Home, Services, About, Contact
  data/         business.js, services.js  ← edit content here
  index.css     theme + animations
docs/           design spec
```

## Deploying
Run `npm run build` and upload the `/dist` folder to any static host
(Netlify, Vercel, GitHub Pages, Hostinger, etc.).
```
