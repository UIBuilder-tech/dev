import sectionBorder from "../../assets/section-border.svg";
import donate from "../../assets/contribute-donate.svg";
import volunteer from "../../assets/contribute-volunteer.svg";
import involved from "../../assets/contribute-get-invloved.svg";
import mountain from "../../assets/mountain.svg";
import { useLocation } from "react-router-dom";
import aboutBanner from "../../assets/aboutBanner.webp";
import { useEffect, useState } from "react";
import DataProcess from "../../utils/dataProcess";
import { UseDataContext } from "../context/DataContext";

interface Props {
  title?: string;
  description?: string;
}
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function Vantiga({ title = "", description = "",
}: Props) {
  const location = useLocation();
  const [PageData, setPageData] = useState([]);
  const { setData } = UseDataContext()
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      setData(v => ({ ...v, isLoading: true }))

      fetch(`${AdminPanelUrl}/project-page?&populate[Section_2][populate]=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            if (result?.data?.Section_2) {
              setPageData(DataProcess(result.data.Section_2))
            }
          }
        })
        .catch(error => console.log('error', error)).finally(() => {
          setData(v => ({ ...v, isLoading: false }))
        });
    }

    api();
  }, [])
  return (
    <section className="relative bg-[#E67E22] py-16 desktop-1900:mb-10">
      <div className="container absolute z-[10] -top-[50px] md:-top-[150px] right-0 left-0 mx-auto bg-white rounded-[30px] md:rounded-[50px] p-2 md:p-10 max-w-[90%] md:max-w-[75%] desktop-1200:p-6 desktop-1500:p-10 desktop-1900:p-12 desktop-1200:max-w-[80%]">
        <div className=" z-[9999] relative flex flex-row justify-around md:gap-6 item-center text-center w-full desktop-1900:gap-[100px]">
          {PageData && PageData.map(item => (
            <div key={item.id} className="flex flex-col space-y-2 md:space-y-4 items-start p-2 md:p-4">
              <img
                src={item.image}
                className="w-8 h-8 md:w-14 md:h-14 desktop-1900:w-16  desktop-1900:h-16"
              />
              <p className="md:text-2xl text-sm text-[#02306A] font-bold  desktop-1200:text-xl desktop-1900:text-2xl">
                {item.Title}
              </p>
              <p className="text-start max-sm:text-xs desktop-1200:text-sm desktop-1900:text-lg">
                {item.Description}
              </p>
            </div>
          ))}

        </div>
        <div className="absolute bottom-0 rounded-[30px] md:rounded-[50px] md:bottom-0 left-0 right-0 z-[998] overflow-hidden opacity-50">
          <img
            src={mountain}
            alt="Mountain"
            className="w-full md:h-[250px]   desktop-1200:h-[200px] desktop-1900:h-[325px] object-cover"
          />
        </div>
      </div>
      <div className="container relative z-[10] mx-auto px-4 w-full py-14 md:py-20 desktop-1200:py-10 desktop-1500:py-16 mt-14 desktop-1900:mt-28">
        <div className="flex flex-col justify-center item-center text-center space-y-5 md:space-y-10 w-full">
          <h2 className="text-3xl md:text-5xl text-white desktop-1500:text-4xl desktop-1200:text-3xl desktop-1900:text-5xl">
            {title}
          </h2>
          <p className="text-sm md:text-lg text-white mx-auto md:w-[75%] desktop-1200:text-[16px] desktop-1500:text-[18px] desktop-1900:text-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom border pattern */}
      {location?.pathname?.includes("/project") && (
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-8 w-full bg-[url('../../assets/section-border.svg')] bg-repeat-x">
            <img src={sectionBorder} className="w-full h-full" />
          </div>
        </div>
      )}

      {location?.pathname?.includes("about") && (
        <div className="absolute bottom-0 md:bottom-0 left-0 right-0 z-[9] overflow-hidden">
          <img
            src={aboutBanner}
            alt="Mountain"
            className="w-full object-cover max-sm:max-h-[700px] desktop-1500:max-h-[495px] desktop-1200:max-h-[445px]"
          />
        </div>
      )}
    </section>
  );
}
