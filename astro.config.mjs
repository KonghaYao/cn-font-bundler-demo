import { defineConfig } from "astro/config";
import font from 'vite-plugin-font'
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [font.vite()],
  },
});
