let fs = require('fs');

// Synchronous Code
console.log("hello");

let data = fs.readFileSync('index.md', 'utf8');
console.log('reading file synchronously: ', data);

// Asynchronous Code
setTimeout(() => {
    console.log(fs.readFile('content.md', 'utf8', (err, content) => {
        err ? console.log(err) : console.log('\nreading file asynchronously: ', content);
    }));
}, 1200);

// New Buffer
let buff1 = Buffer.alloc(10);
console.log('\n', buff1);
buff1 = "Welcome to Buffer";
console.log(`Updated buffer: ${buff1}`);