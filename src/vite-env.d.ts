/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_VERSION: string;
    // Add more variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  