import connectDB from "../../../configs/db";
import ContactForm from "../../../models/contactFormModel";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, email, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Save to MongoDB
    const newForm = new ContactForm({ firstName, lastName, email, message });
    await newForm.save();

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error saving form:", error);
    return new Response(JSON.stringify({ error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    await connectDB(); // Connect to MongoDB

    const contacts = await ContactForm.find(); // Fetch all submissions

    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Server error." }),
      { status: 500 }
    );
  }
}