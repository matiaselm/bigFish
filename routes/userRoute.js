const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/register', userController.user_create_post);

module.exports = router;
