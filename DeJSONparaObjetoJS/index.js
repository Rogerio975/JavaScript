// String JSON
const pessoaJSON = '{"nome":"Rogério","idade":30,"cidade":"Salvador"}';

// Converter para Objeto JS
const pessoaObj = JSON.parse(pessoaJSON);

console.log(pessoaObj.nome);   // Saída: Rogério
console.log(pessoaObj.idade);  // Saída: 30
console.log(pessoaObj.cidade); // Saída: Salvador