import Marquee from "../Marquee";
import { galleryImgs } from "../../utils/galleryImgs";

function PhotoGallery() {
  return (
    <div className="mx-auto pb-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#242424] py-10">
          Photo Gallery
        </h2>{" "}
        <Marquee pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative h-[300px] w-[450px] cursor-pointer overflow-hidden rounded-[30px] p-2 flex flex-col justify-end"
              src={review.img}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative h-[300px] w-[450px] cursor-pointer overflow-hidden rounded-[30px] p-2 flex flex-col justify-end"
              src={review.img}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default PhotoGallery;
