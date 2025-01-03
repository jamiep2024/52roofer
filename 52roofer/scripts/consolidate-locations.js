const fs = require('fs');
const path = require('path');

// Counties we're working with
const COUNTIES = [
  'berkshire',
  'oxfordshire',
  'wiltshire',
  'gloucestershire',
  'hampshire',
  'surrey',
  'buckinghamshire',
  'west-sussex'
];

// Ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Safe read directory
const safeReadDir = (dir) => {
  try {
    return fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  } catch (error) {
    console.log(`Warning: Could not read directory ${dir}`);
    return [];
  }
};

// Create base locations structure
console.log('Creating locations directory structure...');
ensureDir('pages/locations');
COUNTIES.forEach(county => {
  ensureDir(`pages/locations/${county}`);
});

// Helper to extract location info from filename
const extractLocationInfo = (filename) => {
  if (filename.startsWith('roofers-in-')) {
    const match = filename.match(/roofers-in-(.+)-(.+)\.tsx$/);
    if (match) {
      return {
        city: match[1],
        county: match[2]
      };
    }
  }
  return null;
};

// Move location pages to new structure
const moveLocationPages = () => {
  console.log('\nMoving location pages to new structure...');
  
  // Get all files from pages directory
  const files = safeReadDir('pages');
  
  files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    
    const locationInfo = extractLocationInfo(file);
    if (!locationInfo) return;
    
    const { city, county } = locationInfo;
    
    // Skip if county is not in our list
    if (!COUNTIES.includes(county)) {
      console.log(`Skipping unknown county: ${county}`);
      return;
    }
    
    const newPath = `pages/locations/${county}/${city}.tsx`;
    const oldPath = `pages/${file}`;
    
    // Create location page content
    const content = `import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function Location() {
  return (
    <Layout>
      <Head>
        <title>Roofers in ${city.charAt(0).toUpperCase() + city.slice(1)}, ${county.charAt(0).toUpperCase() + county.slice(1)} | 52 Roofer</title>
        <meta name="description" content="Professional roofing services in ${city}, ${county}. Expert roofers for repairs, installations, and maintenance." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in ${city}, ${county}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Local Roofing Services in ${city}</h2>
          <p className="mb-4">
            Looking for reliable roofing services in ${city}, ${county}? Our experienced team provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emergency roof repairs</li>
            <li>Roof installations and replacements</li>
            <li>Roof maintenance and inspections</li>
            <li>Gutter services</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}`;

    // Write the new file
    ensureDir(path.dirname(newPath));
    fs.writeFileSync(newPath, content);
    console.log(`Created: ${newPath}`);

    // Delete old file if it exists
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      console.log(`Deleted: ${oldPath}`);
    }
  });
};

// Create locations index page
const createLocationsIndex = () => {
  console.log('\nCreating locations index page...');
  
  const content = `import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function LocationsIndex() {
  const counties = ${JSON.stringify(COUNTIES, null, 2)};
  
  return (
    <Layout>
      <Head>
        <title>Roofing Services by Location | 52 Roofer</title>
        <meta name="description" content="Find local roofing services across the UK. Expert roofers in your area for repairs, installations, and maintenance." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofing Services by Location</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counties.map((county) => (
            <div key={county} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 capitalize">
                {county.replace('-', ' ')}
              </h2>
              <Link href={\`/locations/\${county}\`}
                    className="text-blue-600 hover:text-blue-800">
                View locations in {county.replace('-', ' ')}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}`;

  fs.writeFileSync('pages/locations/index.tsx', content);
  console.log('Created: pages/locations/index.tsx');
};

// Create county index pages
const createCountyIndexPages = () => {
  console.log('\nCreating county index pages...');
  
  COUNTIES.forEach(county => {
    const countyDir = `pages/locations/${county}`;
    const files = safeReadDir(countyDir);
    const cities = files
      .filter(f => f.endsWith('.tsx') && f !== 'index.tsx')
      .map(f => f.replace('.tsx', ''));

    const content = `import Head from 'next/head';
import Layout from '../../../components/layout/Layout';
import Link from 'next/link';

export default function CountyIndex() {
  const cities = ${JSON.stringify(cities, null, 2)};
  
  return (
    <Layout>
      <Head>
        <title>Roofers in ${county.charAt(0).toUpperCase() + county.slice(1)} | 52 Roofer</title>
        <meta name="description" content="Find local roofing services in ${county}. Expert roofers for repairs, installations, and maintenance." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in ${county.charAt(0).toUpperCase() + county.slice(1)}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 capitalize">
                {city.replace('-', ' ')}
              </h2>
              <Link href={\`/locations/${county}/\${city}\`}
                    className="text-blue-600 hover:text-blue-800">
                View roofers in {city.replace('-', ' ')}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}`;

    fs.writeFileSync(`${countyDir}/index.tsx`, content);
    console.log(`Created: ${countyDir}/index.tsx`);
  });
};

// Clean up old directories
const cleanupOldDirectories = () => {
  console.log('\nCleaning up old directories...');
  
  ['pages/county', 'pages/location'].forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`Deleted: ${dir}`);
    }
  });
};

// Execute consolidation
console.log('Starting location consolidation...');
moveLocationPages();
createLocationsIndex();
createCountyIndexPages();
cleanupOldDirectories();
console.log('\nLocation consolidation complete!');
