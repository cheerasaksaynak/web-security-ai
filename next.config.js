/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web-security-ai',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
