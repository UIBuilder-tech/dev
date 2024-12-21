import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";

interface program {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectsCategoryProps {
  programs: program[];
  categoryTitle: string;
}

export default function ProjectsCategory({
  programs,
  categoryTitle,
}: ProjectsCategoryProps) {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < 768;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / programs.length;
      carouselRef.current.scrollTo({
        left: page * itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
    setCurrentPage(page);
  };

  const nextPage = () => scrollToPage((currentPage + 1) % totalPages);
  const prevPage = () =>
    scrollToPage((currentPage - 1 + totalPages) % totalPages);

  return (
    <div className="relative px-5 md:p-8 md:mx-14 py-6 md:py-12 ">
      <h1 className="text-3xl md:text-4xl mb-4 md:mb-8">{categoryTitle}</h1>

      {/* Featured Program */}
      <div className="bg-white rounded-3xl p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
          <div className="md:space-y-6 space-y-4 flex flex-col justify-center px-4 md:px-10">
            <p className="text-xl max-sm:pt-2 md:text-2xl md:max-w-[50%]">
              {programs[currentProgram].title}
            </p>
            <div className="underline-gradient rounded-xl"/>
            <p className="text-[#808080] text-sm md:text-base md:leading-6 md:max-w-[80%] md:text-justify">
              {programs[currentProgram].description}
            </p>
            <div className="flex gap-4 md:pt-4">
              <Link to='/contribute#volunteer' className="md:px-6 px-2 py-2 md:py-2.5 border border-blue-600 text-blue-600 rounded-full text-sm md:text-md font-medium hover:bg-blue-700 transition-colors">
                Contribute
              </Link>
              {/* <button className="px-6 py-2.5 bg-[#e67e22] text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                Donate <span className="text-white text-lg">❤</span>
              </button> */}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="w-full">
              <motion.img
                key={`main-${currentProgram}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={programs[currentProgram].image}
                alt={programs[currentProgram].title}
                className="w-full h-[250px] object-cover rounded-tr-xl rounded-bl-xl"
              />
            </div>
            <div className="max-sm:hidden flex flex-wrap w-full">
              <div className="w-1/2 pr-2">
                <motion.img
                  key={`sub1-${currentProgram}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={programs[currentProgram].image}
                  alt="Sub image 1"
                  className="w-full h-[250px] object-cover rounded-tl-xl rounded-br-xl"
                />
              </div>
              <div className="w-1/2">
                <motion.img
                  key={`sub2-${currentProgram}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={programs[currentProgram].image}
                  alt="Sub image 2"
                  className="w-full h-[250px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="relative overflow-hidden md:py-6">
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-scroll py-4"
          initial={{ x: 0 }}
          animate={{ x: -currentPage * 100 + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className={`flex-none w-[250px] md:w-1/3 p-1 m-1 aspect-[3/2] ${
                index === currentProgram ? "rounded-xl" : ""
              }`}
              onClick={() => setCurrentProgram(index)}
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
                <div className="absolute top-0 left-0 right-0 p-4 text-white max-w-sm">
                  <p className="text-sm md:text-lg pr-8 max-sm:leading-4">{program.title}</p>
                  <div className="h-[1px] mt-2 w-1/3 bg-white"></div>
                </div>
                <motion.div
                  className={
                    index === currentProgram
                      ? "absolute top-4 right-4 md:w-12 md:h-12 w-6 h-6  bg-[#E67E22] rounded-full flex items-center justify-center"
                      : "absolute top-4 right-4 md:w-12 md:h-12 w-6 h-6 border border-2  rounded-full flex items-center justify-center"
                  }
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    rotate: index === currentProgram ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 text-gray-50" />
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
    {!isMobile &&  <button
        onClick={prevPage}
        className="absolute z-10 left-5 top-3/4 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#e67e22] text-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>}
     {!isMobile && <button
        onClick={nextPage}
        className="absolute right-5 top-3/4 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-[#e67e22] text-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>}
    </div>
  );
}
