import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Link, useLocation } from "react-router-dom";
import activeArrow from "../../assets/arrowActive.svg";
import inactiveArrrow from "../../assets/arrowInactive.svg";
import ChitrapurMathImg from "../../assets/Shirali_Math.webp";
import { useImagePreviewTrigger } from "../../utils/imagePreviewUtils";
import DataProcess from "../../utils/dataProcess";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string | undefined;
  linkTo?: string;
}

interface ProjectsCategoryProps {
  categoryTitle: string;
}
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function ProjectsCategory({ categoryTitle, }: ProjectsCategoryProps) {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState<Program[]>([]);
  const carouselRef = useRef(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  const location = useLocation();
  const [programs, setPrograms] = useState([])
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/all-projects?populate=*&filters[category][$eq]=${categoryTitle}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPrograms(DataProcess(result.data))
          }
        })
        .catch(error => console.log('error', error));
    }
    api();
  }, [categoryTitle])
  const itemsPerPage = 3; // Changed to 3 items per page
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  const triggerImagePreview = useImagePreviewTrigger();

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

  function getVideoId(url: string) {
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch(?:\/|.+?)?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]{11}).*/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11}).*/,
    ];

    for (const pattern of patterns) {
      const match = url?.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  }

  return (
    <>
      {programs.length > 0 &&
        <div className="relative px-5 md:p-8 md:mx-14 py-6 md:py-12 ">
          <h1 className="text-3xl md:text-5xl mb-4 md:mb-8 desktop-1200:text-3xl desktop-1500:text-4xl  desktop-1900:text-5xl ">
            {categoryTitle}
          </h1>
          {/* {JSON.stringify(programs)} */}
          {/* Featured Program */}
          <div className="bg-white rounded-3xl p-2 md:p-10 md:pl-14  desktop-1900:pl-14 desktop-1500:p-6 desktop-1200:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] md:gap-16  desktop-1900:gap-5">
              <div className="md:space-y-6 space-y-4 flex flex-col justify-center px-4 md:px-10">
                <p className="text-xl max-sm:pt-2 md:text-3xl font-semibold md:max-w-[50%] desktop-1500:text-2xl desktop-1200:text-xl  desktop-1900:text-3xl">
                  {programs[currentProgram].title}
                </p>
                <div className="underline-gradient rounded-xl" />
                <p className="text-[#808080] text-sm md:text-xl md:leading-6 md:max-w-[90%] desktop-1500:text-[18px] desktop-1200:text-[16px]  desktop-1900:max-w-[80%]">
                  {programs[currentProgram].description}
                </p>
                <div className="flex gap-4 md:pt-4">
                  {location?.pathname.includes("project") ? (
                    <>
                      {
                        programs[currentProgram].Button1 && <Link
                          to="/contribute#volunteer"
                          className="md:px-6 px-3 py-2 md:py-2.5 border-2 border-blue-600 text-blue-600 rounded-full text-sm md:text-xl font-medium hover:bg-blue-700 hover:text-white transition-colors flex items-center desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]"
                        >
                          {programs[currentProgram].Button1}
                        </Link>
                      }

                      {programs[currentProgram].Button2 && <Link
                        to={`/contribute#donation-table#${programs[currentProgram]?.linkTo}`}
                        className="px-3 md:px-6 md:py-2.5 bg-[#e67e22] text-white rounded-full text-sm md:text-xl font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]"
                      >
                        {programs[currentProgram].Button2} <span className="text-white text-lg">❤</span>
                      </Link>}

                    </>
                  ) : (
                    <>
                      {programs[currentProgram]?.url && (
                        <Link
                          to={
                            programs[currentProgram]?.url
                              ? programs[currentProgram]?.url
                              : "/contribute#volunteer"
                          }
                          className="md:px-6 px-3 py-2 md:py-2.5 border-2 border-blue-600 text-blue-600 rounded-full text-sm md:text-xl font-medium hover:bg-blue-700 transition-colors desktop-1200:px-4 desktop-1200:py-2 desktop-1500:text-[18px] desktop-1200:text-[16px]  desktop-1900:text-[20px]  desktop-1900:py-3  desktop-1900:px-5 hover:text-white"
                        >
                          Learn More
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
              {programs[currentProgram]?.url?.length &&
                programs[currentProgram]?.url !== "" ? (
                <iframe
                  id={`post_image_${programs[currentProgram]?.title}`}
                  // onLoad={(e) =>
                  //   programs[currentProgram]?.url
                  //     ?.length === 1
                  //     ? handleIframeLoad(
                  //         e,
                  //         post?.postId
                  //       )
                  //     : {}
                  // }
                  title="youtube"
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${getVideoId(
                    programs[currentProgram]?.url
                  )}?autoplay=1`}
                  style={{
                    backgroundColor: "black",
                  }}
                  srcDoc={`<style>
* {
padding: 0;
margin: 0;
overflow: hidden;
}

body, html {
height: 100%;
}

img, svg {
position: absolute;
width: 100%;
top: 0;
bottom: 0;
margin: auto;
}

svg {
filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
transition: all 250ms ease-in-out;
}

body:hover svg {
filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
transform: scale(1.2);
}
</style>
<a href='https://www.youtube.com/embed/${getVideoId(
                    programs[currentProgram]?.url
                  )}?autoplay=1'>
<img src='https://img.youtube.com/vi/${getVideoId(
                    programs[currentProgram]?.url
                  )}/hqdefault.jpg' alt='Coffee Recipe Javascript Project'><div class='play-button'>
<button class="ytp-large-play-button ytp-button ytp-large-play-button-red-bg" aria-label="Play" title="Play"><svg version="1.1"  width='50' height='50' viewBox='0 0 60 50'><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></button>
</div> </a>
`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                  // style={{height:"350px", width:"600px"}}
                  className={
                    "w-full desktop-1200:w-[450px] desktop-1500:w-[500px]  desktop-1900:w-[600px] h-[250px] desktop-1200:h-[370px] desktop-1500:h-[470px] desktop-1900:h-[500px] object-cover rounded-tr-3xl rounded-bl-3xl my-4"
                  }
                />
              ) : (
                <div className="flex flex-wrap gap-6 p-4">
                  <div className="w-full desktop-1200:w-[450px] desktop-1500:w-[500px]  desktop-1900:w-[600px]">
                    <motion.img
                      key={`main-${currentProgram}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={
                        programs[currentProgram]?.image
                          ? typeof programs[currentProgram]?.image === "string"
                            ? programs[currentProgram]?.image
                            : programs[currentProgram]?.image[0]
                          : ChitrapurMathImg
                      }
                      alt={programs[currentProgram].title}
                      className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px] object-cover rounded-tr-xl rounded-bl-xl"
                    />
                  </div>
                  <div className="max-sm:hidden flex flex-wrap w-full">
                    {
                      programs[currentProgram]?.image.slice(1, programs[currentProgram].image.length).map(item => (
                        <div className="w-1/2 pr-4  desktop-1200:w-[225px] desktop-1500:w-[250px]  desktop-1900:w-[300px]">
                          <motion.img
                            key={`sub1-${currentProgram}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            src={
                              programs[currentProgram]?.image
                                ? typeof programs[currentProgram]?.image === "string"
                                  ? programs[currentProgram]?.image
                                  : item
                                : ChitrapurMathImg
                            }
                            alt="Sub image 1"
                            className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px] object-cover rounded-tl-xl rounded-br-xl"
                          />
                        </div>
                      ))
                    }

                    {/* <div className="w-1/2 desktop-1200:w-[225px] desktop-1500:w-[250px]  desktop-1900:w-[300px]">
                  <motion.img
                    key={`sub2-${currentProgram}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={
                      programs[currentProgram]?.image
                        ? typeof programs[currentProgram]?.image === "string"
                          ? programs[currentProgram]?.image
                          : programs[currentProgram]?.image[2]
                        : ChitrapurMathImg
                    }
                    alt="Sub image 2"
                    className="w-full h-[250px] desktop-1200:h-[175px] desktop-1500:h-[225px]  object-cover rounded-tl-xl rounded-br-xl"
                    onClick={() =>
                      triggerImagePreview(programs[currentProgram]?.image
                        ? typeof programs[currentProgram]?.image === "string"
                          ? programs[currentProgram]?.image
                          : programs[currentProgram]?.image[2]
                        : ChitrapurMathImg)
                    }
                  />
                </div> */}
                  </div>
                </div>
              )}
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
                  className={`flex-none w-[250px] md:w-[500px]  desktop-1200:w-[350px] desktop-1500:w-[425px] p-1   desktop-1900:w-[550px] desktop-1500:m-3 m-2 aspect-[3/2] ${index + currentPage * itemsPerPage === currentProgram
                    ? "rounded-xl"
                    : ""
                    }`}
                  onClick={() =>
                    setCurrentProgram(index + currentPage * itemsPerPage)
                  }
                >
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <img
                      src={
                        program?.image?.length
                          ? typeof program.image === "string"
                            ? program?.image
                            : program?.image[0]
                          : `https://img.youtube.com/vi/${getVideoId(
                            program?.url
                          )}/hqdefault.jpg`
                      }
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
                    <div className="absolute top-0 left-0 right-0 p-4 text-white max-w-sm">
                      <p className="text-sm md:text-2xl desktop-1500:text-xl desktop-1200:text-lg  desktop-1900:text-2xl pr-8 max-sm:leading-4">
                        {program.title}
                      </p>
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
                      {index + currentPage * itemsPerPage === currentProgram ? (
                        <img
                          src={activeArrow}
                          className="md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12 desktop-1500:w-16 desktop-1500:h-16 desktop-1900:w-20 desktop-1900:h-20 w-8 h-8 "
                        />
                      ) : (
                        <img
                          src={inactiveArrrow}
                          className="md:w-20 md:h-20 desktop-1200:w-12 desktop-1200:h-12 desktop-1500:w-16 desktop-1500:h-16 desktop-1900:w-20 desktop-1900:h-20 w-8 h-8 "
                        />
                      )}
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
                  className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? "bg-[#e67e22]" : "bg-gray-300"
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
      }
    </>

  );
}
