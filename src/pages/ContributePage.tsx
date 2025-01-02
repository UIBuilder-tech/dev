import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationTable from "../components/Donate/DonationTable";
import Hero from "../components/Home/Hero";
// import Vantiga from "../components/Contribute/Vantiga";
import PaymentForm from "../components/Contribute/AddPaymentDetails";
import VolunteerForm from "../components/Contribute/VolunteerForm";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import ChitrapurMathImg from "../assets/Shirali_Math.webp";
import PhotoGallery from "../components/About/PhotoGallery";
import Ambassador from "../components/About/Ambassador";
import VantigaDetailed from "../components/Contribute/VantigaDetailed";
import { Outlet } from "react-router-dom";

export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  const location = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Add a small delay to ensure the content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]); // Only run when hash changes

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Support Our Mission to Preserve Heritage and Empower Communities"
        desc="Your contributions enable the Chitrapur Heritage Foundation to sustain its initiatives in heritage preservation, education, women’s empowerment, and community development. Choose from various donation options and be a part of creating lasting positive change for generations to come."
        img={ChitrapurMathImg}
      />
      {/* <div id="vantiga">
        <Vantiga />
      </div> */}
      <div className="relative">
        <div id="donation-table">
          <DonationTable setTotalDonationAmount={setTotalDonationAmount} />
        </div>
        <div id="payment">
          <PaymentForm totalDonationAmount={totalDonationAmount} />
        </div>
        {/* <div className="absolute inset-0 bg-cream bg-opacity-75 backdrop-filter backdrop-blur-sm flex items-center justify-center z-10">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-sm md:text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
      </div>
    </div> */}
      </div>
      <div id="chf-grants">
        <VantigaDetailed />
      </div>
      <div id="volunteer">
        <VolunteerForm />
      </div>
      <PhotoGallery />
      <Ambassador />
      <FAQSection />
      <Footer />
      <Outlet />
    </div>
  );
}
