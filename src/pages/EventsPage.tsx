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
  const FeaturedNews = [
    {
      id: 1,
      title: "Gokulashtami in New Jersey",
      location: "New Jersey, USA",
      description:
        "Celebrated annually at the Balwalli residence, this event brings children and parents together to honor Shri Krishna through poojas, bhajans, and cultural festivities. The event is filled with vibrant traditions and spiritual devotion.",
      images: [ChitrapurMathImg, ChitrapurMathImg],
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
    {
      id: 4,
      title: "Khavda Pottery Preservation",
      location: "India",
      description:
        "A project focused on preserving Khavda Pottery, a fading craft tradition. This initiative highlights the importance of sustaining India’s craft legacy through community awareness and storytelling.",
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
