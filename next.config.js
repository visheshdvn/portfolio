/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "visheshdvn-media.s3.eu-west-1.amazonaws.com",
      "lumbytes-development.s3.eu-west-1.amazonaws.com",
      "lumbytes-general.s3.eu-west-1.amazonaws.com",
      "miro.medium.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
