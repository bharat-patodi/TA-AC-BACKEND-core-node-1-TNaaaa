let http = require('http');
let server = http.createServer(reqListener);
let fs = require('fs');
let url = require('url');

// Create a http server and use readFile and createReadStream to read a file and send the data into response.

function reqListener(req, res) {
  let parsedURL = url.parse(req.url);
  console.log(parsedURL);
  console.log(req.method);

  // - create a file node.html
  let content = "Node learning enabled";
  fs.writeFile("node.html", content, (err, content) => {
    if (err) throw err;
    console.log("File created succesfully. Content: ", content); // why is content not displaying?
  });

  if (parsedURL.pathname === "/" && req.method === "GET") {
    console.log("Testing");
    res.write("Home Page");
    res.end();
  }

  // - handle GET request on '/file' route to read node.html using fs.readFile
  if (parsedURL.pathname === "/file" && req.method === "GET") {
    fs.readFile("node.html", (err, content) => {
      if (err) throw err;
      console.log(content);
    });
    res.write("File Page");
    res.end();
  }

  // - handle GET request on '/stream' route to read node.html using fs.createReadStream
  if (parsedURL.pathname === "/stream" && req.method === "GET") {
    fs.createReadStream('node.html').on('data', (chunk) => {console.log(chunk.toString())});
    res.write("Stream Page");
    res.end();
  };

};

// - add a listener on port 5555
server.listen(5555);