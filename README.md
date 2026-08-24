# website-bitcape

The personal website for **Bitcape** — a minimal, statically generated
**one-pager** that can be hosted on GitHub Pages.

## Technology

- **[Astro](https://astro.build/)** — static site generator (outputs plain HTML/CSS/JS)
- **TypeScript** — type-safe configuration and components
- **Modern HTML & CSS** — responsive, dark + sand palette, no CSS framework
- **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)** — web font loaded via Google Fonts
- **npm** — package management

No frontend framework (React/Vue/Svelte), no backend and no database — the site
is intentionally simple and easy to evolve.

## Project structure

```text
.
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration (Astro strict preset)
├── public/                 # Static assets served as-is (favicon, robots.txt, hero image)
└── src/
    ├── components/SEO.astro # Reusable SEO metadata component
    ├── data/site.ts         # Central config: name, subtitle, tagline, email
    ├── layouts/BaseLayout.astro # Document shell shared by the page
    ├── pages/index.astro    # The one-page hero
    └── styles/global.css    # Design tokens (dark + sand) and base styles
```

Edit the name, subtitle, tagline and contact email in `src/data/site.ts`.
The hero background image is set via the `.hero::before` rule in
`src/pages/index.astro` (currently `public/mx_keys.jpg`).

## Prerequisites

- [Node.js](https://nodejs.org/) `20.19+`, `22.12+`, or `24+` (required by Astro 7)
- npm (bundled with Node.js)

## Getting started

Install the dependencies:

```bash
npm install
```

Start the local development server (with hot reloading) at
<http://localhost:4321>:

```bash
npm run dev
```

## Building for production

Generate the static site into the `dist/` folder:

```bash
npm run build
```

Preview the production build locally before deploying:

```bash
npm run preview
```

## Type checking

Run Astro's type and content checks:

```bash
npm run check
```

## Deployment (GitHub Pages)

The site deploys to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`). Deployment is **manual** — pushing to `main`
does **not** publish. You trigger a release yourself when you're ready.

One-time setup in the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.

To deploy:

- **GitHub UI:** open the **Actions** tab → **Deploy to GitHub Pages** workflow
  → **Run workflow** → choose the `main` branch → **Run workflow**.
- **GitHub CLI:** `gh workflow run "Deploy to GitHub Pages" --ref main`

The live URL will be:

```
https://bitcape.github.io/website-bitcape/
```

The `site` and `base` values in `astro.config.mjs` are configured for this
project-page URL. When a custom domain is added later, set `site` to the domain
and change `base` back to `'/'`.

## Notes

- The custom domain, email and hosting are intentionally not configured yet.
- Update the `site`/`base` in `astro.config.mjs` when moving to a custom domain.
