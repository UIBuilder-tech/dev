import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
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
import Vantiga from "../components/Contribute/Vantiga";
import HeroImg from "../assets/photoGallery/img11.webp";
import solar from "../assets/solar1.jpg";
import solar1 from "../assets/solar2.jpg";
import SEO from "../components/seo/Seo";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  images: string[];
  linkTo?: string;
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
      linkTo: "heritage"
    },
    {
      id: 2,
      title: "Solar plant",
      location: "Karla",
      description:
        "The Solar Plant in Karla project involves installing a 16kW grid-tied solar system at the Parijnan PU College and Parijnan Vidyalaya in Kotekar to reduce reliance on non-renewable energy, lower operational costs, and promote sustainability.",
      images: [solar, solar1],
      linkTo: "education"
    },
    {
      id: 3,
      title: "Pandemic Relief",
      location: "",
      description:
        "CHF’s pandemic relief efforts included funding the salaries of school teachers of the 9 SCM-affiliated schools supported by CHF.",
      images: [
        "https://images.unsplash.com/photo-1584466990297-7e8ab67a5eb0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585282284319-e38fb6c29dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvdmlkfGVufDB8fDB8fHwy",
      ],
      linkTo: "education"
    },
  ];

  return (
    <>
      <SEO
        title="Projects"
        description="Explore our transformative initiatives that preserve heritage, empower communities, and promote education. From sustainable development to women's empowerment, our projects reflect a commitment to creating a brighter future rooted in tradition and progress."
      />
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
    </>
  );
}
