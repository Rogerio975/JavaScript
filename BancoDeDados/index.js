const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

// Middleware para permitir que a API entenda JSON no corpo (body) das requisições
app.use(express.json());

// -------------------------------------------------------------------
// 1. ROTAS DA API (CRUD)
// -------------------------------------------------------------------

// C - CREATE: Criar um novo produto
app.post('/produtos', async (req, res) => {
  const { nome, preco } = req.body;

  // Validação simples
  if (!nome || !preco) {
    return res.status(400).json({ erro: 'Nome e preço são obrigatórios.' });
  }

  try {
    const queryText = 'INSERT INTO produtos (nome, preco) VALUES ($1, $2) RETURNING *';
    const resultado = await db.query(queryText, [nome, preco]);
    
    // Retorna o produto criado com status 201 (Created)
    res.status(201).json(resultado.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro interno no servidor ao salvar produto.' });
  }
});

// R - READ: Listar todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    const resultado = await db.query('SELECT * FROM produtos ORDER BY id ASC');
    res.status(200).json(resultado.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar produtos.' });
  }
});

// R - READ (Detalhe): Buscar um produto específico pelo ID
app.get('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
    
    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }
    
    res.status(200).json(resultado.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar o produto.' });
  }
});

// U - UPDATE: Atualizar dados de um produto
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  try {
    const queryText = 'UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3 RETURNING *';
    const resultado = await db.query(queryText, [nome, preco, id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado para atualização.' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar produto.' });
  }
});

// D - DELETE: Remover um produto
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await db.query('DELETE FROM produtos WHERE id = $1 RETURNING *', [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado para exclusão.' });
    }

    res.status(200).json({ mensagem: `Produto com ID ${id} deletado com sucesso!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao deletar produto.' });
  }
});

// -------------------------------------------------------------------
// Inicialização do Servidor
// -------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando perfeitamente na porta ${PORT}`);
});