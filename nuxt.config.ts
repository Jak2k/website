// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-icon",
    {
      buildModules: [
        '@nuxt/content',
      ],
      content: {
        api: {
          baseURL: '/api',
        },
      },
    },
  ],
  devtools: {
    enabled: true,
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
