const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.get('/current/:name', userController.user_get_info);

router.post('/register', userController.user_create_post);

router.put('/', userController.user_change_put);

module.exports = router;
