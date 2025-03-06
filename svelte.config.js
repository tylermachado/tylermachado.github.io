import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleMissingId: 'warn', // Avoid hard errors on dynamic routes
			entries: ['*'] // Pre-render everything possible
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		appDir: 'app' // Avoid conflicts with GitHub Pages `_` directories
	}
};

export default config;
