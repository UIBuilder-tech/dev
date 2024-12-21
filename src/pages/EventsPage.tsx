import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import {
  EventChildrenEducation,
  EventGettogthers,
  EventsFestivals,
} from "../utils/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Celebrating Tradition and Community"
        desc="Join us as we commemorate festivals, organize satsangs, and conduct enriching activities for children and youth. Stay updated with our latest programs and events that honor tradition, foster spiritual growth, and strengthen the Chitrapur Saraswat community."
        img={ChitrapurMathImg}
      />
      <SpecialProjects />
      <ProjectsCategory categoryTitle="Festivals" programs={EventsFestivals} />
      <ProjectsCategory
        categoryTitle="Get Togethers"
        programs={EventGettogthers}
      />
      <ProjectsCategory
        categoryTitle="Childeren & Youth Activities"
        programs={EventChildrenEducation}
      />
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
