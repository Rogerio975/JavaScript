// Função simulando uma chamada a uma API
async function verificarCompra(idCompra) {
  try {
    // Simulação de requisição assíncrona (ex: fetch para uma API real)
    const resposta = await fetch(`https://api.exemplo.com/compras/${idCompra}`);
    
    if (!resposta.ok) {
      throw new Error("Erro ao consultar a compra");
    }

    const dados = await resposta.json();

    // Verifica se a compra foi realizada
    if (dados.status === "confirmada") {
      console.log(`✅ Compra ${idCompra} confirmada com sucesso!`);
      return true;
    } else {
      console.log(`❌ Compra ${idCompra} ainda não foi confirmada.`);
      return false;
    }
  } catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
    return false;
  }
}

// Exemplo de uso
(async () => {
  const idCompra = 12345;
  const resultado = await verificarCompra(idCompra);

  if (resultado) {
    console.log("Pode liberar o produto/serviço.");
  } else {
    console.log("Aguardando confirmação da compra.");
  }
})();