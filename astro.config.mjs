import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/xenia-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://xeniahydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
