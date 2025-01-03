const fs = require('fs');
const path = require('path');

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper function to copy file with directory creation
function copyFile(sourcePath, targetPath) {
  try {
    ensureDirectoryExists(path.dirname(targetPath));
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${sourcePath} -> ${targetPath}`);
    }
  } catch (error) {
    console.error(`Error copying file ${sourcePath}:`, error);
  }
}

function copyAndStandardize() {
  console.log('Starting file organization...\n');
  
  const pagesDir = path.join(process.cwd(), 'pages');
  ensureDirectoryExists(pagesDir);

  // Create necessary directories
  ['locations', 'services', 'blog', 'resources'].forEach(dir => {
    ensureDirectoryExists(path.join(pagesDir, dir));
  });

  // Track all files we process
  const processedFiles = new Set();

  try {
    // 1. First copy all files to their new locations
    console.log('Copying files to new locations...\n');

    // Handle roofers-in-* pages
    const files = fs.readdirSync(pagesDir);
    files.forEach(file => {
      if (file.startsWith('roofers-in-')) {
        const location = file
          .replace('roofers-in-', '')
          .replace('.tsx', '')
          .replace('.js', '');
        const sourcePath = path.join(pagesDir, file);
        const targetPath = path.join(pagesDir, 'locations', `${location}.tsx`);
        copyFile(sourcePath, targetPath);
        processedFiles.add(sourcePath);
      }
    });

    // Handle service pages
    const servicesDir = path.join(pagesDir, 'services');
    if (fs.existsSync(servicesDir)) {
      const serviceFiles = fs.readdirSync(servicesDir);
      serviceFiles.forEach(file => {
        if (!file.includes('[') && (file.endsWith('.js') || file.endsWith('.tsx'))) {
          const sourcePath = path.join(servicesDir, file);
          const newName = file
            .replace('.js', '.tsx')
            .replace(/(-new|-template)/, '');
          const targetPath = path.join(servicesDir, newName);
          
          if (sourcePath !== targetPath) {
            copyFile(sourcePath, targetPath);
            processedFiles.add(sourcePath);
          }
        }
      });

      // Handle nested service+location pages
      const nestedServiceDir = path.join(servicesDir, 'roofing-companies-near-me');
      if (fs.existsSync(nestedServiceDir)) {
        const nestedFiles = fs.readdirSync(nestedServiceDir);
        nestedFiles.forEach(file => {
          const sourcePath = path.join(nestedServiceDir, file);
          const targetPath = path.join(pagesDir, 'locations', file);
          copyFile(sourcePath, targetPath);
          processedFiles.add(sourcePath);
        });
      }
    }

    // Handle blog pages
    const blogDir = path.join(pagesDir, 'blog');
    if (fs.existsSync(blogDir)) {
      const blogFiles = fs.readdirSync(blogDir);
      blogFiles.forEach(file => {
        if (file.endsWith('.js')) {
          const sourcePath = path.join(blogDir, file);
          const targetPath = path.join(blogDir, file.replace('.js', '.tsx'));
          copyFile(sourcePath, targetPath);
          processedFiles.add(sourcePath);
        }
      });
    }

    // 2. Remove old files
    console.log('\nRemoving old files...');
    processedFiles.forEach(file => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`Removed: ${file}`);
      }
    });

    // 3. Clean up empty directories
    console.log('\nCleaning up empty directories...');
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

    console.log('\nFile organization complete!');
  } catch (error) {
    console.error('Error during file organization:', error);
  }
}

// Run the script
copyAndStandardize();
