const fs = require('fs');
const path = require('path');

function setupRedirectsAndSitemap() {
  console.log('Setting up redirects and sitemap...\n');

  // 1. Create next.config.js with redirects
  const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['52roofer.com'],
  },
  async redirects() {
    return [
      // Redirect old location pages to new structure
      {
        source: '/roofers-in-:location',
        destination: '/locations/:location',
        permanent: true,
      },
      // Redirect old service pages to new structure
      {
        source: '/services/roofing-companies-near-me/:location',
        destination: '/locations/:location',
        permanent: true,
      },
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
        source: '/services/roofing-faqs.js',
        destination: '/resources/roofing-faq',
        permanent: true,
      },
      {
        source: '/services/roof-repair.js',
        destination: '/services/roof-repair',
        permanent: true,
      },
      {
        source: '/services/roof-maintenance-tips.js',
        destination: '/blog/complete-guide-to-roof-maintenance',
        permanent: true,
      },
      {
        source: '/services/roof-installation-costs.js',
        destination: '/blog/new-roof-cost-guide',
        permanent: true,
      },
      {
        source: '/services/emergency-roofing.js',
        destination: '/services/emergency-roof-repairs',
        permanent: true,
      },
      {
        source: '/services/near-me.js',
        destination: '/services/roofers-near-me',
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
      },
      // Redirect old location pattern
      {
        source: '/location/:path*',
        destination: '/locations/:path*',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig`;

  fs.writeFileSync(path.join(process.cwd(), 'next.config.js'), nextConfig);
  console.log('Created next.config.js with redirects');

  // 2. Generate sitemap
  const locations = [
    'warminster-wiltshire',
    'marlborough-wiltshire',
    'chippenham-wiltshire',
    'devizes-wiltshire',
    'melksham-wiltshire',
    'trowbridge-wiltshire',
    'cowley-oxford',
    'headington-oxford',
    'wolvercote-oxford',
    'jericho-oxford',
    'marston-oxford',
    'botley-oxford',
    'bradford-on-avon-wiltshire',
    'westbury-wiltshire',
    'calne-wiltshire',
    'salisbury-wiltshire',
    'rose-hill-oxford',
    'iffley-oxford',
    'blackbird-leys-oxford',
    'summertown-oxford'
  ];

  const services = [
    'roof-repair',
    'roof-installation',
    'emergency-roof-repairs',
    'roof-maintenance',
    'roof-replacement',
    'commercial-roofing',
    'residential-roofing',
    'roofers-near-me',
    'roof-inspection',
    'roof-ventilation',
    'skylight-installation',
    'gutter-services'
  ];

  const blogPosts = [
    'choosing-right-roofing-material',
    'complete-guide-to-roof-maintenance',
    'uk-weather-roofing-problems',
    'energy-efficient-roofing',
    'ultimate-roof-ventilation-guide',
    'new-roof-cost-guide',
    'professional-roof-inspection-guide',
    'signs-you-need-roof-replacement'
  ];

  const generateSitemapSection = (urls, changefreq = 'weekly', priority = '0.8') => {
    return urls.map(url => `
    <url>
      <loc>https://52roofer.com${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`).join('');
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://52roofer.com</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>${generateSitemapSection(locations.map(loc => `/locations/${loc}`))}${generateSitemapSection(services.map(service => `/services/${service}`))}${generateSitemapSection(blogPosts.map(post => `/blog/${post}`), 'monthly', '0.6')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Created sitemap.xml');

  // 3. Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://52roofer.com/sitemap.xml`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Created robots.txt');

  console.log('\nSetup complete!');
}

try {
  setupRedirectsAndSitemap();
} catch (error) {
  console.error('Error during setup:', error);
}
