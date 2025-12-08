import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import SpecialProjects from "../components/projects/SpecialProjects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventsHero from "../assets/eventsHero.webp";
import { UseDataContext } from "../components/context/DataContext";
import SEO from "../components/seo/Seo";
import ImpactSection from "../components/Home/OurImpact";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
import endDomainImg from '../assets/end/Pasted image.png'
import crishna from '../assets/end/crishna.png'
import krishanV from '../assets/end/krishanV.png'
import gif from '../assets/end/gif.png'

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
      fetch(`${AdminPanelUrl}/event-page`, requestOptions)
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
            title={PageData?.title}
            desc={PageData?.description}
            button1={PageData?.Button1}
            button2={PageData?.Button2}
            img={EventsHero}
            from="events"
            isLoading={data?.isLoading || loading}
          />
        }
        <EndowmentSection />
        {/* Endowment Projects */}
        <div id="endowmentsProject">
          <SpecialProjects
            isCenter={true}
            title="CHF Spotlight"
            from="events"
          />
        </div>
        <CHFEndowmentInfo />
        <ImpactSection />
        <WhyEndowmentSection />
        <PeopleSection />
        <GiftSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

function EndowmentSection() {
  return (
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
          What is an Endowment
        </h1>

        <p className="text-white text-lg md:text-xl leading-relaxed">
          Chitrapur Heritage Foundation (CHF USA) is a 501(c)(3) nonprofit based in New
          Jersey, dedicated to preserving the heritage, cultural traditions, education, and
          community development of the Chitrapur Saraswat community.{' '}
          <a href="#" className="underline font-semibold hover:text-orange-100 transition-colors">
            Join Us
          </a>
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
  );
}

function WhyEndowmentSection() {
  const [openSection, setOpenSection] = useState('sustainability');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2" style={{ color: '#1a2b4a' }}>
            Why an Endowment is Essential for CHF
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            The Chitrapur Heritage Foundation (CHF) exists to sustain and strengthen the ecosystem surrounding
            Chitrapur — nurturing its Heritage, Education, Women's Empowerment, and Spiritual Development. To secure
            this mission for generations to come, establishing a permanent endowment is essential.{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More</a>
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Section 1: Ensuring Long-Term Sustainability */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('sustainability')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Ensuring Long-Term Sustainability
              </h3>
              <svg
                className={`w-6 h-6 transition-transform ${openSection === 'sustainability' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {openSection === 'sustainability' && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row gap-6 items-start mt-6">
                  <div className="md:w-2/5">
                    <img
                      src={endDomainImg}
                      alt="Community gathering"
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>

                  <div className="md:w-3/5 space-y-4">
                    <p className="text-gray-700">
                      A reserve of donated funds set aside to generate ongoing income, while preserving the principal.
                    </p>

                    <p className="text-gray-700">
                      Used to support core operations, strategic programs, and emergencies, so we can maintain consistency in serving suffering children.
                    </p>

                    <p className="text-gray-700">
                      Managed with care, transparency, and accountability to donors and partners.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Supporting Education and Empowerment Consistently */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('education')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Supporting Education and Empowerment Consistently
              </h3>
              <svg
                className={`w-6 h-6 transition-transform ${openSection === 'education' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 'education' && (
              <div className="px-6 pb-6 border-t border-gray-200 mt-4">
                <p className="text-gray-700">
                  Content for Supporting Education and Empowerment section goes here...
                </p>
              </div>
            )}
          </div>

          {/* Section 3: Preserving Heritage and Spiritual Traditions */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('heritage')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Preserving Heritage and Spiritual Traditions
              </h3>
              <svg
                className={`w-6 h-6 transition-transform ${openSection === 'heritage' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 'heritage' && (
              <div className="px-6 pb-6 border-t border-gray-200 mt-4">
                <p className="text-gray-700">
                  Content for Preserving Heritage and Spiritual Traditions section goes here...
                </p>
              </div>
            )}
          </div>

          {/* Section 4: Protecting Independence and Integrity */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('independence')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Protecting Independence and Integrity
              </h3>
              <svg
                className={`w-6 h-6 transition-transform ${openSection === 'independence' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 'independence' && (
              <div className="px-6 pb-6 border-t border-gray-200 mt-4">
                <p className="text-gray-700">
                  Content for Protecting Independence and Integrity section goes here...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function CHFEndowmentInfo() {
  return (
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
              src={endDomainImg}
              alt="Community gathering"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-3/5">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Three areas of endowments
            </h3>

            <p className="text-gray-700 mb-3">
              A reserve of donated funds set aside to generate ongoing income, while <span className="font-semibold">preserving the principal.</span>
            </p>

            <p className="text-gray-700 mb-3">
              Used to support core operations, strategic programs, and emergencies, so we can maintain consistency in serving suffering children.
            </p>

            <p className="text-gray-700">
              Managed with care, transparency, and accountability to donors and partners.{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Learn More</a>
            </p>
          </div>
        </div>

        {/* How can a donor make Endowments */}
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src={crishna}
              alt="Deity illustration"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How can a donor make Endowments
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Donating to any of the three causes listed I can be done the on the same website page</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Donating any assets like real estate/ listed stocks/ PPls will be an offline process</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Any special forms of the endowment that the donor would like to specific in terms naming rights will be need to be discussed seperately.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How the Endowment Is Managed */}
        <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/5">
            <img
              src={krishanV}
              alt="Deity with sunset"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-3/5">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How the Endowment Is Managed
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Investment Policy:</h4>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Balanced portfolio (mix of equities, bonds, possibly alternative investments) to balance growth vs risk.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aim for long-term returns that exceed inflation and cover withdrawal rates.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Responsible investing / ESG / faith-aligned investing policies if applicable.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Spending Policy:</h4>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Typically, a fixed percentage of the endowment's value is distributed annually (ex: 4-5%) to fund CHF initiatives.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Principal should be preserved unless under extraordinary circumstances.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PeopleSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Sample donor data - you can replace with actual data
  const donors = [
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' },
    { name: 'Name Last Name', type: 'Endowment' }
  ];

  const itemsPerSlide = 15;
  const totalSlides = Math.ceil(donors.length / itemsPerSlide);
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
                    src={`https://ui-avatars.com/api/?name=${donor.name}&background=f472b6&color=fff&size=48`}
                    alt={donor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{donor.name}</p>
                  <p className="text-gray-600 text-xs">{donor.type}</p>
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
  const [formData, setFormData] = useState({
    category: '',
    name: 'James Spencer',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for details.');
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-600"
                >
                  <option value="">Select Category</option>
                  <option value="heritage">Heritage</option>
                  <option value="education">Education</option>
                  <option value="empowerment">Women's Empowerment</option>
                  <option value="spiritual">Spiritual Development</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Name"
                />
                <span className="absolute right-3 top-3 text-green-500 text-sm">✓</span>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="City"
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Zip Code"
                />
              </div>

              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-600"
                >
                  <option value="">Country</option>
                  <option value="us">United States</option>
                  <option value="india">India</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}