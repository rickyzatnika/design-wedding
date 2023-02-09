/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/invitation/:uuid",
  //       destination: "/invitation/[unique_Code]",
  //     },
  //   ];
  // },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };
  //   return config;
  // },
};

module.exports = nextConfig;
