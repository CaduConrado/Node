const path = require("path");

console.log(path.resolve("file.txt"));

//creating path
const midFolder = "notes";
const fileName = "cadu.txt";

const finalPath = path.join("/", "files", midFolder, fileName);

console.log(finalPath);
