const Router = require("express");
const router = new Router();
const controller = require("./mailController");

router.post("/enter", controller.enter);
router.get("/users", controller.getUsers);

module.exports = router;
