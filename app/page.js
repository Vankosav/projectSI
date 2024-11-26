import Navbar from "@/components/ui/navbar";
import SectionOne from "@/components/ui/sectionone";
import ContactForm from "@/components/ui/form";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <SectionOne />
        <section id="contact" className="py-16">
          <h1 className="text-center text-2xl font-bold mb-8">Contact Us</h1>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
