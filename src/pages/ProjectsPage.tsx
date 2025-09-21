import Hero from "../components/Home/Hero";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import Ambassador from "../components/About/Ambassador";
import Newsletter from "../components/About/Newsletter";
import OurTeam from "../components/Home/OurTeam";
import VolunteerSection from "../components/Home/Volunteer";
import ProjectsCategory from "../components/projects/ProjectsCategory";
import SpecialProjects from "../components/projects/SpecialProjects";
import GrantsSection from "../components/projects/GrantsSection";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Vantiga from "../components/Contribute/Vantiga";
import HeroImg from "../assets/photoGallery/img11.webp";
import DataProcess from "../utils/dataProcess";
import { UseDataContext } from "../components/context/DataContext";
import SEO from "../components/seo/Seo";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
export default function ProjectsPage() {
  const location = useLocation();
  const [PageData, setPageData] = useState(null);
  const { data, setData } = UseDataContext();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      setData(v => ({ ...v, isLoading: true }))
      fetch(`${AdminPanelUrl}/project-page?populate[heroSection][populate]=*&populate[Section_3][populate]=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            if (result?.data?.heroSection) {
              setPageData(v => ({ ...v, heroSection: result.data.heroSection }))
            } if (result?.data?.Section_2) {
              setPageData(v => ({ ...v, Section_2: DataProcess(result.data.Section_2) }))
            } if (result?.data?.HeritagePreservation) {
              setPageData(v => ({ ...v, HeritagePreservation: DataProcess(result.data.HeritagePreservation) }))
            } if (result?.data?.Section_3) {
              setPageData(v => ({ ...v, Section_3: result.data.Section_3 }))
            }

          }
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          setData(v => ({ ...v, isLoading: false }))
          setLoading(false)
        });;
    }
    api();
  }, [])
  useEffect(() => {
    // Get the hash from the URL
    if (PageData) {
      const hash = location.hash.replace("#", "");
      if (hash) {
        const scrollToElement = () => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        };

        // Ensure content is rendered before scrolling
        const observer = new MutationObserver(() => {
          scrollToElement();
          observer.disconnect(); // Stop observing after scrolling
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Fallback in case observer isn't enough
        setTimeout(scrollToElement, 100);

        return () => observer.disconnect(); // Clean up the observer
      }
    }

  }, [location.hash, PageData]);
  return (
    <>
      <SEO
        title="Projects"
        description="Explore our transformative initiatives that preserve heritage, empower communities, and promote education. From sustainable development to women's empowerment, our projects reflect a commitment to creating a brighter future rooted in tradition and progress."
      />
      <div className="min-h-screen bg-cream">
        {<Hero
          title={PageData?.heroSection?.title}
          desc={PageData?.heroSection?.description}
          img={HeroImg}
          from="projects"
          button1={PageData?.heroSection?.Button1}
          button2={PageData?.heroSection?.Button2}
          isLoading={data?.isLoading || loading}
        />
        }

        <div id="vantiga">
          <Vantiga title={PageData?.Section_3?.title || ""} description={PageData?.Section_3?.description || ""} />
        </div>
        {/* <div id="our-projects">
        <FeaturedProjects title="Our Projects" />
      </div> */}
        <div id="heritage-preservation">
          <ProjectsCategory
            categoryTitle="Heritage Preservation" />
        </div>
        <VolunteerSection />

        <div id="education">
          <ProjectsCategory
            categoryTitle="Education"
          />
        </div>
        <div id="chf-ambassador">
          <Ambassador />
        </div>
        <div id="women-empowerment">
          <ProjectsCategory
            categoryTitle="Women's Empowerment"
          />
        </div>

        <div id="special-projects">
          <SpecialProjects title="Special Projects" />
        </div>
        <div id="chf-grants" className="bg-white">
          <GrantsSection />
        </div>
        <Newsletter />
        <OurTeam />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
