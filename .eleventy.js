const CleanCSS = require("clean-css");
const PostCSSPlugin = require("eleventy-plugin-postcss");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  //   eleventyConfig.addPassthroughCopy("img");
  //   eleventyConfig.addPassthroughCopy("css/fonts");

  // uses postcss.config.js
  eleventyConfig.addPlugin(PostCSSPlugin);

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
