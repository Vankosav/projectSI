"use client";

import React from "react";
import Link from 'next/link';

const SectionOne = () => {
  return (
    <div className="relative w-full h-[609px] flex flex-col items-center justify-center px-10 md:px-22 py-10 gap-6 z-10">
      <div className="text-center text-white">
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
    </div>
  );
};

export default SectionOne;


