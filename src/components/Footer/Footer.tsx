import { Mail, MapPin, Phone } from "lucide-react";
import footerbg from "../../assets/footerbg.svg";
import logo from "../../assets/chfLogo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function Footer() {
  const [PageData, setPageData] = useState(null);
  const [Contact, setContact] = useState(null);
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/contect`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setContact(result.data)
          }
        })
        .catch(error => console.log('error', error));
    }
    const api2 = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/footer?populate=Image`, requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log("🚀 ~ api2 ~ result:", result)

          if (result?.data) {
            const newData = {...result.data, image: AdminPanelUrl.replace("/api", "") + result.data.Image.url}
            setPageData(newData)
          }
        })
        .catch(error => console.log('error', error));
    }
    api();
    api2();
  }, [])
  return (
    <footer className="relative max-sm:mb-[50px] bg-secondary px-8 py-12 text-white">
      {/* Background graphic overlay */}
      <div className="absolute top-14 bottom-0 left-0 right-0 -z-9 overflow-hidden">
        <img
          src={footerbg}
          alt="Mountain"
          className="h-[700px] w-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
          {PageData && <div className="space-y-12 items-center justify-center flex">
            <div className=" flex flex-col  items-center justify-center">
              <img src={PageData.image} className="w-36" />
              <h2 className="font-display text-xl desktop-1500:text-3xl desktop-1200:pt-5 pt-10 md:text-2xl text-white text-center desktop-1900:text-xl">
                {PageData.Title}
              </h2>
              <p className="text-sm md:text-sm text-white text-center px-4 md:px-8">
              {PageData.Title}
              </p>
            </div>
          </div>
          }

          {/* First Column: Support Us + Useful Links */}
          <div className="space-y-12">
            {/* Support Us Section */}
            <div className="space-y-4">
              <h3 className="border-b border-white pb-2 text-md md:text-3xl font-light">
                Support Us
              </h3>
              <ul className="space-y-1 max-sm:text-xs">
                <li>
                  <Link to="/contribute#volunteer" className="hover:underline">
                    Become A Member
                  </Link>
                </li>
                <li>
                  <Link
                    to=" /contribute#donation-table"
                    className="hover:underline"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/contribute#volunteer" className="hover:underline">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    to=" /contribute#donation-table"
                    className="hover:underline"
                  >
                    Sponsor a Student
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="space-y-4">
              <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
                Useful Links
              </h3>
              <ul className="space-y-1 max-sm:text-xs">
                <li>
                  <a
                    href="https://chitrapurmath.net/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Chitrapur Math Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.chitrapurebooks.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Chitrapur Ebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://parijnanfoundation.in/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Parijnan Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://samvitsudha.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Samvit Sudha
                  </a>
                </li>
                <li>
                  <a
                    href="https://parijnanfoundation.in/parimochana/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Parimochan Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://samarthbhanap.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Samarth Bhanap Yojana
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CHF USA Column */}
          <div className="space-y-4">
            <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
              CHF USA
            </h3>
            <ul className="space-y-1 max-sm:text-xs">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About CHF
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  CHF Projects
                </Link>
              </li>
              <li>
                <Link to=" /contribute" className="hover:underline">
                  How You can Help
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  CHF Events & News
                </Link>
              </li>
              <li>
                <Link to="/about#photo-gallery" className="hover:underline">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contribute Column */}
          <div className="space-y-4">
            <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
              Contribute
            </h3>
            <ul className="space-y-1 max-sm:text-xs">
              <li>
                <Link
                  to=" /contribute#donation-table"
                  className="hover:underline"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to=" /contribute#donation-table"
                  className="hover:underline"
                >
                  Community Development
                </Link>
              </li>
              <li>
                <Link
                  to=" /contribute#donation-table"
                  className="hover:underline"
                >
                  Cultural Preservation
                </Link>
              </li>
              <li>
                <Link
                  to=" /contribute#donation-table"
                  className="hover:underline"
                >
                  Religious Activities
                </Link>
              </li>
            </ul>
          </div>

          {
            Contact && <div className="space-y-4">
              <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
                Contact Us
              </h3>
              <ul className="space-y-1 max-sm:text-xs max-sm:relative">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="flex-shrink-0" />
                  <a
                    href={Contact.website}
                    target="_blank"
                    className="hover:underline"
                  >
                   {Contact.website}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href={`tel:${Contact.phone}`} className="hover:underline">
                  {Contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0" />
                  <a
                    href={`mailto:${Contact.email}`}
                    className="hover:underline"
                  >
                    {Contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                   {Contact.address}
                  </span>
                </li>
                <div className="max-sm:relative max:sm:right-0 max-sm:w-full">
                  <li className="mt-6 pt-6">
                    <p className="font-normal">Mailing Address</p>
                    <p className=" text-sm">
                    {Contact.mailingAddress}
                    </p>
                  </li>
                  <li className="pt-6">
                    <p className="mb-2">Subscribe to our newsletter</p>
                    <form className="flex items-center bg-white rounded-full">
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="flex-1 rounded-l-full max-sm:px-4 px-2 bg-white py-2 text-sm font-thin text-gray-800 placeholder:text-gray-400 hover:border-none"
                      />
                      <button
                        type="submit"
                        className="rounded-r-full bg-white h-10 max-sm:h-9 w-10 p-3 flex text-secondary items-center justify-center hover:bg-white/20"
                      >
                        →
                      </button>
                    </form>
                  </li>
                </div>
              </ul>
            </div>
          }

        </div>
      </div>
    </footer>
  );
}
