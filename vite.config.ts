import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr({
      exportAsDefault: false,
    }),
    image()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
});