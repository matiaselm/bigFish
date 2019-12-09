const pool = require('../database/db');
const promisePool = pool.promise();


const getAllPosts = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM posts');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

/*const getPostComments = async (id) =>{
  try{
    const [rows] = await promisePool.query(`SELECT * FROM comments INNER JOIN posts ON comments_post=post_id WHERE post_id=?;`, [id]);
    return rows
  } catch {

  }
};*/

const getPost = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM posts WHERE post_id=?;',
        params
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const addPost = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO posts (post_name, post_description ,post_creator, post_filename) VALUES (?, ?, ?, ?);',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};


module.exports = {
  getAllPosts,
  addPost,
  getPost,
};