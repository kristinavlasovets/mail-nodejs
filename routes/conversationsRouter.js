const Router = require('express');
const router = new Router();
const conversationController = require('../controllers/conversationController');

router.post('/', conversationController.createConversation);

router.get('/:userId', conversationController.getConversation);

module.exports = router;
