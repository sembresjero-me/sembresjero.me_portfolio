/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-west-3.amazonaws.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
