// middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational || false;

  // Log completo para erros inesperados (não operacionais)
  if (!isOperational) {
    console.error('[ERRO NÃO TRATADO]', err);
  } else {
    console.warn(`[${statusCode}] ${err.message}`);
  }

  res.status(statusCode).json({
    error: {
      message: isOperational ? err.message : 'Erro interno do servidor',
      ...(process.env.NODE_ENV === 'development' && !isOperational && { stack: err.stack }),
    },
  });
}

module.exports = errorHandler;