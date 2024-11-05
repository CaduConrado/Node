const fs = require("fs");

if (!fs.existsSync("./myprojects")) {
  console.log("Não existe!");
  fs.mkdirSync("myprojects");
} else {
  fs.writeFile("myprojects.txt", "Teste", (error) => {
    if (error) {
      console.log(error);
    }
  });
}
