const userModel = require('../models/userModel');


const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  await res.json(users);
};
const user_get = async (req, res) => {
  const params = [req.params.id];
  const user = await userModel.getUser(params);
  await res.json(user[0]);
};
module.exports ={
  user_get,
  user_list_get
};