import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Rocket, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../auth/AuthModal';
import type { AuthMode } from '../auth/AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Vision', href: '#vision' },
  ];

  const [activities, setActivities] = useState<{name: string, href: string}[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchActivities = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${apiUrl}/api/portfolio/activities`);
        if (res.ok && mounted) {
          const data = await res.json();
          setActivities(data.activities);
        }
      } catch (error) {
        console.error('Failed to fetch activities', error);
      }
    };
    fetchActivities();
    return () => { mounted = false; };
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 inset-s-0 bg-kidpreneur-offwhite/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-kidpreneur-teal" />
            <a href="#" className="text-2xl font-display font-bold text-kidpreneur-slate">
              The Kidpreneur Journey
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-kidpreneur-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-kidpreneur-blue font-medium transition-colors py-2">
                Our Activities <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:-rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg py-2 border border-gray-100">
                  {activities.map((activity) => {
                    const nextUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
                    const href = activity.name === 'The Kidpreneur Lab' ? `${nextUrl}/register/lab` : activity.href;
                    return (
                      <a
                        key={activity.name}
                        href={href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-kidpreneur-offwhite hover:text-kidpreneur-blue transition-colors"
                      >
                        {activity.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="text-gray-700 hover:text-kidpreneur-blue font-medium transition-colors"
            >
              Contact Us
            </a>

            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-kidpreneur-teal flex items-center justify-center text-white">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-kidpreneur-slate text-sm">{user.fullName}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Log Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setAuthMode('login')}
                    className="text-kidpreneur-slate font-bold hover:text-kidpreneur-blue transition-colors"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => setAuthMode('register')}
                    className="bg-kidpreneur-yellow text-kidpreneur-slate px-5 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-sm"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kidpreneur-offwhite hover:text-kidpreneur-blue"
            >
              {link.name}
            </a>
          ))}
          <div className="py-2">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Our Activities</p>
            {activities.map((activity) => {
              const nextUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
              const href = activity.name === 'The Kidpreneur Lab' ? `${nextUrl}/register/lab` : activity.href;
              return (
                <a
                  key={activity.name}
                  href={href}
                  className="block px-3 py-2 mt-1 rounded-md text-base font-medium text-gray-700 hover:bg-kidpreneur-offwhite pl-6"
                >
                  {activity.name}
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kidpreneur-offwhite"
          >
            Contact Us
          </a>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
            {user ? (
              <button 
                onClick={logout}
                className="w-full flex justify-center items-center gap-2 text-red-500 font-bold border border-red-200 py-2.5 rounded-full hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" /> Log Out
              </button>
            ) : (
              <>
                <button 
                  onClick={() => setAuthMode('login')}
                  className="w-full text-center text-kidpreneur-slate font-bold border border-kidpreneur-slate py-2.5 rounded-full"
                >
                  Log In
                </button>
                <button 
                  onClick={() => setAuthMode('register')}
                  className="w-full bg-kidpreneur-yellow text-kidpreneur-slate py-2.5 rounded-full font-bold shadow-sm"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Unified Auth Modal */}
      <AuthModal 
        isOpen={authMode !== null}
        initialMode={authMode || 'login'}
        onClose={() => setAuthMode(null)}
      />
    </nav>
  );
}
