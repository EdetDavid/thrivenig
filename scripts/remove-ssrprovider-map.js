const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), 'node_modules', '@react-aria', 'ssr', 'dist', 'SSRProvider.mjs');

try {
  if (!fs.existsSync(filePath)) {
    console.log('No SSRProvider.mjs file found at', filePath);
    process.exit(0);
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Remove any sourceMappingURL line that references SSRProvider.mjs.map
  const newContent = content.replace(/\r?\n?#\s*sourceMappingURL=SSRProvider\.mjs\.map\s*$/m, '');

  if (newContent === orig) {
    console.log('No sourceMappingURL line to remove.');
    process.exit(0);
  }

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Removed sourceMappingURL reference from', filePath);
} catch (err) {
  console.error('Error while trying to remove sourceMappingURL from SSRProvider.mjs:', err);
  process.exit(1);
}
