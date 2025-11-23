function pessoaInfo() {
    const nome = "Maria";
    const idade = 25;
    const cidade = "Rio de Janeiro";
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

console.log(pessoaInfo());
module.exports = pessoaInfo;