const CleanCSS = require("clean-css");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = null) {
  let metadata = await Image(src, {
    widths: [300, 600, 1200],
    formats: ["avif", "webp", "jpeg"],
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    whitespaceMode: "inline",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy({ "assets/favicon": "/" });
  // eleventyConfig.addPassthroughCopy("assets/images");

  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  // uses postcss.config.js
  eleventyConfig.addPlugin(PostCSSPlugin);

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Date formating
  eleventyConfig.addFilter("date", function (date, format = "LLL yyyy") {
    return DateTime.fromJSDate(date).plus({ days: 1 }).toFormat(format);
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // List of all the 'tech' tags
  eleventyConfig.addCollection("tech", function (collectionApi) {
    const tagsList = new Set();
    collectionApi.getAll().map((item) => {
      if (item.data.tags) {
        // handle pages that don't have tags
        item.data.tags
          .filter((tag) => !["job"].includes(tag))
          .map((tag) => tagsList.add(tag));
      }
    });
    return tagsList;
  });

  return {
    // markdownTemplateEngine: "njk",
  };
};
