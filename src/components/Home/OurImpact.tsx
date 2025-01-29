import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import activeArrow from "../../assets/arrowActive.svg";
import inactiveArrow from "../../assets/arrowInactive.svg";

interface ImpactCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats1: { Name: string; values: string } | null;
  stats2: { Name: string; values: string } | null;
  stats3: { Name: string; values: string } | null;
  linkTo: string;
  donationLink?: string;
}
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function ImpactSection() {
  const [impactCards, setImpactCards] = useState<ImpactCard[] | null>(null);
  const [activeCard, setActiveCard] = useState<ImpactCard | null>(null);

  const handleCardClick = (card: ImpactCard) => {
    if (card?.title !== activeCard?.title) {
      setActiveCard(card);
    }
  };
  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${AdminPanelUrl}/home-page?populate[Our_Impact_Big_Card][populate]=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.data?.Our_Impact_Big_Card) {
          const data = result.data?.Our_Impact_Big_Card;
          const newData = data.map((item: any) => {
            const id = item.SubTitle.replace(" ", "_").toLowerCase();
            return {
              id: id,
              title: item.Title,
              subtitle: item.SubTitle,
              description: item.Description,
              linkTo: item.linkTo,
              donationLink: item.donationLink,
              // linkTo: id,
              stats1: item?.stats?.[0] || null,
              stats2: item?.stats?.[1] || null,
              stats3: item?.stats?.[2] || null,
              image: AdminPanelUrl.replace("/api", "") + item.image.url,
            };
          });
          setActiveCard(newData[0]);
          setImpactCards(newData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="py-8 px-4 md:p-8 bg-cream md:mx-14 desktop-1900:mx-16">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8 desktop-1900:text-5xl">
        Our Impact
      </h2>
      {impactCards && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-4 md:gap-6">
            {/* Featured Card */}
            <div className="lg:col-span-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard?.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative h-[300px] desktop-1200:h-[480px] desktop-1500:h-[520px] md:h-[520px] rounded-3xl overflow-hidden"
                >
                  <img
                    src={activeCard?.image}
                    alt={activeCard?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

                  <div className="absolute inset-0 p-4 md:p-8 desktop-1500:p-8 flex flex-col justify-between desktop-1200:p-6">
                    <div className="flex justify-between items-start w-full">
                      <div className="space-y-2">
                        <div>
                          <p className="text-white text-xl md:text-2xl desktop-1500:text-2xl font-medium desktop-1200:text-[20px]">
                            {activeCard?.title}
                          </p>
                          {activeCard?.subtitle && (
                            <p className="text-white/90 text-sm md:text-xl desktop-1500:text-xl desktop-1200:text-[18px]">
                              {activeCard?.subtitle}
                            </p>
                          )}
                        </div>
                        <div className="h-0.5 bg-white transition-all duration-500 w-[100%] desktop-1500:w-[150%] md:w-[150%] desktop-1200:w-[100%]" />
                      </div>
                      <div className="flex gap-2 md:gap-4">
                        <Link
                          to={`/projects#${activeCard?.linkTo}`}
                          className="rounded-full max-sm:text-xs px-2 py-1 md:px-6 md:py-2 md:text-lg desktop-1500:text-lg desktop-1200:text-[16px] text-white border hover:bg-primary/90 flex items-center"
                        >
                          Learn More
                        </Link>
                        <Link to="/projects" className="">
                          <img
                            src={activeArrow}
                            className="h-16 w-16 max-sm:h-10 max-sm:w-10"
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <div
                        className={`h-2 z-[10] rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[12rem] md:w-[40rem] desktop-1500:w-[40rem] desktop-1200:w-[30rem]`}
                      />
                      <div className="bg-white rounded-[20px] p-4 md:p-6 w-full relative min-h-[150px]">
                        <p className="max-sm:text-xs text-lg desktop-1500:text-lg text-[#516072] max-sm:leading-5 desktop-1200:text-sm">
                          {activeCard?.description}
                        </p>
                        <Link
                          to={`/contribute#donation-table#${activeCard?.donationLink}`}
                          className="float-right px-3 py-1 max-sm:text-sm md:px-6 md:py-2 text-lg desktop-1500:text-lg bg-secondary text-white rounded-full flex items-center gap-2 shadow-md desktop-1200:text-sm"
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
              <div className="bg-white rounded-2xl p-2 md:p-4 grid grid-cols-2 gap-4 shadow-md h-auto desktop-1200:h-[480px] desktop-1500:h-[520px] md:h-[520px]">
                {activeCard?.stats1 && (
                  <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
                    <div className="text-3xl desktop-1200:text-4xl desktop-1500:text-5xl md:text-5xl font-bold text-[#f97316]">
                      {activeCard?.stats1?.values}
                    </div>
                    <div className="text-sm text-center md:text-lg desktop-1500:text-lg desktop-1200:text-[16px] text-[#666666]">
                      {activeCard?.stats1?.Name}
                    </div>
                  </div>
                )}
                {activeCard?.stats2 && (
                  <div className="bg-[#F4F5F7] p-3 md:p-6 flex flex-col space-y-2 items-center justify-center rounded-xl">
                    <div
                      className={`font-bold text-[#0066FF] ${
                        activeCard?.stats2?.values?.includes("%")
                          ? "text-2xl md:text-4xl desktop-1500:text-4xl desktop-1200:text-3xl desktop-1200:-mx-5"
                          : "text-3xl md:text-5xl desktop-1500:text-5xl desktop-1200:text-4xl"
                      }`}
                    >
                      {activeCard?.stats2?.values}
                    </div>
                    <div className="text-sm text-center md:text-lg desktop-1500:text-lg font-normal text-[#666666] desktop-1200:text-[16px]">
                      {activeCard?.stats2?.Name}
                    </div>
                  </div>
                )}
                {activeCard?.stats3 && (
                  <div className="bg-[#F4F5F7] p-6 flex col-span-2 flex-col space-y-2 items-center justify-center rounded-xl max-sm:hidden">
                    <div className="text-2xl md:text-5xl desktop-1500:text-5xl font-bold text-[#02306A] desktop-1200:text-4xl">
                      {activeCard?.stats3?.values}
                    </div>
                    <div className="text-sm md:text-lg desktop-1500:text-lg text-[#666666] desktop-1200:text-[16px]">
                      {activeCard?.stats3?.Name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mt-4 md:mt-6">
            {impactCards.map((card) => (
              <motion.div
                key={card.title}
                className={`relative h-[200px] desktop-1200:h-[300px] md:h-[350px] desktop-1500:h-[350px] rounded-xl md:rounded-3xl overflow-hidden cursor-pointer ${
                  activeCard?.id === card.id ? "ring-2 ring-primary" : ""
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
                          activeCard?.id === card.id
                            ? "w-[80%]"
                            : "w-10 md:w-24"
                        }`}
                      />
                    </div>
                    {activeCard?.id === card.id ? (
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
        </>
      )}
    </div>
  );
}
