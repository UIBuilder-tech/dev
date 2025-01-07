import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventsHero from "../assets/eventsHero.webp";
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
