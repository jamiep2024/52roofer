import fetch from 'node-fetch';

async function countUrls() {
  try {
    const response = await fetch('http://localhost:3000/sitemap.xml');
    const data = await response.text();

    // Count total URLs
    const urlCount = (data.match(/<url>/g) || []).length;
    console.log(`Total URLs in sitemap: ${urlCount}`);

    // Count by type
    const locationPages = (data.match(/\/roofers-in-/g) || []).length;
    const servicePages = (data.match(/\/services\//g) || []).length;
    const blogPages = (data.match(/\/blog\//g) || []).length;
    const countyPages = (data.match(/\/county\//g) || []).length;
    const resourcePages = (data.match(/\/resources\//g) || []).length;
    const staticPages = urlCount - locationPages - servicePages - blogPages - countyPages - resourcePages;

    console.log('\nBreakdown:');
    console.log(`Location Pages: ${locationPages}`);
    console.log(`Service Pages: ${servicePages}`);
    console.log(`Blog Pages: ${blogPages}`);
    console.log(`County Pages: ${countyPages}`);
    console.log(`Resource Pages: ${resourcePages}`);
    console.log(`Static Pages: ${staticPages}`);

    // Calculate service combinations
    const locations = data.match(/\/roofers-in-([^"]+)/g) || [];
    const uniqueLocations = new Set(locations.map(loc => loc.replace('/roofers-in-', '')));
    const services = data.match(/\/services\/([^/]+)(?=\/)/g) || [];
    const uniqueServices = new Set(services.map(svc => svc.replace('/services/', '')));

    console.log('\nPotential Combinations:');
    console.log(`Unique Locations: ${uniqueLocations.size}`);
    console.log(`Unique Services: ${uniqueServices.size}`);
    console.log(`Total Service+Location Combinations: ${uniqueLocations.size * uniqueServices.size}`);

  } catch (error) {
    console.error('Error fetching sitemap:', error.message);
  }
}

countUrls();
