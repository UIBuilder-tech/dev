import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Heart, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/chfLogo.png';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface navigationProp{
    label: string;
    page: string;
    id: string;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('about');
  const navigate = useNavigate();

  const menuSections = {
    about: [
      { label: 'Our Vision & Mission',page:'about', id: 'vision-mission' },
      { label: 'Our Projects',page:'about', id: 'our-projects' },
      { label: 'Our Impact',page:'about', id: 'our-impact' },
      { label: 'CHF Ambassador',page:'about', id: 'chf-ambassador' },
      { label: 'Photo Gallery',page:'about', id: 'photo-gallery' },
      { label: 'Newsletter',page:'about', id: 'newsletter' },
      { label: 'Our Team',page:'about', id: 'our-team' },
      { label: "FAQ's",page:'about', id: 'faqs' },
    ],
    projects: [
      { label: 'Our Projects',page:'projects', id: 'our-projects' },
      { label: 'Education',page:'projects', id: 'education' },
      { label: 'Women Empowerment',page:'projects', id: 'women-empowerment' },
      { label: 'CHF Ambassador',page:'projects', id: 'chf-ambassador' },
      { label: 'Heritage Preservation',page:'projects', id: 'heritage-preservation' },
      { label: 'Special Projects',page:'projects', id: 'special-projects' },
      { label: 'CHF Grants',page:'projects', id: 'chf-grants' },
    ],
    contribute: [
      { label: 'What is Vantiga?',page:'contribute', id: 'vantiga' },
      { label: 'Donate',page:'contribute', id: 'donation-table' },
      { label: 'Payment',page:'contribute', id: 'payment' },
      { label: 'Volunteer',page:'contribute', id: 'volunteer' },
    ],
    events: [
      { label: 'Featured News',page:'events', id: 'featured-news' },
      { label: 'Festivals',page:'events', id: 'festivals' },
      { label: 'Get Togethers',page:'events', id: 'get-togethers' },
      { label: 'Children & Youth Activities',page:'events', id: 'children-activities' },
    ],
  };

  const handleNavigation = (section:navigationProp) => {
    onClose();
      // If we're on a different page, navigate and then scroll
      navigate(`/${section?.page}#${section?.id}`);
  };

  const handlePageNavigation = (key:string) => {
    onClose();
      // If we're on a different page, navigate and then scroll
      navigate(`/${key}`);
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
                    className="flex justify-between items-center w-full p-4 text-white text-left"
                  >
                    <span
                    onClick={() =>
                      handlePageNavigation(key)
                    }
                     className="capitalize">{key}</span>
                    <ChevronRight
                    onClick={() =>
                      setExpandedSection(expandedSection === key ? null : key)
                    }
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
                        <button
                          key={item.id}
                          onClick={() =>{handleNavigation(item)}}
                          className="block px-6 py-2 text-white/90 hover:bg-white/20"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-secondary border-t border-white/20">
              <div className="flex gap-4">
                <button
                  onClick={()=>{onClose();navigate("/contribute#volunteer")}}
                  className="flex-1 py-2 px-4 bg-white text-secondary rounded-full text-center font-medium"
                >
                  Join Us
                </button>
                <button
                  onClick={()=>{onClose();navigate("/contribute#donation-table")}}
                  className="flex-1 py-2 px-4 bg-white text-secondary rounded-full text-center font-medium flex items-center justify-center gap-2"
                >
                  Donate <Heart className="h-5 w-5" fill="#e67e22" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
