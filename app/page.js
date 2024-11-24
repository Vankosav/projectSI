import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/form"; // Adjust the path if needed
import Navbar from "@/components/ui/navbar";


import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <h1>Contact Us</h1>
      <ContactForm />
      
    </div>
  );
}


