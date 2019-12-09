'use strict';

const express = require('express');
const port = 3000;
const cors = require('cors');
/*const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
*/
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use(express.static('uploads'));
app.use('thumbnails', express.static('thumbnails'));

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

app.use('/user',userRoute);
app.use('/post',postRoute);
/*
if (process.env.SERVER === 'dev_localhost') {
  require('./secure/localhost')(app);
} else {
  require('./secure/server');
  app.listen(3000, () =>
      console.log('server start'));
}
*/


app.listen(port, () => console.log(`Example app listening on port ${port}!`));