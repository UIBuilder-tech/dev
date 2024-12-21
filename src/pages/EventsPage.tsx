import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import { EducationPrograms } from "../utils/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <SpecialProjects />
      <ProjectsCategory
        categoryTitle="Festivals"
        programs={EducationPrograms}
      />
      <ProjectsCategory
        categoryTitle="Get Togethers"
        programs={EducationPrograms}
      />
      <ProjectsCategory
        categoryTitle="Childeren & Youth Activities"
        programs={EducationPrograms}
      />
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
