/** @type {import("next").NextConfig} */

const path = require("path");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    if (!isServer) {
      config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    }
    return config;
  },
};
