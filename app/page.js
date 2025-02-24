import Navbar from "../components/ui/navbar";
import SectionOne from "../components/ui/sectionOne";
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
        <main className="relative">
  <SectionOne />
</main>
        <div>
          <Footer />
         </div>       
      </div>
    </div>
  );
}
