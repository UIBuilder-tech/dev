import { useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImpactCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

const impactCards: ImpactCard[] = [
  {
    id: "1",
    title: "Shri Chitrapur Math Renovation",
    subtitle: "Community & Heritage",
    description:
      "CHF contributed over $300K towards the renovation of Shri Chitrapur Math in Shirali, leading up to the Tercentennial of Guru Parampara in 2008. This initiative reflects CHF's commitment to preserving cultural and spiritual heritage.",
    image: "https://chfusa.org/static/images/MR(1).jpg", // Temple image
  },
  {
    id: "2",
    title: "Srivali High School Buildings",
    subtitle: "Education",
    description:
      "CHF funded the construction of two school buildings at Srivali High School, supporting education and providing better learning environments for students in the region.",
    image: "https://chfusa.org/static/images/SHS(2).jpg", // Education image
  },
  {
    id: "3",
    title: "Samvit Sudha",
    subtitle: "Women Empowerment",
    description:
      "Samvit Sudha, initiated by SCM, focuses on empowering women by providing them with vocational skills and opportunities for self-reliance, fostering growth and independence.",
    image: "https://chfusa.org/static/images/SS(4).jpg", // Food donation image
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
    <div className="py-8 px-4 md:p-8 bg-cream md:mx-14">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8">
        Our Impact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Featured Card */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[300px] md:h-[420px] rounded-3xl overflow-hidden"
            >
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  <div className="space-y-2">
                    <div>
                      <p className="text-white text-xl md:text-2xl font-medium">
                        {activeCard.title}
                      </p>
                      {activeCard.subtitle && (
                        <p className="text-white/90 text-sm md:text-xl">
                          {activeCard.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="h-0.5 bg-white transition-all duration-500 w-[100%]  md:w-[150%]" />
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    <button className="rounded-full max-sm:text-xs px-2 py-1 md:px-6 md:py-2 text-white border hover:bg-primary/90">
                      Learn More
                    </button>
                    <button className="bg-secondary border-secondary rounded-full flex items-center p-2 text-white ">
                      <ArrowUpRight className="h-6 w-6  text-white rounded-full rotate-[175deg]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div
                    className={`h-2 z-[10] rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[12rem] md:w-[50rem]`}
                  />
                  <div className="bg-white rounded-[20px] p-4 md:p-6 w-full  relative min-h-[150px]">
                    <p className="max-sm:text-xs text-sm text-[#516072] max-sm:leading-5 ">
                      {activeCard.description}
                    </p>
                    <button className="float-right px-3 py-1 max-sm:text-sm md:px-6 md:py-2  bg-secondary text-white rounded-full flex items-center gap-2 shadow-md">
                      Donate <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Cards */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="grid grid-cols-6 gap-2 text-center mb-2 md:mb-4">
              {["5", "0", "0", "0", "0", "0"].map((digit, i) => (
                <>
                  <h3
                    key={i}
                    className={`text-4xl font-bold text-[#0066FF] relative ${
                      i < 5 ? "digit-separator" : ""
                    }`}
                  >
                    {digit}
                  </h3>
                </>
              ))}
            </div>
            <div className="flex justify-between text-sm mx-5">
              {/* <h5 className="text-[#02306A]">
                Target Donation <span className="text-[#C7C7C7]">(in $)</span>
              </h5> */}
              <span className="text-[#f97316]">1000+ Donors</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-2 md:p-4 grid grid-cols-2 gap-4 shadow-md">
            <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
              <div className="text-3xl font-bold text-[#f97316]">10,000+</div>
              <div className="text-sm text-[#666666]">Children Educated</div>
            </div>
            <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
              <div className="text-3xl font-bold text-[#0066FF]">100+</div>
              <div className="text-sm text-[#666666]">Schools Connected</div>
            </div>

            <div className="bg-[#F4F5F7] p-6 flex col-span-2 flex-col space-y-2 items-center justify-center rounded-xl max-sm:hidden">
              <div className="text-2xl font-bold text-[#02306A]">95% - 99%</div>
              <div className="text-sm text-[#666666]">
                Student Graduation Rate
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
            className={`relative h-[200px] md:h-[275px] rounded-xl md:rounded-3xl overflow-hidden cursor-pointer ${
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute inset-0 p-2 md:p-6 flex flex-col justify-between">
              <div className="flex md:flex-row flex-col h-full justify-between items-end">
                <div className="space-y-2 text-start w-full">
                  <div>
                    <p className="text-white text-md md:text-xl font-medium">
                      {card.title}
                    </p>
                    {card.subtitle && (
                      <p className="text-white/90 text-xs md:text-md">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                  <div
                    className={`h-0.5 bg-white transition-all duration-500 ${
                      activeCard.id === card.id ? "w-full" : "w-10 md:w-24"
                    }`}
                  />
                </div>
                <ArrowUpRight className="h-8 w-8 transition-transform duration-300 text-white rounded-full border border-white p-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
