import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths relative so the site works both at
// jiten1312.github.io and at jiten1312.github.io/portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
