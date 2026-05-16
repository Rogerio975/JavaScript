const express = require('express');
const pool = require('./db');

const app = express();

app.get('/usuarios', async (req, res) => {

    const resultado = await pool.query(
        'SELECT * FROM usuarios'
    );

    res.json(resultado.rows);
});

app.listen(4000, () => {
    console.log('Servidor rodando!');
});