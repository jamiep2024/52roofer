const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../pages/services');
const template = `import ServiceLayout from '../../components/ServiceLayout';
import SchemaMarkup from '../../components/SchemaMarkup';

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in [Location] | 52Roofer',
    description: 'Professional [service] services in [Location]. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/[service]/roofers-in-[location]'
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "52Roofer",
    "url": "https://52roofer.com/services/[service]/roofers-in-[location]",
    "description": "Professional [service] services in [Location]. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
    "areaServed": "[Location]",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/52roofer",
      "https://twitter.com/52roofer"
    ]
  };

  return (
    <ServiceLayout meta={meta}>
      <SchemaMarkup schema={schema} />
      <h1>[Service] Services in {meta.title.split('|')[0].trim()}</h1>
      <p>Our expert team provides comprehensive [service] services in [Location], including:</p>
      <ul>
        <li>Roof repairs and maintenance</li>
        <li>Complete roof replacements</li>
        <li>Emergency roofing services</li>
        <li>Roof inspections and assessments</li>
      </ul>
      <p>Contact us today for a free estimate!</p>
    </ServiceLayout>
  );
};

export default ServiceLocationPage;
`;

function updateServicePages() {
  const services = ['residential-roofing', 'roof-inspection', 'roof-maintenance', 'roof-repairs', 'roof-replacement'];

  services.forEach(service => {
    const serviceDir = path.join(servicesDir, service);
    
    // Ensure directory exists
    if (!fs.existsSync(serviceDir)) {
      console.warn(`Directory not found: ${serviceDir}`);
      return;
    }

    const files = fs.readdirSync(serviceDir);

    files.forEach(file => {
      if (file.endsWith('.tsx') && file !== 'index.tsx') {
        try {
          const location = file.replace('.tsx', '');
          
          // Format location name properly
          const locationFormatted = location
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/[^a-zA-Z0-9\s]/g, ''); // Remove special chars

          const serviceName = service
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());

          const content = template
            .replace(/\[Location\]/g, locationFormatted)
            .replace(/\[location\]/g, location)
            .replace(/\[service\]/g, serviceName);

          const filePath = path.join(serviceDir, file);
          fs.writeFileSync(filePath, content);
          console.log(`Updated: ${filePath}`);
        } catch (error) {
          console.error(`Error updating ${file}:`, error.message);
        }
      }
    });
  });
}

updateServicePages();
