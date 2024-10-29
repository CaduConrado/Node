const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    { name: "q1", message: "Qual o seu nome?" },
    { name: "q2", message: "Qual a sua idade?" },
  ])
  .then((answers) => {
    console.log(answers);
    if (answers.q2 < 0) {
      throw new Error(
        `O numero não pode ser menor que 0.\nSeu input foi: ${answers.q2}`
      );
    }
    if (answers.q2 >= 18 * 2) {
      console.log(
        chalk.bgYellow.black(
          `Parabéns ${answers.q1}, você tem ${answers.q2} e está apto para se candidatar à Presidência da República.`
        )
      );
    } else {
      console.log(
        chalk.bgRed.black(
          `Sinto muito ${answers.q1}, mas você ainda não tem a idade mínima para se candidatar à Presidência da República.`
        )
      );
    }
  })
  .catch((error) => console.log(error));
