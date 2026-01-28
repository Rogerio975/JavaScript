function criarCarro(marca, modelo) {
  return {
    marca,
    modelo,
    exibirInfo() {
      console.log(`${this.marca} ${this.modelo}`);
    }
  };
}
const meuCarro = criarCarro("Toyota", "Corolla");
console.log(meuCarro.marca); // Output: Toyota
console.log(meuCarro.modelo); // Output: Corolla
meuCarro.exibirInfo(); // Output: Toyota Corolla
meuCarro.modelo = "Camry";
console.log(meuCarro.modelo); // Output: Camry
meuCarro.exibirInfo(); // Output: Toyota Camry