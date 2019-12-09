const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
//multer works
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', postController.posts_list_get);

//router.get('/comments', postController.post_commment_get);

router.get('/:id', postController.post_get);

router.post('/',upload.single('post_filename'), postController.post_create_post);

module.exports = router;