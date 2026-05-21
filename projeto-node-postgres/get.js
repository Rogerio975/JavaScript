const pool = require('./db');

async function listarUsuarios() {

    const resultado = await pool.query(
        'SELECT * FROM usuarios'
    );

    console.log(resultado.rows);
}

listarUsuarios();