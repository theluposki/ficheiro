import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/ficheiro/',
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
