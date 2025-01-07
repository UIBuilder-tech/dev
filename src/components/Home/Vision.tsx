import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function Vision({ data }) {
  const [activeSlide, setActiveSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const [slides, setSlides] = useState([])
  useEffect(() => {
    if (data) {
      const newData = data.map((v: any) => {
        const baseurl = AdminPanelUrl.replace("/api", "")
        return {
          ...v,
          image: v.image.map((a) => `${baseurl}${a.url}`)
        }
      })
      setSlides(newData)
    }

  }, [data])

  return (
    <div className="md:py-14 md:px-10 md:mx-10 desktop-1900:mx-14">
      <div className="mx-auto bg-white rounded-3xl px-4 md:px-[80px] py-10 md:py-10 relative desktop-1200:px-[50px]">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center"
              >
                {slide?.Title ? (
                  <>
                    <div className="w-full md:max-w-2xl md:ml-4 space-y-16 desktop-1500:space-y-14 desktop-1200:space-y-12 desktop-1900:space-y-16 desktop-1900:pl-10">
                      <h2 className="font-display text-3xl md:text-5xl mb-4 md:mb-6 text-secondary desktop-1500:text-[40px] desktop-1200:text-[35px] desktop-1900:text-[55px]">
                        {slide.Title}
                      </h2>
                      <p className="text-sm md:text-[20px] desktop-1500:text-[17px] leading-7 desktop-1500:leading-6 text-[#808080] mb-6 md:mb-8  max-w-[90%] desktop-1500:max-w-[80%] 
                   desktop-1200:max-w-[80%] desktop-1200:text-[14px] desktop-1200:leading-5 desktop-1900:text-[1.45rem] desktop-1900:max-w-[100%] desktop-1900:leading-7">
                        {slide.Description}
                      </p>
                      <div className="flex gap-3 md:gap-4">
                        <Link
                          to="/contribute#volunteer"
                          className="bg-white/10 backdrop-blur-sm text-primary border-2 border-primary px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 transition text-sm md:text-xl flex-1 md:flex-none text-center font-bold desktop-1200:text-lg desktop-1200:py-2 desktop-1200:px-6 desktop-1200:border-1 desktop-1900:text-2xl desktop-1900:py-3 desktop-1900:px-8"
                        >
                          Join Us
                        </Link>
                        <Link
                          to="/contribute#donation-table"
                          className="bg-secondary text-white px-4 md:px-8 desktop-1500:px-6 py-2 md:py-3 rounded-full hover:bg-opacity-90 flex items-center justify-center gap-2 text-sm md:text-xl flex-1 md:flex-none font-medium desktop-1200:text-lg desktop-1200:py-2 desktop-1200:gap-1 desktop-1200:px-6 desktop-1900:text-xl desktop-1900:px-8"
                        >
                          Donate <Heart className="h-4 w-4 md:h-5 md:w-5 desktop-1200:w-4 desktop-1200:h-4 desktop-1900:w-5 desktop-1900:h-5" fill="white" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-auto md:flex-shrink-0">
                      <div className="relative w-full desktop-1500:max-w-[500px] max-w-[600px] mx-auto desktop-1200:max-w-[400px] desktop-1900:max-w-[800px]">
                        <img
                          src={slide.image[0]}
                          alt={slide.Title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </>
                ) :
                  <div className="bg-[#F4A460] max-sm:h-full max-sm:items-center max-sm:justify-center rounded-xl  w-full overflow-hidden max-sm:flex max-sm:flex-col desktop-1900:h-full desktop-1900:flex desktop-1900:justify-center desktop-1900:items-center desktop-1900:flex-col">
                    {/* <h2 className="font-display text-xl desktop-1500:text-3xl desktop-1200:pt-5 pt-10 md:text-2xl text-white text-center desktop-1900:text-4xl">
                  Chitrapur Heritage Foundation, USA
                </h2>
                <p className="text-sm md:text-sm text-white text-center px-4 md:px-8">
                  IRS certified 501c(3) organization, Tax id: 20-2738955
                </p> */}
                    <div className=" flex max-sm:flex-col items-center justify-between gap-8 desktop-1200:mt-2 mt-8">
                      <div className="w-[262px] max-sm:w-[150px] desktop-1500:w-[260px] desktop-1200:w-[240px] desktop-1900:w-[400px] shrink-0 ">
                        <img
                          src={slide.image[0]}
                          alt=""
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      <div className="flex-1 text-center max-w-5xl mx-auto">
                        <h2 className="font-display text-xl md:text-2xl desktop-1500:text-3xl desktop-1200:text-xl mb-4 md:mb-6 text-white max-sm:px-1 desktop-1900:text-3xl">
                          {slide.Quotes}
                        </h2>
                        <p className="text-sm md:text-xl desktop-1500:text-lg desktop-1200:text-sm desktop-1900:text-2xl text-white mb-6 md:mb-8">
                          {slide.Author}
                        </p>
                      </div>

                      <div className="w-[262px] desktop-1500:w-[260px] desktop-1200:w-[240px] shrink-0 max-sm:w-[150px] desktop-1900:w-[350px] md:block">
                        {
                          slide?.image[1] && <img
                            src={slide.image[1]}
                            alt=""
                            className="w-full h-auto object-contain"
                          />
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        {/* Carousel dots - positioned at bottom center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 desktop-1200:w-2  desktop-1200:h-2 rounded-full transition-colors ${activeSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
