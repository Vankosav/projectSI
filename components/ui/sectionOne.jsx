"use client";

import React from "react";
import Link from 'next/link';


const SectionOne = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white mt-20 py-8 px-10 md:px-20 rounded-lg shadow-lg h-[409px] w-full gap-4 pt-10">
      <div className="text-center text-white">
        <h1 className="text-xl md:text-6xl font-bold mb-4">
        Underground recognition for a Safer World
        </h1>
        <p className="text-sm md:text-lg mb-8">
        Autonomous detection, inspection and mapping of covered objects and structures in the subterrane. 
        From the air - in real time.
        </p>
        <Link href="/contact">
        <button
            type="link"
            className="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            Contact us
          </button>
          </Link>
      </div>
    </div>
  );
};

export default SectionOne;


