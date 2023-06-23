import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-icon",
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
  content: {
    sources: {
      projects: {
        prefix: "/projects",
        driver: "fs",
        base: resolve(__dirname, "projects"),
        name: "projects",
      },
    },
  },
});
