const readline = require('readline');

// /C:/Users/Desktop/AnaliseDeSistemas/JavaScript/funcao/script6.js

function ask(question, rl) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

function parseDate(input) {
    if (!input) return null;
    // aceita dd/mm/yyyy ou yyyy-mm-dd ou outros formatos aceitos pelo Date
    const dmY = input.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (dmY) {
        const [ , d, m, y ] = dmY;
        return new Date(Number(y), Number(m) - 1, Number(d));
    }
    const d = new Date(input);
    return isNaN(d.getTime()) ? null : d;
}

async function DadosPessoa() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
        let nome = '';
        while (!nome) {
            nome = await ask('Nome: ', rl);
            if (!nome) console.log('Digite um nome válido.');
        }

        let email = '';
        const emailRe = /\S+@\S+\.\S+/;
        while (!email || !emailRe.test(email)) {
            email = await ask('E-mail: ', rl);
            if (!emailRe.test(email)) console.log('E-mail inválido. Tente novamente.');
        }

        let dataStr = '';
        let data = null;
        while (!data) {
            dataStr = await ask('Data de nascimento (dd/mm/yyyy ou yyyy-mm-dd): ', rl);
            data = parseDate(dataStr);
            if (!data) console.log('Data inválida. Use o formato dd/mm/yyyy ou yyyy-mm-dd.');
        }

        const pessoa = {
            nome,
            email,
            dataNascimento: data,            // objeto Date
            dataNascimentoISO: data.toISOString().slice(0,10) // string yyyy-mm-dd
        };

        return pessoa;
    } finally {
        rl.close();
    }
}

module.exports = DadosPessoa;

// Exemplo de uso quando executado diretamente:
// node script6.js
if (require.main === module) {
    (async () => {
        const p = await DadosPessoa();
        console.log('\nDados da pessoa:');
        console.log(`Nome: ${p.nome}`);
        console.log(`E-mail: ${p.email}`);
        console.log(`Data de nascimento: ${p.dataNascimentoISO}`);
    })();
}