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
    question:
      "Are my donations to CHF including Vantiga tax-deductible in the United States?",
    answer:
      "Since CHF is recognized by the IRS as a 501(c)(3) not-for-profit organization (EIN 20-2738955), donations and Vantiga to it are tax-deductible. However, please check with your tax consultant for the specific deductions that would apply in your specific case.",
  },
  {
    id: 2,
    question:
      "What is the correct amount of Vantiga I need to pay per year to the Math?",
    answer:
      "Our revered H.H. Shrimat Anandashram Swamiji said – 'If all paid Vantiga at the rate of 1% of their income, the daily as well as occasional services at the Maths could be performed without any anxiety and the sadhana contemplated by us could be accomplished with peace of mind.' CHF recommends considering donations at the following suggested levels: Vantiga at 1% of your annual income or at a minimum of $1.50/day. Further, donations for special projects in any amount are welcome.",
  },
  {
    id: 3,
    question:
      "Do I always have to login (join) CHF when accessing the CHF website?",
    answer:
      "Our CHF website at www.chfusa.org has member-specific content available for you. Such content will be of use for any and all Bhanaps in the US. The benefits of enrolling in the CHF USA website include receiving newsletters, getting invites to CHF events, downloading donation receipts, processing donations with minimal data entry, and accessing a directory of members (coming soon). Membership is restricted to Bhanaps for security.",
  },
  {
    id: 4,
    question:
      "How do I specify the particular project to which I want to donate?",
    answer:
      "The donation page on the CHF website allows you to specify how you want to split the donated amount between various projects, support-a-student, Vantiga, or the general fund. CHF recommends donations at the following levels: Support A Student at $300/year per student supported and Vantiga at 1% of your annual income or at a minimum of $1/day.",
  },
  {
    id: 5,
    question:
      "When and how (media) will I receive a receipt for my CHF donation?",
    answer:
      "We provide receipts electronically if an email address is provided during login or updated later. If you desire a physical receipt, send your details to contactus@chfusa.org with a postal address, and a hardcopy receipt will be mailed to that address.",
  },
  {
    id: 6,
    question: "How can I hold a CHF-supported event in my region/city?",
    answer:
      "Please contact any CHF Board member or Ambassador. We will be happy to support you with a list of members in the area and ideas for conducting the event. Please reach out to us using contactus@chfusa.org .",
  },
  {
    id: 7,
    question:
      "How do I submit a News item (such as articles, photos, and a description of an event in my region) for the CHF website?",
    answer:
      "Please choose the location on our website where you would like your details to be published. We will work with the website editorial team to get your content published. Send the details to webmaster@chfusa.org, and volunteers from the web team will get in touch with you.",
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
        <h1 className="mb-12 text-3xl md:text-5xl text-primary desktop-1900:text-6xl">
          FAQ's
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
                    <p className="text-gray-600 desktop-1900:text-lg">
                      {faq.answer}
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
