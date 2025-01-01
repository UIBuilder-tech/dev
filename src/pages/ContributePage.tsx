import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DonationTable from '../components/Donate/DonationTable';
import Hero from '../components/Home/Hero';
// import Vantiga from "../components/Contribute/Vantiga";
import PaymentForm from '../components/Contribute/AddPaymentDetails';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';
import ChitrapurMathImg from '../assets/Shirali_Math.jpg';
import PhotoGallery from '../components/About/PhotoGallery';
import Ambassador from '../components/About/Ambassador';
import VantigaDetailed from '../components/Contribute/VantigaDetailed';
import { Outlet } from 'react-router-dom';
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  const location = useLocation();
  const [PageData, setPageData] = useState({});
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/contribute-page?populate[vantigaList][populate]=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPageData(result.data)
          }
        })
        .catch(error => console.log('error', error));
    }

    api();
  }, [])
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
    <div className='min-h-screen bg-cream'>
      <Hero
        title={PageData.title}
        desc={PageData.description}
        img={ChitrapurMathImg}
      />
      <div className='relative'>
        <div id='donation-table'>
          <DonationTable setTotalDonationAmount={setTotalDonationAmount} />
        </div>
        <div id='payment'>
          <PaymentForm totalDonationAmount={totalDonationAmount} />
        </div>
      </div>
      <div id='chf-grants'>
        {
          PageData?.vantigaList && <VantigaDetailed data={PageData} />
        }
      </div>
      <div id='volunteer'>
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