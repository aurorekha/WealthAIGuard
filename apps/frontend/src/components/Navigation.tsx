import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { Role } from '@/types';

interface NavItem {
  path: string;
  label: string;
  roles: Role[];
}

const navItems: NavItem[] = [
  { path: '/', label: 'Overview', roles: ['admin', 'advisor', 'client'] },
  { path: '/portfolios', label: 'Portfolios', roles: ['admin', 'advisor', 'client'] },
  { path: '/activity', label: 'Activity', roles: ['admin', 'advisor', 'client'] },
  { path: '/access', label: 'Access & Role', roles: ['admin', 'advisor', 'client'] },
];

export function Navigation() {
  const location = useLocation();
  const role = useAppSelector((state) => state.auth.role);

  const visibleItems = navItems.filter((item) => item.roles.includes(role));

  return (
    <nav className="glass-strong border-b border-dark-border sticky top-0 z-50 backdrop-blur-2xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <div className="text-2xl font-bold gradient-text">WealthAIGuard</div>
            <div className="ml-2 px-2 py-1 text-xs glass rounded-full border border-primary-500/30">
              <span className="text-primary-400 capitalize">{role}</span>
            </div>
          </div>
          <div className="flex space-x-1">
            {visibleItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-400 font-semibold bg-primary-500/15 border border-primary-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-dark-surface/60 border border-transparent'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-indigo"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

