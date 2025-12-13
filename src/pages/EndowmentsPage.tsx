import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import SpecialProjects from "../components/projects/SpecialProjects";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import EventsHero from "../assets/eventsHero.webp";
import { UseDataContext } from "../components/context/DataContext";
import SEO from "../components/seo/Seo";
import ImpactSection from "../components/Home/OurImpact";
import gif from '../assets/end/gif.png'
import { toast } from "react-toastify";

interface FormData {
  category: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
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

interface Props {
  initialFormData: FormType
}

interface FormErrors {
  [key: string]: string;
}
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const imageUrl = import.meta.env.VITE_ADMIN_PANEL_IMG_API;
export default function EndowmentsPage() {
  const location = useLocation();
  const [PageData, setPageData] = useState(null);
  const { data, setData } = UseDataContext();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (PageData) {
      // Handle initial load with hash
      const hash = location.hash.replace("#", "");
      if (hash) {
        // Add a small delay to ensure the content is rendered
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

  }, [location.hash, PageData]); // Only run when hash changes

  useEffect(() => {
    const api = async () => {
      setData((v) => ({ ...v, isLoading: true }));
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/endowment?populate[section_1][populate]=*&populate[section_2][populate]=*&populate[section_3][populate]=*&populate[section_4][populate]=*&populate[FAQ][populate]=*&populate[People][populate]=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPageData(result.data)
          }
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          setData((v) => ({ ...v, isLoading: false }));
          setLoading(false)
        });
    }

    api();
  }, [])
  return (
    <>
      <SEO
        title="Events"
        description="Join us as we commemorate festivals, organize satsangs, and conduct enriching activities for children and youth. Stay updated with our latest programs and events that honor tradition, foster spiritual growth, and strengthen the Chitrapur Saraswat community."
      />
      <div className="min-h-screen bg-cream">
        {
          <Hero
            title={PageData?.Title}
            desc={PageData?.Description}
            button1={PageData?.Button1}
            Button1Link={PageData?.Button1Link}
            button2={PageData?.Button2}
            Button2Link={PageData?.Button2Link}
            img={EventsHero}
            from="events"
            isLoading={data?.isLoading || loading}
          />
        }
        <EndowmentSection data={PageData?.section_1} />
        {/* Endowment Projects */}
        <div id="endowmentsProject">
          <SpecialProjects
            isCenter={true}
            title="Endowment Projects"
            from="events"
          />
        </div>
        <CHFEndowmentInfo data={PageData} />
        <ImpactSection url="endowment" />
        <WhyEndowmentSection data={PageData?.FAQ} />
        <PeopleSection data={PageData?.People} />
        <GiftSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
function EndowmentSection({ data }) {
  return (
    data && (
      <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-8 py-20 overflow-hidden">
        {/* Left flower */}
        <div className="absolute top-12 left-8 w-24 h-24 md:w-32 md:h-32">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Stem */}
            <path d="M100 180 L100 100" stroke="#4A1F1F" strokeWidth="8" strokeLinecap="round" />

            {/* Base of flower */}
            <ellipse cx="100" cy="95" rx="20" ry="15" fill="#5D2835" />

            {/* Back petals */}
            <ellipse cx="70" cy="70" rx="35" ry="50" fill="#D4A574" opacity="0.9" transform="rotate(-30 70 70)" />
            <ellipse cx="130" cy="70" rx="35" ry="50" fill="#D4A574" opacity="0.9" transform="rotate(30 130 70)" />

            {/* Top petal */}
            <ellipse cx="100" cy="40" rx="40" ry="55" fill="#C9956B" opacity="0.95" />

            {/* Side petals */}
            <ellipse cx="50" cy="85" rx="30" ry="45" fill="#E09052" opacity="0.9" transform="rotate(-40 50 85)" />
            <ellipse cx="150" cy="85" rx="40" ry="55" fill="#D17F3E" opacity="0.95" transform="rotate(20 150 85)" />

            {/* Center petal overlay */}
            <ellipse cx="100" cy="75" rx="25" ry="30" fill="#D9B89A" opacity="0.8" />

            {/* Stamens */}
            <line x1="95" y1="75" x2="85" y2="55" stroke="#5D2835" strokeWidth="3" />
            <line x1="100" y1="75" x2="95" y2="50" stroke="#5D2835" strokeWidth="3" />
            <line x1="105" y1="75" x2="105" y2="48" stroke="#5D2835" strokeWidth="3" />
            <line x1="110" y1="75" x2="115" y2="55" stroke="#5D2835" strokeWidth="3" />

            <circle cx="85" cy="52" r="5" fill="#E8C547" />
            <circle cx="95" cy="47" r="5" fill="#E8C547" />
            <circle cx="105" cy="45" r="5" fill="#E8C547" />
            <circle cx="115" cy="52" r="5" fill="#E8C547" />

            {/* Additional pollen */}
            <circle cx="90" cy="65" r="4" fill="#DDB83D" />
            <circle cx="110" cy="65" r="4" fill="#DDB83D" />
            <circle cx="100" cy="68" r="5" fill="#E8C547" />
          </svg>
        </div>

        {/* Right flower */}
        <div className="absolute top-8 right-8 w-20 h-20 md:w-28 md:h-28">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Stem */}
            <path d="M100 180 L100 100" stroke="#4A1F1F" strokeWidth="8" strokeLinecap="round" />

            {/* Base of flower */}
            <ellipse cx="100" cy="95" rx="18" ry="13" fill="#5D2835" />

            {/* Back petals */}
            <ellipse cx="75" cy="75" rx="30" ry="45" fill="#D4A574" opacity="0.9" transform="rotate(-25 75 75)" />
            <ellipse cx="125" cy="75" rx="30" ry="45" fill="#D4A574" opacity="0.9" transform="rotate(25 125 75)" />

            {/* Top petal */}
            <ellipse cx="100" cy="45" rx="35" ry="48" fill="#C9956B" opacity="0.95" />

            {/* Side petals */}
            <ellipse cx="55" cy="85" rx="28" ry="40" fill="#E09052" opacity="0.9" transform="rotate(-35 55 85)" />
            <ellipse cx="145" cy="85" rx="35" ry="48" fill="#D17F3E" opacity="0.95" transform="rotate(15 145 85)" />

            {/* Center petal overlay */}
            <ellipse cx="100" cy="75" rx="22" ry="28" fill="#D9B89A" opacity="0.8" />

            {/* Stamens */}
            <line x1="95" y1="75" x2="88" y2="58" stroke="#5D2835" strokeWidth="2.5" />
            <line x1="100" y1="75" x2="97" y2="53" stroke="#5D2835" strokeWidth="2.5" />
            <line x1="105" y1="75" x2="107" y2="55" stroke="#5D2835" strokeWidth="2.5" />
            <line x1="110" y1="75" x2="115" y2="60" stroke="#5D2835" strokeWidth="2.5" />

            <circle cx="88" cy="55" r="4.5" fill="#E8C547" />
            <circle cx="97" cy="50" r="4.5" fill="#E8C547" />
            <circle cx="107" cy="52" r="4.5" fill="#E8C547" />
            <circle cx="115" cy="57" r="4.5" fill="#E8C547" />

            {/* Additional pollen */}
            <circle cx="92" cy="68" r="3.5" fill="#DDB83D" />
            <circle cx="108" cy="68" r="3.5" fill="#DDB83D" />
            <circle cx="100" cy="70" r="4.5" fill="#E8C547" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.title}
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            {data.description}
            {/* <a href="#" className="underline font-semibold hover:text-orange-100 transition-colors">
              Join Us
            </a> */}
          </p>
        </div>

        {/* Greek key pattern border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1600 64"
            fill="none"
          >
            <defs>
              <pattern id="greekKey" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
                <rect width="64" height="64" fill="#F4E4D0" />
                <path
                  d="M 4 4 L 4 20 L 20 20 L 20 44 L 44 44 L 44 20 L 60 20 L 60 4 L 44 4 L 44 28 L 36 28 L 36 12 L 28 12 L 28 28 L 20 28 L 20 4 Z"
                  fill="#D4A574"
                  stroke="#B88A5C"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="1600" height="64" fill="url(#greekKey)" />
          </svg>
        </div>
      </div>
    )
  );
}
function WhyEndowmentSection({ data }) {
  const [openSection, setOpenSection] = useState(0);
  const [faqTitle, setFaqTitle] = useState(null)
  const [listitem, setListitem] = useState([])

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    if (data) {
      const temp = data.find(v => v.__component === 'shared.title-description')
      setFaqTitle(temp)
      const t = data.filter(v => v.__component !== 'shared.title-description')
      setListitem(t)
    }

  }, [data])


  return (
    data && (
      <div className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2" style={{ color: '#1a2b4a' }}>
              {faqTitle?.title || ''}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>

            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              {faqTitle?.description || ''}
            </p>
          </div>
          <div className="space-y-4">
            {
              listitem.map((v, i) => (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden" key={`cbd_${i}`}>
                  <button
                    onClick={() => toggleSection(i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {v.Title}
                    </h3>
                    <svg
                      className={`w-6 h-6 transition-transform ${openSection === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>

                  {openSection === i && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="flex flex-col md:flex-row gap-6 items-start mt-6">
                        <div className="md:w-2/5">
                          <img
                            src={imageUrl + v?.image?.url}
                            alt="Community gathering"
                            className="rounded-lg w-full h-auto object-cover"
                          />
                        </div>

                        <div className="md:w-3/5 space-y-4">
                          <p className="text-gray-700">
                            {v?.Description || ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </div>

    )
  );
}
function CHFEndowmentInfo({ data }) {
  const [section4data, setSection4data] = useState(null)
  const [section4, setSection4] = useState([])
  useEffect(() => {
    if (data?.section_4) {
      const temp = data.section_4.find(v => v.image)
      setSection4data(temp)
      const t = data.section_4.filter(v => !v.image)
      setSection4(t)
    }
  }, [data])

  return (
    data && (
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1a2b4a' }}>
            CHF Endowment Information
          </h2>

          {/* Three areas of endowments */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/5">
              <img
                src={imageUrl + `${data?.section_2?.image?.url}`}
                alt="Community gathering"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-3/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {data?.section_2?.Title || ''}
              </h3>

              <p className="text-gray-700 mb-3">
                {data?.section_2?.Description || ''}
              </p>
            </div>
          </div>

          {/* How can a donor make Endowments */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src={imageUrl + `${data?.section_3?.image?.url}`}
                alt="Deity illustration"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {data?.section_3?.Title || ''}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {
                  (data?.section_3?.list || []).map((v) => (
                    <li className="flex items-start" key={v.id}>
                      <span className="mr-2">•</span>
                      <span>{v.text}</span>
                    </li>

                  ))
                }
              </ul>
            </div>
          </div>

          {/* How the Endowment Is Managed */}
          <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/5">
              <img
                src={imageUrl + section4data?.image.url}
                alt="Deity with sunset"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-3/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {section4data?.Title || ''}
              </h3>

              {
                section4.map(v => (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{v?.title || ''}</h4>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      {
                        v.list.map(a => (
                          <li className="flex items-start" key={`list_${a.id}`}>
                            <span className="mr-2">•</span>
                            <span>{a.text}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>)
  );
}
function PeopleSection({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [donors, setDonors] = useState([])

  const itemsPerSlide = 15;
  const totalSlides = Math.ceil(donors.length / itemsPerSlide);
  useEffect(() => {
    if (data) {
      setDonors(data)
    }
  }, [data])
  return (
    <div className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* People who made it possible - Slideshow */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: '#1a2b4a' }}>
            People who made it possible
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

          {/* Donor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {donors.slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide).map((donor, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pink-300 flex-shrink-0 overflow-hidden">
                  <img
                    src={imageUrl + donor?.image?.url}
                    alt={donor.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{donor.Title}</p>
                  <p className="text-gray-600 text-xs">{donor.Description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-orange-500 w-6' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function GiftSection() {
  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const apiCalledRef = useRef(false);
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
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

  useEffect(() => {
    const initialApi = async () => {
      if (apiCalledRef.current) return; // Skip if API has already been called
      apiCalledRef.current = true; // Mark API as called

      if (Object.keys(user)?.length > 0) {
        setData((v) => ({ ...v, isLoading: true }));
        fetch(`${BASE_URL}contact?email=${user?.email}`)
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

  const [formData, setFormData] = useState<FormData>({
    category: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize formData with initialFormData
  useEffect(() => {
    setFormData({
      category: "",
      name: initialFormData?.FirstName ? `${initialFormData?.FirstName} ${initialFormData?.LastName}` : '',
      email: initialFormData?.Email,
      phone: initialFormData?.Phone,
      address: initialFormData?.address,
      city: initialFormData?.city,
      zipCode: initialFormData?.zipCode,
      country: initialFormData?.country,
    });
  }, [initialFormData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!formData.zipCode) {
      newErrors.zipCode = "ZIP code is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToGoogleForms = async () => {
    const formUrl = 'https://docs.google.com/forms/d/1au5bKnT9xyD2IlIHZuc8aBd5VcC-bZU8KcjiRNTWwl0/formResponse';

    // Create URL encoded data
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append('entry.816547937', formData.category);
    formDataEncoded.append('entry.2042403985', formData.name);
    formDataEncoded.append('entry.1735881500', formData.email);
    formDataEncoded.append('entry.1870600312', formData.phone);
    formDataEncoded.append('entry.1097309659', formData.address);
    formDataEncoded.append('entry.571495182', formData.city);
    formDataEncoded.append('entry.925553067', formData.country);

    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.style.display = 'none';

      // Add form fields
      formDataEncoded.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add the form to the document
      document.body.appendChild(form);

      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Set form target to the hidden iframe
      form.target = 'hidden-iframe';

      // Submit the form
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 500);

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await submitToGoogleForms();
        // Reset form after successful submission
        setFormData({
          category: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zipCode: "",
          country: "",
        });
        // alert('Form submitted successfully!');
        toast.success("Submitted successfully!!")
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-64 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2b4a' }}>
              Gift to the Endowment
            </h2>

            <p className="text-gray-700 mb-4">
              Gifts to the Endowment underpin future viability of ongoing ministry.
            </p>

            <p className="text-gray-700 mb-6">
              You can contribute through cash gifts, securities, planned or estate gifts, and named funds. The minimum to establish a named endowment fund is $25,000. All gifts are tax-deductible as allowed by law.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">📞</span>
                <span>(215)-868-3200</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✉️</span>
                <a href="mailto:contactus@chfusa.org" className="text-blue-600 hover:underline">
                  contactus@chfusa.org
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="mt-8">
              <img src={gif} />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-lgp-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-8 desktop-1200:space-y-4 desktop-1900:space-y-6 desktop-1500:space-y-6 max-w-[80%] max-sm:contents"
              >
                <div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.category ? "border-red-500" : "border-gray-200"
                      } py-3 focus:outline-none focus:border-primary bg-transparent`}
                  >
                    <option value="">Select Category</option>
                    <option value="education">Education</option>
                    <option value="heritage">Heritage</option>
                    <option value="women">Women Empowerment</option>
                    <option value="general">General</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl"
                    placeholder="Full Name"
                  />
                  {/* {isNameVerified && (
                  <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 h-5 w-5" />
                )} */}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.email ? "border-red-500" : "border-gray-200"
                      } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.phone ? "border-red-500" : "border-gray-200"
                      } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.address ? "border-red-500" : "border-gray-200"
                      } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full border-b ${errors.city ? "border-red-500" : "border-gray-200"
                        } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                      placeholder="City"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full border-b ${errors.zipCode ? "border-red-500" : "border-gray-200"
                        } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                      placeholder="Zip Code"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>

                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.country ? "border-red-500" : "border-gray-200"
                      } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  >
                    <option value="">Country</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white rounded-full py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}