// Require the http module
let http = require('http');

// Create a new server
let server = http.createServer(reqListener);

// Listen to the response received
function reqListener(req, res) {
    console.log(req.method);
    res.statusCode = 201;
    res.setHeader('Content-type', 'text/html');
    // res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Hi\n");
    res.end("<h4>Welcome to 4444</h4>");
    console.log("Server Opened on 4444");
};

// Open a port
server.listen(4444);