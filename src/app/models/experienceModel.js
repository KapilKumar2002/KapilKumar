import mongoose from "mongoose";

const Schema = mongoose.Schema;

const KeyValueSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const experienceSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    companyLink: {
      type: String,
    },
    isIntern: {
      type: Boolean,
      default: false,
    },
    description: {
      type: [KeyValueSchema], // Array of objects with key-value pairs
      required: true,
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
  },
  {
    timestamps: true,
  }
);

export const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
