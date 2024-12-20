import React from "react";
import Navbar from "@/components/ui/navbar";
import Mission from "@/components/ui/mission";
import Footer from "@/components/ui/footer";

const MissionPage = () => {
    return (
        <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
            backgroundImage: "url('/background.png')",
            backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
        >
        {/* Transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
    
        {/* Content */}
        <div className="relative z-10">
            <Navbar />
            <main className="pt-16 flex flex-col gap-y-10">
            
                <Mission />
        
            </main>
            <div>
            <Footer />
            </div>
        </div>
        </div>
    );
    }

    export default MissionPage;