/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["52roofer.com", "img.youtube.com"],
  },
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
  // Rest of your config...
};
