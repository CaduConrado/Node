const fs = require("fs");

fs.unlink("file.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File removed.");
});
