// Variáveis globais para armazenar o texto e a cor originais
var textoOriginal = "Este é um parágrafo de exemplo.";
var corOriginal = "black";

function alterarCorETexto() {
  var paragrafo = document.getElementById("texto");
  
  // Alterar o texto
  paragrafo.textContent = "Novo texto alterado!";
  
  // Alterar a cor
  paragrafo.style.color = "red";
}

function restaurarEstadoOriginal() {
  var paragrafo = document.getElementById("texto");
  
  // Restaurar o texto original
  paragrafo.textContent = textoOriginal;
  
  // Restaurar a cor original
  paragrafo.style.color = corOriginal;
}