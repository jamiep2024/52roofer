const fs = require('fs');
const path = require('path');

function countPages(dir) {
    let count = 0;
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (!item.startsWith('_') && item !== 'api') { // Skip _app.tsx, _document.tsx, and api directory
                count += countPages(fullPath);
            }
        } else if (item.endsWith('.tsx') && !item.startsWith('_')) {
            // Count only .tsx files that aren't special Next.js files
            console.log(fullPath.replace(process.cwd(), ''));
            count++;
        }
    }
    
    return count;
}

const pagesDir = path.join(process.cwd(), 'pages');
const totalPages = countPages(pagesDir);
console.log(`\nTotal number of pages: ${totalPages}`);
