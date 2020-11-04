// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
let http = require('http');
let server = http.createServer(reqListener);
function reqListener(req, res) {
    // res.writeHead(200);
    res.end();
    console.log("Server opened at 8008");
};
// 2. start the server using script writer i.e. `node script_file.js`
// 2. open the browser and request your server on url `http://localhost:4000`.
server.listen(4000);
// 3. notice the output in browser and terminal.