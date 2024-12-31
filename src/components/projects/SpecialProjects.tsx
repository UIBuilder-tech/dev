import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import ActiveArrow from "../../assets/arrowActive.svg";
import DonateActive from "../../assets/projectActiveDonateIcon.svg";
import DonateInctive from "../../assets/projectInactiveDonateIcon.svg";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  images: string[];
}

const ProjectCard = ({
  project,
  isExpanded,
  onExpand,
  from,
}: {
  project: Project;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  from: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  // const isMobile = windowWidth < 768; // md breakpoint
  const range150 = windowWidth >= 1200 && windowWidth <= 1500;
  const range120 = windowWidth > 1500 && windowWidth <= 1900;
  const range100 = windowWidth >= 1900;

  const handleClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest("button") &&
      !(e.target as HTMLElement).closest(".card-expand-area")
    ) {
      return;
    }
    onExpand(project.id);
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-md cursor-pointer"
      initial={false}
      animate={
        isExpanded
          ? {
              width:
                window.innerWidth < 768
                  ? "375px"
                  : range150
                  ? "520px"
                  : range100
                  ? "800px"
                  : "640px",
              height:
                window.innerWidth < 768 ? "auto" : range100 ? "500px" : "450px",
              zIndex: 10,
            }
          : {
              width:
                window.innerWidth < 768
                  ? "180px"
                  : range150
                  ? "280px"
                  : range100
                  ? "375px"
                  : "320px",
              height:
                window.innerWidth < 768 ? "auto" : range100 ? "500px" : "450px",
              zIndex: 0,
            }
      }
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            className={`${
              range150 ? "p-6" : "md:p-8"
            } p-3 h-full flex flex-col`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Expanded state content remains the same */}
            <div className="flex justify-between items-start">
              <div>
                <p className={` text-md ${range150 ? "text-lg" : "text-xl"}`}>
                  {project.title} {project?.location.length > 0 && "at"}
                </p>
                <p className={` text-md ${range150 ? "text-lg" : "text-xl"}`}>
                  {project.location}
                </p>
                <div className="w-12 h-1 bg-orange-500 mt-2 mb-4" />
              </div>
              <div className="flex flex-row cursor-pointer">
                {/* <ArrowDownLeft className="md:w-6 md:h-6 w-4 h-4 text-white" /> */}
                {from === "projects" && (
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/contribute#volunteer");
                    }}
                    src={DonateActive}
                    className="md:w-16 md:h-16 w-8 h-8 "
                  />
                )}

                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    // navigate("/contribute#donate-table");
                  }}
                  src={ActiveArrow}
                  className="md:w-16 md:h-16 w-10 h-10 "
                />
              </div>
            </div>

            <div className="flex md:gap-8 flex-1">
              <div className="flex-1">
                <p
                  className={`text-[#808080] text-sm md:text-md leading-5 ${
                    range150 ? "text-xs" : ""
                  }`}
                >
                  {project.description}
                </p>
                {from === "projects" && (
                  <motion.button
                    className="mt-8 px-3 md:px-6 py-2 md:py-3 bg-orange-500 rounded-full text-white font-medium flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contribute#donation-table")}
                  >
                    Donate{" "}
                    <Heart className="md:w-5 md:h-5 w-3 h-3" fill="white" />
                  </motion.button>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center items-end">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className={`${
                    range150 || range120
                      ? "w-[200px] h-[300px]"
                      : "w-full h-[250px] md:h-64"
                  } object-cover rounded-lg`}
                />
                <div
                  className={`${
                    range150 || range120
                      ? "w-[200px] h-[300px]"
                      : "w-full md:h-64"
                  } flex justify-center gap-2 mt-4`}
                >
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="md:p-6 p-2 h-full flex flex-col justify-between card-expand-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              {/* Collapsed state content remains the same */}
              <div className="flex justify-between items-start">
                <div>
                  <p className={` text-md ${range150 ? "text-lg" : "text-xl"}`}>
                    {project.title}
                  </p>
                  <p
                    className={`${
                      range150 ? "text-lg" : "text-xl"
                    } mb-2 md:mb-4`}
                  >
                    {project.location}
                  </p>
                  <div className="w-12 h-1 bg-orange-500 mb-2 md:mb-4" />
                </div>
                {from === "projects" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/contribute#volunteer");
                    }}
                  >
                    {/* <Heart className="md:w-5 md:h-5 w-3 h-3 text-orange-500" /> */}
                    <img
                      src={DonateInctive}
                      className="md:w-16 md:h-16 w-8 h-8 "
                    />
                  </button>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-left mt-2">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={project.title}
                      className="md:w-12 md:h-12 w-8 h-8 object-cover rounded-full -ml-2 first:ml-0"
                    />
                  ))}
                </div>
              </div>

              <p
                className={`text-[#808080] text-sm md:text-md leading-5 max-sm:line-clamp-5 line-clamp-6 overflow-hidden  ${
                  range150 ? "text-xs" : ""
                }`}
              >
                {project.description}
              </p>
            </div>
            <button className="mt-4 w-full py-2 md:py-3 bg-gray-100 max-sm:text-xs text-gray-600 font-medium flex items-center justify-between px-3 md:px-6 rounded-3xl desktop-1200:text-sm desktop-1200:py-2 desktop-1200:px-4">
              READ MORE
              <Plus className="h-5 w-5 md:h-8 md:w-8  rounded-full p-1 md:p-2 text-secondary bg-[#ffffff] font-bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SpecialProjects = ({
  projects,
  title,
  from = "projects",
}: {
  projects: Project[];
  title: string;
  from?: string;
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedId, setExpandedId] = useState(1); // Set first card as expanded by default
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  const range150 = windowWidth >= 1200 && windowWidth <= 1500;
  // const range120 = windowWidth>1500 && windowWidth <=1900;

  console.log(from);
  const handleExpand = (id: number) => {
    setExpandedId(id === expandedId ? id : id); // Always set to clicked id
  };

  const nextPage = () => {
    const nextPageIndex = (currentPage + 1) % totalPages;
    setCurrentPage(nextPageIndex);
    // Set first card of new page as expanded
    const firstProjectInNewPage = projects[nextPageIndex * itemsPerPage];
    if (firstProjectInNewPage) {
      setExpandedId(firstProjectInNewPage.id);
    }
  };

  const prevPage = () => {
    const prevPageIndex = (currentPage - 1 + totalPages) % totalPages;
    setCurrentPage(prevPageIndex);
    // Set first card of new page as expanded
    const firstProjectInNewPage = projects[prevPageIndex * itemsPerPage];
    if (firstProjectInNewPage) {
      setExpandedId(firstProjectInNewPage.id);
    }
  };

  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-12 desktop-1900:max-w-full">
      <h2
        className={`text-3xl desktop-1200:text-4xl desktop-1900:text-5xl desktop-1900:pl-[160px] desktop-1900:relative mb-4 md:mb-8 max-sm:px-5 ${
          range150 ? "pl-20" : ""
        }`}
      >
        {title}
      </h2>

      <div className="relative">
        <div className="flex items-center justify-center gap-6 mb-8">
          {!isMobile && (
            <button
              onClick={prevPage}
              className={` ${
                range150 ? "p-2" : "p-2 h-10"
              } rounded-full bg-white shadow-lg hover:bg-gray-50  flex-shrink-0`}
            >
              <svg
                width={range150 ? "18" : "24"}
                height={range150 ? "18" : "24"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="flex md:flex-row items-center flex-col gap-4 md:gap-6">
            {isMobile
              ? visibleProjects.map(
                  (project) =>
                    project.id === expandedId && (
                      <ProjectCard
                        from={from}
                        key={project.id}
                        project={project}
                        isExpanded={true}
                        onExpand={handleExpand}
                      />
                    )
                )
              : visibleProjects.map((project) => (
                  <ProjectCard
                    from={from}
                    key={project.id}
                    project={project}
                    isExpanded={project.id === expandedId}
                    onExpand={handleExpand}
                  />
                ))}
            {isMobile && (
              <div className="flex-1 flex flex-row gap-3 md:gap-4">
                {visibleProjects.map(
                  (project) =>
                    project.id !== expandedId && (
                      <ProjectCard
                        from={from}
                        key={project.id}
                        project={project}
                        isExpanded={false}
                        onExpand={handleExpand}
                      />
                    )
                )}
              </div>
            )}
          </div>

          {!isMobile && (
            <button
              onClick={nextPage}
              className={` ${
                range150 ? "p-2" : "p-2 h-10"
              } rounded-full bg-white shadow-lg hover:bg-gray-50  flex-shrink-0`}
            >
              <svg
                width={range150 ? "18" : "24"}
                height={range150 ? "18" : "24"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                  const firstProjectInNewPage = projects[index * itemsPerPage];
                  if (firstProjectInNewPage) {
                    setExpandedId(firstProjectInNewPage.id);
                  }
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentPage ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProjects;
