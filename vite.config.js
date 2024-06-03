import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import font from "vite-plugin-font";
import fontSubsets from "vite-plugin-font/dist/subset/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    font(),
    fontSubsets({
      scanFiles: ["src/**/*.{vue,js,ts,jsx,tsx}"],
    }),
  ],
});
