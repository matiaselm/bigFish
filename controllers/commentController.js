const commentModel = require('../model/commentModel');

const comment_create_post = async (req, res) => {
  try {
    // add to db
    console.log('request?', req);
    const params = [
      req.body.comment_text,
      req.body.comment_creator,
      req.body.comment_post
    ];
    const response = await commentModel.addComment(params);
    await res.json(response);
  }
  catch (e) {
    console.log('exif error', e);
    res.status(400).json({message: 'error'});
  }

};

module.exports={comment_create_post};