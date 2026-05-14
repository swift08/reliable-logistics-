# Storyline Logistics

## Getting started

**Requirements:** Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Install dependencies
npm i

# Start the development server
npm run dev
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Scripts

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run test` — Run tests

## Production deployment

1. **Environment:** Copy `.env.example` to `.env` and set `VITE_BASE_URL` to your production URL (e.g. `https://www.yourdomain.com`). No trailing slash. This is used for canonical URLs and SEO.

2. **Build:** Run `npm run build`. Output is in `dist/`. Serve `dist/` as static files. For client-side routing, configure your host to serve `index.html` for all routes (e.g. SPA fallback).

3. **Static assets:** Ensure `robots.txt` and `sitemap.xml` from `public/` are served at the root. Update `sitemap.xml` and `index.html` canonical/OG URLs if your domain differs from `https://www.reliable-logistics.com`.

4. **Optional:** Add a 1200×630 px image at `public/og-image.jpg` for social sharing previews.
