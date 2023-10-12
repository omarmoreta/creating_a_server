// require the http module
let http = require("http");

// use http's .createServer() method to create server and add callback with response
let server = http.createServer(function (req, res) {
  // writeHeader method is deprecated: https://nodejs.org/api/deprecations.html#DEP0063
    // res.writeHeader(206);
  res.writeHead(206);
  res.write(
    '<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206"></img>'
  );
  res.end();
});

// listen for connections to the server
server.listen(3000, function () {
  console.log("I am awake!");
});
