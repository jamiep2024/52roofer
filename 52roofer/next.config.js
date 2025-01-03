/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['52roofer.com'],
  },
  async redirects() {
    return [
      // Redirect old location patterns to new structure
      {
        source: '/location/:location*',
        destination: '/roofers-in-:location*',
        permanent: true,
      },
      {
        source: '/locations/:location*',
        destination: '/roofers-in-:location*',
        permanent: true,
      },
      // Redirect old service company pages to new location structure
      {
        source: '/services/roofing-companies-near-me/:location',
        destination: '/roofers-in-:location',
        permanent: true,
      },
      // Redirect old service pages
      {
        source: '/services/roofing-firms-near-me',
        destination: '/services/roofers-near-me',
        permanent: true,
      },
      {
        source: '/services/roofing-companies-near-me',
        destination: '/services/roofers-near-me',
        permanent: true,
      },
      // Redirect .js pages to .tsx
      {
        source: '/services/:page.js',
        destination: '/services/:page',
        permanent: true,
      },
      // Redirect voice pages
      {
        source: '/services/voice-roofing-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/voice-roof-repairs',
        destination: '/services/roof-repair',
        permanent: true,
      },
      {
        source: '/services/voice-roof-installation',
        destination: '/services/roof-installation',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
