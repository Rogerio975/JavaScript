const pool = require('./db');

async function criarTabela() {

    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100),
            email VARCHAR(100)
        )
    `;

    await pool.query(sql);

    console.log('Tabela criada!');
}

criarTabela();