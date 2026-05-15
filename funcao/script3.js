function exibirPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`);
    });
    }

    const listaDePessoas = [
    { nome: "Ana", idade: 28, profissao: "Designer" },
    { nome: "Bruno", idade: 35, profissao: "Gerente de Projetos" },
    { nome: "Carla", idade: 22, profissao: "Estagiária" },
    {nome: "João", idade: 30, profissao: "Desenvolvedor"}
    ];

    exibirPessoas(listaDePessoas);