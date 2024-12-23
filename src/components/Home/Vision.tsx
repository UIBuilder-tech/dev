'use client'

import { useState } from "react"
import { Heart } from 'lucide-react'
import { Link } from "react-router-dom"
import VisionImg from "../../assets/vision.png"
import MissionImg from '../../assets/Mission.png'

export default function Vision() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "Our Vision",
      content: "The Chitrapur Heritage Foundation (CHF) envisions a thriving community that embraces its cultural and spiritual roots while fostering sustainable progress. By supporting personal growth and collective well-being, CHF aims to preserve heritage and wisdom for future generations, inspiring a fairer and better world.",
      image: VisionImg
    },
    {
      title: "Our Mission",
      content: "The Chitrapur Heritage Foundation (CHF) envisions a thriving community that embraces its cultural and spiritual roots while fostering sustainable progress. By supporting personal growth and collective well-being, CHF aims to preserve heritage and wisdom for future generations, inspiring a fairer and better world.",
      image: MissionImg
    }
  ]

  return (
    <div className="md:py-14 md:px-10 md:mx-10">
      <div className="mx-auto bg-white rounded-3xl px-4 md:px-[80px] py-10 md:py-10 relative desktop-1200:px-[50px]">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center"
              >
                <div className="w-full md:max-w-2xl md:ml-4 space-y-16 desktop-1500:space-y-14 desktop-1200:space-y-12">
                  <h2 className="font-display text-3xl md:text-5xl mb-4 md:mb-6 text-secondary desktop-1500:text-[40px] desktop-1200:text-[35px] ">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-[20px] desktop-1500:text-[17px] leading-7 desktop-1500:leading-6 text-[#808080] mb-6 md:mb-8  max-w-[90%] desktop-1500:max-w-[80%] 
                   desktop-1200:max-w-[80%] desktop-1200:text-[14px] desktop-1200:leading-5">
                    {slide.content}
                  </p>
                  <div className="flex gap-3 md:gap-4">
                    <Link
                      to="/contribute#donation-table"
                      className="bg-white/10 backdrop-blur-sm text-primary border-2 border-primary px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 transition text-sm md:text-xl flex-1 md:flex-none text-center font-bold desktop-1200:text-lg desktop-1200:py-2 desktop-1200:px-6 desktop-1200:border-1"
                    >
                      Join Us
                    </Link>
                    <Link
                      to="/contribute#donation-table"
                      className="bg-secondary text-white px-4 md:px-8 desktop-1500:px-6 py-2 md:py-3 rounded-full hover:bg-opacity-90 flex items-center justify-center gap-2 text-sm md:text-xl flex-1 md:flex-none font-medium desktop-1200:text-lg desktop-1200:py-2 desktop-1200:gap-1 desktop-1200:px-6"
                    >
                      Donate <Heart className="h-4 w-4 md:h-5 md:w-5 desktop-1200:w-4 desktop-1200:h-4" fill="white" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-auto md:flex-shrink-0">
                  <div className="relative w-full desktop-1500:max-w-[500px] max-w-[600px] mx-auto desktop-1200:max-w-[400px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel dots - positioned at bottom center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 desktop-1200:w-2  desktop-1200:h-2 rounded-full transition-colors ${
                activeSlide === index ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

