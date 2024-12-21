import Marquee from "../Marquee";
import { galleryImgs } from "../../utils/galleryImgs";

function PhotoGallery() {
  return (
    <div className="mx-auto pb-10 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl text-[#242424] py-10">
          Photo Gallery
        </h2>{" "}
        <Marquee pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative md:h-[300px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-contain bg-white"
              src={review.img}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative md:h-[300px] h-[200px] w-[300px] md:w-[450px] cursor-pointer overflow-hidden rounded-[30px] flex flex-col justify-end object-contain bg-white"
              src={review.img}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default PhotoGallery;
