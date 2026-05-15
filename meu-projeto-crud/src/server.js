const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Executa a conexão com o banco
connectDB();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));