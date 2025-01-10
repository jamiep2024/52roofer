const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../pages/services');

function convertFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Add TypeScript types
    const updatedContent = content.replace(
        'export default function Page() {',
        `import { NextPage } from 'next';

export const Page: NextPage = () => {`
    );
    
    // Write updated content
    fs.writeFileSync(filePath, updatedContent);
    
    // Rename file to .tsx
    const newPath = filePath.replace(/\.js$/, '.tsx');
    fs.renameSync(filePath, newPath);
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.js')) {
            convertFile(filePath);
        }
    });
}

processDirectory(servicesDir);
console.log('Conversion complete!');
