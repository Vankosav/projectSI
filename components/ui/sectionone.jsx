"use client";

import React from "react";

const SectionOne = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/drone.png')",
      }}
    >
      <div className="absolute bottom-0 w-full flex items-center justify-center">
        <div className="bg-white bg-opacity-80 text-black p-4 md:p-6 rounded-t-md shadow-md max-w-lg text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
            Welcome to Sapper Intelligence
          </h1>
          <p className="text-sm md:text-lg">
            Beyond Visual—Transforming Ideas into Reality. Explore innovative
            solutions tailored for the modern world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
