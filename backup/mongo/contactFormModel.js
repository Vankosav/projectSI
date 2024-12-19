import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactForm =
  mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);

export default ContactForm;
