import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ to, children, className = '' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`${className} ${isActive ? 'bg-secondary text-white' : 'text-dark hover:text-primary'} px-6 py-4 desktop-1200:py-3 desktop-1900:py-4 rounded-full transition-colors`}
    >
      {children}
    </Link>
  );
}