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


// SELECT * from residents INNER JOIN animal on residents.type = animal.name where family_id =1
const getAllPostsByUser = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM posts');
    return rows;

  } catch (e) {
    console.log('error', e.message);
  }
};

const getPost = async (params) => {
  try {
    console.log('params',params);
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


module.exports = {
  getAllPosts,
  addPost,
  getPost,
  getPostComments
};