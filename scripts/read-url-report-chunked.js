const fs = require('fs');

function readReportChunked(section, chunkSize = 50, chunkNumber = 1) {
    try {
        const report = JSON.parse(fs.readFileSync('url-check-report.json', 'utf8'));
        
        if (section === 'notFound') {
            const notFoundUrls = report.notFound;
            const totalUrls = notFoundUrls.length;
            const totalChunks = Math.ceil(totalUrls / chunkSize);
            
            // Calculate start and end indices for the requested chunk
            const start = (chunkNumber - 1) * chunkSize;
            const end = Math.min(start + chunkSize, totalUrls);
            
            // Get the URLs for this chunk
            const chunkUrls = notFoundUrls.slice(start, end);
            
            console.log(`\n=== 404 Not Found (Chunk ${chunkNumber}/${totalChunks}) ===`);
            console.log(`Showing URLs ${start + 1}-${end} of ${totalUrls}\n`);
            console.log(JSON.stringify(chunkUrls, null, 2));
            
            // Print navigation help
            console.log('\nTo view other chunks:');
            console.log(`node read-url-report-chunked.js notFound ${chunkSize} <chunk-number>`);
            console.log(`Available chunks: 1-${totalChunks}`);
        }
        else {
            console.log('Usage: node read-url-report-chunked.js notFound [chunk-size] [chunk-number]');
            console.log('Default chunk size: 50');
            console.log('Default chunk number: 1');
        }
    } catch (error) {
        console.error('Error reading report:', error.message);
    }
}

const section = process.argv[2];
const chunkSize = parseInt(process.argv[3]) || 50;
const chunkNumber = parseInt(process.argv[4]) || 1;

readReportChunked(section, chunkSize, chunkNumber);
