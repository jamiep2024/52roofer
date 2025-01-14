import { writeFileSync } from 'fs';
import { join } from 'path';

export async function generateSitemap() {
  try {
    // Generate sitemap content
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Add your URLs here -->
</urlset>`;

    // Write to public directory
    const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(outputPath, sitemapContent);
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}
