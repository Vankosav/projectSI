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
    console.log("Submitting form:", values);

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
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-4 bg-white shadow-md rounded-md md:space-y-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          name="firstName"
          label="First Name"
          form={form}
          placeholder="Enter your first name"
        />
        <Input
          name="lastName"
          label="Last Name"
          form={form}
          placeholder="Enter your last name"
        />
      </div>
      <Input
        name="email"
        label="Email"
        form={form}
        placeholder="Enter your email"
        type="email"
      />
      <Input
        name="message"
        label="Message"
        form={form}
        as="textarea"
        placeholder="Enter your message"
        rows={4}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;