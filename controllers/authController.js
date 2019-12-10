'use strict';
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('../utils/pass');

const login = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/error'
    })
};

const user_create_post = async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log('user create error', errors);
        res.send(errors.array());
    } else {
        // TODO: bcrypt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const params = [
            req.body.name,
            req.body.username,
            hash,
        ];

        if (await userModel.addUser(params)) {
            next();
        } else {
            res.status(400).json({error: 'register error'});
        }
    }
};

const logout = (req, res) => {
    req.logout();
    res.json({message: 'logout'});
};

module.exports = {
    login,
    logout,
    user_create_post,
};