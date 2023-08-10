/** @type {import("next").NextConfig} */

const path = require("path");

module.exports = {
  cssModules: true,
  distDir: "build",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    }
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
