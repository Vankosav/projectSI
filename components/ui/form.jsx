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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
