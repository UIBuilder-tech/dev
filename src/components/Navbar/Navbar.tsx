import { Menu, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavLink from './NavLink';
import AuthModal from '../auth/AuthModal';
import logo from '../../assets/chfLogo.png';
import HomeIcon from '../../assets/navbar-home.svg';
import ProfileIcon from '../../assets/profileIcon.svg';
import ContactIcon from '../../assets/contactIcon.svg';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

// Custom hook for scroll behavior
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (Math.abs(currentScroll - prevScroll) < 5) return;

      const direction = currentScroll > prevScroll ? 'down' : 'up';
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevScroll]);

  return scrollDirection;
};

export default function Navbar() {
  const { data } = useContext(DataContext) ?? {};
  const scrollDirection = useScrollDirection();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed w-full transition-transform duration-300
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
          ${window.scrollY > 0 ? '' : ''}
          md:bg-gradient-to-b md:from-black/50 md:to-transparent
          bg-white md:bg-transparent
          z-40`}
      >
        <div className='max-w-7xl mx-auto w-full'>
          {/* Mobile Header */}
          <div className='md:hidden w-full px-4 py-4 flex items-center justify-between relative'>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className='text-secondary p-1'
            >
              <Menu className='h-6 w-6' />
            </button>

            <Link to='/' className='absolute left-1/2 -translate-x-1/2'>
              <img src={logo} alt='CHF Logo' className='mobile-logo' />
            </Link>

            <Link
              to='/contribute#donation-table'
              className='bg-secondary text-white text-sm px-4 py-2 rounded-full hover:bg-opacity-90 flex items-center gap-1'
            >
              Donate <Heart className='h-3 w-3' fill='white' />
            </Link>
          </div>

          {/* Desktop Header */}
          <div className='hidden md:flex justify-between items-center px-4 py-6 desktop-1900:py-8'>
            <Link
              to='/'
              className={`logo-container ${
                scrollDirection === 'down' ? '!hidden' : ''
              }`}
            >
              <img src={logo} alt='CHF Logo' className='logo' />
            </Link>

            <div className='w-[150px]' />

            <div className='flex items-center gap-10'>
              <div className='bg-white text-[20px] lg:text-[16px] desktop-1900:text-[20px] desktop-1500:text-[16px] desktop-1200:text-[14px] rounded-full px-8 flex items-center gap-10 desktop-1500:gap-8 desktop-1200:gap-5 font-medium'>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contribute'>Contribute</NavLink>
                <NavLink to='/events'>Events & News</NavLink>
              </div>

              <div className='bg-white backdrop-blur-sm rounded-full pl-6 flex items-center gap-5 desktop-1200:gap-4 desktop-1900:gap-5 desktop-1900:pl-8'>
                <Link to='/'>
                  <img
                    src={HomeIcon}
                    className='desktop-1500:w-6 desktop-1500:h-6 desktop-1200:w-6 desktop-1200:h-6 desktop-1900:w-8 desktop-1900:h-8 w-7 h-7'
                    alt='Home'
                  />
                </Link>
                <button onClick={() => setIsModalOpen(true)}>
                  <img
                    src={ProfileIcon}
                    className='desktop-1200:w-5 desktop-1200:h-6 desktop-1500:w-6 desktop-1500:h-6 desktop-1900:w-7 desktop-1900:h-7 w-7 h-7'
                    alt='Profile'
                  />
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    const element = document.getElementById('footer');
                    if (element) {
                      const targetPosition =
                        element.getBoundingClientRect().bottom;
                      window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <img
                    src={ContactIcon}
                    className='desktop-1200:w-6 desktop-1200:h-6 desktop-1500:w-6 desktop-1500:h-6 desktop-1900:w-7 desktop-1900:h-7 w-7 h-7 '
                    alt='Contact'
                  />
                </button>
                <Link
                  to='/contribute#donation-table'
                  className='bg-secondary text-white px-6 desktop-1200:py-3 desktop-1500:py-3 desktop-1200:py-[12px] desktop-1900:py-4 desktop-1200:px-5 py-4 rounded-full hover:bg-opacity-90 flex items-center gap-2 text-xl desktop-1200:text-lg desktop-1500:text-lg desktop-1200:text-sm desktop-1200:gap-1 desktop-1900:text-xl'
                >
                  Donate{' '}
                  <Heart
                    className='h-5 w-5 desktop-1200:h-4  desktop-1200:w-4  desktop-1900:w-5  desktop-1900:h-5'
                    fill='white'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <MobileNav />
    </>
  );
}
