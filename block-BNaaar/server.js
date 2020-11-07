const url = require('url');
const http = require('http');

const server = http.createServer(reqListener);

function reqListener(req, res) {
    let parsedURL = url.parse(req.url);
    // console.log(parsedURL, parsedURL.path, parsedURL.pathname, parsedURL.query);
// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
    if(parsedURL.pathname === '/' && req.method === 'GET') {
        res.write('Welcome to HOME page');
        console.log("Home Page GET-ting");
    } else if(parsedURL.pathname === '/about' && req.method === 'GET') {
        // 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
        res.end('<h2>this is all about NodeJS</h2>');
        console.log("Get the about page");
    } else if(parsedURL.pathname === '/about' && req.method === 'POST') {
        // 3. handle POST request on '/about' and send json response `{message: this is a post request}`.
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'this is a post request'}));
        console.log("Home Page GET-ting");
    }

    res.end();
};

server.listen(5000);
