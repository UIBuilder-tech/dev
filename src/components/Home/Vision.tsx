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
      <div className="mx-auto bg-white rounded-3xl px-4 md:px-10 py-10 md:py-12 relative">
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
                <div className="w-full md:max-w-2xl md:ml-4">
                  <h2 className="font-display text-3xl md:text-4xl mb-4 md:mb-6 text-secondary">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg text-[#808080] mb-6 md:mb-8">
                    {slide.content}
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
              className={`w-2 h-2 rounded-full transition-colors ${
                activeSlide === index ? "bg-secondary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

