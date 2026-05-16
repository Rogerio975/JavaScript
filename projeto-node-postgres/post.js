import { query } from './db';

async function inserirUsuario() {

    const sql = `
        INSERT INTO usuarios (nome, email)
        VALUES ($1, $2)
    `;

    const valores = ['Júlia', 'julia@email.com'];

    await query(sql, valores);

    console.log('Usuário inserido!');
}

inserirUsuario();