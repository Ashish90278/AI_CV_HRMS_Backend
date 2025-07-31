const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    function: { type: String, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["Active", "Draft", "Inactive"],
      default: "Draft",
    },
    questions: { type: Number, required: true },
    timeLimit: { type: Number, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completions: { type: Number, default: 0 },
    avgScore: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
    visibility: {
      type: String,
      enum: ["Public", "Internal", "Private"],
      default: "Private",
    },
    meta: {
      difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Medium",
      },
      version: { type: String, default: "v1.0" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
