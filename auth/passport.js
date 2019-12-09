/*'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// auth using email and hash
passport.use(new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
)); */