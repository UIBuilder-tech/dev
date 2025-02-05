"use client";

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Marquee from "../Marquee";
import { Link } from "react-router-dom";

// Sample team data - replace with your actual data

const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const AdminPanelImgUrl = import.meta.env.VITE_ADMIN_PANEL_IMG_API;

export default function TeamSection() {
  const [PageData, setPageData] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `${AdminPanelUrl}/home-page?populate[OurTeam][populate]=*`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result?.data?.OurTeam) {
            setPageData(result.data.OurTeam);
          }
        })
        .catch((error) => console.log("error", error));
    };
    const api2 = async () => {
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`${AdminPanelUrl}/teams?populate=Image`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result?.data) {
            const teams = result.data.map((team) => {
              return {
                name: team.Name,
                role: team.Designation,
                image: AdminPanelImgUrl + team.Image?.url,
              };
            });
            setTeamMembers(teams);
          }
        })
        .catch((error) => console.log("error", error));
    };
    api();
    api2();
  }, []);
  useEffect(() => {
    if (isInView && !isHovered) {
      controls.start({
        y: [0, -50 * teamMembers.length],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, isHovered, controls, teamMembers.length]);

  return (
    <>
      {PageData && (
        <section
          ref={containerRef}
          className="relative  flex w-full flex-row items-center justify-center py-10 max-sm:bg-white"
        >
          <div className="container overflow-hidden mx-auto desktop-1200:mx-12 desktop-1200:px-2 desktop-1900:mx-16 desktop-1900:px-10 px-4 rounded-3xl bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              {/* Left Content */}
              <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-4 md:space-y-6 md:px-10 md:max-w-[50%]  max-sm:pb-4 lg:pr-8">
                <h2 className="text-3xl  md:text-5xl text-[#E67E22] desktop-1200:text-4xl desktop-1900:text-6xl">
                  {PageData.title}
                </h2>
                <p className="text-[#808080] text-lg max-sm:leading-5 max-sm:text-sm desktop-1500:text-md desktop-1200:text-[16px] desktop-1200:leading-5 desktop-1900:text-xl">
                  {PageData.description}
                </p>
                <div className="pt-8">
                  <Link
                    to="/about#our-team"
                    className="rounded-full border-2 border-primary px-4 py-1 md:px-4 md:py-3 text-primary transition-colors hover:bg-[#4299E1] hover:text-white  text-lg max-sm:text-sm desktop-1900:text-2xl"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="relative flex  w-full flex-row gap-2 md:gap-4 items-center justify-center overflow-hidden h-[300px] md:h-[500px] desktop-1900:h-[600px]">
                <Marquee pauseOnHover vertical className="[--duration:10s]">
                  {teamMembers.map((review, index) => (
                    <div
                      key={`${review.name}-${index}`}
                      className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] desktop-1200:w-[200px] desktop-1200:h-[300px] desktop-1900:w-[300px] desktop-1900:h-[400px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
                      style={{
                        backgroundImage: `linear-gradient(180deg, #24242400 50%, #e67e22 100%),url(${review.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <figcaption className="text-lg font-medium text-white">
                          {review.name}
                        </figcaption>
                        <span
                          className=" font-[100] italic text-white text-center"
                          style={{ fontWeight: 100 }}
                        >
                          {review.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </Marquee>

                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:10s]"
                >
                  {teamMembers.map((review, index) => (
                    <div
                      key={`${review.name}-${index}`}
                      className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] desktop-1200:w-[200px] desktop-1200:h-[300px] desktop-1900:w-[300px] desktop-1900:h-[400px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
                      style={{
                        backgroundImage: `linear-gradient(180deg, #24242400 50%, #e67e22 100%), url(${review.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <figcaption className="text-lg font-medium text-white">
                          {review.name}
                        </figcaption>
                        <span className=" font-thin italic text-white text-center">
                          {review.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
