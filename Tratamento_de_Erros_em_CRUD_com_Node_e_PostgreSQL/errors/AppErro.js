// errors/AppError.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // erro esperado/tratado
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(resource = 'Recurso') {
    super(`${resource} não encontrado`, 404);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

class ConflictError extends AppError {
  constructor(message = 'Registro já existe') {
    super(message, 409);
  }
}

module.exports = { AppError, NotFoundError, ValidationError, ConflictError };