import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  personalUrl: { type: String },
  cv: { type: String, required: true }, // Store the file path or URL
});

const ApplicationForm =
  mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default ApplicationForm;
