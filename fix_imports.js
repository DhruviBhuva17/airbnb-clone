import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix double React imports
      // Remove `import React from "react";` or `import React from 'react';`
      // if there's also `import React, { ... } from "react";`
      const reactImportRegex = /import\s+React\s+from\s+['"]react['"];?/g;
      const reactDestructImportRegex = /import\s+React\s*,\s*\{[^}]+\}\s+from\s+['"]react['"];?/g;
      
      if (reactImportRegex.test(content) && reactDestructImportRegex.test(content)) {
          // If both exist, keep the destructured one
          content = content.replace(reactImportRegex, '');
      } else {
          // If multiple simple React imports exist
          const matches = content.match(reactImportRegex);
          if (matches && matches.length > 1) {
              for (let i = 1; i < matches.length; i++) {
                 content = content.replace(matches[i], '');
              }
          }
      }
      
      // Remove double blank lines created
      content = content.replace(/\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(srcDir);
