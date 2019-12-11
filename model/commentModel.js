const pool = require('../database/db');
const promisePool = pool.promise();


const addComment = async (params) => {
  try {

    const [rows] = await promisePool.execute(
        'INSERT INTO comments (comment_text, comment_creator, comment_post) VALUES (?, ?, ?);',
        params
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

module.exports={addComment};