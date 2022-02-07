const withImages = require("next-images");
module.exports = withImages();
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };

    return config;
  },
};
