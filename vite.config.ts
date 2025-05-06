import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/trobiflex/',
  server: {
    host: true, 
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Trombinoscope App',
        short_name: 'Trombinoscope',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '225x225',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '225x225',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
