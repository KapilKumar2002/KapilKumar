import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  techStack: {
    type: [String],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  description: {
    type: [String],
    required: true,
  },
  references: {
    type: [String],
  },
  projectImage: {
    type: String,
  },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema); // Use existing model if available, otherwise create a new one
