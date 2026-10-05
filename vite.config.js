import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      additionalPrerenderRoutes: ['/en/'],
      prerenderScript: fileURLToPath(new URL('./scripts/prerender.js', import.meta.url)),
    }),
  ],
})
