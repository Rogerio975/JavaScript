import { query } from './db';

async function criarTabela() {

    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100),
            email VARCHAR(100),
            data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    await query(sql);

    console.log('Tabela criada!');
}

criarTabela();