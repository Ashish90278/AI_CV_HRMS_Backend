const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    s3Path: { type: String, required: true },
    aiScore: { type: Number, min: 0, max: 100, default: 0 },
    skillMatch: { type: Number, min: 0, max: 100, default: 0 },
    completeness: { type: Number, min: 0, max: 100, default: 0 },
    status: {
      type: String,
      enum: ["Parsed", "Failed", "Pending"],
      default: "Pending",
    },
    skills: { type: [String], default: [] },
    experienceYears: { type: Number, default: 0 },
    location: { type: String },
    parsedText: { type: String },
  },
  {
    timestamps: { createdAt: "uploadedAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Resume", resumeSchema);
