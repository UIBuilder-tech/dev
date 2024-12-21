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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <Vantiga />
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
