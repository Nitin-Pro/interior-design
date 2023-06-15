import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    before: (app, server) => {
      app.use((req, res, next) => {
        // Set security headers
        res.setHeader('Content-Security-Policy', 'default-src');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        // Add more security headers as needed

        next();
      });
    },
  },
});



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })