const mongoose = require('mongoose');

/**
 * Estabelece a conexão com o MongoDB usando Mongoose.
 * Encerra o processo caso a conexão falhe, pois a aplicação
 * não tem como funcionar sem o banco de dados.
 */
async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/crud-node-mongo';

  try {
    await mongoose.connect(mongoUri);
    console.log(`[database] Conectado ao MongoDB em: ${mongoUri}`);
  } catch (error) {
    console.error('[database] Falha ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('[database] Conexão com o MongoDB perdida.');
  });
}

module.exports = connectDatabase;
