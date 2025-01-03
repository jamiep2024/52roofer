const fs = require('fs').promises;
const path = require('path');

async function fixLocationPages() {
  const locationMoves = [
    // Wiltshire locations
    ['warminster-wiltshire', 'roofers-in-warminster-wiltshire'],
    ['marlborough-wiltshire', 'roofers-in-marlborough-wiltshire'],
    ['chippenham-wiltshire', 'roofers-in-chippenham-wiltshire'],
    ['devizes-wiltshire', 'roofers-in-devizes-wiltshire'],
    ['melksham-wiltshire', 'roofers-in-melksham-wiltshire'],
    ['trowbridge-wiltshire', 'roofers-in-trowbridge-wiltshire'],
    ['bradford-on-avon-wiltshire', 'roofers-in-bradford-on-avon-wiltshire'],
    ['westbury-wiltshire', 'roofers-in-westbury-wiltshire'],
    ['calne-wiltshire', 'roofers-in-calne-wiltshire'],
    ['salisbury-wiltshire', 'roofers-in-salisbury-wiltshire'],
    
    // Oxford locations
    ['cowley-oxford', 'roofers-in-cowley-oxford'],
    ['headington-oxford', 'roofers-in-headington-oxford'],
    ['wolvercote-oxford', 'roofers-in-wolvercote-oxford'],
    ['jericho-oxford', 'roofers-in-jericho-oxford'],
    ['marston-oxford', 'roofers-in-marston-oxford'],
    ['botley-oxford', 'roofers-in-botley-oxford'],
    ['rose-hill-oxford', 'roofers-in-rose-hill-oxford'],
    ['iffley-oxford', 'roofers-in-iffley-oxford'],
    ['blackbird-leys-oxford', 'roofers-in-blackbird-leys-oxford'],
    ['summertown-oxford', 'roofers-in-summertown-oxford']
  ];

  console.log('Fixing location pages...');
  
  for (const [oldSlug, newSlug] of locationMoves) {
    try {
      // Check if old location page exists
      const oldPath = path.join('pages', 'locations', `${oldSlug}.tsx`);
      const newPath = path.join('pages', `${newSlug}.tsx`);
      
      try {
        await fs.access(oldPath);
        // Move the file if it exists
        await fs.rename(oldPath, newPath);
        console.log(`Moved ${oldPath} to ${newPath}`);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // If old file doesn't exist, create new one from template
          const template = `
import LocationLandingPage from '../components/LocationLandingPage';
import { locationData } from '../data/locationData';

export default function LocationPage() {
  const location = locationData['${oldSlug}'];
  return <LocationLandingPage location={location} />;
}`;
          await fs.writeFile(newPath, template);
          console.log(`Created new location page: ${newPath}`);
        }
      }
    } catch (err) {
      console.error(`Error processing ${oldSlug}:`, err);
    }
  }
}

async function fixServicePages() {
  const jsToTsxFiles = [
    'roofing-faqs',
    'roof-repair',
    'roof-maintenance-tips',
    'roof-installation-costs',
    'emergency-roofing',
    'near-me'
  ];

  console.log('Fixing service pages...');

  for (const service of jsToTsxFiles) {
    try {
      const oldPath = path.join('pages', 'services', `${service}.js`);
      const newPath = path.join('pages', 'services', `${service}.tsx`);

      try {
        await fs.access(oldPath);
        // If .js file exists, rename it to .tsx
        await fs.rename(oldPath, newPath);
        console.log(`Renamed ${oldPath} to ${newPath}`);
      } catch (err) {
        if (err.code === 'ENOENT') {
          // If file doesn't exist, create new one from template
          const template = `
import ServiceLayout from '../../components/ServiceLayout';
import { serviceData } from '../../data/serviceData';

export default function ServicePage() {
  const service = serviceData['${service}'];
  return <ServiceLayout service={service} />;
}`;
          await fs.writeFile(newPath, template);
          console.log(`Created new service page: ${newPath}`);
        }
      }
    } catch (err) {
      console.error(`Error processing ${service}:`, err);
    }
  }
}

async function main() {
  try {
    await fixLocationPages();
    await fixServicePages();
    console.log('Completed fixing 404 pages');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
