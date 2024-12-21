import { Home, User, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import IconNavLink from './IconNavLink';
import logo from '../../assets/chfLogo.png'
import { useEffect, useState } from 'react';

  // Custom hook for scroll behavior
  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [prevScroll, setPrevScroll] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        // Only trigger when scrolling more than 5px to prevent tiny movements
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
  const scrollDirection = useScrollDirection();


  return (
    <nav className={`fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className={`logo-container ${
      scrollDirection === 'down' ? '!hidden' : 'translate-y-0'
    }`}>
            <img 
              src={logo}
              alt="CHF Logo" 
              className="logo"
            />
          </Link>
          <div className='w-[150px]'></div>

          <div className="flex items-center gap-10">
            <div className="bg-white rounded-full px-8 flex items-center gap-10">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contribute">Contribute</NavLink>
              <NavLink to="/events">Events & News</NavLink>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-full pl-4  flex items-center gap-4">
              <IconNavLink to="/" icon={Home} />
              <IconNavLink to="/profile" icon={User} />
              <IconNavLink to="/contact" icon={Phone} />
              <Link
                to="/donate"
                className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2"
              >
                Donate <Heart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}