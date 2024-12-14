const fs = require('fs');
const path = require('path');

function getAllPages(dir) {
    const pages = [];
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Skip node_modules, .next, and other non-page directories
            if (!['node_modules', '.next', 'api', 'components', 'styles', 'public', 'scripts', 'types', 'utils', 'config', 'data'].includes(file)) {
                pages.push(...getAllPages(fullPath));
            }
        } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
            // Convert file path to URL path
            let urlPath = fullPath
                .replace(process.cwd() + '/pages', '') // Remove pages directory
                .replace('.tsx', '') // Remove extension
                .replace('/index', ''); // Remove index
            
            // Convert [param].tsx to proper format
            urlPath = urlPath.replace(/\[([^\]]+)\]/g, ':$1');
            
            pages.push(urlPath);
        }
    });
    
    return pages;
}

const pagesDir = path.join(process.cwd(), 'pages');
const allPages = getAllPages(pagesDir);

console.log('Total pages found:', allPages.length);
console.log('\nAll pages:');
allPages.forEach(page => console.log(page));
