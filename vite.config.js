import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunks por librería: el navegador los baja en paralelo y sobreviven
    // a un cambio de código propio sin invalidarse.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('/gsap/')) return 'gsap'
          if (id.includes('/motion') || id.includes('framer-motion')) return 'motion'
          if (id.includes('/ogl/')) return 'ogl'
          return 'vendor'
        },
      },
    },
  },
})
