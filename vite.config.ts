import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'icon.svg', 'manifest.json'],
          manifest: {
            id: '/',
            name: 'LunarTune',
            short_name: 'LunarTune',
            description: 'Revamped YouTube Music Experience on Android. High-performance, privacy-focused, and packed with features.',
            theme_color: '#FFE600',
            background_color: '#FAF6EE',
            display: 'standalone',
            start_url: '/',
            scope: '/',
            icons: [
              {
                src: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/app/src/main/res/drawable/lunartune.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any'
              },
              {
                src: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/app/src/main/res/drawable/lunartune.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
              },
              {
                src: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/app/src/main/res/drawable/lunartune.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
              }
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}']
          },
          devOptions: {
            enabled: true,
            type: 'module'
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
