// Programa para calcular área e perímetro de um retângulo

function calcularRetangulo(largura, altura) {
  // Validação de entrada
  if (largura <= 0 || altura <= 0) {
    console.log("Erro: Largura e altura devem ser maiores que zero!");
    return null;
  }

  // Calcular área
  const area = largura * altura;

  // Calcular perímetro
  const perimetro = 2 * (largura + altura);

  // Retornar resultados
  return {
    area: area,
    perimetro: perimetro,
    largura: largura,
    altura: altura
  };
}

// Exemplos de uso
console.log("=== Cálculo de Retângulo ===\n");

// Exemplo 1
const retangulo1 = calcularRetangulo(5, 3);
if (retangulo1) {
  console.log(`Retângulo 1 (Largura: ${retangulo1.largura}, Altura: ${retangulo1.altura})`);
  console.log(`Área: ${retangulo1.area} unidades²`);
  console.log(`Perímetro: ${retangulo1.perimetro} unidades\n`);
}

// Exemplo 2
const retangulo2 = calcularRetangulo(10, 7);
if (retangulo2) {
  console.log(`Retângulo 2 (Largura: ${retangulo2.largura}, Altura: ${retangulo2.altura})`);
  console.log(`Área: ${retangulo2.area} unidades²`);
  console.log(`Perímetro: ${retangulo2.perimetro} unidades\n`);
}

// Exemplo 3 - Teste com valor inválido
console.log("Teste com valor inválido:");
calcularRetangulo(-5, 3);
