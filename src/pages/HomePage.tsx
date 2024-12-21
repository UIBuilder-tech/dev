import Hero from '../components/Home/Hero';
import Vision from '../components/Home/Vision';
import Programs from '../components/Home/Programs';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import ImpactSection from '../components/Home/OurImpact';
import VolunteerSection from '../components/Home/Volunteer';
import TeamSection from '../components/Home/OurTeam';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero from="home"/>
      <Vision/>
      <Programs/>
      <FeaturedProjects title="Featured Projects"/>
      <ImpactSection/>
      <VolunteerSection/>
      <TeamSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}