const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Valid test values
const TEST_VALUES = {
    county: 'oxfordshire',
    city: 'reading',
    service: 'roofing-companies-near-me' // Updated to use a valid service
};

async function getFiles(dir) {
    const items = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(items.map(item => {
        const res = path.resolve(dir, item.name);
        return item.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function checkUrl(url) {
    const instance = axios.create({
        timeout: 10000,
        maxRedirects: 0,
        validateStatus: null,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });

    try {
        const response = await instance.get(url);
        return {
            url,
            status: response.status,
            statusText: response.statusText,
            redirectUrl: response.headers.location,
            isOk: response.status >= 200 && response.status < 400
        };
    } catch (error) {
        if (error.response) {
            return {
                url,
                status: error.response.status,
                statusText: error.response.statusText,
                redirectUrl: error.response.headers?.location,
                isOk: false
            };
        }
        return {
            url,
            status: 'ERROR',
            statusText: error.code || error.message,
            isOk: false
        };
    }
}

async function main() {
    try {
        console.log('Waiting for server to be fully ready...');
        await delay(5000); // Wait 5 seconds for server to be ready

        console.log('Testing server connection...');
        try {
            await axios.get('http://localhost:3000', { timeout: 5000 });
            console.log('Server is responding ✓\n');
        } catch (error) {
            console.error('Error: Server is not responding at http://localhost:3000');
            console.error('Please ensure the Next.js development server is running with `npm run dev`');
            process.exit(1);
        }

        const pagesDir = path.join(process.cwd(), 'pages');
        const files = await getFiles(pagesDir);
        
        const urls = files
            .filter(file => {
                const isPage = file.endsWith('.tsx') || file.endsWith('.ts');
                const isNotApiRoute = !file.includes('/api/');
                const isNotApp = !file.includes('_app.');
                const isNotDocument = !file.includes('_document.');
                const isNotSitemap = !file.includes('sitemap.xml.');
                return isPage && isNotApiRoute && isNotApp && isNotDocument && isNotSitemap;
            })
            .map(file => {
                let url = file
                    .replace(pagesDir, '')
                    .replace(/\.[^/.]+$/, '')
                    .replace(/\/index$/, '');
                
                // Handle dynamic routes with valid test values
                url = url
                    .replace(/\[slug\]/g, (match, offset, string) => {
                        // Use county for county routes, city for others
                        return string.includes('/county/') ? TEST_VALUES.county : TEST_VALUES.city;
                    })
                    .replace(/\[service\]/g, TEST_VALUES.service)
                    .replace(/\[location\]/g, TEST_VALUES.city);
                
                return 'http://localhost:3000' + url;
            });

        console.log(`Found ${urls.length} URLs to check\n`);

        const results = {
            ok: [],
            notFound: [],
            redirects: [],
            errors: []
        };

        for (const url of urls) {
            process.stdout.write(`Checking ${url}... `);
            const result = await checkUrl(url);
            
            if (result.status >= 200 && result.status < 300) {
                results.ok.push(result);
                console.log('✓ OK');
            } else if (result.status === 404) {
                results.notFound.push(result);
                console.log('✗ 404 Not Found');
            } else if (result.status >= 300 && result.status < 400) {
                results.redirects.push(result);
                console.log(`→ ${result.status} Redirect to ${result.redirectUrl}`);
            } else {
                results.errors.push(result);
                console.log(`✗ Error (${result.status}: ${result.statusText})`);
            }
            
            await delay(100);
        }

        console.log('\nSummary:');
        console.log('========');
        console.log(`OK: ${results.ok.length}`);
        console.log(`404 Not Found: ${results.notFound.length}`);
        console.log(`Redirects: ${results.redirects.length}`);
        console.log(`Errors: ${results.errors.length}`);

        if (results.notFound.length > 0) {
            console.log('\n404 Not Found Pages:');
            results.notFound.forEach(r => console.log(`- ${r.url}`));
        }

        if (results.redirects.length > 0) {
            console.log('\nRedirects:');
            results.redirects.forEach(r => console.log(`- ${r.url} → ${r.redirectUrl}`));
        }

        if (results.errors.length > 0) {
            console.log('\nErrors:');
            results.errors.forEach(r => console.log(`- ${r.url} (${r.status}: ${r.statusText})`));
        }

    } catch (error) {
        console.error('Script error:', error);
    }
}

main();
