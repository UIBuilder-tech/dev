import { Search } from "lucide-react";
import { useState } from "react";
import filter from "../../assets/filter.svg";

const categories = [
  "Heritage Preservation",
  "Women Empowerment",
  "Education",
  "Special Projects",
];
const tabs = [
  [
    "Heritage Preservation",
    "Women Empowerment",
    "Education",
    "Special Projects",
  ],
  [
    "Heritage Preservation",
    "Women Empowerment",
    "Education",
    "Special Projects",
    "XYZ Project",
  ],
  [
    "Heritage Preservation",
    "Women Empowerment",
    "Education",
    "Special Projects",
    "XYZ Project",
  ],
];

interface FilterSearchProps {
  onDefaultDonationChange: (checked: boolean) => void;
}

export default function FilterSearch({
  onDefaultDonationChange,
}: FilterSearchProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useDefaultDonation, setUseDefaultDonation] = useState(false);

  const handleDefaultDonationChange = () => {
    const newValue = !useDefaultDonation;
    setUseDefaultDonation(newValue);
    onDefaultDonationChange(newValue);
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4">
        {/* <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 italic max-sm:text-sm text-gray-600"
        >
          <span className="text-primary">
            <img loading="lazy" src={filter} className="h-5 w-5" />
          </span>{" "}
          Filter & Search
        </button> */}
        <button
          className="text-gray-600 hover:text-primary flex items-center gap-2 max-sm:text-sm"
          onClick={handleDefaultDonationChange}
        >
          Default Donation
          <span
            className={`w-5 h-5 rounded border border-gray flex items-center justify-center ${
              useDefaultDonation ? "bg-primary text-white" : "bg-[#D3D3D3]"
            }`}
          >
            {useDefaultDonation && "✓"}
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary">≡ Filter & Search</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-primary"
              >
                ✕
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Type your search"
                className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600 mb-2">Category</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-3 py-1 rounded-full text-sm bg-white border border-gray-200 text-gray-700 hover:border-primary/30"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Tabs</div>
                <div className="space-y-2">
                  {tabs.map((row, i) => (
                    <div key={i} className="flex flex-wrap gap-2">
                      {row.map((tab) => (
                        <button
                          key={tab}
                          className="px-3 py-1 rounded-full text-sm bg-white border border-gray-200 text-gray-700 hover:border-primary/30"
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
