/** @type {import("next").NextConfig} */

const path = require("path");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  distDir: "build",
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    }
    return config;
  }
};
