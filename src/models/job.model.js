const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    roleLevel: { type: String, required: true },
    client: { type: String, required: true },
    function: { type: String },
    city: { type: String },
    location: { type: String },
    deploymentType: { type: String },
    travelling: { type: String },
    clientRecruiter: { type: String },
    jobType: { type: String },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   // required: true,
    // },
    jdInputMode: { type: String, enum: ["paste", "upload", "ai", "template"] },
    pastedJD: String,
    jdFileUrl: String,
    aiGeneratedJD: String,
    templateUsed: String,
    aiAssistantPrompt: String,
    aiTags: { type: [String], default: [] },

    
    requiredSkills: { type: String},
    gender: { type: String },
    noticePeriod: { type: String },
    // Employment Details
    salaryRange: {
      type: { type: String, enum: ["Monthly", "Annual"] },
      min: { type: Number },
      max: { type: Number },
      currency: { type: String, default: "INR" },
    },
    workExperience: { type: Number, default: 0 },
    experienceLevel: { type: String },
    employmentType: { type: String },
    differentlyAble: { type: String },
    languageKnown: { type: [String], default: [] },

    //Optional Details
    education: { type: [String], default: [] },
    numberOfOpenings: { type: Number, default: 1 },
    relocationAllowed: { type: String },
    ageRange: {
      min: { type: Number },
      max: { type: Number },
    },
    status: {
      type: String,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    },
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);