/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['52roofer.com', 'img.youtube.com'],
  },
  async redirects() {
    return [
      // Redirect /location/* to /locations/*
      {
        source: '/location/:slug',
        destination: '/locations/:slug',
        permanent: true,
      },
      // Service page redirects
      {
        source: '/services/maintenance',
        destination: '/services/roof-maintenance',
        permanent: true,
      },
      {
        source: '/services/emergency-repairs',
        destination: '/services/emergency-roof-repairs',
        permanent: true,
      },
      // www to non-www redirects
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.52roofer.com',
          },
        ],
        destination: 'https://52roofer.com',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https://script.google.com https://www.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://img.youtube.com; font-src 'self' data:; frame-src 'self' https://www.youtube.com; connect-src 'self' https://script.google.com https://*.google.com;"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
