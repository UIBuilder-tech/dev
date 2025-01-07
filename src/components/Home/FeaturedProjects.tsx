import { useEffect, useState } from "react";
import activeDonate from "../../assets/projectActiveDonateIcon.svg";
import inactiveDonate from "../../assets/projectInactiveDonateIcon.svg";
import activeSideArrow from "../../assets/activeSideArrow.svg";
import inactiveSideArrow from "../../assets/inactiveSideArrow.svg";
import vantiga from "../../assets/Shirali_Math.webp";
import spevc1 from "../../assets/photoGallery/img1.webp";
import spevc2 from "../../assets/photoGallery/img6.webp";
import Srivali from "../../assets/Srivali High School.webp";
import Parijnanashram from "../../assets/parijnan vidyalaya.webp";
import Solar from "../../assets/solar.webp";
import SamvitSudha from "../../assets/photoGallery/img13.webp";
import SamvitSudha1 from "../../assets/photoGallery/img12.webp";
import Kotekar from "../../assets/Exit.webp";
import Kotekar1 from "../../assets/PPUC Annday (2).webp";
import Yatri from "../../assets/Shirali_Math.webp";
import cows from "../../assets/Cows in Rath Gadde 2.webp";

import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  tag: string;
  status: string;
  images?: string[];
  linkTo?: string;
  donationLink?:string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Vantiga",
    tag: "Heritage",
    status: "Ongoing",
    images: [vantiga],
    linkTo: "heritage-preservation",
    donationLink: "vtg"
  },
  {
    id: "2",
    title: "Samvit Sudha",
    tag: "Women Empowerment",
    status: "Ongoing",
    images: [SamvitSudha, SamvitSudha1],
    linkTo: "women-empowerment",
    donationLink: "ss"
  },
  {
    id: "3",
    title: "SPEVC School",
    tag: "Education",
    status: "Ongoing",
    images: [spevc1, spevc2],
    linkTo: "education",
    donationLink:"education"
  },
  {
    id: "4",
    title: "Parijanashram Vidyalaya",
    tag: "Education",
    status: "Ongoing",
    images: [Parijnanashram],
    linkTo: "education",
    donationLink:"education"
  },
  {
    id: "5",
    title: "Yatri Nivas Varanasi",
    tag: "Heritage",
    status: "Ongoing",
    images: [Yatri],
    linkTo: "special-projects",
    donationLink:"heritage"
  },
  {
    id: "6",
    title: "Goshala Maintenance",
    tag: "Heritage",
    status: "Ongoing",
    images: [cows],
    linkTo: "heritage-preservation",
    donationLink:"gm"
  },
  {
    id: "9",
    title: "Kotekar Project",
    tag: "Education",
    status: "Completed",
    images: [Kotekar, Kotekar1],
    linkTo: "education",
    donationLink:"education"
  },
  {
    id: "11",
    title: "Grid Connected Solar Project",
    tag: "Special Project",
    status: "Completed",
    images: [Solar],
    linkTo: "special-projects",
    donationLink:"education"
  },
  {
    id: "8",
    title: "Sponsor-A-Student (Srivali School)",
    tag: "Education",
    status: "Ongoing",
    images: [Srivali],
    linkTo: "education",
    donationLink:"education"
  },
  // {
  //   id: "7",
  //   title: "Meditation Centre at Tiruvannamalai",
  //   tag: "Heritage",
  //   status: "Planned",
  //   images: [
  //     "https://images.unsplash.com/photo-1547354225-3e5a5f001d24?w=500&auto=format&fit=crop&q=60",
  //   ],
  //   linkTo: "heritage-preservation",
  // },
];

interface Props {
  title: string;
}
// 

const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function FeaturedProjects({ title }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/featured-projects?populate=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log("🚀 ~ api ~ result:", result)

          if (result?.data) {
            const newData = result.data.map(v => {
              const path =  v.Image.map(a=>AdminPanelUrl.replace("/api", "") +a.url)
              return {
                id: v.id,
                title: v.title,
                tag: v.tag,
                status: v.statusType,
                images: path,
                linkTo: v.tag.toLowerCase().replace(" ", "_"),
              }
            })
            setProjects(newData)
          }
        })
        .catch(error => console.log('error', error));
    }

    api();
  }, [])
  return (
    <div className="py-8 px-4 md:px-6 md:p-8 md:mx-14 desktop-1900:px-14 desktop-1900:py-14">
      <h2 className="mb-8 text-3xl md:text-4xl font-display text-gray-900 desktop-1900:text-5xl desktop-1900:pb-5">
        {title}
      </h2>
      <div className="max-h-[500px] overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-500 text-xs md:text-sm desktop-1900:text-lg text-gray-600">
              <th className="pb-2 md:pb-4 text-left font-normal">Title</th>
              <th className="pb-2 md:pb-4 text-left font-normal">Tags</th>
              <th className="pb-2 md:pb-4 text-left font-normal">Status</th>
              <th className="pb-2 md:pb-4 w-58 md:w-72"></th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.map((project) => {
              const isHovered = project.id === hoveredId;

              return (
                <tr
                  key={project.id}
                  className="border-b border-gray-500 transition-colors duration-200"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <td className="md:py-7 py-5 desktop-1900:w-[40%]">
                    <Link
                      to={`/projects#${project?.linkTo}`}
                      className={`text-xs md:text-lg desktop-1900:text-2xl font-medium transition-colors duration-200 ${
                        isHovered ? "text-secondary" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/projects#${project?.linkTo}`}
                      className={`inline-flex rounded-full px-2 md:px-4 py-1 text-xs md:text-sm transition-all duration-200 break-words hyphens-auto max-w-[80%] desktop-1900:text-lg ${
                        isHovered
                          ? "bg-secondary text-white border border-secondary"
                          : "border border-gray-500 text-gray-600"
                      }`}
                    >
                      {project.tag}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/projects#${project?.linkTo}`}
                      className={`text-xs md:text-lg transition-colors desktop-1900:text-xl duration-200 ${
                        isHovered ? "text-secondary" : "text-gray-600"
                      }`}
                    >
                      {project.status}
                    </Link>
                  </td>
                  <td className="relative">
                    <div className="flex items-center justify-center md:justify-end md:gap-1 max-sm md:mx-4">
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
                      <Link to={`/projects#${project?.linkTo}`}>
                        {isHovered ? (
                          <img
                            src={activeSideArrow}
                            className="md:w-14 md:h-14 w-20 h-20"
                          />
                        ) : (
                          <img
                            src={inactiveSideArrow}
                            className="md:w-14 md:h-14 w-20 h-20"
                          />
                        )}
                      </Link>
                      <Link to={`/contribute#donation-table#${project?.donationLink}`}>
                        {isHovered ? (
                          <img
                            src={activeDonate}
                            className="md:w-14 md:h-14 w-16 h-16"
                          />
                        ) : (
                          <img
                            src={inactiveDonate}
                            className="md:w-14 md:h-14 w-20 h-20"
                          />
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
