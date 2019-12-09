const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
//multer works
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', postController.posts_list_get);

router.get('/u/',postController.post_user_get);

router.post('/',upload.single('post_filename'), postController.post_create_post);

router.delete('/:id', postController.post_delete);


module.exports = router;