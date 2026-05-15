const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// armazenamento em memória para exemplo
let items = [];
let nextId = 1;

// GET /items - lista todos
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id - obter por id
app.get('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item não encontrado' });
  res.json(item);
});

// POST /items - criar
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: 'Campo "name" é obrigatório' });
  const item = { id: nextId++, name, description: description || '' };
  items.push(item);
  res.status(201).json(item);
});

// PUT /items/:id - atualizar (parcial/substituição simples)
app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item não encontrado' });
  const { name, description } = req.body;
  if (name !== undefined) item.name = name;
  if (description !== undefined) item.description = description;
  res.json(item);
});

// DELETE /items/:id - remover
app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item não encontrado' });
  const deleted = items.splice(index, 1)[0];
  res.json(deleted);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
