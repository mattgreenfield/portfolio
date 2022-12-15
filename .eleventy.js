const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  //   eleventyConfig.addPassthroughCopy("img");
  //   eleventyConfig.addPassthroughCopy("css/fonts");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
