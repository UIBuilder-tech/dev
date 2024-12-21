"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import cloud1 from "../../assets/cloud1.svg";
import cloud2 from "../../assets/cloud2.svg";
import cloud3 from "../../assets/cloud3.svg";
import mountain from "../../assets/mountain.svg";

// Sample FAQ data - you can replace with your actual data
const faqData = [
  {
    id: 1,
    question: "Are my donations to CHF tax-deductible in the United States?",
    answer:
      "Yes, donations to CHF are tax-deductible in the United States, as CHF is a 501(c)(3) organization.",
  },
  {
    id: 2,
    question:
      "Are my donations to CHF that I specify as Vantiga, tax-deductible in the United States?",
    answer:
      "Yes, donations designated as Vantiga are tax-deductible in the United States.",
  },
  {
    id: 3,
    question:
      "Do I always have to login (join) CHF when accessing the CHF website?",
    answer:
      "No, logging in or joining is not required for accessing the CHF website. However, certain actions, such as donating or joining as a member, may require you to log in.",
  },
  {
    id: 4,
    question:
      "What is the correct amount of Vantiga I need to pay per year to the Math?",
    answer:
      "The specific amount of Vantiga to be paid per year is not provided by CHF. You should consult the Shri Chitrapur Math for more information on the correct amount.",
  },
  {
    id: 5,
    question:
      "Will my name appear in the Vantiga Payers’ Directory that is published by the Math every 4 years? Can I specify that the donation be made anonymous?",
    answer:
      "Yes, your name will appear in the Vantiga Payers' Directory unless you specify that you wish to make your donation anonymously.",
  },
  {
    id: 6,
    question:
      "Can a non-bhanap family (where both partners are non-bhanaps) pay Vantiga?",
    answer:
      "Yes, a non-bhanap family can pay Vantiga. There are no restrictions on non-bhanap families contributing to Vantiga.",
  },
  {
    id: 7,
    question:
      "How do I specify the particular project to which I want to donate?",
    answer:
      "You can specify the project to which you want to donate by indicating your preference when making a donation through the CHF website or by contacting CHF directly.",
  },
  {
    id: 8,
    question:
      "Can I donate to a project in India, not on the list of projects currently supported by CHF?",
    answer:
      "Yes, you can donate to a project in India that is not currently listed on the CHF website. Please contact CHF for further guidance on such donations.",
  },
  {
    id: 9,
    question:
      "When and how (media) will I receive a receipt for my CHF donation?",
    answer:
      "You will receive a receipt for your CHF donation either via email or postal mail, depending on the method of donation. The receipt will be provided shortly after your donation is processed.",
  },
  {
    id: 10,
    question:
      "How can I hold a Satsang/Prarthana Class/CHF fund-raiser in my region/city?",
    answer:
      "To hold a Satsang, Prarthana class, or CHF fundraiser in your region or city, please reach out to CHF with your plans. They will assist you with organizing the event.",
  },
  {
    id: 11,
    question:
      "How do I submit a News item (such as articles, photos, and descriptions of an event in my region) for the CHF website?",
    answer:
      "You can submit a news item, including articles, photos, and event descriptions, by emailing it to CHF. They will review your submission and publish it on the website if it is relevant.",
  },
  {
    id: 12,
    question:
      "How can I announce an upcoming event to be held in my region that would be of interest to bhanaps (CSBs)?",
    answer:
      "To announce an upcoming event, you can submit the event details to CHF. They will help promote the event through their website and other communication channels.",
  },
  {
    id: 13,
    question:
      "How can I submit a trip report of my visit to India for publishing on the CHF website?",
    answer:
      "To submit a trip report of your visit to India, including attending a Math function, meeting Parama Pujya Swamiji, or attending a shibir, email your report to CHF. It will be considered for publication on the CHF website.",
  },
];

const itemsPerPage = 5;

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFaqs = faqData.slice(startIndex, startIndex + itemsPerPage);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

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
        <h1 className="mb-12 text-3xl md:text-5xl font-semibold text-[#4285f4]">
          FAQ's
        </h1>

        <div className="space-y-4">
          {currentFaqs.map((faq) => (
            <div key={faq.id} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="flex w-full items-center gap-4 text-left py-4 "
              >
                <span className="text-white flex items-center rounded-full bg-secondary p-1">
                  <Plus className="h-3 w-3 " />
                </span>
                <span className="text-gray-700 text-sm md:text-lg">
                  {faq.question}
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
                    <p className="text-gray-600">{faq.answer}</p>
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
                  className={`h-2 w-2 rounded-full ${
                    currentPage === index + 1 ? "bg-[#FF9966]" : "bg-gray-300"
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
