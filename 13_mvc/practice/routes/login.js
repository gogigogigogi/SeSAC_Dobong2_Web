const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

router.post("/", controller.login);

module.exports = router;
