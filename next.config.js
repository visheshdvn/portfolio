/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "visheshdvn-media.s3.eu-west-1.amazonaws.com",
      "lumbytes-development.s3.eu-west-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
