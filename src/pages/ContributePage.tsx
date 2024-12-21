import DonationTable from "../components/Donate/DonationTable";
import Hero from "../components/Home/Hero";
import Vantiga from "../components/Contribute/Vantiga";
import PaymentForm from "../components/Contribute/AddPaymentDetails";
import VolunteerForm from "../components/Contribute/VolunteerForm";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";

export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Support Our Mission to Preserve Heritage and Empower Communities"
        desc="Your contributions enable the Chitrapur Heritage Foundation to sustain its initiatives in heritage preservation, education, women’s empowerment, and community development. Choose from various donation options and be a part of creating lasting positive change for generations to come."
        img={ChitrapurMathImg}
      />
      <Vantiga />
      <DonationTable setTotalDonationAmount={setTotalDonationAmount} />
      <PaymentForm totalDonationAmount={totalDonationAmount} />
      <VolunteerForm />
      <FAQSection />
      <Footer />
    </div>
    // <div className="min-h-screen bg-cream pt-24 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <DonationTable />
    //   </div>
    // </div>
  );
}
