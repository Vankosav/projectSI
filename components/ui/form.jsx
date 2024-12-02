"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./input";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Unexpected error occurred.");
    }
  };

  return (
    <div className="w-full min-h-screen text-white py-20 px-6 md:px-20">
      {/* Heading and Description */}
      <div className="text-left mb-12 mt-28 max-w-3xl">
        <h6 className="text-2xl md:text-3xl font-bold mb-4">
          Partnership and Collaboration Inquiries
        </h6>
        <p className="text-sm md:text-lg leading-relaxed">
          If you are interested in exploring collaboration opportunities, we welcome the chance to discuss how
          we can work together to drive innovation and address global challenges.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-black rounded-lg w-full max-w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <Input
            name="firstName"
            label="First Name"
            form={form}
            placeholder="Enter your first name"
            className="text-black"
          />
          <Input
            name="lastName"
            label="Last Name"
            form={form}
            placeholder="Enter your last name"
            className="text-black"
          />
          <Input
            name="email"
            label="Email"
            form={form}
            placeholder="Enter your email"
            type="email"
            className="text-black"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <Input
            name="message"
            label="Message"
            form={form}
            as="textarea"
            placeholder="Enter your message"
            rows={6}
            className="text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
