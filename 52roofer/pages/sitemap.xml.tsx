import React from 'react';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://52roofer.co.uk';

function generateSitemapXml(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
}

function getPages(dir: string, urlPrefix: string = ''): string[] {
  const urls: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively get pages from subdirectories
      urls.push(...getPages(filePath, `${urlPrefix}/${file}`));
    } else if (file.endsWith('.tsx') && !file.startsWith('_') && !file.startsWith('[')) {
      // Add page URL, removing .tsx extension and converting index to /
      const pageUrl = `${urlPrefix}/${file.replace(/\.tsx$/, '').replace(/index$/, '')}`;
      urls.push(pageUrl.replace(/\/+/g, '/'));
    }
  });

  return urls;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get all page URLs
  const pagesDir = path.join(process.cwd(), 'pages');
  const urls = getPages(pagesDir);

  // Generate sitemap XML
  const sitemap = generateSitemapXml(urls);

  // Set headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// This default export is required
export default function Sitemap() {
  return null;
}