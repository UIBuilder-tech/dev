import { Mail, MapPin, Phone } from "lucide-react";
import footerbg from "../../assets/footerbg.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCalling from "../api/ApiCalling";
import { toast } from "react-toastify";
import { UseDataContext } from "../context/DataContext";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;

export default function Footer() {
  const [PageData, setPageData] = useState(null);
  const [Contact, setContact] = useState(null);
  const [email, setEmail] = useState("");
  const [IsDisable, setIsDisable] = useState(false);
  const { setData } = UseDataContext();

  useEffect(() => {
    const api = async () => {
      setData(v => ({ ...v, isLoading: true }))
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
        .catch(error => console.log('error', error)).finally(() => {
          setData(v => ({ ...v, isLoading: false }))
        });
    }
    const api2 = async () => {
      setData(v => ({ ...v, isLoading: true }))
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/footer?populate=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            const newData = { ...result.data, image: AdminPanelUrl.replace("/api", "") + result.data.Image.url }
            setPageData(newData)
          }
        })
        .catch(error => console.log('error', error)).finally(() => {
          setData(v => ({ ...v, isLoading: false }))
        });
    }
    api();
    api2();
  }, [])
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData(v => ({ ...v, isLoading: true }))
    setIsDisable(true);
    ApiCalling(`${BASE_URL}/api/newsletter`, "POST", { SubscriberEmail: email }).then(res => {
      toast.success("Subscribed Successfully")
    }).catch((e) => {
    }).finally(() => {
      setEmail("");
      setData(v => ({ ...v, isLoading: false }))
      setIsDisable(false);
    })
  };
  return (
    <>
      {
        PageData && <footer className="relative max-sm:mb-[50px] bg-secondary px-8 py-12 text-white">
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 max-[1099px]:grid-cols-2 lg:grid-cols-5">
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
                    {
                      PageData?.supportUs &&
                      PageData.supportUs.map(v => <li>
                        <Link key={`support_${v.id}`} to={v.linkTo} className="hover:underline">
                          {v.title}
                        </Link>
                      </li>)

                    }
                  </ul>
                </div>

                {/* Useful Links Section */}
                <div className="space-y-4">
                  <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
                    Useful Links
                  </h3>
                  <ul className="space-y-1 max-sm:text-xs">
                    {
                      PageData?.usefulLinks &&
                      PageData.usefulLinks.map(v => <li>
                        <Link key={`useLink${v.id}`} to={v.linkTo} target="_blank"
                          className="hover:underline">
                          {v.title}
                        </Link>
                      </li>)
                    }
                  </ul>
                </div>
              </div>

              {/* CHF USA Column */}
              <div className="space-y-4">
                <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
                  CHF USA
                </h3>
                <ul className="space-y-1 max-sm:text-xs">
                  {
                    PageData?.CHFUSA &&
                    PageData.CHFUSA.map(v => <li>
                      <Link key={`chf${v.id}`} to={v.linkTo} className="hover:underline">
                        {v.title}
                      </Link>
                    </li>)
                  }
                </ul>
              </div>

              {/* Contribute Column */}
              <div className="space-y-4">
                <h3 className="border-b border-white pb-2  text-md md:text-3xl font-light">
                  Contribute
                </h3>
                <ul className="space-y-1 max-sm:text-xs">
                  {
                    PageData?.CHFUSA &&
                    PageData.CHFUSA.map(v => <li>
                      <Link key={`chf${v.id}`} to={v.linkTo} className="hover:underline">
                        {v.title}
                      </Link>
                    </li>)
                  }
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
                        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full">
                          <input
                            type="email"
                            value={email}
                            onChange={(v) => setEmail(v.target.value)}
                            placeholder="Enter Your Email Address"
                            className="flex-1 rounded-l-full max-sm:px-4 px-2 bg-white py-2 text-sm font-thin text-gray-800 placeholder:text-gray-400 hover:border-none"
                          />
                          <button
                            disabled={IsDisable}
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
      }

    </>
  );
}
