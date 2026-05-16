const pool = require('./db');

async function listarUsuarios() {

    const resultado = await pool.query(
>>>>>>> 6d4868b82cf8328a533f7356852b2c220bb4efad
        'SELECT * FROM usuarios'
    );

    console.log(resultado.rows);
}

listarUsuarios();