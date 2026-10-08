const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

const SALT_ROUNDS = 12;

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome é obrigatório.' }
    }
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Informe um e-mail válido.' }
    }
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      senhaValida(value) {
        if (typeof value !== 'string' || value.length < 8) {
          throw new Error('A senha deve ter pelo menos 8 caracteres.');
        }

        if (Buffer.byteLength(value, 'utf8') > 72) {
          throw new Error('A senha não pode exceder 72 bytes.');
        }
      }
    }
  }
}, {
  tableName: 'usuarios',
  timestamps: true
});

Usuario.beforeCreate(async usuario => {
  usuario.senha = await bcrypt.hash(usuario.senha, SALT_ROUNDS);
});

Usuario.beforeUpdate(async usuario => {
  if (usuario.changed('senha')) {
    usuario.senha = await bcrypt.hash(usuario.senha, SALT_ROUNDS);
  }
});

Usuario.prototype.compararSenha = function (senha) {
  return bcrypt.compare(senha, this.senha);
};

Usuario.prototype.toJSON = function () {
  const valores = { ...this.get() };
  delete valores.senha;
  return valores;
};

module.exports = Usuario;
