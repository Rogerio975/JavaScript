// utils/pgErrorMapper.js
const { ConflictError, ValidationError, AppError } = require('../errors/AppError');

function mapPgError(err) {
  switch (err.code) {
    case '23505': // unique_violation
      return new ConflictError(`Valor duplicado: ${err.detail || 'registro já existe'}`);

    case '23503': // foreign_key_violation
      return new ValidationError(`Referência inválida: ${err.detail || 'chave estrangeira inexistente'}`);

    case '23502': // not_null_violation
      return new ValidationError(`Campo obrigatório ausente: ${err.column}`);

    case '22P02': // invalid_text_representation (ex: UUID/int inválido)
      return new ValidationError('Formato de dado inválido');

    case '42703': // undefined_column
    case '42P01': // undefined_table
      return new AppError('Erro interno de configuração do banco', 500);

    case 'ECONNREFUSED':
      return new AppError('Não foi possível conectar ao banco de dados', 503);

    default:
      return new AppError('Erro interno do servidor', 500);
  }
}

module.exports = mapPgError;