const pool = require('../database/db');
const promisePool = pool.promise();

//SELECT posts.*, user.user_name, user.user_id  from posts INNER JOIN user ON post_creator_id=user.user_id
const getAllPosts = async () => {
  try {
    const [rows] = await promisePool.query('SELECT posts.*, user.user_name, user.user_id  from posts INNER JOIN user ON post_creator_id=user.user_id');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getPost = async (params) => {
  try {
    console.log('params',params);
    const [rows] = await promisePool.execute(
        'SELECT posts.*, user.user_name, user.user_id from posts INNER JOIN user ON post_creator_id=user.user_id WHERE post_id=?;',
        params
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const getAllPostsByUser = async (id) => {

  try {
    const [rows] = await promisePool.query(
        ' SELECT * FROM  posts  INNER JOIN user ON post_creator_id = user_id WHERE user_id = ?;', id);
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error id db query'};
  }
};


const likePost = async (id) => {
  try {
    const [likes] =  await promisePool.execute('SELECT post_likes FROM posts WHERE post_id = ?', id);
    let like = likes[0].post_likes;
    like +=1;
    console.log('Likes now: '+like);
    await promisePool.execute('UPDATE posts SET post_likes = "'+like+'" WHERE post_id = ?', id);
    console.log('Post liked');
  } catch (e) {
    return {error: 'error in database query'};
  }
};

const dislikePost = async (id) => {
  try {
    const [dislikes] =  await promisePool.execute('SELECT post_dislikes FROM posts WHERE post_id = ?', id);
    let dislike = dislikes[0].post_dislikes;
    dislike +=1;
    console.log('Disikes now: '+dislike);
    await promisePool.execute('UPDATE posts SET post_dislikes = "'+dislike+'" WHERE post_id = ?', id);
    console.log('Post disliked');
  } catch (e) {
    return {error: 'error in database query'};
  }
};

const getPostComments = async (params) =>{
  try{
    const [rows] = await promisePool.query(`SELECT * FROM comments INNER JOIN posts ON comment_post=post_id WHERE post_id=?;`, [params]);
    console.log('comments: ', rows);
    return rows
  } catch (e) {
    console.log('error', e.message);
  }
};


const addPost = async (params) => {
  try {

    const [rows] = await promisePool.execute(
        'INSERT INTO posts (post_name, post_description, post_filename, post_creator_id) VALUES (?, ?, ?, ?);',
        params
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

module.exports = {
  dislikePost,
  likePost,
  getAllPosts,
  addPost,
  getPost,
  getPostComments,
  getAllPostsByUser
};