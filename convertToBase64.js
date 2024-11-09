const fs = require('fs');
const path = require('path');

// Replace 'logo.svg' with the name of your SVG file
const filePath = path.join(__dirname, '/public/images/logo/ocean1.svg');


// Read and convert SVG to base64
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const base64 = Buffer.from(data).toString('base64');
  console.log(`data:image/svg+xml;base64,${base64}`);
});
