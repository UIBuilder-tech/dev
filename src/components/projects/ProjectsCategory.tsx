import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Link, useLocation } from "react-router-dom";
import activeArrow from "../../assets/arrowActive.svg";
import inactiveArrrow from "../../assets/arrowInactive.svg";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectsCategoryProps {
  programs: Program[];
  categoryTitle: string;
}

export default function ProjectsCategory({
  programs,
  categoryTitle,
}: ProjectsCategoryProps) {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState<Program[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  const location = useLocation();

  const itemsPerPage = 3; // Changed to 3 items per page
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const newItems = programs.slice(startIndex, startIndex + itemsPerPage);
    setCurrentItems(newItems);
  }, [currentPage, programs, itemsPerPage]);

  const nextPage = () => {
    const newPage = currentPage + 1;
    if (newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const prevPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 0) {
      setCurrentPage(newPage);
    }
  };

  console.log("currentItems", currentItems);

  // const nextPage = () => scrollToPage((currentPage + 1) % totalPages);
  // const prevPage = () =>
  //   scrollToPage((currentPage - 1 + totalPages) % totalPages);

  return (
    <div className="relative px-5 md:p-8 md:mx-14 py-6 md:py-12 ">
      <h1 className="text-3xl md:text-5xl mb-4 md:mb-8 desktop-1200:text-3xl desktop-1500:text-4xl  desktop-1900:text-5xl ">{categoryTitle}</h1>

      {/* Featured Program */}
      <div className="bg-white rounded-3xl p-2 md:p-10 md:pl-14  desktop-1900:pl-14 desktop-1500:p-6 desktop-1200:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] md:gap-16  desktop-1900:gap-5">
          <div className="md:space-y-6 space-y-4 flex flex-col justify-center px-4 md:px-10">
            <p className="text-xl max-sm:pt-2 md:text-3xl font-semibold md:max-w-[50%] desktop-1500:text-2xl desktop-1200:text-xl  desktop-1900:text-3xl">
              {programs[currentProgram].title}
            </p>
            <div className="underline-gradient rounded-xl"/>
            <p className="text-[#808080] text-sm md:text-xl md:leading-6 md:max-w-[90%] desktop-1500:text-[18px] desktop-1200:text-[16px]  desktop-1900:max-w-[80%]">
              {programs[currentProgram].description}
            </p>
            <div className="flex gap-4 md:pt-4">
             {location?.pathname.includes('project') ? 
             <>
             <Link to='/contribute#volunteer' className="md:px-6 px-3 py-2 md:py-2.5 border-2 border-blue-600 text-blue-600 rounded-full text-sm md:text-xl font-medium hover:bg-blue-700 transition-colors flex items-center desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]">
                Join Us
              </Link>
             <Link to='/contribute' className="px-3 md:px-6 md:py-2.5 bg-[#e67e22] text-white rounded-full text-sm md:text-xl font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]">
             Donate <span className="text-white text-lg">❤</span>
           </Link>
           </>
             :
             
             <Link to='/contribute#volunteer' className="md:px-6 px-3 py-2 md:py-2.5 border-2 border-blue-600 text-blue-600 rounded-full text-sm md:text-xl font-medium hover:bg-blue-700 transition-colors desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]  desktop-1900:text-[20px]  desktop-1900:py-3  desktop-1900:px-5">
                Contribute
              </Link>
              }
            </div>
          </div>
          <div className="flex flex-wrap gap-6 p-4">
            <div className="w-full desktop-1200:w-[450px] desktop-1500:w-[500px]  desktop-1900:w-[600px]">
              <motion.img
                key={`main-${currentProgram}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={
                  typeof programs[currentProgram].image === "string"
                    ? programs[currentProgram].image
                    : programs[currentProgram].image[0]
                }
                alt={programs[currentProgram].title}
                className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px] object-cover rounded-tr-xl rounded-bl-xl"
              />
            </div>
            <div className="max-sm:hidden flex flex-wrap w-full">
              <div className="w-1/2 pr-4  desktop-1200:w-[225px] desktop-1500:w-[250px]  desktop-1900:w-[300px]">
                <motion.img
                  key={`sub1-${currentProgram}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={
                    typeof programs[currentProgram].image === "string"
                      ? programs[currentProgram].image
                      : programs[currentProgram].image[1]
                  }
                  alt="Sub image 1"
                  className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px] object-cover rounded-tl-xl rounded-br-xl"
                />
              </div>
              <div className="w-1/2 desktop-1200:w-[225px] desktop-1500:w-[250px]  desktop-1900:w-[300px]">
                <motion.img
                  key={`sub2-${currentProgram}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={
                    typeof programs[currentProgram].image === "string"
                      ? programs[currentProgram].image
                      : programs[currentProgram].image[2]
                  }
                  alt="Sub image 2"
                  className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px]  object-cover rounded-tl-xl rounded-br-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="relative overflow-hidden md:py-4 desktop-1200:py-0">
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-scroll py-4"
          initial={{ x: 0 }}
          // animate={{ x: -currentPage * 100 + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {currentItems.map((program, index) => (
            <motion.div
              // key={program.id}
          key={`${program.id}-${currentPage}`}

              className={`flex-none w-[250px] md:w-[500px]  desktop-1200:w-[350px] desktop-1500:w-[425px] p-1   desktop-1900:w-[550px] desktop-1500:m-3 m-2 aspect-[3/2] ${
                index + currentPage * itemsPerPage === currentProgram ? "rounded-xl" : ""
              }`}
              onClick={() =>
                setCurrentProgram(index + currentPage * itemsPerPage)
              }
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                <img
                  src={
                    typeof program.image === "string"
                      ? programs[currentProgram].image
                      : programs[currentProgram].image[0]
                  }
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
                <div className="absolute top-0 left-0 right-0 p-4 text-white max-w-sm">
                  <p className="text-sm md:text-2xl desktop-1500:text-xl desktop-1200:text-lg  desktop-1900:text-2xl pr-8 max-sm:leading-4">{program.title}</p>
                  <div className="h-[1px] mt-2 w-1/3 bg-white"></div>
                </div>
                <motion.div
                  className={
                    index + currentPage * itemsPerPage === currentProgram
                      ? "absolute top-4 right-4 md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12  desktop-1500:w-16 desktop-1500:h-16 w-8 h-8 desktop-1900:w-20 desktop-1900:h-20 rounded-full flex items-center justify-center"
                      : "absolute top-4 right-4 md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12 desktop-1500:w-16 desktop-1500:h-16 desktop-1900:w-20 desktop-1900:h-20 w-8 h-8  flex items-center justify-center"
                  }
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    rotate:
                      index + currentPage * itemsPerPage === currentProgram
                        ? 180
                        : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 text-gray-50" /> */}
                 {index + currentPage * itemsPerPage === currentProgram? <img src={activeArrow} className="md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12 desktop-1500:w-16 desktop-1500:h-16 desktop-1900:w-20 desktop-1900:h-20 w-8 h-8 "/> : <img src={inactiveArrrow} className="md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12 desktop-1500:w-16 desktop-1500:h-16 desktop-1900:w-20 desktop-1900:h-20 w-8 h-8 "/> }
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? "bg-[#e67e22]" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      {!isMobile && (
        <button
          onClick={prevPage}
          className="absolute z-10 left-10 top-3/4 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#e67e22] text-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {!isMobile && (
        <button
          onClick={nextPage}
          className="absolute right-10 top-3/4 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-[#e67e22] text-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
