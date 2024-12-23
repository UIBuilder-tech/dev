import { useState } from "react";
import activeDonate from "../../assets/projectActiveDonateIcon.svg";
import inactiveDonate from "../../assets/projectInactiveDonateIcon.svg";
import activeSideArrow from "../../assets/activeSideArrow.svg";
import inactiveSideArrow from "../../assets/inactiveSideArrow.svg";
import vantiga from "../../assets/Shirali_Math.jpg";
import spevc1 from "../../assets/photoGallery/img1.jpg";
import spevc2 from "../../assets/photoGallery/img6.jpg";
import Srivali from "../../assets/Srivali High School.png";
import Parijnanashram from "../../assets/Shirali_Math.jpg";
import Solar from "../../assets/Shirali_Math.jpg";
import SamvitSudha from "../../assets/photoGallery/img13.png";
import SamvitSudha1 from "../../assets/photoGallery/img12.png";
import Kotekar from "../../assets/Exit.jpg";
import Kotekar1 from "../../assets/PPUC Annday (2).jpg";
import Kotekar2 from "../../assets/Assembly.jpg";
import Yatri from "../../assets/Shirali_Math.jpg";

import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  tag: string;
  status: string;
  images?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Vantiga",
    tag: "Heritage",
    status: "Ongoing",
    images: [vantiga],
  },
  {
    id: "2",
    title: "Samvit Sudha",
    tag: "Women Empowerment",
    status: "Ongoing",
    images: [SamvitSudha,SamvitSudha1],
  },
  {
    id: "3",
    title: "SPEVC School",
    tag: "Education",
    status: "Ongoing",
    images: [spevc1, spevc2],
  },
  {
    id: "4",
    title: "Parijanashram Vidyalaya",
    tag: "Education",
    status: "Ongoing",
    images: [Parijnanashram],
  },
  {
    id: "5",
    title: "Yatri Nivas Varanasi",
    tag: "Heritage",
    status: "Ongoing",
    images: [Yatri],
  },
  {
    id: "9",
    title: "Kotekar Project",
    tag: "Education",
    status: "Completed",
    images: [Kotekar,Kotekar1],
  },
  {
    id: "11",
    title: "Grid Connected Solar Project",
    tag: "Education",
    status: "Completed",
    images: [Solar],
  },
  {
    id: "8",
    title: "Sponsor-A-Student (Srivali School)",
    tag: "Education",
    status: "Ongoing",
    images: [Srivali],
  },
  {
    id: "7",
    title: "Meditation Centre at Tiruvannamalai",
    tag: "Heritage",
    status: "Planned",
    images: [
      "https://images.unsplash.com/photo-1547354225-3e5a5f001d24?w=500&auto=format&fit=crop&q=60",
    ],
  },
];

interface Props {
  title: string;
}

export default function FeaturedProjects({ title }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="py-8 px-6 md:p-8 md:mx-14">
      <h2 className="mb-8 text-3xl md:text-4xl font-display text-gray-900">
        {title}
      </h2>
      <div className="max-h-[500px] overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-500 text-xs md:text-sm text-gray-600">
              <th className="pb-2 md:pb-4 text-left font-normal">Title</th>
              <th className="pb-2 md:pb-4 text-left font-normal">Tags</th>
              <th className="pb-2 md:pb-4 text-left font-normal">Status</th>
              <th className="pb-2 md:pb-4 w-58 md:w-72"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const isHovered = project.id === hoveredId;

              return (
                <tr
                  key={project.id}
                  className="border-b border-gray-500 transition-colors duration-200"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <td className="md:py-7 py-5">
                    <span
                      className={`text-xs md:text-lg font-medium transition-colors duration-200 ${
                        isHovered ? "text-secondary" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`inline-flex rounded-full px-2 md:px-4 py-1 text-xs md:text-sm transition-all duration-200 break-words hyphens-auto max-w-[80%] ${
                        isHovered
                          ? "bg-secondary text-white border border-secondary"
                          : "border border-gray-500 text-gray-600"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`text-xs md:text-lg transition-colors duration-200 ${
                        isHovered ? "text-secondary" : "text-gray-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="relative">
                    <div className="flex items-center justify-center md:justify-end gap-1 max-sm:ml-2 max-sm:mx-2 md:mx-4">
                      {isHovered && project.images && (
                        <div className="absolute max-sm:hidden right-40 flex items-center">
                          {project.images.map((image, index) => (
                            <div
                              key={index}
                              className="absolute"
                              style={{
                                right: `${index * 60}px`,
                                transform:
                                  index === 1
                                    ? "rotate(6deg)"
                                    : "rotate(-3deg)",
                                zIndex: project.images!.length - index,
                              }}
                            >
                              <div className="h-20 w-28 overflow-hidden rounded-lg border-2 border-white shadow-md">
                                <img
                                  src={image}
                                  alt={`${project.title} image ${index + 1}`}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <Link to="/projects">
                        {isHovered ? (
                          <img src={activeSideArrow} className="w-14 h-14" />
                        ) : (
                          <img src={inactiveSideArrow} className="w-14 h-14" />
                        )}
                      </Link>
                      <Link to="/contribute#donation-table">
                        {isHovered ? (
                          <img src={activeDonate} className="w-14 h-14" />
                        ) : (
                          <img src={inactiveDonate} className="w-14 h-14" />
                        )}
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
