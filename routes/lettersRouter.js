const Router = require('express');
const router = new Router();
const letterController = require('../controllers/letterController');

router.post('/', letterController.createLetter);
router.get('/', letterController.getLetters);
router.get('/:conversationId', letterController.getLetter);

module.exports = router;
