class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}

const meuPet = new Animal("Rex");
meuPet.falar(); // Output: Rex faz um som.