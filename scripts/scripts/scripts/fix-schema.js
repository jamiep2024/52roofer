const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function fixSchemaMarkup() {
  try {
    const files = glob.sync('pages/services/roof-replacement/roofers-in-*.js');
    console.log(`Found ${files.length} location pages to fix...`);

    for (const file of files) {
      try {
        let content = await fs.readFile(file, 'utf8');
        const locationMatch = file.match(/roofers-in-(.+)\.js/);
        const location = locationMatch ? locationMatch[1].replace(/-/g, ' ') : '';

        // Create the schema object
        const schema = {
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          "name": "52Roofer",
          "url": `https://52roofer.com/services/roof-replacement/roofers-in-${locationMatch[1]}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location,
            "addressRegion": "UK",
            "addressCountry": "UK"
          },
          "description": `Professional roofing services in ${location}`,
          "priceRange": "££",
          "telephone": "0800 699 0549",
          "openingHours": "Mo-Su 00:00-23:59"
        };

        // Replace the broken script tag with proper JSX
        const newContent = content.replace(
          /<script type="application\/ld\+json">\s*{[\s\S]*?}<\/script>/,
          `<script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: ${JSON.stringify(JSON.stringify(schema))}
            }}
          />`
        );

        await fs.writeFile(file, newContent, 'utf8');
        console.log(`Fixed schema in ${file}`);
      } catch (error) {
        console.error(`Error fixing file ${file}:`, error);
      }
    }
  } catch (error) {
    console.error('Error fixing schemas:', error);
  }
}

fixSchemaMarkup().catch(console.error);