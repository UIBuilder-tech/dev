import { Search } from 'lucide-react'
import { useState } from 'react';
import filter from '../../assets/filter.svg'

const categories = ['Heritage Preservation', 'Women Empowerment', 'Education', 'Special Projects'];
const tabs = [
  ['Heritage Preservation', 'Women Empowerment', 'Education', 'Special Projects'],
  ['Heritage Preservation', 'Women Empowerment', 'Education', 'Special Projects', 'XYZ Project'],
  ['Heritage Preservation', 'Women Empowerment', 'Education', 'Special Projects', 'XYZ Project']
];

interface FilterSearchProps {
  onDefaultDonationChange: (checked: boolean) => void;
}

export default function FilterSearch({ onDefaultDonationChange }: FilterSearchProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useDefaultDonation, setUseDefaultDonation] = useState(false);

  const handleDefaultDonationChange = () => {
    const newValue = !useDefaultDonation;
    setUseDefaultDonation(newValue);
    onDefaultDonationChange(newValue);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-end items-center gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 italic text-gray-600"
        >
          <span className="text-primary"><img src={filter} className='h-5 w-5'/></span> Filter & Search
        </button>
        <button 
          className="text-gray-600 hover:text-primary flex items-center gap-2"
          onClick={handleDefaultDonationChange}
        >
          Default Donation 
          <span className={`w-5 h-5 rounded border border-gray flex items-center justify-center ${useDefaultDonation ? 'bg-primary text-white' : 'bg-[#D3D3D3]'}`}>
            {useDefaultDonation && '✓'}
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            {/* Modal content remains unchanged */}
          </div>
        </div>
      )}
    </div>
  );
}

