import { Mail, MapPin, Phone } from "lucide-react";
import footerbg from "../../assets/footerbg.svg";

export default function Footer() {
  return (
    <footer
      className="relative max-sm:mb-[50px] bg-secondary px-8 py-12 text-white"
      id="footer"
    >
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
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* First Column: Support Us + Useful Links */}
          <div className="space-y-12">
            {/* Support Us Section */}
            <div className="space-y-4">
              <h3 className="border-b border-white pb-2 text-md md:text-3xl font-light">
                Support Us
              </h3>
              <ul className="space-y-1 max-sm:text-xs">
                <li>
                  <a href="/contribute#volunteer" className="hover:underline">
                    Become A Member
                  </a>
                </li>
                <li>
                  <a href="/donate#donation-table" className="hover:underline">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/contribute#volunteer" className="hover:underline">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="/donate#donation-table" className="hover:underline">
                    Sponsor a Student
                  </a>
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
                  <a href="https://chitrapurmath.net/" className="hover:underline">
                    Chitrapur Math Website
                  </a>
                </li>
                <li>
                  <a href="https://chitrapurmath.net/" className="hover:underline">
                    Chitrapur Ebook
                  </a>
                </li>
                <li>
                  <a href="https://parijnanfoundation.in/" className="hover:underline">
                    Parijnan Foundation
                  </a>
                </li>
                <li>
                  <a href="https://www.parijnanfoundation.in/SamvitSudha.aspx" className="hover:underline">
                    Samvit Sudha
                  </a>
                </li>
                <li>
                  <a href="https://www.parijnanfoundation.in/Parimochan.aspx" className="hover:underline">
                    Parimochan Project
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
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About CHF
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  CHF Projects
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:underline">
                  How You can Help
                </a>
              </li>
              <li>
                <a href="/events" className="hover:underline">
                  CHF Events & News
                </a>
              </li>
              <li>
                <a href="/about#photo-gallery" className="hover:underline">
                  Photo Gallery
                </a>
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
                <a href="/donate#donation-table" className="hover:underline">
                  Education
                </a>
              </li>
              <li>
                <a href="/donate#donation-table" className="hover:underline">
                  Community Development
                </a>
              </li>
              <li>
                <a href="/donate#donation-table" className="hover:underline">
                  Cultural Preservation
                </a>
              </li>
              <li>
                <a href="/donate#donation-table" className="hover:underline">
                  Religious Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
              Contact Us
            </h3>
            <ul className="space-y-1 max-sm:text-xs max-sm:relative">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <a href="http://www.chfusa.org" className="hover:underline">
                  www.chfusa.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+12156663200" className="hover:underline">
                  (215) 666-3200
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:contactus@chfusa.org"
                  className="hover:underline"
                >
                  contactus@chfusa.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Chitrapur Heritage Foundation USA, Inc. 711 Daylily Drive,
                  Langhorne, PA 19047
                </span>
              </li>
              <div className="max-sm:relative max:sm:right-0 max-sm:w-full max-sm:-ml-[100%]">
                <li className="mt-6 pt-6">
                  <p className="font-normal">Mailing Address</p>
                  <p className=" text-sm">
                    Chitrapur Heritage Foundation
                    <br />
                    PO Box 1253,
                    <br />
                    Langhorne PA 19047
                  </p>
                </li>
                <li className="pt-6">
                  <p className="mb-2">Subscribe to our newsletter</p>
                  <form className="flex items-center gap-2 bg-white rounded-full">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="flex-1 rounded-full px-4 py-2 text-sm font-thin text-gray-800 placeholder:text-gray-400 hover:border-none"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-white h-10 w-10 p-3 flex text-secondary items-center justify-center hover:bg-white/20"
                    >
                      →
                    </button>
                  </form>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
