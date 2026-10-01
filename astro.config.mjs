import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://kensukeimagery.github.io',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
