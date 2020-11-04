// 1. create a basic server and listen on port 3000

// Require the http module
let http = require('http');

// Create a new server
let server = http.createServer(reqListener);

// Listen to the response received
function reqListener(req, res) {
    res.end("Welcome");
    // 2. write code to console
    //   - request headers
    console.log(req.headers);
    //   - request method and url
    console.log(req.method, req.url);
    // 3. request from browser on `http://localhost:3000/about`
}

// Open a port
server.listen(3000);



