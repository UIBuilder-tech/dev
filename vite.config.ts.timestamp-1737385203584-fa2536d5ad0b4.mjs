// vite.config.ts
import { defineConfig } from "file:///D:/react/New%20folder/dev/node_modules/vite/dist/node/index.js";
import react from "file:///D:/react/New%20folder/dev/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/react/New%20folder/dev/node_modules/@svgr/rollup/dist/index.js";
import image from "file:///D:/react/New%20folder/dev/node_modules/@rollup/plugin-image/dist/es/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr(),
    image()
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  server: {
    // proxy: {
    //   // Proxy for your backend (http://localhost:4242)
    //   '/api': {
    //     // target: 'http://localhost:4242',
    //     target: 'http://18.118.2.211',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
    //   },
    //   // Proxy for Salesforce API
    //   '/salesforce': {
    //     target: 'https://chfusa--dec2024.sandbox.my.salesforce.com', // Replace with your Salesforce instance URL
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/salesforce/, ''), // Remove /salesforce prefix
    //     secure: true, // Ensures SSL certificates are validated
    //   },
    // },
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFjdFxcXFxOZXcgZm9sZGVyXFxcXGRldlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccmVhY3RcXFxcTmV3IGZvbGRlclxcXFxkZXZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3JlYWN0L05ldyUyMGZvbGRlci9kZXYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3IgZnJvbSAnQHN2Z3Ivcm9sbHVwJztcclxuaW1wb3J0IGltYWdlIGZyb20gJ0Byb2xsdXAvcGx1Z2luLWltYWdlJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksXHJcbiAgICBzdmdyKCksXHJcbiAgICBpbWFnZSgpXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXHJcbiAgfSxcclxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyoucG5nJywgJyoqLyouanBnJywgJyoqLyouanBlZycsICcqKi8qLnN2ZyddLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy8gcHJveHk6IHtcclxuICAgIC8vICAgLy8gUHJveHkgZm9yIHlvdXIgYmFja2VuZCAoaHR0cDovL2xvY2FsaG9zdDo0MjQyKVxyXG4gICAgLy8gICAnL2FwaSc6IHtcclxuICAgIC8vICAgICAvLyB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjQyNDInLFxyXG4gICAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly8xOC4xMTguMi4yMTEnLFxyXG4gICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLCAvLyBSZW1vdmUgL2FwaSBwcmVmaXhcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgLy8gUHJveHkgZm9yIFNhbGVzZm9yY2UgQVBJXHJcbiAgICAvLyAgICcvc2FsZXNmb3JjZSc6IHtcclxuICAgIC8vICAgICB0YXJnZXQ6ICdodHRwczovL2NoZnVzYS0tZGVjMjAyNC5zYW5kYm94Lm15LnNhbGVzZm9yY2UuY29tJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgU2FsZXNmb3JjZSBpbnN0YW5jZSBVUkxcclxuICAgIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAvLyAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3NhbGVzZm9yY2UvLCAnJyksIC8vIFJlbW92ZSAvc2FsZXNmb3JjZSBwcmVmaXhcclxuICAgIC8vICAgICBzZWN1cmU6IHRydWUsIC8vIEVuc3VyZXMgU1NMIGNlcnRpZmljYXRlcyBhcmUgdmFsaWRhdGVkXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlRLFNBQVMsb0JBQW9CO0FBQzlSLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLE1BQU07QUFBQSxJQUNkLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUFDO0FBQUEsRUFDVCxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxlQUFlLENBQUMsWUFBWSxZQUFZLGFBQWEsVUFBVTtBQUFBLEVBQy9ELFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaUJSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
