/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Replace deprecated images.domains with remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  // Silence workspace root warning by pinning the correct project root
  turbopack: {
    root: __dirname,
  },
}
