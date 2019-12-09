const postsModel = require('../model/postModel');
const resize = require('../utils/resize');

const posts_list_get = async (req, res) => {
  const posts = await postsModel.getAllPosts();
  await res.json(posts);
};

const post_user_get = async(req,res) =>{

  const param = searchField.value;
  console.log(param);
  const  posts = await  postsModel.getAllPostsByUser(param);
  await res.json(posts);
};

const post_create_post = async (req, res) => {
  console.log(req.body.post_name,
      req.body.post_description,
      req.file.filename
    );
  try {
    // Make thumbnail
    resize.makeThumbnail(req.file.path,
        'thumbnails/'+ req.file.filename,
        {width: 160,height: 160});

    // add to db
    console.log('request?', req);
    const params = [
      req.body.post_name,
      req.body.post_description,
      req.file.filename

    ];
    const response = await postsModel.addPost(params);
    await res.json(response);

  }
  catch (e) {
    console.log('exif error', e);
    res.status(400).json({message: 'error'});
  }

};

const post_delete = async (req) => {
  const params = [req.params.id];
  await postsModel.deletePost(params);
};
/*
const post_update_put = async (req, res) => {
  const params = [
    req.body.,
    req.body.,
    req.body.
  ];
  console.log('update', params);
  const post = await postsModel.modifyPost(params);
  await res.json(post);
};
*/


module.exports ={
  posts_list_get,
  post_create_post,
  post_user_get,
  post_delete,
};