const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile("file.txt", name, function (error, data) {
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
