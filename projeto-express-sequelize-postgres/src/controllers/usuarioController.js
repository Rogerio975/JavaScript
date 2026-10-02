const Usuario = require('../models/Usuario');

exports.listar = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({ order: [['id', 'ASC']] });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar usuários.', detalhe: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuário.', detalhe: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const { nome, email } = req.body;

    const usuario = await Usuario.create({ nome, email });

    res.status(201).json(usuario);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ erro: 'O e-mail informado já está cadastrado.' });
    }

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        erro: 'Dados inválidos.',
        detalhes: error.errors.map(e => e.message)
      });
    }

    res.status(500).json({ erro: 'Erro ao criar usuário.', detalhe: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    const { nome, email } = req.body;
    await usuario.update({ nome, email });

    res.json(usuario);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ erro: 'O e-mail informado já está cadastrado.' });
    }

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        erro: 'Dados inválidos.',
        detalhes: error.errors.map(e => e.message)
      });
    }

    res.status(500).json({ erro: 'Erro ao atualizar usuário.', detalhe: error.message });
  }
};

exports.excluir = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    await usuario.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir usuário.', detalhe: error.message });
  }
};
