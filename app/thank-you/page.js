"use client";
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const ThankYou = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')", 
        backgroundAttachment: 'fixed',  // Keeps the background fixed while scrolling
      }}
    >
      <div className="absolute inset-0 opacity-70"></div> {/* Transparent black overlay */}
      <div className="relative z-10">
        <Navbar />
        <main className="fixed top-0 left-0 right-0 z-20 pt-16 mt-20"> {/* Added mt-20 to give space */}
          <div className="pt-10 text-center"> {/* Padding between Navbar and Thank You message */}
            <h1 className="text-4xl text-white">Thank You!</h1> {/* Title */}
            <p className="text-xl text-white mt-4">Your message has been sent successfully.</p>
            <p className="text-lg text-white mt-2">We will get back to you shortly.</p>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
