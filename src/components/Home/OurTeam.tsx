"use client";

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Marquee from "../Marquee";
import { boardMembers } from "../../utils/boardMembers.jsx";
import { Link } from "react-router-dom";

// Sample team data - replace with your actual data
const teamMembers = [
  {
    name: "Mamta Savkur",
    role: "Board Member",
    image: "../../assets/boardMembers/Ashwin Bijur.jpg",
  },
  {
    name: "Sudhir Golikeri",
    role: "Board Member",
    image: "/team/sudhir-golikeri.jpg",
  },
  {
    name: "Neena Karnad",
    role: "Board Member",
    image: "/team/neena-karnad.jpg",
  },
  // Add more team members as needed
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "../../assets/boardMembers/Ashwin Bijur.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = boardMembers.slice(0, boardMembers.length / 6);
const secondRow = boardMembers.slice(boardMembers.length / 6);

export default function TeamSection() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

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
  }, [isInView, isHovered, controls]);

  return (
    <section
      ref={containerRef}
      className="relative  flex w-full flex-row items-center justify-center py-10 max-sm:bg-white"
    >
      <div className="container overflow-hidden mx-auto px-4 rounded-3xl bg-white ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-4 md:space-y-6 md:px-10 md:max-w-[50%] max-sm:pb-4 lg:pr-8">
            <h2 className="text-3xl  md:text-4xl font-bold text-[#E67E22]">
              Our Team
            </h2>
            <p className="text-gray-600 max-sm:leading-5 max-sm:text-sm">
              CHF Board represents the collective aspirations of the Chitrapur
              Saraswat community all across the US. Our office bearers carry on
              the activities of CHF within the US and support initiatives of
              Shri Chitrapur Math (SCM) and US- based activities of the CSB
              community.
            </p>
            <div>
              <Link to='/contribute#volunteer' className="rounded-full border-2 border-[#4299E1] px-4 py-1 md:px-6 md:py-2 text-[#4299E1] transition-colors hover:bg-[#4299E1] hover:text-white max-sm:text-sm">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative flex  w-full flex-row gap-2 md:gap-4 items-center justify-center overflow-hidden h-[300px] md:h-[500px]">
            <Marquee pauseOnHover vertical className="[--duration:10s]">
              {boardMembers.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
                  style={{
                    backgroundImage: `linear-gradient(180deg, #24242400 50%, #e67e22 100%),url(${review.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <figcaption className="text-lg font-medium text-white">
                      {review.name}
                    </figcaption>
                    <span
                      className=" font-[100] italic text-white"
                      style={{ fontWeight: 100 }}
                    >
                      {review.role}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover vertical className="[--duration:10s]">
              {boardMembers.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
                  style={{
                    backgroundImage: `linear-gradient(180deg, #24242400 50%, #e67e22 100%), url(${review.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <figcaption className="text-lg font-medium text-white">
                      {review.name}
                    </figcaption>
                    <span className=" font-thin italic text-white">
                      {review.role}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>

            {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
