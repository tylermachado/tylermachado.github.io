import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/tylermachado.github.io', // Use the repo name as the base in production
    },
    appDir: 'app',
  }
};

export default config;
