import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import font from 'vite-plugin-font'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),font.vite()],
})
