// Definindo uma matriz
var frutas = ["Maçã", "Banana", "Morango", "Laranja"];

// Usando indexOf para encontrar a posição de "Morango"
var posicaoMorango = frutas.indexOf("Morango");
console.log("A posição de Morango na matriz é: " + posicaoMorango); // Saída: A posição de Morango na matriz é: 2

// Usando indexOf para encontrar a posição de "Pera", que não está na matriz
var posicaoPera = frutas.indexOf("Pera");
console.log("A posição de Pera na matriz é: " + posicaoPera); // Saída: A posição de Pera na matriz é: -1