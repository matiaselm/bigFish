'use strict';
const bcrypt = require('bcryptjs');


const passHash =  (pass) =>{
  const salt = bcrypt.genSaltSync(12);

  const hash = bcrypt.hashSync(pass, salt);
  console.log('Hash: ',hash);
  return  hash;
};

module.exports = {
  passHash,
};