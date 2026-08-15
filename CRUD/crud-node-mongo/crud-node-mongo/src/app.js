const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de verificação rápida (healthcheck)
app.get('/', (req, res) => {
  res.status(200).json({ sucesso: true, mensagem: 'API de Produtos no ar.' });
});

app.use('/produtos', produtoRoutes);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ sucesso: false, mensagem: 'Rota não encontrada.' });
});

// Middleware global de tratamento de erros não capturados
app.use((err, req, res, next) => {
  console.error('[erro não tratado]', err);
  res.status(500).json({ sucesso: false, mensagem: 'Erro interno do servidor.' });
});

module.exports = app;
