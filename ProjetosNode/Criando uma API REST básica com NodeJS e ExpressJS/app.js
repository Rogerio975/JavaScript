const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send('Lista de usuários');
});

app.get('/users/:id', (req, res) => {
    res.send('Detalhes do usuário ' + req.params.id);
});

const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Júlia' },
    { id: 4, name: 'Antônio' },
    { id: 5, name: 'Marta' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    res.json(user);
});