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
      const hash = location.hash.replace('#', '');
      if (hash) {
        // Add a small delay to ensure the content is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 2,
      title: "Meditation Centre",
      location: "Tiruvannamalai",
      description:
        "At the foothills of Arunachala Mountain, considered Kailas of the South, Shri Chitrapur Math Charitable Trust has....",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 3,
      title: "Meditation Centre",
      location: "Tiruvannamalai",
      description:
        "At the foothills of Arunachala Mountain, considered Kailas of the South, Shri Chitrapur Math Charitable Trust has....",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 4,
      title: "Meditation Centre",
      location: "Tiruvannamalai",
      description:
        "At the foothills of Arunachala Mountain, considered Kailas of the South, Shri Chitrapur Math Charitable Trust has....",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 5,
      title: "Meditation Centre",
      location: "Tiruvannamalai",
      description:
        "At the foothills of Arunachala Mountain, considered Kailas of the South, Shri Chitrapur Math Charitable Trust has....",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 6,
      title: "Meditation Centre",
      location: "Tiruvannamalai",
      description:
        "At the foothills of Arunachala Mountain, considered Kailas of the South, Shri Chitrapur Math Charitable Trust has....",
      images: [ChitrapurMathImg, ChitrapurMathImg, ChitrapurMathImg],
    },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Empowering Progress through Impactful Projects"
        desc="Explore our transformative initiatives that preserve heritage, empower communities, and promote education. From sustainable development to women's empowerment, our projects reflect a commitment to creating a brighter future rooted in tradition and progress.
"
        img={ChitrapurMathImg}
      />
      <div id="our-projects">
        <FeaturedProjects title="Our Projects" />
      </div>
      <div id="education">
        <ProjectsCategory
          categoryTitle="Education"
          programs={EducationPrograms}
        />
      </div>
      <div id="women-empowerment">
        <ProjectsCategory
          categoryTitle="Women Empowerment"
          programs={WomenEmpowermentPrograms}
        />
      </div>
      <VolunteerSection/>
      <div id="chf-ambassador">
        <Ambassador />
      </div>
      <div id="heritage-preservation">
        <ProjectsCategory
          categoryTitle="Heritage Preservation"
          programs={HeritagePrograms}
        />
      </div>
      <div id="special-projects">
      <SpecialProjects title="Special Projects" projects={projects} />
      </div>
      <div id="chf-grants">
        <GrantsSection />
      </div>
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
