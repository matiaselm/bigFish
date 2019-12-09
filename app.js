'use strict';

const express = require('express');
const port = 3000;
const cors = require('cors');
/*const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs'); */
const app = express();

app.use(require('express-session')(
    {secret: 'keyboard cat', resave: true, saveUninitialized: true}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

/*app.use(require('express-session')(
    {secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended: true}));
*/


app.use(express.static('uploads'));
app.use('thumbnails', express.static('thumbnails'));

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

app.use('/user',userRoute);
app.use('/post',postRoute);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));