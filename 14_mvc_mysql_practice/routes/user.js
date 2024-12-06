// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/signup", controller.getSignUp);
router.get("/signin", controller.getSignIn);

router.post("/signup", controller.postSignUp);
router.post("/signin", controller.postSignIn);
router.post("/profile", controller.postProfile);

router.patch("/profile/edit", controller.editProfile);
router.delete("/profile/delete", controller.deleteProfile);
module.exports = router;
