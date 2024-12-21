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
import Yuvas from "../assets/Yuvas.png";
import Yuvas1 from "../assets/Yuvas1.png";

export default function EventsPage() {
  const FeaturedNews = [
    {
      id: 1,
      title: "Chitrapur Yuvadhara",
      location: "New Jersey, USA",
      description:
        "Chitrāpur Yuvadhārā is a dynamic group of young adults aged 15 to 35, inspired by the Chitrāpur Saraswat community's 300-year-old Guru Parampara. With a focus on personal growth, cultural connection, and spiritual development, members engage in various activities to bond, learn, and contribute to their community. Established on 20th August 2008, Yuvadhārā aims to deepen the connection of youth with the Math, Guru Parampara, and Chitrāpur Samaj, while promoting social responsibility and self-expression. Representatives are located across different regions, including the West Coast, East Coast, and Midwest.",
      images: [Yuvas, Yuvas1],
    },
    {
      id: 2,
      title: "Kanakanjali Utsava",
      location: "New Jersey, USA",
      description:
        "Kanakanjali Utsava started as a small Guru Pujan initiative and grew into a celebration attended by nearly 100 people. It involved seva from community members in decoration, photography, and food planning to honor Paramapujya Swamiji's birthday.",
      images: [ChitrapurMathImg, ChitrapurMathImg],
    },
    {
      id: 3,
      title: "Samvit Sudha - A Touch of Shirali",
      location: "Shirali, India",
      description:
        "Inspired by the nostalgic charm of Chitrapur village, this project brings the essence of Shirali to community members by celebrating its cultural and spiritual heritage, evoking fond memories of traditional Bhanap life.",
      images: [ChitrapurMathImg, ChitrapurMathImg],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Celebrating Tradition and Community"
        desc="Join us as we commemorate festivals, organize satsangs, and conduct enriching activities for children and youth. Stay updated with our latest programs and events that honor tradition, foster spiritual growth, and strengthen the Chitrapur Saraswat community."
        img={ChitrapurMathImg}
      />
      <SpecialProjects title="Featured News" projects={FeaturedNews} />
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
