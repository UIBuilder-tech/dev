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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";
import EventsHero from "../assets/eventsHero.png";
import Yuvas from "../assets/Yuvas.png";
import Yuvas1 from "../assets/Yuvas1.png";

export default function EventsPage() {
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

  const FeaturedNews = [
    {
      id: 1,
      title: "Chitrapur Yuvadhara",
      location: "New Jersey, USA",
      description:
        "Chitrāpur Yuvadhārā is a group of young adults (15-35) from the Chitrāpur Saraswat community, focused on personal growth, cultural connection, and spiritual development. Established on 20th August 2008, it aims to strengthen youth ties with the Math, Guru Parampara, and community while promoting social responsibility and self-expression. Yuvadhārā has regional representatives across the West Coast, East Coast, and Midwest.",
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
        img={EventsHero}
      />
      <div id="featured-news">
        <SpecialProjects
          title="Featured News"
          projects={FeaturedNews}
          from="events"
        />
      </div>
      <div id="festivals">
        <ProjectsCategory
          categoryTitle="Chitrapur Talks"
          programs={EventsFestivals}
        />
      </div>
      <div id="children-activities">
        <ProjectsCategory
          categoryTitle="Children & Youth Activities"
          programs={EventChildrenEducation}
        />
      </div>
      <div id="get-togethers">
        <ProjectsCategory
          categoryTitle="Get Togethers"
          programs={EventGettogthers}
        />
      </div>
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
