import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'wc-app',
        short_name: 'wc',
        description: 'An awesome app built with Vite and PWA support!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'image/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'image/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'image/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },

        ],
      },

    }),
    react()
  ],
});
