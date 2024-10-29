const inquirer = require("inquirer");
const chalk = require("chalk");
inquirer
  .prompt([
    { name: "p1", message: "Qual a sua primeira nota?" },
    { name: "p2", message: "Qual a sua segunda nota?" },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2;
    if (media > 7) {
      console.log(chalk.green(`A média é: ${media}\nAprovado!`));
    } else {
      console.log(chalk.bgRed(`A média é: ${media}\nReprovado!`));
    }
  })
  .catch((error) => console.log(error));
