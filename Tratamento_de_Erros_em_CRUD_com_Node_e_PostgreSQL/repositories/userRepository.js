// repositories/userRepository.js
const pool = require('../db');
const mapPgError = require('../utils/pgErrorMapper');

async function create(data) {
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [data.name, data.email]
    );
    return result.rows[0];
  } catch (err) {
    throw mapPgError(err);
  }
}

async function findById(id) {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw mapPgError(err);
  }
}

async function update(id, data) {
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [data.name, data.email, id]
    );
    return result.rows[0] || null;
  } catch (err) {
    throw mapPgError(err);
  }
}

async function remove(id) {
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
    return result.rowCount > 0;
  } catch (err) {
    throw mapPgError(err);
  }
}

module.exports = { create, findById, update, remove };