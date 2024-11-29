import connectDB from "../../../configs/db";
import ContactForm from "../../../models/contactFormModel";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, email, message } = await req.json();

    // Save form data to MongoDB
    const newForm = new ContactForm({ firstName, lastName, email, message });
    await newForm.save();

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Server error occurred." }),
      { status: 500 }
    );
  }
}
