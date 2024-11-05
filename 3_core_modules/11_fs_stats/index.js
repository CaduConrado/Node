const fs = require("fs");

fs.stat("newFile.txt", (error, stats) => {
  if (error) {
    console.log(`Erro: ${error}`);
    return;
  }

  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.ctime);
  console.log(stats.size);
});
