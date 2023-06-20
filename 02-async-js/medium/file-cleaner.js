const fs = require('fs');
const filePath = 'fileCleaner.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        
      console.error('Error reading file:', err);
      return;
    }
    const processedData = data.replace(/\s+/g, ' ');

  fs.writeFile(filePath, processedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Extra spaces removed successfully.');
  });

})
