import Hero from "../components/Home/Hero";
import Vision from "../components/Home/Vision";
import Programs from "../components/Home/Programs";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import ImpactSection from "../components/Home/OurImpact";
import VolunteerSection from "../components/Home/Volunteer";
import TeamSection from "../components/Home/OurTeam";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import ChitrapurMathImg from "../assets/Shirali_Math.webp";
import heritage1 from "../assets/heritage1.webp";
import heritage2 from "../assets/heritage2.webp";
import heritage3 from "../assets/heritage3.webp";
import SEO from "../components/seo/Seo";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Founded in 2005, the Chitrapur Heritage Foundation (CHF) is a nonprofit organization dedicated to fostering sustainable development and preserving the rich cultural heritage of the Chitrapur Saraswat community. With a focus on Heritage, Education,Women's Empowerment and Spiritual Development"
      />
      <div className="min-h-screen bg-cream">
        <Hero
          title="Chitrapur Heritage Foundation"
          desc="Founded in 2005, the Chitrapur Heritage Foundation (CHF) is a nonprofit organization dedicated to fostering sustainable development and preserving the rich cultural heritage of the Chitrapur Saraswat community. With a focus on Heritage, Education,Women's Empowerment and Spiritual Development"
          img={ChitrapurMathImg}
          images={[heritage1, heritage2, heritage3]}
          from="home"
        />
        <Vision />
        <Programs />
        <FeaturedProjects title="Featured Projects" />
        <ImpactSection />
        <VolunteerSection />
        <TeamSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
