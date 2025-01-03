const fs = require('fs');
const path = require('path');

// Core services we want to keep
const CORE_SERVICES = {
  'emergency-roof-repairs': 'Emergency Roof Repairs',
  'roof-repair': 'Roof Repair',
  'roof-installation': 'Roof Installation',
  'roof-maintenance': 'Roof Maintenance',
  'gutter-services': 'Gutter Services',
  'roof-inspection': 'Roof Inspection',
  'roof-replacement': 'Roof Replacement',
  'commercial-roofing': 'Commercial Roofing',
  'residential-roofing': 'Residential Roofing',
  'roof-ventilation': 'Roof Ventilation',
  'skylight-installation': 'Skylight Installation'
};

// Generate service page content
const generateServicePage = (service, title) => {
  return `import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>${title} | Professional Roofing Services | 52 Roofer</title>
        <meta name="description" content="Expert ${title.toLowerCase()} services across the UK. Professional, reliable, and affordable roofing solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional ${title} Services</h2>
          <p className="mb-4">
            Looking for reliable ${title.toLowerCase()} services? Our experienced team provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 emergency service</li>
            <li>Free inspections and quotes</li>
            <li>Expert workmanship</li>
            <li>Full warranty coverage</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}`;
};

// Generate services index page
const generateServicesIndex = () => {
  const content = `import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function ServicesIndex() {
  const services = ${JSON.stringify(CORE_SERVICES, null, 2)};
  
  return (
    <Layout>
      <Head>
        <title>Professional Roofing Services | 52 Roofer</title>
        <meta name="description" content="Comprehensive roofing services including repairs, installations, maintenance, and emergency services. Expert roofers across the UK." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Roofing Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([slug, title]) => (
            <div key={slug} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                {title}
              </h2>
              <Link href={\`/services/\${slug}\`}
                    className="text-blue-600 hover:text-blue-800">
                Learn more about {title.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}`;

  fs.writeFileSync('pages/services/index.tsx', content);
  console.log('Created: pages/services/index.tsx');
};

// Clean up and standardize services
const cleanupServices = () => {
  console.log('Cleaning up service pages...');

  // Create services directory if it doesn't exist
  if (!fs.existsSync('pages/services')) {
    fs.mkdirSync('pages/services', { recursive: true });
  }

  // Generate core service pages
  Object.entries(CORE_SERVICES).forEach(([service, title]) => {
    const content = generateServicePage(service, title);
    fs.writeFileSync(`pages/services/${service}.tsx`, content);
    console.log(`Created: pages/services/${service}.tsx`);
  });

  // Generate index page
  generateServicesIndex();

  // Delete old/duplicate service pages
  const filesToDelete = [
    'emergency-roofing.tsx',
    'near-me.tsx',
    'roof-installation-costs.tsx',
    'roof-maintenance-tips.tsx',
    'roofing-faqs.tsx',
    'roofing-firms-near-me.tsx',
    'roofing-construction.tsx',
    'roofing-contractors.tsx',
    'roofing-companies-near-me.tsx',
    'roof-repair-schema.js',
    'emergency-roof-repairs-new.tsx',
    'advanced-roofing.tsx',
    'apex-roofing.tsx',
    'conversational-roofing-template.tsx',
    'voice-roofing-services.tsx',
    'voice-roof-repairs.tsx',
    'voice-roof-installation.tsx'
  ].map(file => path.join('pages/services', file));

  filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });

  // Delete any .js versions of service pages
  fs.readdirSync('pages/services')
    .filter(f => f.endsWith('.js'))
    .forEach(file => {
      const filePath = path.join('pages/services', file);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    });
};

// Count pages
const countPages = () => {
  console.log('\nCounting pages by type...');

  const counts = {
    locations: 0,
    services: 0,
    blog: 0,
    other: 0
  };

  const countInDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        countInDir(fullPath);
      } else if (file.endsWith('.tsx') && !file.startsWith('_') && !file.startsWith('[')) {
        if (dir.includes('/locations/')) {
          counts.locations++;
        } else if (dir.includes('/services/')) {
          counts.services++;
        } else if (dir.includes('/blog/')) {
          counts.blog++;
        } else {
          counts.other++;
        }
      }
    });
  };

  countInDir('pages');

  console.log('Page counts:');
  console.log('- Locations:', counts.locations);
  console.log('- Services:', counts.services);
  console.log('- Blog:', counts.blog);
  console.log('- Other:', counts.other);
  console.log('Total:', Object.values(counts).reduce((a, b) => a + b, 0));
};

// Execute cleanup
console.log('Starting service page cleanup...');
cleanupServices();
countPages();
console.log('\nService page cleanup complete!');
