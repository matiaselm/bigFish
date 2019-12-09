const postModel = require('../model/postModel');
const resize = require('../utils/resize');

const posts_list_get = async (req, res) => {
  const posts = await postModel.getAllPosts();
  await res.json(posts);
};

/*const post_create_post = async (req,res)=>{

//  const post = await postModel.addPost(req.body.post_name, req.body.post_description, req.body.post_creator, req.body.post_file);
  const post = await postModel.addPost(req.body.post_name, req.body.post_description, req.body.post_creator, req.file.post_file );
  await res.json(post);
  console.log('post name', req.body.post_name);
  console.log('post description', req.body.post_description);
  console.log('post creator', req.body.post_creator);
  console.log('post filename',req.file.post_file);

};

*/

const post_get = async (req, res) =>{
 try {
   const params = [req.params.id];
   const post = await postModel.getPost(params);
   return await res.json(post[0]);
 }catch (e) {
   console.log('error', e.message);
   return {error: 'error in database query'};
 }
};

// cannot read property of post_filename

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
    const response = await postModel.addPost(params);
    await res.json(response);

  }
  catch (e) {
    console.log('exif error', e);
    res.status(400).json({message: 'error'});
  }

};

const post_get_comments = async (req, res) => {
  const params = [req.params.id];
  const comments = await postModel.getPostComments(params);
  await res.json(comments);
};

module.exports ={
  posts_list_get,
  post_create_post,
  post_get,
  post_get_comments,
};