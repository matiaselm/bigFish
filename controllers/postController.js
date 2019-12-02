const postsModel = require('../model/postModel');


const posts_list_get = async (req, res) => {
  const posts = await postsModel.getAllPosts();
  await res.json(users);
};

const post_create_post = async (req,res)=>{

  const user = await userModel.addUser(req.body.post_name, req.body.post_description, req.body.post_creator);
  await res.json(user);


};


module.exports ={
  posts_list_get,
  post_create_post
};