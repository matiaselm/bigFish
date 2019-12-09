'use strict';

const express = require('express');
const port = 3000;
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

app.use(require('express-session')(
    {secret: 'keyboard cat', resave: true, saveUninitialized: true}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log('login', username);

        if(!bcrypt.compareSync(password, '$2a$12$GGl5Twz6Stv2Pu1Z6/NlteMr53irrYeKIgLk5753.jeMTqfu.Co7a')) {
            console.log('login', 'wrong username or password');
            return done(null, false);
        }
        return done(null, {username: username});
    }
));
passport.serializeUser((user, done) =>{
    done(null, user.username);
});

passport.deserializeUser((username, done) =>{
    done(null, {username:username});
});

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/error'})
);

app.get('/success', (req, res) => res.send("Welcome!!"));
app.get('/error', (req, res) => res.send("Error logging in"));

app.use(express.static('uploads'));
app.use('thumbnails', express.static('thumbnails'));

const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

app.use('/user',userRoute);
app.use('/post',postRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));