import sectionBorder from "../../assets/section-border.svg";
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

// Skeleton loader component
const SkeletonLoader = () => {
  return (
    <section className="relative bg-[#E67E22] py-16 desktop-1900:mb-10">
      {/* Top card skeleton */}
      <div className="container absolute z-[10] -top-[50px] md:-top-[150px] right-0 left-0 mx-auto bg-white rounded-[30px] md:rounded-[50px] p-2 md:p-10 max-w-[90%] md:max-w-[75%] desktop-1200:max-w-[80%]">
        <div className="z-[9999] relative flex flex-row justify-around md:gap-6 item-center text-center w-full desktop-1900:gap-[100px] animate-pulse">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col space-y-2 md:space-y-4 items-start p-2 md:p-4">
              {/* Icon skeleton */}
              <div className="w-8 h-8 md:w-14 md:h-14 desktop-1900:w-16 desktop-1900:h-16 bg-gray-200 rounded-lg" />
              {/* Title skeleton */}
              <div className="h-4 md:h-6 bg-gray-200 rounded w-24 md:w-32" />
              {/* Description skeleton */}
              <div className="space-y-2 w-full">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-4/6" />
              </div>
            </div>
          ))}
        </div>
        {/* Mountain background skeleton */}
        <div className="absolute bottom-0 rounded-[30px] md:rounded-[50px] md:bottom-0 left-0 right-0 z-[998] overflow-hidden">
          <div className="w-full md:h-[250px] desktop-1200:h-[200px] desktop-1900:h-[325px] bg-gray-200" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container relative z-[10] mx-auto px-4 w-full py-14 md:py-20 desktop-1200:py-10 desktop-1500:py-16 mt-14 desktop-1900:mt-28">
        <div className="flex flex-col justify-center item-center text-center space-y-5 md:space-y-10 w-full animate-pulse">
          {/* Title skeleton */}
          <div className="h-8 md:h-12 bg-gray-200/50 rounded-lg w-3/4 mx-auto" />
          {/* Description skeleton */}
          <div className="space-y-3 mx-auto md:w-[75%]">
            <div className="h-4 bg-gray-200/50 rounded w-full" />
            <div className="h-4 bg-gray-200/50 rounded w-5/6 mx-auto" />
            <div className="h-4 bg-gray-200/50 rounded w-4/6 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Vantiga({ title = "", description = "",
}: Props) {
  const location = useLocation();
  const [PageData, setPageData] = useState([]);
  const {data, setData } = UseDataContext()
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

  if (data?.isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <section className="relative bg-[#E67E22] py-16 desktop-1900:mb-10">
      <div className="container absolute z-[10] -top-[50px] md:-top-[150px] right-0 left-0 mx-auto bg-white rounded-[30px] md:rounded-[50px] p-2 md:p-10 max-w-[90%] md:max-w-[75%] desktop-1200:p-6 desktop-1500:p-10 desktop-1900:p-12 desktop-1200:max-w-[80%]">
        <div className=" z-[9999] relative flex flex-row justify-around md:gap-6 item-center text-center w-full desktop-1900:gap-[100px]">
          {PageData && PageData?.map(item => (
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
       {PageData?.length && <div className="absolute bottom-0 rounded-[30px] md:rounded-[50px] md:bottom-0 left-0 right-0 z-[998] overflow-hidden opacity-50">
          <img
            src={mountain}
            alt="Mountain"
            className="w-full md:h-[250px]   desktop-1200:h-[200px] desktop-1900:h-[325px] object-cover"
          />
        </div>}
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
