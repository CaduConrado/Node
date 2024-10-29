const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const chalk = require("chalk");
readLine.question("Qual o seu time do coração?", (language) => {
  if (language == "Goiás") {
    console.log(
      chalk.green(`Parabéns, você torce para o maior time do Centro Oeste`)
    );
    readLine.close();
  } else {
    console.log(chalk.grey(`Legal, seu time é mais ou menos...`));
    readLine.close();
  }
});
