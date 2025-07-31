const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job.controller");

// Create a new job
router.post("/", jobController.createJob);

// Get all jobs
router.get("/", jobController.getAllJobs);

// Get a job by ID
router.get("/:id", jobController.getJobById);

// Update a job by ID
router.patch("/:id", jobController.updateJob);

// Update job status
router.patch("/:id/status", jobController.updateJobStatus);

// Get candidates for a job
router.get("/:id/candidates", jobController.getJobCandidates);

// Set stages for a job
router.post("/:id/stages", jobController.setJobStages);

// Get all departments
router.get("/departments", jobController.getDepartments);

// Get all clients
router.get("/clients", jobController.getClients);

// Get all locations
router.get("/locations", jobController.getLocations);

module.exports = router;
