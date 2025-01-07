const express = require('express');
const path = require('path'); // Para trabalhar com caminhos de arquivos
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Envia o arquivo HTML
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log("Servidor executando na porta 3000.");
});