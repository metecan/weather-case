/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_LAYER_URL: process.env.NEXT_PUBLIC_LAYER_URL,
  },
};

module.exports = nextConfig;
