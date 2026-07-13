const readline = require('readline');

// Configura a entrada de dados pelo terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o ano que você deseja visualizar: ', (resposta) => {
    const ano = parseInt(resposta);

    if (isNaN(ano)) {
        console.log('Por favor, digite um ano válido usando apenas números.');
        rl.close();
        return;
    }

    console.log(`\n--- CALENDÁRIO DE ${ano} ---\n`);

    // Array com os nomes dos meses em português
    const meses = Array.from({ length: 12 }, (_, i) => 
        new Date(ano, i, 1).toLocaleString('pt-BR', { month: 'long' })
    );

    // Loop para renderizar cada mês
    for (let mes = 0; mes < 12; mes++) {
        // Nome do mês com a primeira letra maiúscula
        const nomeMes = meses[mes].charAt(0).toUpperCase() + meses[mes].slice(1);
        console.log(`\n=== ${nomeMes} ===`);
        console.log('Dom Seg Ter Qua Qui Sex Sáb');

        // Descobre em qual dia da semana o mês começa (0 = Domingo, 1 = Segunda...)
        const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
        
        // Descobre quantos dias tem o mês
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        let linha = '';

        // Preenche os espaços em branco antes do primeiro dia do mês
        for (let i = 0; i < primeiroDiaSemana; i++) {
            linha += '    ';
        }

        // Preenche os dias do mês
        for (let dia = 1; dia <= totalDias; dia++) {
            // Formata o número para ter sempre 2 dígitos e manter o alinhamento
            linha += dia.toString().padStart(3, ' ') + ' ';

            // Se for sábado (fim da linha), quebra a linha e começa outra
            if ((dia + primeiroDiaSemana) % 7 === 0 || dia === totalDias) {
                console.log(linha);
                linha = '';
            }
        }
    }

    rl.close();
});