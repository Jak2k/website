// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@unlighthouse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
  ],
  devtools: {
    enabled: true,
    customTabs: [
      {
        name: "Unlighthouse",
        title: "Unlighthouse",
        icon: "fluent:top-speed-24-filled",
        view: {
          type: "iframe",
          src: "http://localhost:5678",
        },
      },
    ],
  },
  googleFonts: {
    download: true,
    families: {
      Nunito: true,
      "Fira Code": true,
      Texturina: true,
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
