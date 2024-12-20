import Navbar from "../components/ui/navbar";
import SectionOne from "../components/ui/sectionOne";
import Leadership from "../components/ui/leadership";
import Mission from "../components/ui/mission";
import Footer from "@/components/ui/footer";

export default function Home() {
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
        <main className="pt-16">
          <div className="pt-10"> {/* Padding between Navbar and SectionOne */}
            <SectionOne />
          </div>
          <div className="pt-10"> {/* Padding between Leadership and SectionTwo */}
            <Mission />
          </div>
          <div className="pt-80"> {/* Padding between SectionOne and Leadership */}
            <Leadership />
          </div>
        </main>
        <div>
          <Footer />
         </div>       
      </div>
    </div>
  );
}
