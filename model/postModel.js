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

const addPost = async (post_name, post_description, post_creator, post_file) => {
  try {
    const  [row]= await promisePool.execute(
        'INSERT INTO posts(post_name, post_description, post_creator,post_filename)' +
        ' Values("'+post_name+'", "'+post_description+'", "'+post_creator+'", "'+post_file+'")');
    return row;
  } catch (e) {
    console.error(e);
    return {error: 'error in db'};
  }
};


module.exports = {
  getAllPosts,
  addPost,
};