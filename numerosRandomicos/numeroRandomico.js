const numero = Math.floor(Math.random() * 9999) + 1;
const numeroComQuatroAlgarismos = String(numero).padStart(4, '0');

console.log(numeroComQuatroAlgarismos);
