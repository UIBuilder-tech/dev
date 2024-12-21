import DonationTable from '../components/Donate/DonationTable';
import Hero from '../components/Home/Hero';
import Vantiga from '../components/Contribute/Vantiga';
import PaymentForm from '../components/Contribute/AddPaymentDetails';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-cream">
        <Hero/>
        <Vantiga/>
        <DonationTable />
        <PaymentForm/>
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