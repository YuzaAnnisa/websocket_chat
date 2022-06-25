const { Router } = require("express");
const router = new Router();
const userController = require("../controller/userController");
const roomController = require("../controller/roomController");

router.post("/user", userController.addAuser);
router.post("/room", roomController.addARoom);

module.exports = router