import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Stub for cached HTML that still requests the PWA plugin entry
function pwaStub() {
  return {
    name: 'pwa-stub',
    resolveId(id) {
      if (id === '@vite-plugin-pwa/pwa-entry-point-loaded') return id
      return null
    },
    load(id) {
      if (id === '@vite-plugin-pwa/pwa-entry-point-loaded') return 'export default {}'
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pwaStub(),
  ],
})