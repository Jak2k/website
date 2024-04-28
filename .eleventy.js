const pluginRss = require("@11ty/eleventy-plugin-rss");
const shikiTwoslash = require("eleventy-plugin-shiki-twoslash")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("website/styles.css");
  eleventyConfig.addPassthroughCopy("website/webmentions.js")
  eleventyConfig.addPassthroughCopy("website/ab-quiz.js")
  eleventyConfig.addPassthroughCopy("website/.well-known/**/*")
  eleventyConfig.addCollection("post", function (collection) {
    return collection.getFilteredByGlob("website/post/**/*.md");
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(shikiTwoslash, { theme: "nord" })
};
