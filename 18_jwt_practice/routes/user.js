const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const userController = require("../controller/Cuser");

router.get("/login", userController.renderLoginPage);
router.get("/signup", userController.renderSignupPage);

router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);

router.post("/signup", upload.single("profilePic"), userController.createUser);
module.exports = router;
