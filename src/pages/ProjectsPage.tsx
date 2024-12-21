import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Ambassador from "../components/About/Ambassador";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import VolunteerSection from "../components/Home/Volunteer";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import { EducationPrograms } from "../utils/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import GrantsSection from "../components/projects/GrantsSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
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
          programs={EducationPrograms}
        />
      </div>
      <VolunteerSection/>
      <div id="chf-ambassador">
        <Ambassador />
      </div>
      <div id="heritage-preservation">
        <ProjectsCategory
          categoryTitle="Heritage Preservation"
          programs={EducationPrograms}
        />
      </div>
      <div id="special-projects">
        <SpecialProjects />
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
