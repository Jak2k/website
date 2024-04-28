const pluginRss = require("@11ty/eleventy-plugin-rss");
const shikiTwoslash = require("eleventy-plugin-shiki-twoslash");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("website/styles.css");
  eleventyConfig.addPassthroughCopy("website/webmentions.js");
  eleventyConfig.addPassthroughCopy("website/ab-quiz.js");
  eleventyConfig.addPassthroughCopy("website/.well-known/**/*");

  eleventyConfig.addPassthroughCopy("website/BingSiteAuth.xml");
  eleventyConfig.addPassthroughCopy("website/google7c5903cf6acc20cf.html");

  eleventyConfig.addCollection("post", function (collection) {
    return collection.getFilteredByGlob("website/post/**/*.md");
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(shikiTwoslash, { theme: "nord" });
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });
};
