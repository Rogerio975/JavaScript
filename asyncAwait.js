async function buscarDados() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
  }
  
  buscarDados();  