import { NextApiRequest, NextApiResponse } from 'next';
import generate from '../scripts/generate-sitemap';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sitemap = await generate();
    
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
}
