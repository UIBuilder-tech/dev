import { useState, useEffect, useRef } from "react";
import { useImagePreviewTrigger } from "../../utils/imagePreviewUtils";
import { UseDataContext } from "../context/DataContext";

interface Member {
  name: string;
  role: string;
  image: string;
}
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function OurTeamAbout() {
  const [TeamMembers, setTeamMembers] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0)
  const animationRef = useRef<number | null>(null);
  const triggerImagePreview = useImagePreviewTrigger();
      const { setData } = UseDataContext();
  useEffect(() => {
    const api2 = async () => {
          setData(v => ({ ...v, isLoading: true }))
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/teams?populate=Image`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            const teams = result.data.map((team) => {
              return {
                name: team.Name,
                role: team.Designation,
                image: AdminPanelUrl.replace("/api", "") + team.Image?.url
              }
            })
            const teamCount = Math.ceil(teams.length / itemsPerPage);
            setTotalPages(teamCount)
            setTeamMembers(teams)
          }
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          setData(v => ({ ...v, isLoading: false }))
        });;
    }
    api2();
  }, [])
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
    return TeamMembers.slice(start, start + itemsPerPage);
  };

  return (
    <>{TeamMembers && <div className="relative w-full max-w-7xl desktop-1900:max-w-[90%] desktop-1500:max-w-7xl desktop-1200:max-w-6xl mx-auto px-4 py-10 md:py-12 bg-white rounded-3xl shadow-lg max-sm:max-h-[37.313rem] md:h-[37.313rem] my-10 max-sm:pb-16 md:my-20 desktop-1900:py-14 desktop-1900:h-[42rem]">
      <h2 className="text-[2.5rem] text-center mb-10 desktop-1200:text-[2rem] desktop-1900:text-5xl desktop-1500:text-[2.25rem]">
        Our Team
      </h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-1 gap-y-6 md:mb-12 md:px-20 transition-opacity duration-1000 desktop-1900:px-32 ${isAnimating ? "opacity-0" : "opacity-100"
          }`}
      >
        {getCurrentPageItems().map((member: Member, index: number) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                onClick={() => triggerImagePreview(member.image)}
                className="md:w-[7.5rem] desktop-1500:w-[7.5rem] desktop-1500:h-[7.5rem] desktop-1200:w-[6.5rem] w-10 h-10 md:h-[7.5rem] desktop-1200:h-[6.5rem] desktop-1900:w-[8rem] desktop-100:h-[8rem] rounded-full object-cover"
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
            className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>}</>
  );
}
