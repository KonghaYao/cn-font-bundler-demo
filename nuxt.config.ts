// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["node_modules/vite-plugin-font/src/nuxt"],
  fontSplit: {
    scanFiles: ["pages/**.vue"],
  },
});
