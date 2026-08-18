// controllers/userController.js
const asyncHandler = require('../utils/asyncHandler');
const userRepository = require('../repositories/userRepository');
const { NotFoundError, ValidationError } = require('../errors/AppError');

exports.create = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new ValidationError('Nome e email são obrigatórios');
  }

  const user = await userRepository.create({ name, email });
  res.status(201).json(user);
});

exports.getById = asyncHandler(async (req, res) => {
  const user = await userRepository.findById(req.params.id);

  if (!user) {
    throw new NotFoundError('Usuário');
  }

  res.json(user);
});

exports.update = asyncHandler(async (req, res) => {
  const user = await userRepository.update(req.params.id, req.body);

  if (!user) {
    throw new NotFoundError('Usuário');
  }

  res.json(user);
});

exports.remove = asyncHandler(async (req, res) => {
  const deleted = await userRepository.remove(req.params.id);

  if (!deleted) {
    throw new NotFoundError('Usuário');
  }

  res.status(204).send();
});