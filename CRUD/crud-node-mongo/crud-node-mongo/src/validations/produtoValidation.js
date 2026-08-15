const Joi = require('joi');

// Validação usada na criação (POST) - todos os campos obrigatórios são exigidos
const criarProdutoSchema = Joi.object({
  nome: Joi.string().trim().min(2).max(120).required().messages({
    'string.empty': 'O campo "nome" não pode ficar vazio.',
    'string.min': 'O campo "nome" deve ter pelo menos {#limit} caracteres.',
    'any.required': 'O campo "nome" é obrigatório.',
  }),
  descricao: Joi.string().trim().max(500).allow('').optional(),
  preco: Joi.number().positive().precision(2).required().messages({
    'number.base': 'O campo "preco" deve ser um número.',
    'number.positive': 'O campo "preco" deve ser maior que zero.',
    'any.required': 'O campo "preco" é obrigatório.',
  }),
  quantidade: Joi.number().integer().min(0).default(0),
  ativo: Joi.boolean().default(true),
});

// Validação usada na atualização (PUT/PATCH) - todos os campos são opcionais,
// mas pelo menos um precisa ser enviado
const atualizarProdutoSchema = Joi.object({
  nome: Joi.string().trim().min(2).max(120),
  descricao: Joi.string().trim().max(500).allow(''),
  preco: Joi.number().positive().precision(2),
  quantidade: Joi.number().integer().min(0),
  ativo: Joi.boolean(),
})
  .min(1)
  .messages({
    'object.min': 'Envie ao menos um campo para atualizar o produto.',
  });

// Validação de parâmetros de paginação/query na listagem
const listarProdutosQuerySchema = Joi.object({
  pagina: Joi.number().integer().min(1).default(1),
  limite: Joi.number().integer().min(1).max(100).default(10),
  ativo: Joi.boolean().optional(),
});

module.exports = {
  criarProdutoSchema,
  atualizarProdutoSchema,
  listarProdutosQuerySchema,
};
