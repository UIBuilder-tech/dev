import Hero from "../components/Home/Hero";
import Vision from "../components/Home/Vision";
import Programs from "../components/Home/Programs";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import ImpactSection from "../components/Home/OurImpact";
import VolunteerSection from "../components/Home/Volunteer";
import TeamSection from "../components/Home/OurTeam";
import FAQSection from "../components/Home/FAQ";
import Footer from "../components/Footer/Footer";
import ChitrapurMathImg from "../assets/Shirali_Math.jpg";
import { useEffect, useState } from "react";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;


export default function HomePage() {
  const [HomePageData, setHomePageData] = useState([]);
  const [Section_3, setSection_3] = useState([])

  useEffect(() => {
    const requestOptions: any = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${AdminPanelUrl}/home-page?populate[vision_mission_section][populate]=*&populate[Section_3][populate]=*&populate[Our_Impact_Big_Card][populate]=*`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result?.data) {
          const newData = result.data.Section_3.map((item: any) => {
            const id = item.Title.replace(" ", "_").toLowerCase()
            return {
              id: id,
              title: item.Title,
              description: item.Description,
              linkTo: id,
              image: AdminPanelUrl.replace("/api", "") + item?.image?.url
            }
          })
          setHomePageData(result.data)
          setSection_3(newData)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      {
        HomePageData &&
        <>
          <Hero title={HomePageData.HeroTitle}
            desc={HomePageData.Hero_Description}
            img={ChitrapurMathImg}
            subTitle={HomePageData.SubTitle}
            from="home" />
          <Vision data={HomePageData?.vision_mission_section || []} />
          {
            Section_3 &&
            <Programs data={Section_3} />
          }
          <FeaturedProjects title="Featured Projects" />
          {
            HomePageData?.Our_Impact_Big_Card &&
            <ImpactSection data={HomePageData?.Our_Impact_Big_Card || []} />
          }
          <VolunteerSection />
          <TeamSection />
          <FAQSection />
          <Footer />
        </>}
    </div>
  );
}
