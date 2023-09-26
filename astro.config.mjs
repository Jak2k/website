// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import sitemap from "astro-sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    sitemap(),
  ],
  server: {
    port: 3000,
  },
  site: "https://jak2k.schwaneberg.name",
  adapter: vercel(),
});
