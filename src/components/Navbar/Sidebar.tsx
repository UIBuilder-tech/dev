import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/chfLogo.png';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('about');

  const menuSections = {
    about: [
      { label: 'Our Vision & Mission', id: 'vision-mission' },
      { label: 'Our Projects', id: 'our-projects' },
      { label: 'Our Impact', id: 'our-impact' },
      { label: 'CHF Ambassador', id: 'chf-ambassador' },
      { label: 'Photo Gallery', id: 'photo-gallery' },
      { label: 'Newsletter', id: 'newsletter' },
      { label: 'Our Team', id: 'our-team' },
      { label: "FAQ's", id: 'faqs' },
    ],
    projects: [
      { label: 'Our Projects', id: 'our-projects' },
      { label: 'Education', id: 'education' },
      { label: 'Women Empowerment', id: 'women-empowerment' },
      { label: 'CHF Ambassador', id: 'chf-ambassador' },
      { label: 'Heritage Preservation', id: 'heritage-preservation' },
      { label: 'Special Projects', id: 'special-projects' },
      { label: 'CHF Grants', id: 'chf-grants' },
    ],
    contribute: [
      { label: 'What is Vantiga?', id: '/contribute/#vantiga' },
      { label: 'Donate', id: '/contribute#donation-table' },
      { label: 'Payment', id: '/contribute#payment' },
      { label: 'Volunteer', id: '/contribute#volunteer' },
    ],
    events: [
      { label: 'Featured News', id: 'featured-news' },
      { label: 'Festivals', id: 'festivals' },
      { label: 'Get Togethers', id: 'get-togethers' },
      { label: 'Children & Youth Activities', id: 'children-activities' },
    ],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[99998] md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 bottom-0 w-4/5 bg-secondary z-50 md:hidden z-[99999]"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/20 bg-white">
              <Link to="/" className="w-24">
                <img src={logo} alt="CHF Logo" className="w-full" />
              </Link>
              <button onClick={onClose} className="text-secondary">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="overflow-y-auto h-[calc(100%-80px)]">
              {Object.entries(menuSections).map(([key, items]) => (
                <div key={key} className="border-b border-white/20">
                  <button
                    onClick={() =>
                      setExpandedSection(expandedSection === key ? null : key)
                    }
                    className="flex justify-between items-center w-full p-4 text-white text-left"
                  >
                    <span className="capitalize">{key}</span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${
                        expandedSection === key ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === key && items.length > 0 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-white/10"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.id}
                          to={`${item.id}`}
                          onClick={onClose} // Close the sidebar after navigation
                          className="block px-6 py-2 text-white/90 hover:bg-white/20"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-secondary border-t border-white/20">
              <div className="flex gap-4">
                <Link
                  to="/join"
                  className="flex-1 py-2 px-4 bg-white text-secondary rounded-full text-center font-medium"
                >
                  Join Us
                </Link>
                <Link
                  to="/donate"
                  className="flex-1 py-2 px-4 bg-white text-secondary rounded-full text-center font-medium"
                >
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
