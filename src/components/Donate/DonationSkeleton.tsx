import React from "react";
import { ChevronDown } from "lucide-react";

const DonationSkeleton = () => {
  const items = 3; // Number of skeleton items to show

  return (
    <div className="bg-cream rounded-lg p-5 md:px-16 mx-auto py-16 animate-pulse">
      {/* Header Section */}
      <div className="mb-3 md:mb-6 flex flex-row items-center justify-between">
        <div className="h-8 md:h-10 w-32 bg-gray-200 rounded"></div>
        <div className="h-8 w-32 md:w-40 bg-gray-200 rounded"></div>
      </div>

      {/* Category Section */}
      <div className="space-y-4">
        {/* Education Section */}
        <div className="border-b border-gray-300">
          <div className="w-full flex items-center justify-between py-4">
            <div className="h-6 w-28 bg-gray-200 rounded"></div>
            <ChevronDown className="h-5 w-5 text-gray-200" />
          </div>

          {/* Mobile View Items */}
          <div className="md:hidden space-y-8 pb-6">
            {[...Array(items)].map((_, index) => (
              <div
                key={index}
                className="space-y-4 border-t border-gray-300 pt-4"
              >
                {/* Item Name */}
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>

                {/* Amount and Quantity Row */}
                <div className="flex items-center space-x-4">
                  <div className="w-1/3">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                  <span className="text-gray-300">x</span>
                  <div className="w-1/3">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                  <span className="text-gray-300">=</span>
                  <div className="w-1/3">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Remarks */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-10 bg-gray-200 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View Table */}
          <div className="hidden md:block pb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 w-1/3">
                    <div className="h-5 bg-gray-200 rounded"></div>
                  </th>
                  <th className="py-2 w-1/6">
                    <div className="h-5 bg-gray-200 rounded"></div>
                  </th>
                  <th className="py-2 w-1/6">
                    <div className="h-5 bg-gray-200 rounded"></div>
                  </th>
                  <th className="py-2 w-1/6">
                    <div className="h-5 bg-gray-200 rounded"></div>
                  </th>
                  <th className="py-2 w-1/4">
                    <div className="h-5 bg-gray-200 rounded"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(items)].map((_, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="py-4">
                      <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-4">
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-4">
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-4">
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-10 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Categories (collapsed) */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="border-b border-gray-300">
            <div className="w-full flex items-center justify-between py-4">
              <div className="h-6 w-28 bg-gray-200 rounded"></div>
              <ChevronDown className="h-5 w-5 text-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Total Amount Section */}
      <div className="mt-6 p-4 float-right md:w-1/2">
        <div className="flex flex-row items-center justify-end w-full gap-4">
          <div className="h-5 w-40 bg-gray-200 rounded"></div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default DonationSkeleton;
