const http = require('http');

http.get('http://localhost:3000/sitemap.xml', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const urlCount = (data.match(/<url>/g) || []).length;
    console.log(`Total URLs in sitemap: ${urlCount}`);
    
    // Count by section
    const mainPages = (data.match(/<!-- Main Pages -->[\s\S]*?<!-- Blog Pages -->/g) || []).toString().match(/<url>/g).length;
    const blogPages = (data.match(/<!-- Blog Pages -->[\s\S]*?<!-- Service Pages -->/g) || []).toString().match(/<url>/g).length;
    const servicePages = (data.match(/<!-- Service Pages -->[\s\S]*?<!-- Resources Pages -->/g) || []).toString().match(/<url>/g).length;
    const resourcePages = (data.match(/<!-- Resources Pages -->[\s\S]*?<!-- County Pages -->/g) || []).toString().match(/<url>/g).length;
    const countyPages = (data.match(/<!-- County Pages -->[\s\S]*?<!-- Major Cities -->/g) || []).toString().match(/<url>/g).length;
    const majorCityPages = (data.match(/<!-- Major Cities -->[\s\S]*?<!-- Location Pages -->/g) || []).toString().match(/<url>/g).length;
    const locationPages = (data.match(/<!-- Location Pages -->[\s\S]*?<\/urlset>/g) || []).toString().match(/<url>/g).length;
    
    console.log('\nBreakdown:');
    console.log(`Main Pages: ${mainPages}`);
    console.log(`Blog Pages: ${blogPages}`);
    console.log(`Service Pages: ${servicePages}`);
    console.log(`Resource Pages: ${resourcePages}`);
    console.log(`County Pages: ${countyPages}`);
    console.log(`Major City Pages: ${majorCityPages}`);
    console.log(`Location Pages: ${locationPages}`);
  });
}).on('error', (err) => {
  console.error('Error fetching sitemap:', err.message);
});
