/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // Add proper path resolution
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname),
      },
    };

    // Configure file watching
    if (dev) {
      config.watchOptions = {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: [
          '**/node_modules/**',
          '**/.next/**',
          '**/public/**'
        ]
      };
    }

    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  
  // Image configuration
  images: {
    domains: ["52roofer.com", "img.youtube.com"],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Redirects configuration
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
        basePath: false
      },
      // Additional service redirects
      {
        source: "/roof-repair",
        destination: "/services/roof-repairs",
        permanent: true,
      },
      {
        source: "/roof-replacement",
        destination: "/services/roof-replacement",
        permanent: true,
      },
      // Trailing slash handling
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      // Legacy location URLs
      {
        source: "/roofers-in-:location/search",
        destination: "/locations/:location/search",
        permanent: true,
      },
      {
        source: "/roofers-in-:location",
        destination: "/locations/:location",
        permanent: true,
      },
      // Legacy emergency repair URLs
      {
        source: "/services/emergency-roof-repairs-new/:location",
        destination: "/services/emergency-roof-repair/:location",
        permanent: true,
      },
      // Legacy voice service URLs
      {
        source: "/services/voice-roof-:service/:location",
        destination: "/services/:service/:location",
        permanent: true,
      },
      {
        source: "/services/voice-:service/:location",
        destination: "/services/:service/:location",
        permanent: true,
      },
      // Legacy emergency repair URLs
      {
        source: "/services/emergency-roof-repairs-new/:location",
        destination: "/services/emergency-roof-repair/:location",
        permanent: true,
      },
      // Legacy location URLs
      {
        source: "/roofers-in-:location",
        destination: "/locations/:location",
        permanent: true,
      },
    ];
  },

  // Webpack configuration for SVG
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },

  // Environment configuration
  env: {
    SITE_URL: 'https://52roofer.com',
    SITE_NAME: '52Roofer',
    SITE_DESCRIPTION: 'Professional Roofing Services',
  },

  // Powered by header removal
  poweredByHeader: false,

  // Compression
  compress: true,

  // i18n configuration
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
