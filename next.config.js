/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/location/:slug',
        has: [
          {
            type: 'query',
            key: 'slug',
            // Only redirect if it's a city name, not a county
            value: '(?!oxfordshire|wiltshire|berkshire).*'
          }
        ],
        destination: '/locations/:slug',
        permanent: true,
      }
    ]
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
