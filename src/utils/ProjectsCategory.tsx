import ChitrapurMathImg from "../assets/Shirali_Math.jpg";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const EducationPrograms: Program[] = [
  {
    id: 1,
    title: "Scholarship Programs for Underprivileged Students",
    description:
      "The Chitrapur Heritage Foundation (CHF) envisions a thriving community that embraces its cultural and spiritual roots while fostering sustainable progress. By supporting personal growth and collective well-being, CHF aims to preserve heritage and wisdom for future generations, inspiring a fairer and better world.",
    image: ChitrapurMathImg,
  },
  {
    id: 2,
    title: "Educational Workshops & Seminars",
    description:
      "Comprehensive workshops and seminars designed to enhance learning through practical experience and expert guidance.",
    image: ChitrapurMathImg,
  },
  {
    id: 3,
    title: "Vocational Training & Skill Development",
    description:
      "Practical skill development programs aimed at creating employment opportunities and fostering entrepreneurship.",
    image: ChitrapurMathImg,
  },
  {
    id: 4,
    title: "Support for Higher Education",
    description:
      "Comprehensive support system for students pursuing higher education, including financial aid and mentorship.",
    image: ChitrapurMathImg,
  },
  {
    id: 5,
    title: "Cultural Education Programs",
    description:
      "Initiatives to preserve and promote cultural heritage through educational programs and activities.",
    image: ChitrapurMathImg,
  },
  {
    id: 6,
    title: "STEM Education Initiatives",
    description:
      "Programs focused on promoting Science, Technology, Engineering, and Mathematics education among students.",
    image: ChitrapurMathImg,
  },
];
