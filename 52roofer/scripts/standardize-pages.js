const fs = require('fs');
const path = require('path');

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper function to move file with directory creation
function moveFile(oldPath, newPath) {
  try {
    ensureDirectoryExists(path.dirname(newPath));
    if (fs.existsSync(oldPath)) {
      const content = fs.readFileSync(oldPath, 'utf8');
      fs.writeFileSync(newPath, content);
      fs.unlinkSync(oldPath);
      console.log(`Moved: ${oldPath} -> ${newPath}`);
    }
  } catch (error) {
    console.error(`Error moving file ${oldPath}:`, error);
  }
}

// Helper function to convert file name to URL-friendly format
function toUrlFriendly(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Main function to standardize pages
function standardizePages() {
  console.log('Starting page standardization...\n');
  
  const pagesDir = path.join(process.cwd(), 'pages');
  ensureDirectoryExists(pagesDir);

  // Create necessary directories
  ['locations', 'services', 'blog', 'resources'].forEach(dir => {
    ensureDirectoryExists(path.join(pagesDir, dir));
  });

  try {
    const files = fs.readdirSync(pagesDir);

    // 1. Move roofers-in-* pages to locations/
    files.forEach(file => {
      if (file.startsWith('roofers-in-')) {
        const location = file
          .replace('roofers-in-', '')
          .replace('.tsx', '')
          .replace('.js', '');
        const oldPath = path.join(pagesDir, file);
        const newPath = path.join(pagesDir, 'locations', `${location}.tsx`);
        moveFile(oldPath, newPath);
      }
    });

    // 2. Move and standardize service pages
    const servicesDir = path.join(pagesDir, 'services');
    if (fs.existsSync(servicesDir)) {
      const serviceFiles = fs.readdirSync(servicesDir);
      serviceFiles.forEach(file => {
        if (!file.includes('[') && (file.endsWith('.js') || file.endsWith('.tsx'))) {
          const oldPath = path.join(servicesDir, file);
          const newName = file
            .replace('.js', '.tsx')
            .replace(/(-new|-template)/, '');
          const newPath = path.join(servicesDir, newName);
          
          if (oldPath !== newPath) {
            moveFile(oldPath, newPath);
          }
        }
      });

      // Handle nested service+location pages
      const nestedServiceDir = path.join(servicesDir, 'roofing-companies-near-me');
      if (fs.existsSync(nestedServiceDir)) {
        const nestedFiles = fs.readdirSync(nestedServiceDir);
        nestedFiles.forEach(file => {
          const oldPath = path.join(nestedServiceDir, file);
          const newPath = path.join(pagesDir, 'locations', file);
          moveFile(oldPath, newPath);
        });
      }
    }

    // 3. Move and standardize location pages
    const locationFiles = fs.readdirSync(path.join(pagesDir, 'locations'));
    locationFiles.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.js')) {
        const oldPath = path.join(pagesDir, 'locations', file);
        const newPath = path.join(pagesDir, 'locations', file.replace('.js', '.tsx'));
        if (oldPath !== newPath) {
          moveFile(oldPath, newPath);
        }
      }
    });

    // 4. Clean up empty directories
    function removeEmptyDirs(directory) {
      const items = fs.readdirSync(directory);
      items.forEach(item => {
        const fullPath = path.join(directory, item);
        if (fs.statSync(fullPath).isDirectory()) {
          removeEmptyDirs(fullPath);
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmdirSync(fullPath);
            console.log(`Removed empty directory: ${fullPath}`);
          }
        }
      });
    }

    removeEmptyDirs(pagesDir);

    console.log('\nPage standardization complete!');
  } catch (error) {
    console.error('Error during standardization:', error);
  }
}

// Run the standardization
standardizePages();
