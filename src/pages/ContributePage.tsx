import DonationTable from '../components/Donate/DonationTable';
import Hero from '../components/Home/Hero';
import Vantiga from '../components/Contribute/Vantiga';
import PaymentForm from '../components/Contribute/AddPaymentDetails';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.00)
  return (
    <div className="min-h-screen bg-cream">
        <Hero/>
        <Vantiga/>
        <DonationTable setTotalDonationAmount={setTotalDonationAmount}/>
        <PaymentForm totalDonationAmount={totalDonationAmount}/>
        <VolunteerForm/>
        <FAQSection/>
        <Footer/>
    </div>
    // <div className="min-h-screen bg-cream pt-24 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <DonationTable />
    //   </div>
    // </div>
  );
}