import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export default {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        // Remove the Vite configuration from here
    }
};
