const router = require('express').Router();
const PostController = require('../controllers/PostController');
const multer = require('../middlewares/Multer');
const uploadToGCS = require('../middlewares/UploadGCS');

router.get('/', multer.single('image'), PostController.index);
router.get('/', PostController.upload);

module.exports = router;