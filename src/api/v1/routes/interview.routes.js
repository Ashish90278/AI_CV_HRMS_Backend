const express = require("express");
const router = express.Router();
const interviewController = require("../controllers/interview.controller");

router.get("/", interviewController.getInterviews);
router.post("/", interviewController.createInterview);

module.exports = router;