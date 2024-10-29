const number = "10";

//verifica se é um numero
if (!Number.isInteger(number)) {
  throw new ErrorI("O valor inserido não é um numero.");
}

console.log("Running");
