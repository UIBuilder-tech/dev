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
import RohitImg from "../assets/Spotlight_Photos/rohit-kalyanpur-600x800.jpg";
import JayshreeImg from "../assets/Spotlight_Photos/Jayshree Ullal.jpg";
import JasmineImg from "../assets/Spotlight_Photos/Jasmine-Nirody.jpg";
import seemantiniImg from "../assets/Spotlight_Photos/seemantininadkarni.jpg";
import swathiImg from "../assets/Spotlight_Photos/Swathi_Arur.jpg";
import MohitImg from "../assets/Spotlight_Photos/Mohit_Kallianpur.png";
import aditiImg from "../assets/Spotlight_Photos/Aditi_Gurkar_2.png";
import NeilImg from "../assets/Spotlight_Photos/neil-hattangadi.jpg";
import NiveditaImg from "../assets/Spotlight_Photos/Nivedita_Bijoor.png";
import PraskashImg from "../assets/Spotlight_Photos/prakash_nagarkatti.jpg";
import DipaImg from "../assets/Spotlight_Photos/Dipa_Sashital.png";

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
  const Spotlight = [
    {
      id: 1,
      title: "Rohit Kalyanpur - Founder of Optivolt Labs",
      location: "USA",
      description:
        "Rohit Kalyanpur, founder and CEO of Optivolt Labs, has raised over $10 million in funding for sustainable energy solutions. A Forbes 30 Under 30 honoree and Thiel Fellow, Rohit is revolutionizing energy accessibility globally.",
      images: [RohitImg],
    },
    {
      id: 3,
      title: "Jayshree Ullal - CEO of Arista Networks",
      location: "USA",
      description:
        "Jayshree Ullal has transformed Arista Networks into a global leader in networking technology, with a net worth of $4.4 billion as per Forbes. She is one of America's most successful self-made women.",
      images: [JayshreeImg],
    },
    {
      id: 4,
      title: "Dr. Jasmine Nirody - Biophysics Researcher",
      location: "University of Chicago, USA",
      description:
        "Dr. Jasmine Nirody, a biophysics expert, has been recognized for her outstanding doctoral thesis research and contributions to biological physics.",
      images: [JasmineImg],
    },
    {
      id: 5,
      title: "Dr. Seemantini Nadkarni - Harvard Medical School",
      location: "Boston, USA",
      description:
        "Dr. Seemantini Nadkarni is a pioneer in Biomedical Optics, leading groundbreaking research in tissue biomechanics and laser speckle techniques at Harvard Medical School.",
      images: [seemantiniImg],
    },
    {
      id: 6,
      title: "Dr. Swati Arur - MD Anderson Cancer Center",
      location: "Houston, USA",
      description:
        "Dr. Swati Arur, a leader in genetics, has been recognized as an Emerging Leader in Health and Medicine Scholars. Her research focuses on the impact of DNA damage on aging.",
      images: [swathiImg],
    },
    {
      id: 7,
      title: "Mohit Kallianpur - Walt Disney Animation Studios",
      location: "USA",
      description:
        "Mohit Kallianpur, Director of Cinematography at Walt Disney Animation Studios, has contributed to iconic films like Frozen and Tangled, revolutionizing animation lighting techniques.",
      images: [MohitImg],
    },
    {
      id: 8,
      title: "Dr. Aditi Gurkar - Aging Institute",
      location: "Pittsburgh, USA",
      description:
        "Dr. Aditi Gurkar’s research at the Aging Institute explores the metabolic circuitry influencing biological aging and aims to uncover the secrets of healthier and fuller lives.",
      images: [aditiImg],
    },
    {
      id: 9,
      title: "Dr. Neil Hattangadi - CEO of Cortica Care",
      location: "San Diego, USA",
      description:
        "Dr. Neil Hattangadi, CEO of Cortica Care, is pioneering integrated healthcare models specializing in autism care, offering a seamless approach to neurological and medical conditions.",
      images: [NeilImg],
    },
    {
      id: 10,
      title: "Dr. Dipa Sashital - Professor at Iowa State University",
      location: "Iowa, USA",
      description:
        "Dr. Dipa Sashital, a biochemistry professor, has made significant contributions to the field through her research in gene-editing systems and biophysics.",
      images: [DipaImg],
    },
    {
      id: 11,
      title: "Dr. Nivedita Bijoor - Founder of BodyByBijoor",
      location: "Simpsonville, USA",
      description:
        "Dr. Nivedita Bijoor created BodyByBijoor, a holistic Lifestyle Medicine Program combining mindfulness and integrative health approaches for overall well-being.",
      images: [NiveditaImg],
    },
    {
      id: 12,
      title: "Dr. Prakash Nagarkatti - University of South Carolina",
      location: "Columbia, USA",
      description:
        "Dr. Prakash Nagarkatti, Senior Research Advisor and Distinguished Professor, has significantly advanced research in inflammation, cancer, and autoimmune diseases, earning multiple accolades.",
      images: [PraskashImg],
    },
    {
      id: 2,
      title: "Riya Nadkarni - Founder of RiyOrganized",
      location: "New Jersey, USA",
      description:
        "Riya Nadkarni, a junior at Montville Township High School, is the founder of RiyOrganized, dedicated to creating functional organizing systems. She has been recognized for leadership and academic achievements, including the ShopRite STARS Award and AP Scholar with Honor Award.",
      images: [ChitrapurMathImg],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Celebrating Tradition and Community"
        desc="Join us as we commemorate festivals, organize satsangs, and conduct enriching activities for children and youth. Stay updated with our latest programs and events that honor tradition, foster spiritual growth, and strengthen the Chitrapur Saraswat community."
        img={EventsHero}
        from="events"
      />
      <div id="spotlight">
        <SpecialProjects
          title="CHF Spotlight"
          projects={Spotlight}
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
        <ProjectsCategory categoryTitle="Events" programs={EventGettogthers} />
      </div>
      <div id="featured-news">
        <SpecialProjects
          title="Featured News"
          projects={FeaturedNews}
          from="events"
        />
      </div>
      <Newsletter />
      <OurTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
