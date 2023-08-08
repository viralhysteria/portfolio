/** @type {import("next").NextConfig} */

const path = require("path");

module.exports = {
  cssModules: true,
  distDir: "build",
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    return config;
  },
};
