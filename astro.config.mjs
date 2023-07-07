import { defineConfig, sharpImageService } from 'astro/config';
// import preprocess from 'svelte-preprocess';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// import tailwind from "@astrojs/tailwind";

import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    robotsTxt(),
    compress(),
    svelte(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
