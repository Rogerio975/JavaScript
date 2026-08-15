/**
 * Middleware genérico para validar dados de requisição com um schema Joi.
 *
 * @param {import('joi').Schema} schema - Schema Joi a ser aplicado.
 * @param {'body' | 'query' | 'params'} source - Onde buscar os dados a validar.
 */
function validate(schema, source = 'body') {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false, // retorna todos os erros, não só o primeiro
      stripUnknown: true, // remove campos não previstos no schema
    });

    if (error) {
      const erros = error.details.map((detalhe) => detalhe.message);
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro de validação.',
        erros,
      });
    }

    // Substitui os dados originais pelos já validados/normalizados pelo Joi
    req[source] = value;
    return next();
  };
}

module.exports = validate;
