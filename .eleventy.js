const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("website/styles.css");
  eleventyConfig.addPassthroughCopy("website/webmentions.js")
  eleventyConfig.addCollection("post", function(collection) {
    return collection.getFilteredByGlob("website/post/**/*.md");
  });
  eleventyConfig.addPlugin(pluginRss);
};
