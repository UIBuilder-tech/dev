import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import activeArrow from "../../assets/arrowActive.svg";
import inactiveArrow from "../../assets/arrowInactive.svg";
import Srivali from "../../assets/Srivali High School.png";
import ChitrapurMathImg from "../../assets/Shirali_Math.jpg";
import solar1 from "../../assets/solar1.jpg";

interface ImpactCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats1: object;
  stats2: object;
  stats3: object;
}

const impactCards: ImpactCard[] = [
  {
    id: "1",
    title: "Karla Solar plant",
    subtitle: "Community & Heritage",
    description:
      "The Solar Plant in Karla project involves installing a 16kW grid-tied solar system at the Parijnan PU College and Parijnan Vidyalaya in Kotekar to reduce reliance on non-renewable energy, lower operational costs, and promote sustainability.",
    image: solar1, // Temple image
    stats1: {
      key: "Generated units",
      value: "94574+",
    },
    stats2: {
      key: "Exported units",
      value: "51312+",
    },
    stats3: {
      key: "Total Savings (Since installation)",
      value: "₹ 7,42,000+",
    },
  },
  {
    id: "2",
    title: "Srivali High School Buildings",
    subtitle: "Education",
    description:
      "CHF funded the construction of two school buildings at Srivali High School, supporting education and providing better learning environments for students in the region.",
    image: Srivali, // Education image
    stats1: {
      key: "Children Educated",
      value: "10,000+",
    },
    stats2: {
      key: "Schools Connected",
      value: "100+",
    },
    stats3: {
      key: "Student Graduation Rate",
      value: "95% - 99%",
    },
  },
  {
    id: "3",
    title: "Samvit Sudha",
    subtitle: "Women Empowerment",
    description:
      "Samvit Sudha, initiated by SCM, focuses on empowering women by providing them with vocational skills and opportunities for self-reliance, fostering growth and independence.",
    image:
      "https://samvitsudha.com/wp-content/uploads/2023/09/2-Fabric-Unit-training-@-Workplace.jpg", // Food donation image
    stats1: {
      key: "Women Empowered",
      value: "1800+",
    },
    stats2: {
      key: "Families Benefitted",
      value: "1000+",
    },
    stats3: {
      key: "Women Entrepreneurs",
      value: "300+",
    },
  },
];

export default function ImpactSection() {
  const [activeCard, setActiveCard] = useState(impactCards[0]);

  const handleCardClick = (card: ImpactCard) => {
    if (card.id !== activeCard.id) {
      setActiveCard(card);
    }
  };

  return (
    <div className="py-8 px-4 md:p-8 bg-cream md:mx-14 desktop-1900:mx-16">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8 desktop-1900:text-5xl">
        Our Impact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-4 md:gap-6">
        {/* Featured Card */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[300px] desktop-1200:h-[480px] desktop-1500:h-[520px] md:h-[520px] rounded-3xl overflow-hidden"
            >
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

              <div className="absolute inset-0 p-4 md:p-8 desktop-1500:p-8 flex flex-col justify-between desktop-1200:p-6">
                <div className="flex justify-between items-start w-full">
                  <div className="space-y-2">
                    <div>
                      <p className="text-white text-xl md:text-2xl desktop-1500:text-2xl font-medium desktop-1200:text-[20px]">
                        {activeCard.title}
                      </p>
                      {activeCard.subtitle && (
                        <p className="text-white/90 text-sm md:text-xl desktop-1500:text-xl desktop-1200:text-[18px]">
                          {activeCard.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="h-0.5 bg-white transition-all duration-500 w-[100%] desktop-1500:w-[150%]  md:w-[150%] desktop-1200:w-[100%]" />
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    {/* <Link
                      to="/contribute#donation-table"
                      className="rounded-full max-sm:text-xs px-2 py-1 md:px-6 md:py-2 md:text-lg desktop-1500:text-lg desktop-1200:text-[16px] text-white border hover:bg-primary/90 flex items-center"
                    >
                      Learn More
                    </Link> */}
                    <Link to="/projects" className="">
                      {/* <ArrowUpRight className="h-6 w-6  text-white rounded-full rotate-[175deg]" /> */}
                      <img
                        src={activeArrow}
                        className="h-14 w-14 desktop-1500:h-14 desktop-1500:w-14 desktop-1200:w-12 desktop-1200:h-12"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div
                    className={`h-2 z-[10] rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[12rem] md:w-[40rem] desktop-1500:w-[40rem] desktop-1200:w-[30rem]`}
                  />
                  <div className="bg-white rounded-[20px] p-4 md:p-6 w-full  relative min-h-[150px] ">
                    <p className="max-sm:text-xs text-lg desktop-1500:text-lg text-[#516072] max-sm:leading-5 desktop-1200:text-sm">
                      {activeCard.description}
                    </p>
                    <Link
                      to="/contribute#donation-table"
                      className="float-right px-3 py-1 max-sm:text-sm md:px-6 md:py-2 text-lg desktop-1500:text-lg  bg-secondary text-white rounded-full flex items-center gap-2 shadow-md desktop-1200:text-sm"
                    >
                      Donate <Heart className="h-4 w-4" fill="white" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Cards */}
        <div className="space-y-5">
          {/* <div className="bg-white rounded-2xl desktop-1200:p-8 desktop-1500:p-10 p-6 md:p-10 shadow-md">
            <div className="grid grid-cols-7 gap-2 text-center mb-2 md:mb-6">
              {["$", "5", "0", "0", "0", "0", "0"].map((digit, i) => (
                  <h3
                    key={`section_${i}`}
                    className={`text-4xl font-bold text-[#0066FF] relative ${
                      i < 6 ? "digit-separator" : ""
                    }`}
                  >
                    {digit}
                  </h3>
              ))}
            </div>
            <div className="flex justify-between text-lg mx-5">
              <h5 className="text-[#02306A]">
                Target Donation <span className="text-[#C7C7C7]">(in $)</span>
              </h5>
              <span className="text-[#f97316]">1000+ Donors</span>
            </div>
          </div> */}

          <div className="bg-white rounded-2xl p-2 md:p-4 grid grid-cols-2 gap-4 shadow-md h-[100px] desktop-1200:h-[480px] desktop-1500:h-[520px] md:h-[520px]">
            <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
              <div className="text-3xl desktop-1200:text-4xl desktop-1500:text-5xl md:text-5xl font-bold text-[#f97316]">
                {activeCard?.stats1?.value}
              </div>
              <div className="text-sm md:text-lg desktop-1500:text-lg desktop-1200:text-[16px] text-[#666666]">
                {activeCard?.stats1?.key}
              </div>
            </div>
            <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
              <div className="text-3xl md:text-5xl desktop-1500:text-5xl desktop-1200:text-4xl font-bold text-[#0066FF]">
                {activeCard?.stats2?.value}
              </div>
              <div className="text-sm md:text-lg desktop-1500:text-lg font-normal text-[#666666] desktop-1200:text-[16px]">
                {activeCard?.stats2?.key}
              </div>
            </div>

            <div className="bg-[#F4F5F7] p-6 flex col-span-2 flex-col space-y-2 items-center justify-center rounded-xl max-sm:hidden">
              <div className="text-2xl md:text-5xl desktop-1500:text-5xl font-bold text-[#02306A] desktop-1200:text-4xl">
                {activeCard?.stats3?.value}
              </div>
              <div className="text-sm md:text-lg desktop-1500:text-lg text-[#666666] desktop-1200:text-[16px]">
                {activeCard?.stats3?.key}
              </div>
            </div>
            {/* <div className="bg-[#F4F5F7] p-6 flex flex-col space-y-2 items-center justify-center rounded-xl max-sm:hidden">
              <div className="text-3xl font-bold text-[#0066FF]">100+</div>
              <div className="text-sm text-[#666666]">Fifth Parameter</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mt-4 md:mt-6">
        {impactCards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative h-[200px] desktop-1200:h-[300px] md:h-[350px] desktop-1500:h-[350px] rounded-xl md:rounded-3xl overflow-hidden cursor-pointer ${
              activeCard.id === card.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => handleCardClick(card)}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

            <div className="absolute inset-0 p-2 md:p-6 desktop-1500:p-6 flex flex-col justify-between desktop-1200:p-4">
              <div className="flex md:flex-row flex-col h-full justify-between max-sm:items-end items-start">
                <div className="space-y-2 text-start w-full">
                  <div>
                    <p className="text-white text-sm md:text-2xl desktop-1500:text-2xl font-medium desktop-1200:text-xl">
                      {card.title}
                    </p>
                    {card.subtitle && (
                      <p className="text-white/90 text-xs md:text-lg desktop-1500:text-lg desktop-1200:text-md">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                  <div
                    className={`h-0.5 bg-white transition-all duration-500 ${
                      activeCard.id === card.id ? "w-[80%]" : "w-10 md:w-24"
                    }`}
                  />
                </div>
                {/* <ArrowUpRight className="h-8 w-8 transition-transform duration-300 text-white rounded-full border border-white p-1" /> */}
                {activeCard.id === card.id ? (
                  <Link to="/projects" className="">
                    <img
                      src={activeArrow}
                      className="h-16 w-16 max-sm:h-10 max-sm:w-10"
                    />
                  </Link>
                ) : (
                  <img
                    src={inactiveArrow}
                    className="h-16 w-16 max-sm:h-10 max-sm:w-10"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
