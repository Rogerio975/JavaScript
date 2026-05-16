import { query } from './db';

async function listarUsuarios() {

    const resultado = await query(
        'SELECT * FROM usuarios'
    );

    console.log(resultado.rows);
}

listarUsuarios();