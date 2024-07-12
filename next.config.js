const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'z61yhu6nwamagoqo.public.blob.vercel-storage.com',

    }

    ]

  },
  webpack: (config) => {
    // Ensure proper handling of static files
    config.resolve.fallback = { fs: false, path: false, os: false };
    return config;
  },


};
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

 

module.exports = nextConfig;

