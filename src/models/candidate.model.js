const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    city: String,
    state: String,
    resumeUrl: String,
    resumeFileName: String,
    parsedFromAI: { type: Boolean, default: false },
    aiSummary: String,
    appliedFor: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    source: String,
    currentCTC: { type: Number, default: 0 },
    expectedCTC: { type: Number, default: 0 },
    noticePeriod: String,
    highestQualification: String,
    totalExperience: { type: Number, default: 0 },
    skills: { type: [String], default: [] },
    certifications: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    recruiterNotes: String,
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "New" },
    pipelineStatus: {
      type: String,
      enum: [
        "Sourced",
        "Applied",
        "Contacted",
        "Shortlisted",
        "Interviewed",
        "Rejected",
        "Hired",
      ],
      default: "Sourced",
    },
    pipelineTimestamps: {
      Sourced: Date,
      Applied: Date,
      Contacted: Date,
      Shortlisted: Date,
      Interviewed: Date,
      Rejected: Date,
      Hired: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
