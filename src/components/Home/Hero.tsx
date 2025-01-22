import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageComponent } from "../../utils/ImageComponent";

interface Props {
  title?: string;
  desc?: string;
  img?: string;
  from?: string;
  subTitle?: string;
  button1?: string;
  button2?: string;
  Button1Link?: string|null;
  Button2Link?: string|null;
  data?: [];
  isLoading?: boolean;
}

export default function Hero({ title, subTitle, desc, img, data = [], from = "", button2 = 'Donate', button1 = 'Join Us',isLoading = false ,Button1Link=null,Button2Link=null }: Props) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    if(data && data.length>0){
     setCurrentIndex(0)
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)}
  }, [data])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderSkeleton = () => (
    <div className="flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl pt-24 md:pt-32">
          {/* Skeleton Title */}
          <div className="h-12 md:h-16 bg-gray-200 rounded-lg mb-3 md:mb-6 animate-pulse" />
          
          {/* Skeleton Subtitle if from === "home" */}
          {from === "home" && (
            <div className="h-6 bg-gray-200 rounded-lg mb-2 animate-pulse w-2/3" />
          )}
          
          {/* Skeleton Description */}
          <div className="space-y-2 mb-8">
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-4/6" />
          </div>
          
          {/* Skeleton Buttons */}
          <div className="flex">
            <div className="h-12 w-32 bg-gray-200 rounded-l-full animate-pulse" />
            <div className="h-12 w-32 bg-gray-200 rounded-r-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderButtons = (Button1='Join Us', Button1Link, Button2='Donate', Button2Link) => (
    <div className="flex">
      {Button1 && (
        <Link
          to={Button1Link||'/contribute#volunteer'}
          className="text-white border-[1px] border-r-0 border-[#fbf3e8] md:px-8 md:py-3 rounded-l-full hover:bg-white/20 transition max-sm:text-sm px-4 py-2 desktop-1200:px-6 desktop-1200:py-2 desktop-1500:px-7 desktop-1500:py-2.5 desktop-1900:px-8 desktop-1900:py-3"
        >
          {Button1}
        </Link>
      )}
      {Button2 && (
        <div className="border-[1px] border-l-0 rounded-r-full border-[#fbf3e8]">
          <Link
            to={Button2Link || '/contribute#donation-table'}
            className="bg-[#fbf3e8] text-secondary font-[450] md:px-8 md:py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2 max-sm:text-sm px-4 py-2 desktop-1200:px-6 desktop-1200:py-2 desktop-1500:px-7 desktop-1500:py-2.5 desktop-1900:px-8 desktop-1900:py-3"
          >
            {Button2} <Heart className="h-5 w-5" fill="#e67e22" />
          </Link>
        </div>
      )}
    </div>
  );

  const renderContent = (item) => (
    <div className="flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full desktop-1200:max-w-5xl desktop-1500:max-w-6xl desktop-1900:max-w-7xl">
        <div className="max-w-3xl pt-24 md:pt-32 desktop-1200:max-w-2xl desktop-1500:max-w-3xl desktop-1900:max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl text-white mb-3 md:mb-6 leading-tight desktop-1200:text-4xl desktop-1500:text-[2.75rem] desktop-1900:text-5xl">
            {item.title}
            {from === "home" && (
              <p className="text-sm md:text-sm text-white text-left px-1 font-body desktop-1200:text-xs desktop-1500:text-sm desktop-1900:text-sm mt-2">
                {item.subTitle}
              </p>
            )}
          </h1>
          <p className="text-white/90 text-sm md:text-[18px] mb-8 leading-relaxed max-sm:leading-2 desktop-1200:text-[15px] desktop-1500:text-[18px] desktop-1900:text-[19px]">
            {item.description}
          </p>
          {renderButtons(item.Button1, item.Button1Link, item.Button2, item.Button2Link)}
        </div>
      </div>
    </div>
  );
  return (
    <div className="relative md:min-h-screen">
      <div className="absolute inset-0">
        {/* <img
          src={img}
          alt="Heritage Building"
          className="w-full h-full object-cover hero-bg"
        /> */}
        {isLoading ? (
          <div className="w-full h-full bg-gray-100 animate-pulse" />
        ) : currentIndex!=-1 ?
           <ImageComponent
           src={data[currentIndex].image}
           alt={`Hero Image ${data[currentIndex].index}`}
           className={`absolute w-full h-full object-cover transition-opacity duration-500 hero-bg }`}
         />
          :
          <ImageComponent
            src={img || ""}
            alt="Heritage Building"
            className="w-full h-full object-cover hero-bg"
          />}
        {from !== "events" && (
          <div className="absolute inset-0 bg-black/50"></div>
        )}
      </div>

      <div
        className={`relative ${from !== "projects" && from !== "about"
          ? "h-[100vh]"
          : "h-full desktop-1500:pt-12 desktop-1900:pt-28"
          } flex flex-col justify-between`}
      >
        {isLoading ? (
          renderSkeleton()
        ) : (
          <>
            {currentIndex !== -1
              ? renderContent(data[currentIndex])
              : renderContent({ title, subTitle, description: desc, Button1: button1, Button2: button2,Button1Link,Button2Link })}
          </>
        )}

        {/* Carousel Navigation */}
        <div className="absolute bottom-28 md:bottom-14 left-0 right-0 flex justify-center gap-2">
          {data && data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-secondary scale-125' : 'bg-[#D3D3D3]'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="h-16 desktop-1200:h-24 desktop-1500:h-20 desktop-1900:h-16"></div>
      </div>
    </div>
  );
}
