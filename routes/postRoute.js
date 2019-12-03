const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
//multer works
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', postController.posts_list_get);

router.post('/',upload.single('post_file'), postController.post_create_post);

module.exports = router;