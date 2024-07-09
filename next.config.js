/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Ensure proper handling of static files
      config.resolve.fallback = { fs: false, path: false, os: false };
      return config;
    },
    experimental: {
      appDir: true, // Enable the app directory (experimental feature)
    },
  };
  
  module.exports = nextConfig;
  
