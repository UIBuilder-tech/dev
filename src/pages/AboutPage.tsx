import { useEffect, useState } from "react";
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
import { UseDataContext } from "../components/context/DataContext";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function AboutPage() {
  const location = useLocation();
  const { setData } = UseDataContext();
  const [PageData, setPageData] = useState({});
  useEffect(() => {
    const api = async () => {
      setData(v => ({ ...v, isLoading: true}))
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/about-page`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPageData(result.data)
          }
        })
        .catch(error => console.log('error', error)).finally(() => {
          setData(v => ({ ...v, isLoading: false}))
        });
    }

    api();
  }, [])
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
      }, 1500);
    }
  }, [location.hash]); // Only run when hash changes

  return (<>
    {
      PageData &&
      <div className="min-h-screen bg-cream">
        <Hero
          title={PageData.title}
          desc={PageData.description}
          img={ChitrapurMathImg}
          from="about"
          button1={PageData.Button1}
          button2={PageData.Button2}
        />
        <Vantiga
          title={PageData.title}
          description={PageData.description}
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
    }
  </>
  );
}
