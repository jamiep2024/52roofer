import { NextApiRequest, NextApiResponse } from 'next';
import { locationData } from '../../data/locationData';

const BASE_URL = 'https://52roofer.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set cache control headers
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'application/xml');

  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${BASE_URL}/about</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${BASE_URL}/contact</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${BASE_URL}/services</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${Object.entries(locationData).map(([slug, location]) => `
        <url>
          <loc>${BASE_URL}/locations/${slug}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `).join('')}
    </urlset>`;

  res.send(xml.trim());
}
