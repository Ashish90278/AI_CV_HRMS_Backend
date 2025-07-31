const express = require("express");
const router = express.Router();
const settingController = require("../controllers/setting.controller");

router.get("/", settingController.getSettings);
router.post("/", settingController.createSetting);

module.exports = router;