function message(username) {
  console.log("Olá", username);
}

message("Alisson");

/**
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
function sum(a, b) {
  let result = a + b;
  return result;
}

console.log(sum(1, 2));

// Função anônima
const anonymousFunction = function (name) {
  return "Olá, " + name;
};

console.log(anonymousFunction("Alisson"));

const arrowFunction = (name) => {
  return "Olá, " + name;
};

console.log(arrowFunction("Alisson"));

function callbackFunction(taskName, callback) {
  console.log("Executando a tarefa: ", taskName);
}

callbackFunction("Download do arquivo...", () => {
  console.log("Tarefa finalizada.");
});
