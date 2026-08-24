// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The public URL of the site. For a GitHub Pages *project* site this is the
  // account's github.io domain; `base` is the repository name.
  // When a custom domain is added later, set `site` to it and change `base` to '/'.
  site: 'https://bitcape.github.io',
  base: '/website-bitcape',

  // Astro is a static site generator by default (output: 'static'),
  // which produces plain HTML/CSS/JS suitable for GitHub Pages.
});

