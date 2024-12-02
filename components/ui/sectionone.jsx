"use client";

import React from "react";
import Link from 'next/link';

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full relative px-10 md:px-22 pt-20 md:pt-32"> {/* Added padding-top here */}
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-left text-white z-10">
        <h1 className="text-xl md:text-6xl font-bold mb-4">
          Uncovering Safety in Every Step
        </h1>
        <p className="text-sm md:text-lg mb-8">
          Our technology empowers safe exploration of once-dangerous lands, enabling communities to rebuild with confidence and security.
        </p>
        <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            <Link href="/mission">
              Discover Our Mission
            </Link>
          </button>
      </div>

      {/* Right Section: Photo */}
      <div className="md:w-1/3 h-auto relative flex items-center pl-14 md:pl-14 transform -translate-x-16">
        <img
          src="/aboutHills.png"
          alt="Safety Mission"
          className="object-cover transform translate-y-6"
        />
      </div>
    </div>
  );
};

export default SectionOne;
