import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Digital-Growth-Agency/',
  build: {
    outDir: 'dist'
  }
})
