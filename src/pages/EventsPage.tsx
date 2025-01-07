import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChitrapurMathImg from "../assets/Shirali_Math.webp";
import EventsHero from "../assets/eventsHero.webp";
import Yuvas from "../assets/Yuvas.webp";
import Yuvas1 from "../assets/Yuvas1.webp";
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
import Heritage2 from "../assets/heritage2.webp";
import SamvitSudha from "../assets/photoGallery/img13.webp";
import SamvitSudha1 from "../assets/photoGallery/img12.webp";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;


export default function EventsPage() {
  const location = useLocation();
  const [PageData, setPageData] = useState({});

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

  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/event-page`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPageData(result.data)
          }
        })
        .catch(error => console.log('error', error));
    }

    api();
  }, [])
  return (
    <div className="min-h-screen bg-cream">
      {
        PageData && <Hero
          title={PageData.title}
          desc={PageData.description}
          img={EventsHero}
          from="events"
        />
      }

      <div id="spotlight">
        <SpecialProjects
          title="CHF Spotlight"
          from="events"
        />
      </div>
      <div id="festivals">
        <ProjectsCategory
          categoryTitle="Chitrapur Talks"
        />
      </div>
      <div id="children-activities">
        <ProjectsCategory
          categoryTitle="Children And Youth Activities"
        />
      </div>
      <div id="get-togethers">
        <ProjectsCategory categoryTitle="Events"
        />
      </div>
      <div id="featured-news">
        <SpecialProjects
          title="Featured News"
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
