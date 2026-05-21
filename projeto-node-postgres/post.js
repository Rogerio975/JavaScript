const pool = require('./db');

async function adicionarUsuario() {

    try {

        const sql =
            'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *';

        const valores = [
            'Nadjane',
            'nadjane@email.com'
        ];

        const resultado =
            await pool.query(sql, valores);

        console.log('Usuário adicionado!');
        console.log(resultado.rows[0]);

    } catch (erro) {

        console.error(erro);

    } finally {

        await pool.end();
    }
}

adicionarUsuario();