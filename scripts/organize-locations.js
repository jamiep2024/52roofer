const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../pages/locations');

function createLocationStructure(filePath) {
  const fileName = path.basename(filePath);
  const locationName = fileName.replace('.tsx', '');
  
  // Create directory for location
  const newDir = path.join(locationsDir, locationName);
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true });
  }

  // Move file to new directory and rename to index.tsx
  const newFilePath = path.join(newDir, 'index.tsx');
  fs.renameSync(filePath, newFilePath);

  // Clean up file content
  let content = fs.readFileSync(newFilePath, 'utf8');
  
  // Remove all linking/references
  content = content.replace(/<Link.*?<\/Link>/gs, '');
  content = content.replace(/<a.*?<\/a>/gs, '');
  content = content.replace(/<meta.*?og:url.*?\/>/g, '');
  content = content.replace(/<link.*?canonical.*?\/>/g, '');
  
  fs.writeFileSync(newFilePath, content);
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && filePath.endsWith('.tsx') && !filePath.includes('index.tsx')) {
      createLocationStructure(filePath);
    }
  });
}

processDirectory(locationsDir);
console.log('Location files organized successfully');
