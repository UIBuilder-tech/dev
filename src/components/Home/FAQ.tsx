"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import cloud1 from "../../assets/cloud1.svg";
import cloud2 from "../../assets/cloud2.svg";
import cloud3 from "../../assets/cloud3.svg";
import mountain from "../../assets/mountain.svg";

const itemsPerPage = 5;
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageData, setPageData] = useState([]);

  const totalPages = Math.ceil(PageData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFaqs = PageData?.slice(startIndex, startIndex + itemsPerPage);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${AdminPanelUrl}/faqs`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result?.data) {
            setPageData(result.data)
          }
        })
        .catch(error => console.log('error', error));
    }
    api();
  }, [])
  return (
    <div className="relative h-[650px] px-4 mt-16 py-12 mb-5 md:px-8">
      {/* Cloud 1 - Top right */}
      <div className="absolute top-0 right-0 w-32 h-16">
        <img
          src={cloud1}
          alt="Cloud 1"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Cloud 2 - Top center-right */}
      <div className="absolute top-12 right-[22%] md:right-[10%] w-24 h-12">
        <img
          src={cloud2}
          alt="Cloud 2"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Cloud 3 - Top center */}
      <div className="absolute top-4 right-[40%] md:right-[20%] w-20 h-10">
        <img
          src={cloud3}
          alt="Cloud 3"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-[10] mx-auto max-w-3xl">
        <h1 className="mb-12 text-3xl md:text-5xl text-primary desktop-1900:text-6xl">
          FAQs
        </h1>
        <div
          className="space-y-4 max-h-[450px] desktop-1900:max-h-[400px] overflow-y-scroll "
          style={{ scrollbarWidth: "none" }}
        >
          {currentFaqs.map((faq) => (
            <div key={faq.id} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="flex w-full items-center gap-4 text-left py-4 "
              >
                <span className="text-white flex items-center rounded-full bg-secondary p-1">
                  <Plus className="h-3 w-3 " />
                </span>
                <span className="text-gray-700 text-sm md:text-lg dxesktop-1900:text-xl">
                  {faq.Question}
                </span>
              </button>
              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-9 mb-4"
                  >
                    <p className="text-gray-600 desktop-1900:text-lg">
                      {faq.Answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="border-b border-gray-500" />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`h-2 w-2 rounded-full ${currentPage === index + 1 ? "bg-[#FF9966]" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mountain shape at the bottom */}
      <div className="absolute bottom-0 md:-bottom-10 left-0 right-0 -z-9 overflow-hidden">
        <img
          src={mountain}
          alt="Mountain"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
