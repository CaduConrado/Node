const fs = require("fs");

if (!fs.existsSync("./myfolder")) {
  console.log("Não existe!");
  fs.mkdirSync("myfolder");
}
if (fs.existsSync("./myfolder")) {
  console.log("Existe");
}
