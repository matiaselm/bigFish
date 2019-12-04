const postsModel = require('../model/postModel');


const posts_list_get = async (req, res) => {
  const posts = await postsModel.getAllPosts();
  await res.json(posts);
};

/*const post_create_post = async (req,res)=>{

//  const post = await postModel.addPost(req.body.post_name, req.body.post_description, req.body.post_creator, req.body.post_file);
  const post = await postsModel.addPost(req.body.post_name, req.body.post_description, req.body.post_creator, req.file.post_file );
  await res.json(post);
  console.log('post name', req.body.post_name);
  console.log('post description', req.body.post_description);
  console.log('post creator', req.body.post_creator);
  console.log('post filename',req.file.post_file);

};
*/
const post_create_post = async (req, res) => {
  console.log(req.body.post_name,
      req.body.post_description,
      req.body.post_creator,
    //  req.file.post_filename
    );
  try {
    // add to db
    const params = [
      req.body.post_name,
      req.body.post_description,
      req.body.post_creator,
      req.file.post_filename

    ];
    const response = await postsModel.addPost(params);
    await res.json(response);

  }
  catch (e) {
    console.log('exif error', e);
    res.status(400).json({message: 'error'});
  }

};


module.exports ={
  posts_list_get,
  post_create_post
};