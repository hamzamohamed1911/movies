import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the rewrites section here
  rewrites: async () => [
    { source: /^\/(?!.*\.hot|favicon\.ico).*/, destination: '/index.html' },
  ],
});
