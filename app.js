'use strict';

const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const userModel = require('./model/userModel');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    async (username, password, done) => {
      console.log('trying to login', username);

      const params = [username];

      try {
        const [user] = await userModel.getUserLogin(params);
        if (user === undefined) {
          console.log("Incorrect username");
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.user_passwd)) {
          console.log("Incorrect password");
          return done(null, false);
        }
        delete user.password;

        console.log("Login succesful");
        return done(null, {...user});

      } catch (err) {
        return done(err);
      }
    }
));
passport.serializeUser((user, done) => {

  done(null, user.user_name);

});

passport.deserializeUser((username, done) => {
  done(null, {username: username});
});

app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/error'
    })
);

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/login.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));
app.use('thumbnails', express.static('thumbnails'));

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');


app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(port, () => console.log(`\nApp listening on port ${port}!`));