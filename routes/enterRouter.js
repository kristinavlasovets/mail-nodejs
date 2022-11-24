const Router = require('express');
const router = new Router();
const controller = require('../controllers/enterController');

router.post('/user', controller.enter);
router.get('/users', controller.getUsers);

module.exports = router;
