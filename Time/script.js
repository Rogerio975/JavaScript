// Cria um novo objeto Date para obter a hora atual
const now = new Date();
const hour = now.getHours();

let greeting;

if (hour >= 6 && hour < 12) {
  greeting = "Bom dia!";
} else if (hour >= 12 && hour < 18) {
  greeting = "Boa tarde!";
} else {
  greeting = "Boa noite!";
}

// Exibe a saudação no console do navegador ou Node.js
console.log(greeting);

// Para exibir a saudação em uma página HTML, você pode usar o seguinte:
// Supondo que você tenha um elemento com o id "greeting-message"
// document.getElementById("greeting-message").textContent = greeting;