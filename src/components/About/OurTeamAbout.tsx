import { useState, useEffect, useRef } from "react";
import { boardMembers } from "../../utils/boardMembers";

interface Member {
  name: string;
  role: string;
  img: string;
}

export default function OurTeamAbout() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(boardMembers.length / itemsPerPage);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      animationRef.current = setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [totalPages]);

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    return boardMembers.slice(start, start + itemsPerPage);
  };

  return (
    <div className="relative w-full max-w-7xl desktop-1500:max-w-7xl desktop-1200:max-w-6xl mx-auto px-4 py-10 md:py-12 bg-white rounded-3xl shadow-lg max-sm:max-h-[37.313rem] md:h-[37.313rem] my-10 max-sm:pb-16 md:my-20 ">
      <h2 className="text-[2.5rem] text-center mb-10 desktop-1200:text-[2rem] desktop-1500:text-[2.25rem]">Our Team</h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-6 md:mb-12 md:px-20 transition-opacity duration-1000 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {getCurrentPageItems().map((member: Member, index: number) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src={member.img}
                alt={member.name}
                className="md:w-[7.5rem] desktop-1500:w-[7.5rem] desktop-1500:h-[7.5rem] desktop-1200:w-[6.5rem] w-10 h-10 md:h-[7.5rem] desktop-1200:h-[6.5rem] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="md:text-lg text-sm font-medium text-gray-900">
                {member.name}
              </p>
              <p className="text-gray-500 md:text-sm text-xs italic mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute flex justify-center space-x-2 bottom-2 right-1/2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentPage(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
