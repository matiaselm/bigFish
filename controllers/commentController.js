const commentModel = require('../model/commentModel');

const post_create_post = async (req, res) => {
  try {
    const id = 6;
    // add to db
    console.log('request?', req);
    const params = [
      req.body.comment_text,
      localStorage.getItem(id),
      req.file.filename,
      id
    ];
    //res.sendFile(path.join(__dirname + '/../public/index.html'));
    res.redirect('/index');
    const response = await postModel.addPost(params);
    await res.json(response);

  }
  catch (e) {
    console.log('exif error', e);
    res.status(400).json({message: 'error'});
  }

};

module.exports={};