import Marquee from "../Marquee";
import { galleryImgs, galleryImgs1 } from "../../utils/galleryImgs";
import { useImagePreviewTrigger } from "../../utils/imagePreviewUtils";

function PhotoGallery() {
  const triggerImagePreview = useImagePreviewTrigger();
  return (
    <div className="mx-auto pb-10 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-[#242424] py-10 desktop-1500:text-4xl desktop-1200:text-4xl desktop-1900:text-5xl">
          Photo Gallery
        </h2>{" "}
        <Marquee pauseOnHover className="[--duration:20s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative md:h-[300px] desktop-1500:h-[275px] desktop-1500:w-[400px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-cover bg-white desktop-1200:h-[225px] desktop-1200:w-[375px]"
              src={review.img}
              onClick={() => triggerImagePreview(review.img)}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {galleryImgs1.map((review, index) => (
            <img
              key={index}
              className="relative md:h-[300px]  desktop-1500:h-[275px] desktop-1500:w-[400px]  desktop-1200:h-[225px] desktop-1200:w-[375px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-cover bg-white"
              src={review.img}
              onClick={() => triggerImagePreview(review.img)}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default PhotoGallery;
