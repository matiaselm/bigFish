const pool = require('../database/db.js');
const promisePool = pool.promise();
//const bcrypt = require('bcryptjs');

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM user');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    const [row] = await promisePool.execute(
    return row;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in db'};
  }
};

const addUser = async (username, email, passwd) => {
  try {
   // const salt = bcrypt.genSaltSync(12);
   // const hash = bcrypt.hashSync(req.body.password, salt);
  //  passwd = hash;
    const  [row]= await promisePool.execute(
        'INSERT INTO user(user_name, user_email, user_passwd) Values("'+username+'", "'+email+'", "'+passwd+'")');
    return row;
  } catch (e) {
    console.error(e);
    return {error: 'error in db'};
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser
};