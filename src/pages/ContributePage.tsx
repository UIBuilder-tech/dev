import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DonationTable from '../components/Donate/DonationTable';
import Hero from '../components/Home/Hero';
import Vantiga from '../components/Contribute/Vantiga';
import PaymentForm from '../components/Contribute/AddPaymentDetails';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';

export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.00);
  const location = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Add a small delay to ensure the content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]); // Only run when hash changes

  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <div id="vantiga">
        <Vantiga />
      </div>
      <div id="donation-table">
        <DonationTable setTotalDonationAmount={setTotalDonationAmount} />
      </div>
      <div id="payment">
        <PaymentForm totalDonationAmount={totalDonationAmount} />
      </div>
      <div id="volunteer">
        <VolunteerForm />
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}