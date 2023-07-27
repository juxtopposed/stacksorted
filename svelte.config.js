import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			$components: './src/components',
			$lib: './src/lib'
		},

		files: {
			assets: 'public'
		}
	}
};

export default config;
