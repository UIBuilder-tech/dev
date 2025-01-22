import React from "react";

const DonationSkeleton = () => {
  // Mock data to represent number of rows in each section
  const educationRows = 5;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
        <div className="h-8 w-40 bg-gray-200 rounded"></div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <div className="h-6 w-28 bg-gray-200 rounded mb-4"></div>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="h-5 w-32 bg-gray-200 rounded"></div>
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-5 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Table Rows */}
        {Array.from({ length: educationRows }).map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Other Sections (Heritage, Women Empowerment, Special Projects) */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={`section-${index}`} className="mb-8">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 w-full bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default DonationSkeleton;
