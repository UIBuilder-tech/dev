import { useEffect, useState } from "react";
import DataProcess from "../../utils/dataProcess";
import { UseDataContext } from "../context/DataContext";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
interface pageDataInteraction {
  ambassadorTitle: string;
  ambassadorDescription: string;
  steps: {
    Title: string;
    Description: string;
    image: string;
  }
}

// Skeleton loader component
const SkeletonLoader = () => {
  return (
    <div className="bg-white desktop-1900:mb-8 desktop-1900:mt-10">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
        {/* Title and description skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-10 md:h-12 bg-gray-200 rounded-lg w-3/4 md:w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-gray-200 rounded w-full md:w-2/3 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6 md:w-1/2 mx-auto" />
        </div>

        {/* Desktop skeleton */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 desktop-1200:gap-0 animate-pulse">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image skeleton */}
              <div className="mb-6 w-32 h-32 desktop-1200:w-[130px] desktop-1900:w-[160px] bg-gray-200 rounded-lg" />
              {/* Text content skeleton */}
              <div className="w-full">
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
                  <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile skeleton */}
        <div className="md:hidden animate-pulse">
          <div className="flex flex-col items-center">
            {/* Image skeleton */}
            <div className="mb-6 w-32 h-32 bg-gray-200 rounded-lg" />
            {/* Text content skeleton */}
            <div className="w-full px-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" />
              </div>
            </div>
          </div>
          {/* Navigation dots skeleton */}
          <div className="flex justify-center mt-4 gap-1">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Ambassador() {

  const {data, setData } = UseDataContext();
  const [pageData, setPageData] = useState<pageDataInteraction | null>(null)
  useEffect(() => {
    const api = async () => {
      setData(v => ({ ...v, isLoading: true }))
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/project-page?populate[ambassadorList][populate]=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data?.ambassadorList) {
            const newData = { ...result.data, steps: DataProcess(result.data.ambassadorList) };
            setPageData(newData)
          }
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          setData(v => ({ ...v, isLoading: false }))
        });;
    }
    api();
  }, [])
  const [currentSlide, setCurrentSlide] = useState(0);


  if (data?.isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      {
        pageData && <div className="bg-white desktop-1900:mb-8 desktop-1900:mt-10">
          <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1a3c77] mb-4 desktop-1500:text-4xl desktop-1200:text-4xl desktop-1900:text-5xl">
                {pageData.ambassadorTitle}
              </h2>
              <p className="text-[#808080] max-w-5xl mx-auto md:text-lg desktop-1500:text-md leading-5 md:leading-6 desktop-1200:text-[16px]">
                {pageData.ambassadorDescription}{" "}
                <a href="https://forms.gle/tdGUm6A38nMyMHwZ8" target="blank" className="text-blue-500 underline italic">
                  Join Now
                </a>
              </p>
            </div>
            {
              pageData?.steps && <> {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 desktop-1200:gap-0">
                  {pageData.steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <img loading="lazy" src={step.image} alt="" className="object-contain desktop-1200:w-[130px] desktop-1900:w-[160px]" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-lg desktop-1500:text-lg desktop-1200:max-w-[10rem]   desktop-1200:text-sm desktop-1500:max-w-52 text-left leading-6">
                          <span className="text-[#1a3c77] text-lg desktop-1500:text-lg desktop-1200:text-sm font-bold mb-1">
                            {step.Title}{" "}
                          </span>
                          {step.Description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile View Carousel */}
                <div className="md:hidden relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {pageData.steps.map((step, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
                          <div className="mb-6">
                            <img loading="lazy" src={step.image} alt="" className="object-contain" />
                          </div>
                          <div>
                            <p className="text-gray-600 text-lg max-w-52 mx-auto text-center leading-6">
                              <span className="text-[#1a3c77] text-lg font-semibold mb-1 block">
                                {step.Title}
                              </span>
                              {step.Description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>



                  {/* Navigation Dots */}
                  <div className="flex justify-center mt-4">
                    {pageData.steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? "bg-secondary" : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            }

          </div>
        </div>
      }
    </>
  );
}
