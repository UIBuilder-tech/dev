import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import DonationTable from "../components/Donate/DonationTable";
import Hero from "../components/Home/Hero";
// import Vantiga from "../components/Contribute/Vantiga";
import PaymentForm from "../components/Contribute/AddPaymentDetails";
import VolunteerForm from "../components/Contribute/VolunteerForm";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import ChitrapurMathImg from "../assets/heritage3.webp";
import PhotoGallery from "../components/About/PhotoGallery";
import Ambassador from "../components/About/Ambassador";
import VantigaDetailed from "../components/Contribute/VantigaDetailed";
import { Outlet } from "react-router-dom";
import { UseDataContext } from "../components/context/DataContext";

interface SelectedProject {
  id?: string;
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
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function ContributePage() {
  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const apiCalledRef = useRef(false);
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  const [selectedProjects, setSelectedProjects] = useState<SelectedProject[]>(
    []
  );
  const [baseDonationId, setBaseDonationId] = useState("");
  const [initialFormData, setInitialFormData] = useState<FormType>({
    id: Date.now(),
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    paymentMethod: "zelle",
    rememberMe: false,
    amount: 0,
  });
  const location = useLocation();

  const { setData } = UseDataContext();
  const [PageData, setPageData] = useState(null);
  useEffect(() => {
    const api = async () => {
      setData((v) => ({ ...v, isLoading: true }));
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `${AdminPanelUrl}/contribute-page?populate[vantigaList][populate]=*`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result?.data) {
            setPageData(result.data);
          }
        })
        .catch((error) => console.log("error", error))
        .finally(() => {
          setData((v) => ({ ...v, isLoading: false }));
        });
    };

    api();
  }, []);
  useEffect(() => {
    if (PageData) {
      // Handle initial load with hash
      const hash = location.hash
        .split("#")
        .filter((v) => v !== "" && v !== null);
      if (hash) {
        hash.forEach((h, i) => {
          setTimeout(() => {
            const element = document.getElementById(h);
            console.log(h);
            if (element) {
              if (h === "volunteer") {
                window.scrollTo(0, element.offsetTop + window.innerHeight * 0.035);
              } else {
                window.scrollTo(window.scrollX, window.scrollY - 1);
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 200 * i);
        });
      }
    }
  }, [location.hash, PageData, location.key]); // Only run when hash changes

  useEffect(() => {
    const initialApi = async () => {
      if (apiCalledRef.current) return; // Skip if API has already been called
      apiCalledRef.current = true; // Mark API as called

      if (Object.keys(user)?.length > 0) {
        setData((v) => ({ ...v, isLoading: true }));
        fetch(`${BASE_URL}/api/contact?email=${user?.email}`)
          .then((resp) => resp?.json())
          .then((response) => {
            if (response) {
              const {
                firstName,
                lastName,
                email,
                mobile,
                billingStreet,
                billingCity,
                billingState,
                billingPostalCode,
                billingCountry,
              } = response;
              setInitialFormData((v: FormType) => ({
                ...v,
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Phone: mobile,
                address: billingStreet,
                city: billingCity,
                zipCode: billingPostalCode,
                state: billingState,
                country: billingCountry,
              }));
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
            setData((v) => ({ ...v, isLoading: false }));
          });
      }
    };
    initialApi();
  }, []);

  return (
    <>
      {PageData && (
        <div className="bg-cream">
          <Hero
            title={PageData.title}
            desc={PageData.description}
            img={ChitrapurMathImg}
            button1={PageData.Button1}
            button2={PageData.Button2}
          />
          {/* <div id="vantiga">
        <Vantiga />
      </div> */}

          <div id="donation-table" className="">
            <DonationTable
              setTotalDonationAmount={setTotalDonationAmount}
              setSelectedProjects={setSelectedProjects}
              setBaseDonationId={setBaseDonationId}
            />
          </div>
          <div id="payment">
            <PaymentForm
              totalDonationAmount={totalDonationAmount}
              baseDonationId={baseDonationId}
              selectedProjects={selectedProjects}
              initialFormData={initialFormData}
            />
          </div>
          {/* <div className="absolute inset-0 bg-cream bg-opacity-75 backdrop-filter backdrop-blur-sm flex items-center justify-center z-10">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-sm md:text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
      </div>
    </div> */}

          <div id="vantiga">
            {PageData?.vantigaList && <VantigaDetailed data={PageData} />}
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
      )}
    </>
  );
}
