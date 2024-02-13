// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import sitemap from "astro-sitemap";
import vercel from "@astrojs/vercel/static";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true // or a path to the reset file
  }), sitemap(), vue(), mdx()],
  server: {
    port: 3000
  },
  site: "https://jak2k.schwanenberg.name",
  adapter: vercel(),
  redirects: {
    "/.well-known/webfinger": "/.well-known/webfinger.json",
  }
});