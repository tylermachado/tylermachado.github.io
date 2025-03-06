import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
    adapter: adapter(),
    paths: {
      base: process.env.BASE_PATH || '', // Set in GitHub Actions
    },
    appDir: 'app', // Avoids conflicts with GitHub Pages
  }
};

export default config;
