import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},

	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  allow: ['..', 'node_modules'],
		},
	  }
});
