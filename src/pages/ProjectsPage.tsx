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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <FeaturedProjects title="Our Projects" />
      <ProjectsCategory
        categoryTitle="Education"
        programs={EducationPrograms}
      />
      <VolunteerSection />
      <ProjectsCategory
        categoryTitle="Women Empowerment"
        programs={EducationPrograms}
      />
      <Ambassador />
      <ProjectsCategory
        categoryTitle="Heritage Preservation"
        programs={EducationPrograms}
      />
      <SpecialProjects />
      <GrantsSection />
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
