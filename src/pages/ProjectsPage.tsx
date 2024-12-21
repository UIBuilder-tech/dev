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
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  images: string[];
}
export default function ProjectsPage() {
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
      <FeaturedProjects title="Our Projects" />
      <ProjectsCategory
        categoryTitle="Education"
        programs={EducationPrograms}
      />
      <VolunteerSection />
      <ProjectsCategory
        categoryTitle="Women Empowerment"
        programs={WomenEmpowermentPrograms}
      />
      <Ambassador />
      <ProjectsCategory
        categoryTitle="Heritage Preservation"
        programs={HeritagePrograms}
      />
      <SpecialProjects title="Special Projects" projects={projects} />
      <GrantsSection />
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
