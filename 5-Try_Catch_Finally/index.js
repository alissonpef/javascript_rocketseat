try {
  // Tenta executar algo

  // Exceção
  if (result === 0) {
    throw new Error("O valor é igual a zero.");
  }
  console.log(result);
} catch (error) {
  // Captura o erro para tratar
  console.log(error);
} finally {
  // Executa algo independente se deu certo ou errado
  console.log("Fim!");
}
