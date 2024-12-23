import volunteer from "../../assets/volunteer.svg";
import heritage from "../../assets/heritage.svg";
import spirituality from "../../assets/spirituality.svg";
import education from "../../assets/education.svg";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import sectionBorder from "../../assets/section-border.svg";


export default function VolunteerSection() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768; // md breakpoint
  const range150 = windowWidth>=1200 && windowWidth <=1500;
  const range120 = windowWidth>1500 && windowWidth <=1900;
  return (
    <section className={`relative bg-[#E67E22] ${range150 ? 'py-10 pb-14' : ''} py-16 my-10`}>
      <div className="container relative mx-auto px-2 md:px-4">
        <div className="flex flex-row">
          {/* Left illustration */}
          <div className="max-sm:hidden relative flex-shrink-0 md:mb-0 md:w-1/4">
            <img
              src={volunteer}
              alt="Volunteer illustration"
              className={`w-full max-w-[250px] ${range150 ? 'max-w-[200px]' : ''}`}
            />
          </div>

          {/* Middle icons and right content */}
          <div className="flex flex-grow max-sm:flex-row max-sm:justify-between flex-col md:flex-row">
            {/* Middle icons */}
            <div className="max-sm:w-1/2 relative mb-8 flex-shrink-0 md:mb-0 md:w-1/3">
              <div className="absolute left-14 top-0">
                <div className="flex flex-col items-center">
                  <div className="rounded-full ">
                    <img
                      src={heritage}
                      alt="Heritage"
                      width={isMobile ? 80 : range150 ? 100 :140}
                      height={isMobile ? 60 : range150 ? 80 : 120}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-10 md:left-5 top-1/3 -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="rounded-full">
                    <img
                      src={spirituality}
                      alt="Spirituality"
                      width={isMobile ? 90 : range150 ? 120 : 160}
                      height={isMobile ? 80 : range150 ? 110 : 150}
                    />
                  </div>
                </div>
              </div>
              <div className={`absolute left-8 -bottom-6 md:-bottom-12 ${range150 ? '-bottom-6' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="rounded-full">
                    <img
                      src={education}
                      alt="Education"
                      width={isMobile ? 110 : range150 ? 140 : 180}
                      height={isMobile ? 90 : range150 ? 120 : 160}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex flex-grow flex-col justify-center space-y-6 md:w-2/3">
              <h2 className="text-3xl md:text-5xl text-white">
                Volunteer
              </h2>
              <p className={`text-sm md:text-lg text-white  md:max-w-[60%] ${range150 ? 'text-[16px] leading-5 max-w-[75%]' : ''}`}>
                Join us in making a difference. Your skills and enthusiasm can
                help us achieve our goals in Heritage, Education, Women's
                Empowerment, and Spiritual Development.
              </p>
              <div className="flex flex-wrap max-sm:flex-row gap-1 md:gap-4">
                <Link to='/contribute#volunteer' className="bg-transparent border rounded-3xl max-sm:text-xs p-1 md:p-3 px-2 md:px-5 text-white hover:bg-white/10 ">
                  Learn More
                </Link>
                <Link to='/contribute#volunteer' className="bg-white text-[#E67E22] border rounded-3xl max-sm:text-xs p-2 md:p-3 px-3 md:px-5 hover:bg-white/90">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-8 max-sm:h-12 w-full bg-[url('../../assets/section-border.svg')] bg-repeat-x" />
        <img src={sectionBorder} className="w-full h-full " />
      </div>
    </section>
  );
}
