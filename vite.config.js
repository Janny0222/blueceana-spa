import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Honor the PORT env var (used by the preview tooling); fall back to 5173.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
