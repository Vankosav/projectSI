import Navbar from "@/components/ui/navbar";
import SectionOne from "@/components/ui/sectionOne";
import SectionTwo from "@/components/ui/sectionTwo";
import Leadership from "@/components/ui/leadership";
import ContactForm from "@/components/ui/form";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')", // Set the background image
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000974] to-[#000974] opacity-70"></div> {/* Gradient overlay */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <SectionOne />
          <SectionTwo />
          <Leadership />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}
