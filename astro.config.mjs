// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The public URL of the site. Now that a custom domain (bitcape.ch) is
  // configured, the site is served from the root, so `site` is the domain and
  // `base` is '/'. The custom domain is set via the public/CNAME file.
  site: 'https://bitcape.ch',
  base: '/',

  // Astro is a static site generator by default (output: 'static'),
  // which produces plain HTML/CSS/JS suitable for GitHub Pages.
});

