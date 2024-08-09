// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["node_modules/vite-plugin-font/dist/nuxt"],
  fontSplit: {
    scanFiles: ["pages/**.vue"],
  },
});
