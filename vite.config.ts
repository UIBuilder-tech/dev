import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Proxy for your backend (http://localhost:4242)
      '/api': {
        target: 'http://localhost:4242',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
      },
      // Proxy for Salesforce API
      '/salesforce': {
        target: 'https://your-salesforce-instance.salesforce.com', // Replace with your Salesforce instance URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/salesforce/, ''), // Remove /salesforce prefix
        secure: true, // Ensures SSL certificates are validated
      },
    },
  },
});
