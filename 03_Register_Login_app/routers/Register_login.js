const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");

router.get("/",user_controller.getHome)
router.get("/login", user_controller.getLogin);
router.post("/login", user_controller.postLogin);
router.get("/register", user_controller.getRegister);
router.post("/register", user_controller.postRegister);
router.get("/forgot", user_controller.getForgot);
router.get("/newuser",user_controller.getNewUser)

module.exports = router;