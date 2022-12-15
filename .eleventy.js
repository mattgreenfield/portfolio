const CleanCSS = require("clean-css");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/images");

  // uses postcss.config.js
  eleventyConfig.addPlugin(PostCSSPlugin);

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("date", function (date) {
    return DateTime.fromJSDate(date).plus({ days: 5 }).toFormat("LLL yyyy");
  });

  return {
    // markdownTemplateEngine: "njk",
  };
};
