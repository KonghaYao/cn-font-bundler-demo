// https://nuxt.com/docs/api/configuration/nuxt-config
import font from 'vite-plugin-font'
export default defineNuxtConfig({
  devtools: { enabled: false },
  // modules: ["module/nuxt"],
  vite:{
    plugins:[
      font.vite({})
    ]
  },
  compatibilityDate: "2024-10-26",
});