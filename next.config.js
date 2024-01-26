/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude the documentation folder from being processed by webpack
    if (!isServer) {
      config.module.rules.push({
        test: /\/documentation\//,
        loader: "ignore-loader",
      });
    }

    return config;
  },
};

module.exports = nextConfig;
