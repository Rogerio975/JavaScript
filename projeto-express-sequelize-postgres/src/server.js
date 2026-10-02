require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Usuários funcionando!',
    endpoints: {
      usuarios: '/usuarios'
    }
  });
});

app.use('/usuarios', usuarioRoutes);

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL conectado com sucesso.');

    await sequelize.sync();
    console.log('Modelos sincronizados.');

    app.listen(PORT, () => {
      console.log(`Servidor executando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error.message);
    process.exit(1);
  }
}

iniciarServidor();
