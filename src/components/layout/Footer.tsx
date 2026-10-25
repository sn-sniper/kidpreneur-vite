import { Link } from 'react-router-dom';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.jpg"
                alt="The Kidpreneur Journey - By Dr. Sarah Sidani"
                className="h-12 sm:h-14 w-auto object-contain rounded-xl shadow-xs group-hover:scale-[1.02] transition-transform"
              />
            </Link>
            <p className="text-xs text-gray-500 font-medium">
              Founded & Led by Dr. Sarah Sidani
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/portfolio" className="text-gray-500 hover:text-kidpreneur-teal transition-colors font-medium">
              Portfolio & Activities
            </Link>
            <a 
              href="https://www.instagram.com/kidpreneur.journey/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-pink-600 font-semibold transition-colors bg-pink-50/60 hover:bg-pink-50 px-3 py-1 rounded-full border border-pink-100"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>@kidpreneur.journey</span>
            </a>
            <a href="/#contact" className="text-gray-500 hover:text-kidpreneur-blue transition-colors">
              Contact Us
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Kidpreneur Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
