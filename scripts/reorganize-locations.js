const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../pages/locations');

// Get all location files
const files = fs.readdirSync(locationsDir).filter(file => {
  return file.endsWith('.tsx') && !file.startsWith('[') && !file.startsWith('index');
});

// Create directories and move files
files.forEach(file => {
  const locationName = file
    .replace('roofers-in-', '')
    .replace('.tsx', '')
    .replace(/-/g, ' ');
  
  // Create directory
  const dirName = locationName.replace(/ /g, '-');
  const dirPath = path.join(locationsDir, dirName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Move file
  const oldPath = path.join(locationsDir, file);
  const newPath = path.join(dirPath, 'index.tsx');
  fs.renameSync(oldPath, newPath);
  
  console.log(`Moved ${file} to ${dirName}/index.tsx`);
});

console.log('Reorganization complete!');
