const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    const [row] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE user_id = ?;', id);
    return row;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in db'};
  }
};

module.exports = {
  getAllUsers,
  getUser,

};