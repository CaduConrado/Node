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
    //tratamento para caso o arquivo já tenha algo escrito
    fs.readFile("file.txt", function (error, data) {
      console.log(name);
      if (!data) {
        newName = name;
      } else {
        newName = ",\r\n" + name;
      }
      fs.appendFile("file.txt", newName, function (error, data) {
        res.writeHead(302, {
          Location: "/",
        });
        return res.end();
      });
    });
  }
});

server.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
