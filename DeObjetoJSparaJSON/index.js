// Objeto JavaScript
const pessoa = {
  nome: "Rogério",
  idade: 30,
  cidade: "Salvador"
};

// Converter para JSON
const pessoaJSON = JSON.stringify(pessoa);

console.log(pessoaJSON);
// Saída: {"nome":"Rogério","idade":30,"cidade":"Salvador"}