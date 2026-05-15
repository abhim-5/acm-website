import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/acm/',
  build: {
    sourcemap: true,
    // terserOptions:
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    tailwindcss(),
    vue(),
    robots(),
    sitemap({
      hostname: 'https://acm-svnit.github.io/',
      basePath: 'acm',
      changefreq: 'hourly',
      priority: 1,
    }),
    {
      name: 'full-reload-on-vue-change',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.vue')) {
          server.ws.send({ type: 'full-reload' });
          return [];
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    // watch: {
    //   usePolling: true,
    //   interval: 1000,
    //   ignored: ['!**/src/**/*.{js,ts,jsx,tsx}'],
    // },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
});
