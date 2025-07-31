const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    score: { type: Number, required: true },
    timeTaken: { type: Number, required: true },
    responses: [
      {
        qId: { type: mongoose.Schema.Types.ObjectId, required: true },
        selectedOption: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
    startedAt: { type: Date, required: true },
    submittedAt: { type: Date },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Disqualified"],
      default: "In Progress",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);
