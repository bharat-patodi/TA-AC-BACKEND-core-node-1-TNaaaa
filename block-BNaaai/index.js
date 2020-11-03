const { parse } = require('path');
let url = require('url');

let myUrl = 'https://github.com/wesbos?tab=repositories&q=&type=source&language=';

let parsedMyUrl = url.parse(myUrl, true);

console.log(parsedMyUrl);
console.log(`The pathname:`, parsedMyUrl.pathname);
console.log(`The query:`, parsedMyUrl.query);
console.log(`The host:`, parsedMyUrl.host);
console.log(`The protocol:`, parsedMyUrl.protocol);

// Look at network headers when google search-ing and clicking on a specific search result:
// I checked the headers like Status, Method, Domain, File, etc. and could understand some parts of the process.