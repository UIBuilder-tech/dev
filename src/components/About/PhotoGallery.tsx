import React, { useEffect, useState, useRef, useCallback } from "react";
import Marquee from "../Marquee";
import { useImagePreviewTrigger } from "../../utils/imagePreviewUtils";
import { UseDataContext } from "../context/DataContext";
import { ImageComponent } from "../../utils/ImageComponent";

const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

function PhotoGallery() {
  const triggerImagePreview = useImagePreviewTrigger();
  const [pageData, setPageData] = useState([]);
  const { setData } = UseDataContext();

  useEffect(() => {
    const controller = new AbortController();

    const fetchImages = async () => {
      setData(v => ({ ...v, isLoading: true }));
      try {
        const response = await fetch(
          `${AdminPanelUrl}/gallery-section?populate=*`,
          { signal: controller.signal }
        );
        const result = await response.json();
        
        if (result?.data.image) {
          const images = result.data.image.map(img => ({
            image: AdminPanelUrl.replace("/api", "") + img.url
          }));
          setPageData(images);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Gallery fetch error:", error);
        }
      } finally {
        setData(v => ({ ...v, isLoading: false }));
      }
    };

    fetchImages();
    return () => controller.abort();
  }, []);

  const firstHalf = pageData?.slice(0, Math.ceil(pageData.length / 2));
  const secondHalf = pageData?.slice(Math.ceil(pageData.length / 2));

  return (
    <div className="mx-auto pb-10 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-[#242424] py-10 desktop-1500:text-4xl desktop-1200:text-4xl desktop-1900:text-5xl">
          Photo Gallery
        </h2>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstHalf.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.image}
              onClick={() => triggerImagePreview(item.image)}
              className="relative md:h-[300px] desktop-1500:h-[275px] desktop-1500:w-[400px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-cover bg-white desktop-1200:h-[225px] desktop-1200:w-[375px]"
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondHalf.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.image}
              onClick={() => triggerImagePreview(item.image)}
              className="relative md:h-[300px] desktop-1500:h-[275px] desktop-1500:w-[400px] desktop-1200:h-[225px] desktop-1200:w-[375px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-cover bg-white"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default PhotoGallery;