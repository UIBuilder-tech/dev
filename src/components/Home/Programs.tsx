import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import InactiveArrow from "../../assets/arrowInactive.svg";
import ActiveArrow from "../../assets/arrowActive.svg";
import { Link } from "react-router-dom";

export default function Programs({ data }) {
  const [expandedId, setExpandedId] = useState("education");
  const [orderedCards, setOrderedCards] = useState(data);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768; // md breakpoint

  // Reorder cards when expanded card changes
  useEffect(() => {
    if (!isMobile) {
      setOrderedCards(data);
      return;
    }

    const newOrder = [...data];
    const expandedIndex = newOrder.findIndex((card) => card.id === expandedId);
    if (expandedIndex > 0) {
      const [expandedCard] = newOrder.splice(expandedIndex, 1);
      newOrder.unshift(expandedCard);
    }
    setOrderedCards(newOrder);
  }, [expandedId, isMobile, data]);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? "" : id);
  };

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Loading programs...</p>;
  }

  return (
    <>
      <div className="hidden p-4 space-y-4 md:p-6 md:space-y-0 md:flex md:gap-10 md:justify-center desktop-1500:gap-8 desktop-1200:gap-6">
        {orderedCards.map((card) => (
          <motion.div
            key={card?.id || Math.random()}
            className={`programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${
              card.id === expandedId
                ? "w-full md:w-[783px] desktop-1500:w-[700px] desktop-1900:w-[840px] desktop-1200:w-[550px]"
                : "w-full md:w-[350px] desktop-1900:w-[375px] desktop-1500:w-[300px] desktop-1200:w-[250px]"
            }`}
            initial={false}
            animate={{
              height:
                card.id === expandedId
                  ? isMobile
                    ? "auto"
                    : "673px"
                  : isMobile
                  ? "200px"
                  : "673px",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleExpand(card?.id)}
          >
            <AnimatePresence mode="wait">
              {card?.id === expandedId ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                  {card?.image ? (
                    <img
                      src={card.image}
                      alt={card.title || "Program"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-700">No Image Available</p>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8 desktop-1500:p-6 desktop-1200:p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col space-y-2">
                        <p className="text-xl md:text-3xl font-medium text-white max-w-[80%] desktop-1200:text-2xl">
                          {card.title || "Untitled Program"}
                        </p>
                        <div className="h-0.5 bg-white w-full" />
                      </div>
                      <div className="flex flex-row items-center text-white">
                        <Link
                          to={`/projects#${card.linkTo || ""}`}
                          className="p-2 border rounded-3xl px-4 text-sm md:text-xl desktop-1200:text-lg"
                        >
                          Learn More
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId("");
                          }}
                          className=""
                        >
                          <img
                            src={ActiveArrow}
                            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] desktop-1200:w-[60px] desktop-1200:h-[60px]"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="h-2 rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[90%] md:w-[30rem]" />
                      <div className="max-sm:h-[120px] max-sm:overflow-y-scroll space-y-6 bg-white rounded-3xl p-4 md:p-6 w-full">
                        <p className="text-sm md:text-xl desktop-1500:text-lg desktop-1500:leading-6 leading-normal text-[#516072] desktop-1200:text-[15px] desktop-1200:leading-5">
                          {card.description || "No description available."}
                        </p>
                        <div className="flex items-center justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId("");
                            }}
                            className="flex items-center gap-2 text-white hover:text-white/80"
                          >
                            <Minus className="h-9 w-9 rounded-full p-3 text-secondary bg-[#FBF3E8] font-bold" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
                  {card?.image ? (
                    <img
                      src={card.image}
                      alt={card.title || "Program"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-700">No Image Available</p>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8 desktop-1500:p-6 desktop-1200:p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm md:text-2xl font-medium text-white max-w-[50%] desktop-1200:text-xl">
                          {card.title || "Untitled Program"}
                        </p>
                        <div className="h-0.5 bg-white w-20" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExpand(card?.id);
                        }}
                        className=""
                      >
                        <img
                          src={InactiveArrow}
                          className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] desktop-1200:w-[60px] desktop-1200:h-[60px]"
                        />
                      </button>
                    </div>

                    <button
                      className="flex items-center justify-between rounded-full bg-white gap-2 text-[#516072] w-full p-2 pl-4 md:pl-6 text-xs md:text-base desktop-1200:text-[16px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExpand(card?.id);
                      }}
                    >
                      READ MORE
                      <Plus className="h-6 w-6 md:h-8 md:w-8 rounded-full p-1.5 md:p-2 text-secondary bg-[#FBF3E8] font-bold" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
}
