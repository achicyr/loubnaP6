const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const booksCtrl = require('../controllers/books');



router.get('/',auth, booksCtrl.getAllBooks);
router.post('/',auth,  multer, booksCtrl.createBooks);
router.post('/:id/rating ',  auth, booksCtrl.ratingBooks);
//router.get('/:id', auth,  booksCtrl.getOneBooks);
//router.get('/bestrating', auth,  booksCtrl.getbestratingBooks);
router.put('/:id', auth, multer, booksCtrl.modifyBooks);
router.delete('/:id', auth, booksCtrl.deleteBooks);

module.exports = router;