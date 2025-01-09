const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../pages');
const directoriesToProcess = [
  'pages', 
  'components',
  'utils',
  'data',
  'public',
  'services'
];

const dynamicRoutePatterns = [
  /\[.*?\]/, // Matches [slug], [id], etc.
  /\[\[.*?\]\]/, // Matches [[...slug]]
  /\.\.\./ // Matches ...rest patterns
];

function isDynamicRoute(fileName) {
  return dynamicRoutePatterns.some(pattern => pattern.test(fileName));
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (stat.isFile() && 
              (file.endsWith('.tsx') || 
               file.endsWith('.js') ||
               file.endsWith('.ts') ||
               file.endsWith('.json') ||
               file.endsWith('.css') ||
               file.endsWith('.scss') ||
               file.endsWith('.svg'))) {
      
      // Handle dynamic routes differently
      if (isDynamicRoute(file)) {
        processDynamicRoute(filePath, file);
        return;
      }

      const fileName = path.parse(file).name;
      const newDir = path.join(dirPath, fileName);
      const newFilePath = path.join(newDir, 'index' + path.extname(file));

      // Create new directory
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir);
      }

      // Read and clean file content
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Update imports and references
      content = updateFileReferences(content, filePath, newFilePath);

      // Write cleaned content to new file
      fs.writeFileSync(newFilePath, content);

      // Remove original file
      fs.unlinkSync(filePath);
    }
  });
}

function processDynamicRoute(filePath, fileName) {
  // Preserve dynamic route structure
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = updateFileReferences(content, filePath, filePath);
  fs.writeFileSync(filePath, updatedContent);
}

function updateFileReferences(content, oldPath, newPath) {
  // Update relative imports
  const relativePath = path.relative(path.dirname(newPath), oldPath);
  content = content.replace(
    new RegExp(`from ['"]${relativePath}['"]`, 'g'),
    `from './${path.basename(newPath)}'`
  );

  // Update component references
  const componentName = path.basename(oldPath, path.extname(oldPath));
  content = content.replace(
    new RegExp(`<${componentName}`, 'g'),
    `<${path.basename(newPath, path.extname(newPath))}`
  );

  // Clean up links and router pushes
  content = content.replace(/Link.*?href=.*?>/g, '');
  content = content.replace(/Router.*?push\(.*?\)/g, '');

  return content;
}

directoriesToProcess.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    processDirectory(dirPath);
  }
});

console.log('All pages reorganized successfully');
