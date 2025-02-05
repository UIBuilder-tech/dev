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
import { useEffect, useState } from "react";
import { UseDataContext } from "../components/context/DataContext";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const AdminPanelImgUrl = import.meta.env.VITE_ADMIN_PANEL_IMG_API;
// const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function HomePage() {
  interface HomePageDataType {
    HeroTitle: string;
    Hero_Description: string;
    SubTitle: string;
    vision_mission_section: string[];
    Our_Impact_Big_Card: string[];
    Section_3: string[];
  }

  const [HomePageData, setHomePageData] = useState<HomePageDataType | null>(
    null
  );
  const [Section_3, setSection_3] = useState([]);
  const [HomeSlideData, setHomeSlideData] = useState([]);
  const { data, setData } = UseDataContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
      });
      const result = await response.json();
      return result;
    };

    const loadAllData = async () => {
      setData((v) => ({ ...v, isLoading: true }));

      try {
        const [homePageResult, slidesResult] = await Promise.all([
          fetchData(
            `${AdminPanelUrl}/home-page?populate[Section_3][populate]=*&populate[Our_Impact_Big_Card][populate]=*`
          ),
          fetchData(`${AdminPanelUrl}/home-slides?populate=*`),
        ]);

        if (homePageResult?.data) {
          const newData = homePageResult.data.Section_3.map(
            (item: {
              Title: string;
              Description: string;
              image: { url: string };
              linkTo: string;
            }) => {
              console.log(
                "imggggggggg",
                item?.image?.url,
                AdminPanelImgUrl + item?.image?.url
              );
              return {
                id: item.Title.replace(" ", "-").toLowerCase(),
                title: item.Title,
                description: item.Description,
                linkTo: item.linkTo,
                image: AdminPanelImgUrl + item?.image?.url,
              };
            }
          );
          setHomePageData(homePageResult.data);
          setSection_3(newData);
        }

        if (slidesResult?.data) {
          const newData = slidesResult.data.map((item: any) => ({
            ...item,
            image: AdminPanelImgUrl + item?.image?.url,
          }));
          setHomeSlideData(newData);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setData((v) => ({ ...v, isLoading: false }));
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {HomePageData && (
        <>
          <Hero
            data={HomeSlideData}
            from="home"
            isLoading={loading || data?.isLoading}
          />
          <Vision />
          {Section_3 && <Programs data={Section_3} />}
          <FeaturedProjects title="Featured Projects" />
          <ImpactSection />
          <VolunteerSection />
          <TeamSection />
          <FAQSection />
          <Footer />
        </>
      )}
    </div>
  );
}
