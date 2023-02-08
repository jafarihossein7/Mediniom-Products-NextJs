/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mediniom.com',
        port: '',
        pathname: '/api/v2/image/item-image/**',
      },
    ],
  },
}

module.exports = nextConfig
