function Dados() {
    this.nome = "João";
    this.idade = 30;
    this.cidade = "São Paulo";
}

const dadosPessoa = new Dados();
console.log(`Nome: ${dadosPessoa.nome}, Idade: ${dadosPessoa.idade}, Cidade: ${dadosPessoa.cidade}`);
module.exports = Dados;