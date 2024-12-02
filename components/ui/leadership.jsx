"use client";

import React from "react";

const Leadership = () => {
  return (
    <div className="w-full text-white py-16 px-10 md:px-20">
      {/* Title and Paragraph */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Meet Our Leadership Team
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Our team is a diverse group of experts in AI, software, and defense united by a shared mission to revolutionize safety and 
          create smarter, faster solutions for global security.
        </p>
      </div>

      {/* Leadership Photos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <div className="p-2">
            <img
              src="/leader1.png"
              alt="Leader 1"
              className="w-40 h-40 md:w-52 md:h-52 object-cover"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Jacob von Manteuffel
          </h2>
          <p className="text-sm md:text-base">CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <div className="p-2">
            <img
              src="/leader2.png"
              alt="Leader 2"
              className="w-40 h-40 md:w-52 md:h-52 object-cover"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Carmen Loew
          </h2>
          <p className="text-sm md:text-base">COO</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <div className="p-2">
            <img
              src="/leader3.png"
              alt="Leader 3"
              className="w-40 h-40 md:w-52 md:h-52 object-cover"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Lokesh Bisht
          </h2>
          <p className="text-sm md:text-base">CTO</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
