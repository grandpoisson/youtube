/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'bootcamp-stevec.s3.eu-west-2.amazonaws.com',
      'bootcamp-stevec.s3.amazonaws.com',
    ],
  },

}

module.exports = nextConfig

