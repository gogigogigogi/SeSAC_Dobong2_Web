const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);

module.exports = router;
