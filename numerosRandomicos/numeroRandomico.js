const numero = Math.floor(Math.random() * 9999) + 1; // Gera um número aleatório entre 1 e 9999 (inclusive)
const numeroComQuatroAlgarismos = String(numero).padStart(4, '0'); // Garante que o número tenha 4 dígitos, preenchendo com zeros à esquerda se necessário

console.log(`Resultado: ${numeroComQuatroAlgarismos}`);
