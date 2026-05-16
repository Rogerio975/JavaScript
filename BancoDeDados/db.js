const { Pool } = require('pg');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Configuração do Pool de conexões
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 10, // Número máximo de clientes no pool
  idleTimeoutMillis: 30000, // Tempo que um cliente pode ficar ocioso antes de fechar
});

// Exporta uma função para executar queries com segurança
module.exports = {
  query: (text, params) => pool.query(text, params),
};