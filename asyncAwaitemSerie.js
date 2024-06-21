async function fazerRequisicoesEmSerie() {
  const dadosUsuario = await buscarDadosUsuario('usuario1');
  console.log('Dados do usuário:', dadosUsuario);

  const dadosPostagem = await buscarDadosPostagem(dadosUsuario.id);
  console.log('Dados da postagem:', dadosPostagem);
}

fazerRequisicoesEmSerie();

async function buscarDadosUsuario(idUsuario) {
  // Simula uma requisição para buscar dados do usuário
  const dados = { nome: 'João', idade: 30 };
  return dados;
}

async function buscarDadosPostagem(idPostagem) {
  // Simula uma requisição para buscar dados da postagem
  const dados = { titulo: 'Meu primeiro post', conteudo: 'Este é o conteúdo da minha primeira postagem.' };
  return dados;
}