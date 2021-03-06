const pool = require('../database/db.js');
const promisePool = pool.promise();
const bcrypt = require('../utils/bcrypt');

const getAllUsers = async () => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM user');
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
};

const getUserLogin = async (name) => {
    try {
        const [user] = await promisePool.execute('SELECT * FROM user WHERE user_name = ?', name);
        return user;
    } catch (e) {
        console.log('error in getUserLogin', e.message);
        return {error: 'error in db'};
    }
};


const getUser = async (id) => {
    try {
        const [row] = await promisePool.execute(
            'SELECT * FROM user WHERE user_id = ?', id
        );
        return row;
    } catch (e) {
        console.log('error', e.message);
        return {error: 'error in db'};
    }
};

const getUserInfo = async (name) => {
    try {
        const [row] = await promisePool.execute(
            'SELECT user_id FROM user WHERE user_name = ?', name
        );
        return row;
    } catch (e) {
        console.log('error', e.message);
        return {error: 'error in db'};
    }
};

const addUser = async (username, email, passwd,) => {
    try {
        const [row] = await promisePool.execute(
            'INSERT INTO user(user_name, user_email, user_passwd) Values("' + username + '", "' + email + '", "' + bcrypt.passHash(passwd) + '")');
        return row;
    } catch (e) {
        console.error(e);
        return {error: 'error in db'};
    }
};

const changeUserPic = async (params) => {
    try {
        const [row] = await promisePool.execute(
            'UPDATE user SET user_filename = ? WHERE user_id =?', [params],
        );
        return row;

    } catch (e) {
        console.error(e);
        return {error: 'error in db'};
    }
};

module.exports = {
    getAllUsers,
    getUser,
    getUserInfo,
    addUser,
    changeUserPic,
    getUserLogin,
};