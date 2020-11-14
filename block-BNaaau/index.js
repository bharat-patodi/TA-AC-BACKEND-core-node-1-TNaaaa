let http = require('http');
let url = require('url');

// Q. Create a basic server using http's createServer
    let server = http.createServer((req, res) => {
        console.log(req, res);
        res.end('Port 5000');
    });
//   - listen for request on port 5000
server.listen(5000);
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object
http.createServer((req, res) => {
    res.end('My first server in NodeJS');
}).listen(5100);


// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.
http.createServer((req, res) => {
    console.log(req.headers);
    res.end(req.headers["user-agent"]);
}).listen(5555);

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end(`${JSON.stringify(req.url)}\n${JSON.stringify(req.method)}`);
}).listen(5566);

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

http.createServer((req, res) => {
    res.end(JSON.stringify(req.headers));
}).listen(7000, () => {
    console.log('server listening on port 7000');
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

http.createServer((req, res) => {
    res.statusCode = 202;
    res.end(`Port opened on 3333`);
}).listen(3333);

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h3>Welcome to altcampus</h3>`);
}).listen(8000);

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

http.createServer((req, res) => {
    res.writeHead(202, {
        "Content-Type": "text/html"
    });
    res.end(`<h3>Port 7654</h3>`);
}).listen(7654);

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

http.createServer((req, res) => {
    res.writeHead(202, {
        "Content-Type": "application/JSON"
    })
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}).listen(8888);

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

http.createServer((req, res) => {
    res.writeHead(202, {
        "Content-Type": "text/html"
    });
    res.end(`<h2>posted for first time</h2>`);
    console.log(req.method);
}).listen(5050);

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url === "/" && req.method === "GET") res.end('my name\n');
    if(req.url === "/about" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.end('<h2>my name</h2>');
    };
    if(req.url === "/users" && req.method === "GET") {
        res.end(`<form><input type="text"></input><input type="email"></input></form>`);
    };
    if(req.url === "/users" && req.method === "POST") {
        res.end(`Posted for the second time`);
    };
}).listen(2345);

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

http.createServer((req, res) => {
    let address = `localhost:1111/users?email=nodeserver@gmail.com`;
    let parsedURL = url.parse(address, true);
    console.log(parsedURL.pathname, parsedURL, req.url);
    let query = parsedURL.query;
    console.log(query.email);
    res.setHeader("Content-Type", "text/html");
    res.end(`Port opened on 1111 with email entered as ${query.email}`);
}).listen(1111);