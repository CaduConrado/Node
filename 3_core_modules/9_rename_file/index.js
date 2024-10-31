const fs = require("fs");

const oldFile = "oldFile.txt";
const newFile = "newFile.txt";

fs.rename(oldFile, newFile, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Name ${oldFile} replaced to ${newFile}.`);
});
