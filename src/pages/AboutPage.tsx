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
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero
        title="Welcome to the Chitrapur Heritage Foundation (CHF)!"
        img={ChitrapurMathImg}
        desc="We are dedicated to promoting sustainable development while preserving the rich cultural and spiritual heritage of the Chitrapur Saraswat community. Through our efforts in education, women's empowerment, heritage preservation, and community development, we create lasting impacts on individual lives and the community as a whole. Join us in our mission to honor the past while building a brighter future rooted in tradition and progress."
      />
      <Vantiga
        title="Welcome to the Chitrapur Heritage Foundation (CHF)!"
        description="We are dedicated to promoting sustainable development while preserving the rich cultural and spiritual heritage of the Chitrapur Saraswat community. Through our efforts in education, women's empowerment, heritage preservation, and community development, we create lasting impacts on individual lives and the community as a whole. Join us in our mission to honor the past while building a brighter future rooted in tradition and progress."
      />
      <Vision />
      <FeaturedProjects title="Our Projects" />
      <ImpactSection />
      <Ambassador />
      <PhotoGallery />
      <Newsletter />
      <OurTeamAbout />
      <FAQSection />
      <Footer />
    </div>
    // <div className="min-h-screen bg-cream pt-24 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <DonationTable />
    //   </div>
    // </div>
  );
}
