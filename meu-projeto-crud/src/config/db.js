const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // A string de conexão vem do seu arquivo .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro ao conectar: ${error.message}`);
        process.exit(1); // Fecha o app se a conexão falhar
    }
};

module.exports = connectDB;