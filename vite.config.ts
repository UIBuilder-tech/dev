import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr(),
    image()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  server: {
    proxy: {
      // Proxy for your backend (http://localhost:4242)
      '/api': {
        // target: 'http://localhost:4242',
        target: 'http://18.118.2.211',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
      },
      // Proxy for Salesforce API
      '/salesforce': {
        target: 'https://chfusa--dec2024.sandbox.my.salesforce.com', // Replace with your Salesforce instance URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/salesforce/, ''), // Remove /salesforce prefix
        secure: true, // Ensures SSL certificates are validated
      },
    },
  },
});
