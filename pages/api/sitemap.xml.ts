import { NextApiRequest, NextApiResponse } from 'next';
import { generateSitemap } from '../../scripts/generate-sitemap';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await generateSitemap();
    res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error generating sitemap:', error);
      res.status(500).json({ success: false, error: error.message });
    } else {
      console.error('Unknown error generating sitemap:', error);
      res.status(500).json({ success: false, error: 'Unknown error occurred' });
    }
  }
}
