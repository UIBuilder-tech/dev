import { User, Phone, Heart, Layout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';
import { ReactComponent as ActiveHomeIcon } from '../../assets/activeHomeIcon.svg';



export default function MobileNav({profileClick, to}: {profileClick: () => void; to:string}, ) {
  const location = useLocation();

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('footer');
    if (element) {
      const targetPosition = element.getBoundingClientRect().bottom;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isHomeActive = location.pathname === '/';
  const isProfileActive = location.pathname === '/profile';
  const isContributeActive = location.pathname === '/contribute';
  const isProjectsActive = location.pathname === '/projects';

  return (
    <div
      className='fixed bottom-0 bg-secondary z-[9999] left-0 right-0 pt-3 pb-2 md:hidden rounded-t-3xl'
      style={{ boxShadow: '-8px 10px 20px 1px' }}
    >
      <div className='flex justify-between items-end px-8 relative'>
        <Link to={to} onClick={profileClick} className='flex flex-col items-center text-white'>
          <User className='h-6 w-6' fill={isProfileActive ? 'white' : 'none'} />
          <span className='text-xs mt-1.5'>Profile</span>
        </Link>
        <button
          onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
          className='flex flex-col items-center text-white'
        >
          <Phone className='h-6 w-6' />
          <span className='text-xs mt-1.5'>Contact</span>
        </button>
        <Link
          to='/'
          className='flex flex-col items-center text-white absolute left-1/2 -translate-x-1/2 -top-10'
        >
          <div className='bg-secondary p-4 pt-5 pb-2 rounded-full'>
            {isHomeActive ? (
              <ActiveHomeIcon className='text-white w-10 h-10' />
            ) : (
              <HomeIcon className='text-white w-10 h-10' />
            )}
          </div>
          <span className='text-xs'>Home</span>
        </Link>
        <div className='p-4 h-8 w-8'></div>
        <Link
          to='/contribute'
          className='flex flex-col items-center text-white'
        >
          <Heart
            className='h-6 w-6'
            fill={isContributeActive ? 'white' : 'none'}
          />
          <span className='text-xs mt-1.5'>Donate</span>
        </Link>
        <Link to='/projects' className='flex flex-col items-center text-white'>
          <Layout
            className='h-6 w-6'
            fill={isProjectsActive ? 'white' : 'none'}
            stroke={isProjectsActive ? 'gray' : 'white'}
          />
          <span className='text-xs mt-1.5'>Projects</span>
        </Link>
      </div>
    </div>
  );
}
