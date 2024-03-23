// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import sitemap from "astro-sitemap";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true // or a path to the reset file
  }), sitemap(), vue(), mdx(), db(), icon()],
  server: {
    port: 3000
  },
  output: "hybrid",
  site: "https://jak2k.schwanenberg.name",
  adapter: vercel()
});