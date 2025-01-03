const fs = require('fs');
const path = require('path');

// County data structure
const COUNTIES = {
  berkshire: {
    name: 'Berkshire',
    locations: [
      'reading',
      'windsor',
      'maidenhead',
      'slough',
      'bracknell',
      'newbury',
      'wokingham'
    ]
  },
  oxfordshire: {
    name: 'Oxfordshire',
    locations: [
      'oxford',
      'banbury',
      'abingdon',
      'bicester',
      'witney',
      'didcot',
      'carterton',
      'thame',
      'wallingford',
      'wantage',
      'henley-on-thames',
      'kidlington',
      'chipping-norton',
      'faringdon',
      'watlington',
      'woodstock',
      'charlbury',
      'eynsham',
      'blackbird-leys',
      'botley',
      'cowley',
      'headington',
      'iffley',
      'jericho',
      'marston',
      'rose-hill',
      'summertown',
      'wolvercote'
    ]
  },
  wiltshire: {
    name: 'Wiltshire',
    locations: [
      'swindon',
      'salisbury',
      'chippenham',
      'trowbridge',
      'warminster',
      'melksham',
      'devizes',
      'marlborough',
      'calne',
      'corsham',
      'bradford-on-avon',
      'westbury',
      'amesbury',
      'tidworth',
      'malmesbury',
      'royal-wootton-bassett',
      'cricklade',
      'pewsey',
      'wilton'
    ]
  },
  gloucestershire: {
    name: 'Gloucestershire',
    locations: [
      'gloucester',
      'cheltenham',
      'stroud',
      'cirencester',
      'tewkesbury',
      'dursley',
      'stow-on-the-wold',
      'tetbury',
      'moreton-in-marsh',
      'chipping-campden',
      'winchcombe',
      'berkeley',
      'fairford',
      'newent',
      'stonehouse',
      'nailsworth',
      'wotton-under-edge',
      'lechlade'
    ]
  },
  hampshire: {
    name: 'Hampshire',
    locations: [
      'southampton',
      'portsmouth',
      'basingstoke',
      'winchester',
      'eastleigh',
      'fareham',
      'andover',
      'aldershot',
      'gosport',
      'havant',
      'farnborough',
      'fleet',
      'petersfield',
      'lymington',
      'alton',
      'romsey',
      'ringwood',
      'totton'
    ]
  },
  surrey: {
    name: 'Surrey',
    locations: [
      'guildford',
      'woking',
      'reigate',
      'epsom',
      'camberley',
      'redhill',
      'staines',
      'farnham',
      'godalming',
      'dorking',
      'leatherhead',
      'weybridge',
      'haslemere',
      'egham',
      'horley',
      'cranleigh',
      'banstead',
      'esher'
    ]
  },
  buckinghamshire: {
    name: 'Buckinghamshire',
    locations: [
      'milton-keynes',
      'high-wycombe',
      'aylesbury',
      'amersham',
      'marlow',
      'beaconsfield',
      'buckingham',
      'chesham',
      'princes-risborough',
      'wendover',
      'gerrards-cross',
      'chalfont-st-peter',
      'newport-pagnell',
      'olney',
      'winslow',
      'great-missenden',
      'burnham',
      'stony-stratford'
    ]
  },
  'west-sussex': {
    name: 'West Sussex',
    locations: [
      'crawley',
      'worthing',
      'horsham',
      'bognor-regis',
      'littlehampton',
      'chichester',
      'haywards-heath',
      'burgess-hill',
      'east-grinstead',
      'shoreham-by-sea',
      'rustington',
      'southwick',
      'selsey',
      'steyning',
      'midhurst',
      'petworth',
      'arundel',
      'henfield'
    ]
  }
};

// Ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Generate location page content
const generateLocationPage = (county, location) => {
  const formattedLocation = location.replace(/-/g, ' ');
  const formattedCounty = county.replace(/-/g, ' ');
  
  return `import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function Location() {
  return (
    <Layout>
      <Head>
        <title>Roofers in ${formattedLocation}, ${COUNTIES[county].name} | 52 Roofer</title>
        <meta name="description" content="Professional roofing services in ${formattedLocation}, ${COUNTIES[county].name}. Expert roofers for repairs, installations, and maintenance." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in ${formattedLocation}, ${COUNTIES[county].name}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Local Roofing Services in ${formattedLocation}</h2>
          <p className="mb-4">
            Looking for reliable roofing services in ${formattedLocation}, ${COUNTIES[county].name}? Our experienced team provides:
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
};

// Generate county index page content
const generateCountyIndexPage = (county) => {
  const locations = COUNTIES[county].locations;
  const formattedCounty = COUNTIES[county].name;
  
  return `import Head from 'next/head';
import Layout from '../../../components/layout/Layout';
import Link from 'next/link';

export default function CountyIndex() {
  const locations = ${JSON.stringify(locations, null, 2)};
  
  return (
    <Layout>
      <Head>
        <title>Roofers in ${formattedCounty} | 52 Roofer</title>
        <meta name="description" content="Find local roofing services in ${formattedCounty}. Expert roofers for repairs, installations, and maintenance across all major towns and cities." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in ${formattedCounty}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 capitalize">
                {location.replace(/-/g, ' ')}
              </h2>
              <Link href={\`/locations/${county}/\${location}\`}
                    className="text-blue-600 hover:text-blue-800">
                View roofers in {location.replace(/-/g, ' ')}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}`;
};

// Generate locations index page
const generateLocationsIndex = () => {
  const content = `import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function LocationsIndex() {
  const counties = ${JSON.stringify(Object.entries(COUNTIES).map(([key, value]) => ({
    id: key,
    name: value.name,
    locationCount: value.locations.length
  })), null, 2)};
  
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
            <div key={county.id} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                {county.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {county.locationCount} locations available
              </p>
              <Link href={\`/locations/\${county.id}\`}
                    className="text-blue-600 hover:text-blue-800">
                View locations in {county.name}
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

// Generate all pages
const generateAllPages = () => {
  console.log('Generating location pages...');
  
  // Create base locations directory
  ensureDir('pages/locations');
  
  // Generate main index
  generateLocationsIndex();
  
  // Generate county and location pages
  Object.entries(COUNTIES).forEach(([county, data]) => {
    const countyDir = `pages/locations/${county}`;
    ensureDir(countyDir);
    
    // Generate county index
    fs.writeFileSync(
      path.join(countyDir, 'index.tsx'),
      generateCountyIndexPage(county)
    );
    console.log(`Created: ${countyDir}/index.tsx`);
    
    // Generate location pages
    data.locations.forEach(location => {
      fs.writeFileSync(
        path.join(countyDir, `${location}.tsx`),
        generateLocationPage(county, location)
      );
      console.log(`Created: ${countyDir}/${location}.tsx`);
    });
  });
};

// Clean up old files
const cleanupOldFiles = () => {
  console.log('\nCleaning up old files...');
  
  // Delete old location pages
  const oldFiles = fs.readdirSync('pages')
    .filter(f => f.startsWith('roofers-in-') && f.endsWith('.tsx'))
    .map(f => path.join('pages', f));
  
  oldFiles.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });
};

// Execute generation
console.log('Starting page generation...');
generateAllPages();
cleanupOldFiles();
console.log('\nPage generation complete!');
