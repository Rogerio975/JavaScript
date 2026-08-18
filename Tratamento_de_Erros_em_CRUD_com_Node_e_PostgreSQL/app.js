// app.js
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

// rota não encontrada
app.use((req, res) => {
  res.status(404).json({ error: { message: 'Rota não encontrada' } });
});

// middleware de erro — sempre por último
app.use(errorHandler);

module.exports = app;