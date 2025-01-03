import { useEffect, useState, useRef } from "react";
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

interface SelectedProject {
  id?:string;
  projectName: string;
  unitAmount: number;
  quantity: number;
  remark: string;
}

interface FormType {
  id: number; // A unique identifier (e.g., timestamp)
  FirstName: string; // Name of the user
  LastName: string; // Email address
  Email: string; // Email address
  Phone: string; // Phone number
  address: string; // Address line
  city: string; // City name
  zipCode: string; // Zip/postal code
  state: string; // State name
  country: string; // Country name
  paymentMethod: string; // Payment method (e.g., 'online', 'offline')
  rememberMe: boolean; // Whether the user opts for "remember me"
  amount: number | null; // Total amount
}

export default function ContributePage() {
  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const apiCalledRef = useRef(false);
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  const [selectedProjects, setSelectedProjects] = useState<SelectedProject[]>([]);
  const [baseDonationId, setBaseDonationId] = useState('')
  const [initialFormData, setInitialFormData] = useState<FormType>({
    id: Date.now(),
    FirstName: '',
    LastName: "",
    Email: '',
    Phone: '',
    address: '',
    city: '',
    zipCode: '',
    state:'',
    country: '',
    paymentMethod: 'zelle',
    rememberMe: false,
    amount: 0
  })
  const location = useLocation();

  console.log("selectedProjects--->",selectedProjects)
  console.log("baseDonationId-->",baseDonationId)

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


    useEffect(() => {
      const initialApi = async () => {
        if (apiCalledRef.current) return; // Skip if API has already been called
        apiCalledRef.current = true; // Mark API as called
  
      if(Object.keys(user)?.length >0){
      fetch(`${BASE_URL}/api/contact?email=${user?.email}`)
        .then((resp) => resp?.json())
        .then((response) => {
          if (response) {
        const { firstName, lastName, email, mobile, billingStreet, billingCity , billingState, billingPostalCode, billingCountry} = response;
        setInitialFormData((v: FormType) => ({ ...v, FirstName:firstName, LastName:lastName, Email: email,
          Phone: mobile,
          address: billingStreet,
          city: billingCity,
          zipCode: billingPostalCode,
          state: billingState,
          country: billingCountry, }))
          } else {
            console.error("error fetching response");
          }
          console.log("RESPONSE__>", response);
        })
        .catch((error) => {
          console.error(error);   
        })
        .finally(() => {
          // setIsDisable(false);
        });}
      }
      initialApi()
    }, []);

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
      <div className='relative'>
      <div id='donation-table'>
        <DonationTable setTotalDonationAmount={setTotalDonationAmount}  setSelectedProjects={setSelectedProjects} setBaseDonationId={setBaseDonationId} />
      </div>
      <div id='payment'>
        <PaymentForm totalDonationAmount={totalDonationAmount} baseDonationId={baseDonationId} selectedProjects={selectedProjects} initialFormData={initialFormData}/>
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
        <VolunteerForm initialFormData={initialFormData} />
      </div>
      <PhotoGallery />
      <Ambassador />
      <FAQSection />
      <Footer />
      <Outlet />
    </div>
  );
}
