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
      <div className="container overflow-hidden mx-auto desktop-1200:mx-12 desktop-1200:px-2 desktop-1900:mx-16 desktop-1900:px-10 px-4 rounded-3xl bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-4 md:space-y-6 md:px-10 md:max-w-[50%]  max-sm:pb-4 lg:pr-8">
            <h2 className="text-3xl  md:text-5xl text-[#E67E22] desktop-1200:text-4xl desktop-1900:text-6xl">
              Our Team
            </h2>
            <p className="text-[#808080] text-lg max-sm:leading-5 max-sm:text-sm desktop-1500:text-md desktop-1200:text-[16px] desktop-1200:leading-5 desktop-1900:text-xl">
              CHF Board represents the collective aspirations of the Chitrapur
              Saraswat community all across the US. Our office bearers carry on
              the activities of CHF within the US and support initiatives of
              Shri Chitrapur Math (SCM) and US- based activities of the CSB
              community.
            </p>
            <div className="pt-8">
              <Link to='/about#our-team' className="rounded-full border-2 border-primary px-4 py-1 md:px-4 md:py-3 text-primary transition-colors hover:bg-[#4299E1] hover:text-white  text-lg max-sm:text-sm desktop-1900:text-2xl">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative flex  w-full flex-row gap-2 md:gap-4 items-center justify-center overflow-hidden h-[300px] md:h-[500px] desktop-1900:h-[600px]">
            <Marquee pauseOnHover vertical className="[--duration:10s]">
              {boardMembers.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] desktop-1200:w-[200px] desktop-1200:h-[300px] desktop-1900:w-[300px] desktop-1900:h-[400px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
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
                      className=" font-[100] italic text-white text-center"
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
                  className="relative h-[250px] w-[150px] md:h-[350px] md:w-[250px] desktop-1200:w-[200px] desktop-1200:h-[300px] desktop-1900:w-[300px] desktop-1900:h-[400px] cursor-pointer overflow-hidden rounded-[20px] md:rounded-[70px] p-4 flex flex-col justify-end"
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
                    <span className=" font-thin italic text-white text-center">
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
