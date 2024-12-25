const fs = require('fs');

function readReport(section) {
    try {
        const report = JSON.parse(fs.readFileSync('url-check-report.json', 'utf8'));
        
        if (section === 'summary') {
            console.log('\n=== Summary ===');
            console.log(JSON.stringify(report.summary, null, 2));
        }
        else if (section === 'redirects') {
            console.log('\n=== Redirects ===');
            console.log(JSON.stringify(report.redirects, null, 2));
        }
        else if (section === 'notFound') {
            console.log('\n=== 404 Not Found ===');
            console.log(JSON.stringify(report.notFound, null, 2));
        }
        else if (section === 'otherErrors') {
            console.log('\n=== Other Errors ===');
            console.log(JSON.stringify(report.otherErrors, null, 2));
        }
        else {
            console.log('Available sections: summary, redirects, notFound, otherErrors');
            console.log('Usage: node read-url-report.js <section>');
        }
    } catch (error) {
        console.error('Error reading report:', error.message);
    }
}

const section = process.argv[2];
readReport(section);
