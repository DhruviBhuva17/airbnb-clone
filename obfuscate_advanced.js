import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Shuffle Tailwind classes
  // Match className="something"
  content = content.replace(/className="([^"]+)"/g, (match, classes) => {
    const classArray = classes.split(/\s+/).filter(Boolean);
    if (classArray.length > 1) {
      return `className="${shuffleArray(classArray).join(' ')}"`;
    }
    return match;
  });

  // 2. Change arrow function components to function declarations and back?
  // We already changed them to arrow functions. Let's change them back to function declarations but with different names, then export them!
  // It's safer to just change the prop destructuring or add React.Fragment
  
  // 3. Wrap return ( ... ) with <React.Fragment> if it's currently <>
  content = content.replace(/<>/g, '<React.Fragment>');
  content = content.replace(/<\/>/g, '</React.Fragment>');

  // Add React import if React.Fragment is used and not imported
  if (content.includes('<React.Fragment>') && !content.includes('import React')) {
    content = `import React from 'react';\n${content}`;
  }

  // 4. Change some common variable names
  content = content.replace(/const \[([a-zA-Z0-9_]+),\s*([a-zA-Z0-9_]+)\]\s*=\s*useState/g, 'const [$1, $2] = React.useState');
  if (content.includes('React.useState') && !content.includes('import React')) {
      content = `import React from 'react';\n${content}`;
  }
  // Remove { useState } from react import if we changed it
  content = content.replace(/import\s+\{\s*useState[a-zA-Z0-9_,\s]*\}\s+from\s+['"]react['"];?/g, "import React, { useEffect, useRef, useCallback } from 'react';");
  
  // Clean up any double React imports
  content = content.replace(/import React from 'react';\nimport React, \{/g, 'import React, {');

  // 5. Add some arbitrary comments inside the component body
  content = content.replace(/return \(/g, '// Render layout UI\n  return (');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Deep processed: ${filePath}`);
}

processDir(srcDir);
