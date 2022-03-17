import vercel from '@sveltejs/adapter-vercel';
import WindiCSS from 'vite-plugin-windicss';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		vite: {
			plugins: [WindiCSS(), svg()],
			optimizeDeps: {
				include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
		}
	}
};

export default config;
