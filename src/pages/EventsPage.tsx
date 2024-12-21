import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import { EducationPrograms } from "../utils/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EventsPage() {
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
      <div id="featured-news">
        <SpecialProjects />
      </div>
      <div id="festivals">
        <ProjectsCategory
          categoryTitle="Festivals"
          programs={EducationPrograms}
        />
      </div>
      <div id="get-togethers">
        <ProjectsCategory
          categoryTitle="Get Togethers"
          programs={EducationPrograms}
        />
      </div>
      <div id="children-activities">
        <ProjectsCategory
          categoryTitle="Children & Youth Activities"
          programs={EducationPrograms}
        />
      </div>
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
