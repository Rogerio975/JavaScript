const express = require('express');
const produtoController = require('../controllers/produtoController');
const validate = require('../middlewares/validate');
const {
  criarProdutoSchema,
  atualizarProdutoSchema,
  listarProdutosQuerySchema,
} = require('../validations/produtoValidation');

const router = express.Router();

router.post('/', validate(criarProdutoSchema, 'body'), produtoController.criar);

router.get(
  '/',
  validate(listarProdutosQuerySchema, 'query'),
  produtoController.listar
);

router.get('/:id', produtoController.buscarPorId);

router.put(
  '/:id',
  validate(atualizarProdutoSchema, 'body'),
  produtoController.atualizar
);

router.patch(
  '/:id',
  validate(atualizarProdutoSchema, 'body'),
  produtoController.atualizar
);

router.delete('/:id', produtoController.remover);

module.exports = router;
