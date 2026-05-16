import express from 'express';
import pool from './db';

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