const fs = require("fs"); //importando o file system

fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
