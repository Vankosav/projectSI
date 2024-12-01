import Navbar from "@/components/ui/navbar";
import SectionOne from "@/components/ui/sectionOne";
import SectionTwo from "@/components/ui/sectionTwo";
import Leadership from "@/components/ui/leadership";
import ContactForm from "@/components/ui/form";
import { Section } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <SectionOne />
        <SectionTwo />
        <Leadership />
          <ContactForm />
       
      </main>
    </div>
  );
}
