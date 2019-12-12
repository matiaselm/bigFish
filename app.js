/*
* Main script for the app backen. It defines dependencies and routing. It starts all main functions for backend.
* Also functionality of passport authentication and user serialization is here.
* */


'use strict';

const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const userModel = require('./model/userModel');

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
            delete user.user_password;
            console.log("Login succesful");

            return done(null, {...user});

        } catch (err) {
            return done(err);
        }

    }
));

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser((user_id, done) => {
    done(null, {user_id: user_id});
});

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/loginSuccess',
        failureRedirect: '/loginError'
    })
);

app.get('/loginSuccess', (req, res) => {
    res.redirect('/index.html');
});

app.get('/index', (req, res) => {
    res.redirect('/index.html');
});

app.get('/loginError', (req, res) => {
    res.redirect('/html/login.html');
});

app.get('/', (req, res) => {
    res.redirect('/html/login.html');
});

app.use(express.static('public'));
app.use('thumbnails', express.static('thumbnails'));

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');

app.use('user', userRoute);
app.use('post', postRoute);
app.use('comment',commentRoute);

app.listen(port, () => console.log(`\nApp listening on port ${port}!`));

