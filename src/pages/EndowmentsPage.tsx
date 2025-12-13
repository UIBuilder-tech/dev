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
import Group from '../assets/end/Group.png'
import sectionBorder from "../assets/section-border.svg";
import GroupLeft from '../assets/end/GroupLeft.png'
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
        title="Endowment Projects"
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
        <ImpactSection url="endowment" title="Current Size & Performance" />
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
        <div className="absolute top-24 -left-8 w-20 h-20 md:w-48 md:h-w-48">
          <img src={GroupLeft} />
        </div>

        {/* Right flower */}
        <div className="absolute top-4 right-8 w-20 h-20 md:w-28 md:h-28">
          <img src={Group} />
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.title}
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            {data.description}
          </p>
        </div>


       <div className="absolute bottom-0 left-0 right-0">
          <div className="h-8 w-full bg-[url('../../assets/section-border.svg')] bg-repeat-x">
            <img loading="lazy" src={sectionBorder} className="w-full h-full" />
          </div>
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