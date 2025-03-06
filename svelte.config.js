import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'app.html' // Needed for SPA mode (GitHub Pages)
		}),
		prerender: {
			handleMissingId: 'warn', // Avoid hard errors on dynamic routes
			entries: ['*'] // Pre-render everything possible
		},
		paths: {
			base: process.env.BASE_PATH || '' // Ensure correct base path for GitHub Pages
		},
		appDir: 'app' // Avoid conflicts with GitHub Pages `_` directories
	}
};

export default config;
