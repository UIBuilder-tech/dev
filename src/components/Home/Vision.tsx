import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import VisionImg from '../../assets/vision.png'

export default function Vision() {
  return (
    <div className=" md:py-14  md:px-10 md:mx-10">
      <div className="mx-auto bg-white rounded-3xl px-4 md:px-10 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center">
          <div className='w-full md:max-w-2xl md:ml-4'>
            <h2 className="font-display text-3xl md:text-4xl mb-4 md:mb-6 text-secondary">
              Our Vision
            </h2>
            <p className="text-sm md:text-lg text-[#808080] mb-6 md:mb-8">
              The Chitrapur Heritage Foundation (CHF) envisions a thriving community that embraces its cultural and spiritual roots while fostering sustainable progress. By supporting personal growth and collective well-being, CHF aims to preserve heritage and wisdom for future generations, inspiring a fairer and better world.
            </p>
            <div className="flex gap-3 md:gap-4">
              <Link
                to="/join"
                className="bg-white/10 backdrop-blur-sm text-primary border-2 border-primary px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 transition text-sm md:text-base flex-1 md:flex-none text-center"
              >
                Join Us
              </Link>
              <Link
                to="/donate"
                className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-opacity-90 flex items-center justify-center gap-2 text-sm md:text-base flex-1 md:flex-none"
              >
                Donate <Heart className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto md:flex-shrink-0">
            <div className="relative w-full max-w-[500px] mx-auto">
              <img
                src={VisionImg}
                alt="Heritage"
                className="w-full h-auto object-contain"
              />
              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

