const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
router.get("/", controller.main);

router.get("/comments", controller.comments);
// url 뒤에 붙는 값을 req.params로 읽어올 수 있다
// :뒤에 붙는 이름으로 값이 저장된다.
router.get("/comment/:id", controller.comment);

module.exports = router;
