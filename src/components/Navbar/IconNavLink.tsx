import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface IconNavLinkProps {
  to: string;
  icon: LucideIcon;
}

export default function IconNavLink({ to, icon: Icon }: IconNavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isActive ? "text-secondary" : "text-secondary"
      } hover:text-secondary transition-colors`}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
