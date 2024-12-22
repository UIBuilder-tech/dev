import { useState, useEffect } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import educationImg from "../../assets/photoGallery/img8.jpg";
import womenImg from "../../assets/photoGallery/img4.jpg";
import heritageImg from "../../assets/photoGallery/img9.jpg";

interface VisionCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const visionCards: VisionCard[] = [
  {
    id: "education",
    title: "Education & Grants",
    description:
      "Chitrapur Heritage Foundation (CHF) supports 9 schools in India, empowering over 3,000 underprivileged students through quality education, scholarship’s,  vocational training, and personnel development programs.",
    image: educationImg,
  },
  {
    id: "women",
    title: "Women Empowerment",
    description:
      "Chitrapur Heritage Foundation (CHF) supports women's empowerment initiatives in India, providing vocational training, entrepreneurship development, financial literacy, and leadership training to promote economic self-reliance and independence. These initiatives aim to empower women to build a better future for themselves, their families, and their communities.",
    image: womenImg,
  },
  {
    id: "heritage",
    title: "Heritage Preservation",
    description:
      "The Chitrapur Math preserves and promotes the cultural heritage of the Chitrapur Saraswat community through documentation, conservation of heritage sites, and organization of cultural festivals and events. These efforts aim to safeguard the community's traditions, customs, and history for future generations.",
    image: heritageImg,
  },
];

export default function Programs() {
  const [expandedId, setExpandedId] = useState("education");
  const [orderedCards, setOrderedCards] = useState(visionCards);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768; // md breakpoint

  // Reorder cards when expanded card changes
  useEffect(() => {
    if (!isMobile) {
      setOrderedCards(visionCards);
      return;
    }

    const newOrder = [...visionCards];
    const expandedIndex = newOrder.findIndex((card) => card.id === expandedId);
    if (expandedIndex > 0) {
      const [expandedCard] = newOrder.splice(expandedIndex, 1);
      newOrder.unshift(expandedCard);
    }
    setOrderedCards(newOrder);
  }, [expandedId, isMobile]);

  const expandedCard = orderedCards.find((card) => card.id === expandedId);
  const collapsedCards = orderedCards.filter((card) => card.id !== expandedId);

  return (
    <div className="p-4 space-y-4 md:p-6 md:space-y-0 md:flex md:gap-6 md:justify-center">
      {/* Expanded Card */}
      {expandedCard && (
        <div
          key={expandedCard.id}
          className="programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out w-full md:w-[750px]"
        >
          <div className="relative h-[350px] md:h-[726px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src={expandedCard.image}
              alt={expandedCard.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-2">
                  <p className="text-xl md:text-2xl font-medium text-white max-w-[50%]">
                    {expandedCard.title}
                  </p>
                  <div className="h-0.5 bg-white w-full" />
                </div>
                <button
                  onClick={() => setExpandedId("")}
                  className="rounded-full border border-secondary bg-secondary p-2 text-white hover:bg-white/10"
                >
                  <ArrowUpRight className="h-6 w-6 rotate-[175deg]" />
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="h-2 rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[90%] md:w-[30rem]" />
                <div className="space-y-6 bg-white rounded-3xl p-4 md:p-6 w-full">
                  <p className="text-sm md:text-md text-[#516072]">
                    {expandedCard.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => setExpandedId("")}
                      className="flex items-center gap-2 text-white hover:text-white/80"
                    >
                      <Minus className="h-8 w-8 border border-secondary rounded-full p-2 text-secondary bg-[#FBF3E8] font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Cards Container */}
      <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
        {collapsedCards.map((card) => (
          <div
            key={card.id}
            className="programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out cursor-pointer w-full md:w-[380px]"
            onClick={() => setExpandedId(card.id)}
          >
            <div className="relative h-[200px] md:h-[726px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm md:text-2xl font-medium text-white max-w-[50%]">
                      {card.title}
                    </p>
                    <div className="h-0.5 bg-white w-20" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(card.id);
                    }}
                    className="rounded-full border border-white/50 p-1.5 md:p-2 text-white hover:bg-white/10"
                  >
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <button
                  className="flex items-center justify-between rounded-full bg-white gap-2 text-[#516072] w-full p-2 pl-4 md:pl-6 text-xs md:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(card.id);
                  }}
                >
                  READ MORE
                  <Plus className="h-6 w-6 md:h-8 md:w-8 border border-secondary rounded-full p-1.5 md:p-2 text-secondary bg-[#FBF3E8] font-bold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
