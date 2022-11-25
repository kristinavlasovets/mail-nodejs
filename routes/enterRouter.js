const Router = require('express');
const router = new Router();
const controller = require('../controllers/enterController');

router.post('/user', controller.enter);
router.get('/users', controller.getUsers);
router.get('/users/:userId', controller.getUser);

module.exports = router;
