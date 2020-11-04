// Q. In server.js

// 1. require parse method from url core node module.
let {parse} = require('url');
console.log(parse);

// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.

let parsedURL = parse('https://airindia.com/fares/calculate?from=delhi&to=detroit');
console.log(parsedURL);

// 3. console query string from parsed url
console.log(parsedURL.query);

// 4. console pathname
console.log(parsedURL.pathname);

// 5. console protocol
console.log(parsedURL.protocol);

// 6. use parse method from url module to parse query string as well.
console.log(parse(parsedURL.query));