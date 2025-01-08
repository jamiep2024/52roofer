import { getServerSideSitemap } from 'next-sitemap';

export default function Sitemap() {
  // This will never be called since we're handling the request in getServerSideProps
}

export async function getServerSideProps({ res }) {
  // Define your website URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://52roofer.com';

  // Define your static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    // Add other static routes here
  ].map((path) => ({
    loc: `${siteUrl}${path}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: path === '' ? 1.0 : 0.8,
  }));

  return getServerSideSitemap({
    fields: staticPages,
    hostname: siteUrl,
  });
}
