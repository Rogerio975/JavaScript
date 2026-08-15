const mongoose = require('mongoose');
const Produto = require('../models/Produto');

// Verifica se o id informado é um ObjectId válido do MongoDB
function idValido(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

// POST /produtos - cria um novo produto
async function criar(req, res) {
  try {
    const produto = await Produto.create(req.body);
    return res.status(201).json({
      sucesso: true,
      mensagem: 'Produto criado com sucesso.',
      dados: produto,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao criar produto.',
      erro: error.message,
    });
  }
}

// GET /produtos - lista produtos com paginação e filtro opcional por "ativo"
async function listar(req, res) {
  try {
    const { pagina, limite, ativo } = req.query;

    const filtro = {};
    if (typeof ativo === 'boolean') {
      filtro.ativo = ativo;
    }

    const skip = (pagina - 1) * limite;

    const [produtos, total] = await Promise.all([
      Produto.find(filtro).skip(skip).limit(limite).sort({ createdAt: -1 }),
      Produto.countDocuments(filtro),
    ]);

    return res.status(200).json({
      sucesso: true,
      dados: produtos,
      paginacao: {
        paginaAtual: pagina,
        totalPaginas: Math.ceil(total / limite) || 1,
        totalRegistros: total,
        limite,
      },
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar produtos.',
      erro: error.message,
    });
  }
}

// GET /produtos/:id - busca um único produto pelo id
async function buscarPorId(req, res) {
  try {
    const { id } = req.params;

    if (!idValido(id)) {
      return res.status(400).json({ sucesso: false, mensagem: 'ID inválido.' });
    }

    const produto = await Produto.findById(id);

    if (!produto) {
      return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado.' });
    }

    return res.status(200).json({ sucesso: true, dados: produto });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar produto.',
      erro: error.message,
    });
  }
}

// PUT/PATCH /produtos/:id - atualiza um produto existente
async function atualizar(req, res) {
  try {
    const { id } = req.params;

    if (!idValido(id)) {
      return res.status(400).json({ sucesso: false, mensagem: 'ID inválido.' });
    }

    const produto = await Produto.findByIdAndUpdate(id, req.body, {
      new: true, // retorna o documento já atualizado
      runValidators: true, // aplica as validações do schema Mongoose também
    });

    if (!produto) {
      return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado.' });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Produto atualizado com sucesso.',
      dados: produto,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar produto.',
      erro: error.message,
    });
  }
}

// DELETE /produtos/:id - remove um produto
async function remover(req, res) {
  try {
    const { id } = req.params;

    if (!idValido(id)) {
      return res.status(400).json({ sucesso: false, mensagem: 'ID inválido.' });
    }

    const produto = await Produto.findByIdAndDelete(id);

    if (!produto) {
      return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado.' });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Produto removido com sucesso.',
      dados: produto,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao remover produto.',
      erro: error.message,
    });
  }
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizar,
  remover,
};
