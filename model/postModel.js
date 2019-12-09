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
        'INSERT INTO posts (post_name, post_description, post_filename) VALUES (?, ?, ?);',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const deletePost = async (id) => {
  try {
    await promisePool.execute('DELETE FROM posts WHERE post_id = ?', id);
    console.log('Post deleted from database');
  } catch (e) {
    return {error: 'error in database query'};
  }
};

/*const modifyPost = async (params) =>{
  try {
    const [rows] = await promisePool.execute(
        'UPDATE posts SET  post_name = ?, post_description = ?, post_filename = ? WHERE wop_cat.cat_id = ?',[params]);
  }catch (e) {
  }
}; */

const likePost = async (params) => {
  try {
    await promisePool.execute('UPDATE posts SET post_likes = ? WHERE post_id = ?', params);
    console.log('Post liked');
  } catch (e) {
    return {error: 'error in database query'};
  }
};

module.exports = {
  getAllPosts,
  addPost,
  getAllPostsByUser,
  deletePost,
//  modifyPost,
  likePost
};