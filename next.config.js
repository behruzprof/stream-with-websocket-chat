const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com']
  }
}

module.exports = nextConfig
