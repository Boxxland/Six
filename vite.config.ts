import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
  base: process.env.GITHUB_PAGES === 'true' ? '/Web-source/' : '/',
  server: {
    port: 5000,
    host: true,
    allowedHosts: true,
  },
})
