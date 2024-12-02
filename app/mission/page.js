"use client";
import React from "react";
import Navbar from "@/components/ui/navbar";

const Mission = () => {
  return (
    <div>
        <Navbar />
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          At Sapper Intelligence, we aim to transform innovation into solutions that empower communities and drive meaningful change.
        </p>
        <p className="mt-4 text-lg md:text-xl">
          We are dedicated to collaboration, ethical practices, and advancing global progress through technology and education.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Mission;
