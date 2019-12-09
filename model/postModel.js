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



const getAllPostsByUser = async (uName) => {

  try {
    const [rows] = await promisePool.query(' SELECT * FROM  posts  INNER JOIN user ON post_creator_id = user_id WHERE user_name = ?;',[uName]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
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
  getAllPostsByUser,
};