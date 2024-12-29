import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Ambassador from "../components/About/Ambassador";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import VolunteerSection from "../components/Home/Volunteer";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import {
  EducationPrograms,
  HeritagePrograms,
  WomenEmpowermentPrograms,
} from "../utils/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import GrantsSection from "../components/projects/GrantsSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";
import Vantiga from "../components/Contribute/Vantiga";
import HeroImg from "../assets/photoGallery/img11.png";
import solar from "../assets/solar1.jpg";
import solar1 from "../assets/solar2.jpg";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  images: string[];
}
export default function ProjectsPage() {
  const location = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Add a small delay to ensure the content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]); // Only run when hash changes

  const projects: Project[] = [
    {
      id: 1,
      title: "Yatri Nivas",
      location: "Raj Ghat, Varanasi",
      description:
        "Chitrapur Saraswat community at the proposed center for yoga, meditation, and yatri nivas in Varanasi on the banks of River Ganga at Raja Ghat.",
      images: [
        "https://chitrapurmath.net/documents/upload/1588069798C_(2).png",
        "https://chitrapurmath.net/documents/upload/1588074364A_(1).png",
      ],
    },
    {
      id: 2,
      title: "Solar plant",
      location: "Karla",
      description:
        "The Solar Plant in Karla project involves installing a 16kW grid-tied solar system at the Parijnan PU College and Parijnan Vidyalaya in Kotekar to reduce reliance on non-renewable energy, lower operational costs, and promote sustainability.",
      images: [solar, solar1],
    },
    {
      id: 3,
      title: "Pandemic Relief",
      location: "",
      description:
        "CHF’s pandemic relief efforts included funding the salaries of school teachers of the 9 SCM-affiliated schools supported by CHF.",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Empowering Progress through Impactful Projects"
        desc="Explore our transformative initiatives that preserve heritage, empower communities, and promote education. From sustainable development to women's empowerment, our projects reflect a commitment to creating a brighter future rooted in tradition and progress."
        img={HeroImg}
        from="projects"
      />
      <div id="vantiga">
        <Vantiga />
      </div>
      {/* <div id="our-projects">
        <FeaturedProjects title="Our Projects" />
      </div> */}
      <div id="heritage-preservation">
        <ProjectsCategory
          categoryTitle="Heritage Preservation"
          programs={HeritagePrograms}
        />
      </div>
      <VolunteerSection />

      <div id="education">
        <ProjectsCategory
          categoryTitle="Education"
          programs={EducationPrograms}
        />
      </div>
      <div id="chf-ambassador">
        <Ambassador />
      </div>
      <div id="women-empowerment">
        <ProjectsCategory
          categoryTitle="Women Empowerment"
          programs={WomenEmpowermentPrograms}
        />
      </div>

      <div id="special-projects">
        <SpecialProjects title="Special Projects" projects={projects} />
      </div>
      <div id="chf-grants" className="bg-white">
        <GrantsSection />
      </div>
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
