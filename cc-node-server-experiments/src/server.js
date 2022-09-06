const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  
  const url = req.url;

  if (url === "/") {
    // do a 200 response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World!<h1>");
    res.end();
  }
  if (url === "/close") {
    process.send("STOP");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on("STOP", function(){
  console.log("Exiting NodeJS server");
  server.close();
})