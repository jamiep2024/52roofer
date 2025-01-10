/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
<<<<<<< HEAD
  async redirects() {
    return [
      // Location redirects
      {
        source: "/location/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      // Service redirects
      {
        source: "/services/maintenance",
        destination: "/services/roof-maintenance",
        permanent: true,
      },
      {
        source: "/services/emergency-repairs",
        destination: "/services/emergency-roof-repairs",
        permanent: true,
      },
      // Common misspellings and old URLs
      {
        source: "/services/emergancy-repairs",
        destination: "/services/emergency-roof-repairs",
        permanent: true,
      },
      {
        source: "/service/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      // Blog redirects
      {
        source: "/blog/:year/:month/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      // Area redirects
      {
        source: "/areas/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      // www to non-www redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.52roofer.com" }],
        permanent: true,
        destination: "https://52roofer.com/:path*",
      },
      // Trailing slash handling
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
};
=======
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
  output: 'standalone',
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
}

module.exports = nextConfig
>>>>>>> 5144277172e154fb92c1be62166b7b6c847d1845
