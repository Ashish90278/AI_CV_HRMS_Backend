const Job = require("../../../models/job.model");

// POST /api/jobs
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};

// GET /api/jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

// GET /api/jobs/:id
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job", error });
  }
};

// PATCH /api/jobs/:id
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error });
  }
};

// PATCH /api/jobs/:id/status
exports.updateJobStatus = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error updating job status", error });
  }
};

// GET /api/jobs/:id/candidates
exports.getJobCandidates = async (req, res) => {
  try {
    const jobId = req.params.id;
    const Candidate = require("../models/candidate.model");
    const candidates = await Candidate.find({ appliedFor: jobId });
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error });
  }
};

// POST /api/jobs/:id/stages
exports.setJobStages = async (req, res) => {
  try {
    // Placeholder logic
    res.status(200).json({ message: "Job stages updated (stub)" });
  } catch (error) {
    res.status(500).json({ message: "Error updating stages", error });
  }
};

// GET /api/departments
exports.getDepartments = async (req, res) => {
  try {
    res.status(200).json(["Engineering", "HR", "Marketing", "Sales"]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching departments", error });
  }
};

// GET /api/clients
exports.getClients = async (req, res) => {
  try {
    res.status(200).json(["Client A", "Client B", "Client C"]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients", error });
  }
};

// GET /api/locations
exports.getLocations = async (req, res) => {
  try {
    res.status(200).json(["Remote", "San Francisco", "New York", "Bangalore"]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching locations", error });
  }
};
