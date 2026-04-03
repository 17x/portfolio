import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_SITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // about: resolve(__dirname, 'about/index.html'),
      },
    },
  },
});
