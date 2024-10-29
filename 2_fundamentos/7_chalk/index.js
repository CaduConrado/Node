const chalk = require("chalk");
const nota = 7.8;

if (nota >= 8) {
  console.log(chalk.green(`Parabéns, você foi selecionado!`));
} else {
  console.log(chalk.black.bgRed`Você não foi selecionado.`);
}
