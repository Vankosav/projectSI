"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router

function SendEmail() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const sendEmail = async () => {
    setError(null); // Reset error
    setSuccess(false); // Reset success state

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      if (response.ok) {
        setSuccess(true); // Set success message
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        router.push("/thank-you"); // Redirect after success
      } else {
        const result = await response.json();
        setError(result.message || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
        className="w-full max-w-4xl space-y-6 mx-auto rounded-lg shadow-lg opacity-90 backdrop-blur-sm "
      >
        <div className="text-center text-white">
      <h6 className="text-xl md:text-2xl font-bold mb-2"></h6>
      <p className="text-sm md:text-lg mb-8">
           
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 bg-gray-900 border border-white rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2  bg-gray-900 border border-white text-white placeholder-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2  bg-gray-900 border border-white rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white">Subject*</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2  bg-gray-900 border border-white rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">Message*</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-3 mt-2  bg-gray-900 border border-white rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-40"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>}

        <div className="text-center mt-4">
          <button
            type="submit"
            className="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendEmail;