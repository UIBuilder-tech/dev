import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowDownLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";

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
}: {
  project: Project;
  isExpanded: boolean;
  onExpand: (id: number) => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

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
              width: window.innerWidth < 768 ? "375px" : "640px",
              height: window.innerWidth < 768 ? "auto" : "450px",
              zIndex: 10,
            }
          : {
              width: window.innerWidth < 768 ? "180px" : "320px",
              height: window.innerWidth < 768 ? "auto" : "450px",
              zIndex: 0,
            }
      }
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            className="md:p-8 p-3 h-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Expanded state content remains the same */}
            <div className="flex justify-between items-start">
              <div>
                <p className="md:text-xl text-md">{project.title} at</p>
                <p className="md:text-xl text-md ">{project.location}</p>
                <div className="w-12 h-1 bg-orange-500 mt-2 mb-4" />
              </div>
              <div className="bg-orange-500 rounded-full p-2 md:p-3 cursor-pointer">
                <ArrowDownLeft className="md:w-6 md:h-6 w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex md:gap-8 flex-1">
              <div className="flex-1">
                <p className="text-[#808080] text-sm md:text-md leading-5">
                  {project.description}
                </p>
                <motion.button
                  className="mt-8 px-3 md:px-6 py-2 md:py-3 bg-orange-500 rounded-full text-white font-medium flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate{" "}
                  <Heart className="md:w-5 md:h-5 w-3 h-3" fill="white" />
                </motion.button>
              </div>
              <div className="flex-1">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-full md:h-64 object-cover rounded-lg"
                />
                <div className="flex justify-center gap-2 mt-4">
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
            className="md:p-6 p-2 h-full flex flex-col card-expand-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Collapsed state content remains the same */}
            <div className="flex justify-between items-start">
              <div>
                <p className="md:text-xl text-md">{project.title}</p>
                <p className="md:text-xl text-md mb-2 md:mb-4">
                  {project.location}
                </p>
                <div className="w-12 h-1 bg-orange-500 mb-2 md:mb-4" />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/contribute");
                }}
                className="p-1 md:p-2 rounded-full border-2 border-gray-200"
              >
                <Heart className="md:w-5 md:h-5 w-3 h-3 text-orange-500" />
              </button>
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

            <p className="text-[#808080] flex-1 text-sm md:text-md leading-5">
              {project.description}
            </p>

            <button className="mt-4 w-full py-2 md:py-3 bg-gray-100 max-sm:text-xs text-gray-600 font-medium flex items-center justify-between px-3 md:px-6 rounded-3xl">
              READ MORE
              <Plus className="h-5 w-5 md:h-8 md:w-8 border border-secondary rounded-full p-1 md:p-2 text-secondary bg-[#FBF3E8] font-bold" />
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
}: {
  projects: Project[];
  title: string;
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedId, setExpandedId] = useState(1); // Set first card as expanded by default
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

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
    <div className="w-full max-w-7xl mx-auto py-12">
      <h2 className="text-3xl mb-4 md:mb-8 max-sm:px-5">{title}</h2>

      <div className="relative">
        <div className="flex items-center justify-center gap-6 mb-8">
          {!isMobile && (
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white shadow-lg h-10 hover:bg-gray-50 flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
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
                        key={project.id}
                        project={project}
                        isExpanded={true}
                        onExpand={handleExpand}
                      />
                    )
                )
              : visibleProjects.map((project) => (
                  <ProjectCard
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
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 h-10 flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
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
