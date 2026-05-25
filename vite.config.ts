import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webExtension from 'vite-plugin-web-extension';

export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: 'manifest.json',
      htmlViteConfig: { build: { outDir: 'dist' } }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html'
      }
    }
  }
});