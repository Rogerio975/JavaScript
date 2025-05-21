const readline = require('readline').createInterface({

input: process.stdin,
output: process.stdout
});

let numbers = [];
function askNumber(count) {
if (count > 3) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    console.log(`A soma dos três números é: ${sum}`);
    readline.close();
    return;
}
readline.question(`Digite o número ${count}: `, (input) => {
    const num = Number(input);
    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
        askNumber(count);
    } else {
        numbers.push(num);
        askNumber(count + 1);
    }
});
}

askNumber(1);