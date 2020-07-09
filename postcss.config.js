const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
