import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output into ultron_backend/ui_dist so run.py can serve it with FastAPI
    outDir: './ultron_backend/ui_dist',
    emptyOutDir: true,
  },
  server: {
    // Dev mode: proxy API and WS to the FastAPI backend
    proxy: {
      '/api': 'http://localhost:8000',
      '/ws': { target: 'ws://localhost:8000', ws: true },
    },
  },
})
