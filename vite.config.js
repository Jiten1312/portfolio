import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths relative so the site works both at
// jitendhimmar.github.io and at jitendhimmar.github.io/portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
