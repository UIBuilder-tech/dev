import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Vantiga from "../components/Contribute/Vantiga";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Vision from "../components/Home/Vision";
import Ambassador from "../components/About/Ambassador";
import PhotoGallery from "../components/About/PhotoGallery";
import Newsletter from "../components/About/Newsletter";
import OurTeamAbout from "../components/About/OurTeamAbout";
import ImpactSection from "../components/Home/OurImpact";
import ChitrapurMathImg from "../assets/Shirali_Math.webp";

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Chitrapur Heritage Foundation"
        desc="Founded in 2005, the Chitrapur Heritage Foundation USA, Inc(CHF) is a nonprofit organization dedicated to fostering sustainable development and preserving the rich cultural heritage of the Chitrapur Saraswat community. With a focus on Heritage, Education,Women's Empowerment and Spiritual Development"
        img={ChitrapurMathImg}
        from="about"
      />
      <Vantiga
        title="Welcome to the Chitrapur Heritage Foundation"
        description="We are dedicated to promoting sustainable development while preserving the rich cultural and spiritual heritage of the Chitrapur Saraswat community. Through our efforts in education, women's empowerment, heritage preservation, and community development, we create lasting impacts on individual lives and the community as a whole. Join us in our mission to honor the past while building a brighter future rooted in tradition and progress."
      />
      <div id="vision-mission">
        <Vision />
      </div>
      <div id="our-projects">
        <FeaturedProjects title="Our Projects" />
      </div>
      <div id="our-impact">
        <ImpactSection />
      </div>
      <div id="chf-ambassador">
        <Ambassador />
      </div>
      <div id="photo-gallery">
        <PhotoGallery />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="our-team">
        <OurTeamAbout />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
