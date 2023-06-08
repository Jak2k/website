import { defineConfig } from "unlighthouse";

export default defineConfig({
  scanner: {
    // when developing, reduce dynamic sampling to speed up tests
    dynamicSampling: process.dev ? 1 : 5,
    throttle: true,
  },
});
