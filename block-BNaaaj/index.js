let os = require('os');
let { readFile, unlink, readFileSync } = require('fs');
// 1. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?

console.log('Welcome to Nodejs'); // run with node index.js

// 2. require os module
    // write code to get number of cpu's,
    os.cpus().length;
    // free memory,
    os.freemem();
    // uptime
    os.uptime();
    // version from os module
    os.version();

// Write 2 different methods for creating buffer in nodejs using Buffer class.

// 1st Method
let buf1 = Buffer.alloc(12);
console.log(buf1);
console.log("this is going to be empty, but do not worry, it is there." + buf1.toString());

// 2nd Method
let buf2 = Buffer.alloc(12);
console.log(buf2);
console.log("this is going to be empty, but do not worry, it is there." +buf2.toString());

// Write code example to demonstrate blocking and non-blocking code.

// Non-blocking code
readFile('./index.md', 'utf8', (err, content) => {
    (err) ? console.log(err) : console.log(content);
});

// Blocking code
readFileSync('./index.md', 'utf8');