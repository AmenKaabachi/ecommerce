import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce', // Ensure this matches the repository name if deploying to GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  // Add server configuration to check for errors during development
  server: {
    open: true,
    port: 3000
  }
})
