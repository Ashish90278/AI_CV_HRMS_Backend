const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const jobRoutes = require("./job.routes");
const resumeRoutes = require("./resume.routes");
const quizRoutes = require("./quiz.routes");
const interviewRoutes = require("./interview.routes");
const reportRoutes = require("./report.routes");
const settingRoutes = require("./setting.routes");
const authRoutes = require("./auth.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/resumes", resumeRoutes);
router.use("/quizzes", quizRoutes);
router.use("/interviews", interviewRoutes);
router.use("/reports", reportRoutes);
router.use("/settings", settingRoutes);



module.exports = router;
