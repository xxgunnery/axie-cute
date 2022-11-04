/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.axieinfinity.com",
      "axiecdn.axieinfinity.com",
      "cdn.axieinfinity.com",
    ],
  }
}

module.exports = nextConfig
