import fs from 'node:fs'
import path from 'path'
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question(`What's leetcode number? `, number => {
// 
//     rl.question(`What's the problem name? `, name => {
//         const problemTitle = `${number} ${name}`
// 
//         copyFile('example.md', '../test dir/example.md', (err) => {
//             console.error('File Copying Error:', err)
//         });
// 
//         rl.close();
//     });
// 
// });
//


const sourceFile = path.join(__dirname,'example.md')
const destinationFile = path.join(__dirname, '../test dir/example.md')

fs.readFile(sourceFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${sourceFile}:`, err);
    return;
  }

  // Write the content to the destination file
  fs.writeFile(destinationFile, data, (err) => {
    if (err) {
      console.error(`Error writing to ${destinationFile}:`, err);
      return;
    }
    console.log(`Successfully copied ${sourceFile} to ${destinationFile}`);
  });
});
