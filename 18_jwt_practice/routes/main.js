const express = require("express");
const router = express.Router();
const mainController = require("../controller/Cmain");

router.get("/", mainController.renderMainPage);

module.exports = router;
