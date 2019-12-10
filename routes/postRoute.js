const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
//multer works
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', postController.posts_list_get);

router.get('/:id', postController.post_get);

router.get('/:id/comments', postController.post_get_comments);

router.get('/u/:id',postController.post_user_get);

router.put('/:id/like', postController.post_like_put);

router.put('/:id/dislike', postController.post_dislike_put);

router.post('/',upload.single('post_filename'), postController.post_create_post);

module.exports = router;