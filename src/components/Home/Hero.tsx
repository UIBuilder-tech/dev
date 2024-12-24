import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  desc: string;
  img: string;
  from: string;
}

export default function Hero({ title, desc, img, from = "home" }: Props) {
  return (
    <div className="relative  md:min-h-screen">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Heritage Building"
          className="w-full h-full object-cover hero-bg"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:pt-32 pt-24 max-sm:pb-16">
        <div className="max-w-3xl pt-10 max-sm:pb-10 md:pt-15">
          <h1 className="font-display text-3xl md:text-5xl text-white mb-3 md:mb-6 leading-tight">
            {/* {from === "home"
              ? "Chitrapur Heritage Foundation"
              : "Vantiga Donations"} */}
            {title}
            {from === "home" && (
              <p className="text-sm md:text-sm text-white text-left px-1 font-body">
                IRS certified 501c(3) organization, Tax id: 20-2738955
              </p>
            )}
          </h1>
          <p className="text-white/90 text-sm md:text-[18px] mb-8 leading-relaxed max-sm:leading-2">
            {/* {from === "home"
              ? "Founded in 2005, the Chitrapur Heritage Foundation (CHF) is a nonprofit organization dedicated to fostering sustainable development and preserving the rich cultural heritage of the Chitrapur Saraswat community. With a focus on Heritage, Education,Women's Empowerment and Spiritual Development"
              : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."}
           */}
            {desc}
          </p>
          <div className="flex">
            <Link
              to="/contribute#volunteer"
              className=" text-white border-[1px] border-r-0 border-[#fbf3e8] md:px-8 md:py-3 rounded-l-full hover:bg-white/20 transition max-sm:text-sm px-4 py-2"
            >
              Join Us
            </Link>
            <div className="border-[1px] border-l-0 rounded-r-full border-[#fbf3e8]">
              <Link
                to="/contribute#donation-table"
                className="bg-[#fbf3e8] text-secondary font-[450] md:px-8 md:py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2 max-sm:text-sm px-4 py-2"
              >
                Donate <Heart className="h-5 w-5" fill="#e67e22" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
