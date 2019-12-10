const userModel = require('../model/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  await res.json(users);
};

const user_get = async (req, res) => {
  const params = [req.params.id];
  const user = await userModel.getUser(params);
  await res.json(user[0]);
};

const user_create_post = async (req,res)=>{

  const user = await userModel.addUser(req.body.username, req.body.email, req.body.passwd);
  await res.json(user);
  console.log('username', req.body.username);
  console.log('email', req.body.email);
  console.log('passwd', req.body.passwd);
};

const user_change_put = async (req, res) => {

  const params = [req.file.filename,req.params.id];
  const user = await userModel.changeUserPic(params);
  res.json(user)
};

module.exports ={
  user_get,
  user_list_get,
  user_create_post,
  user_change_put
};