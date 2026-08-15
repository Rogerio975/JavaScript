const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    descricao: {
      type: String,
      trim: true,
      default: '',
    },
    preco: {
      type: Number,
      required: true,
      min: 0,
    },
    quantidade: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    ativo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // cria automaticamente createdAt e updatedAt
  }
);

module.exports = mongoose.model('Produto', produtoSchema);
