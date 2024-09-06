let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero) {
    return numero % 2 == 0;
});
console.log(pares);