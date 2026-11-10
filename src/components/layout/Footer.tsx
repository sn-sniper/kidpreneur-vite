import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t-4 border-amber-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Byline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src="/kidpreneur-logo-light.png"
                alt="The Kidpreneur Journey - By Dr. Sarah Sidani"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-display font-bold text-xl text-white">
                The Kidpreneur Journey
              </span>
            </a>
            <p className="text-xs text-slate-400 font-medium">
              Founded & led by <strong className="text-slate-200">Dr. Sarah Sidani</strong>
            </p>
          </div>
          
          {/* Main Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#pathways" className="hover:text-amber-400 transition-colors">
              Pathways
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills We Teach
            </a>
            <a href="#blog" className="hover:text-amber-400 transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
            <a href="/portfolio" className="hover:text-teal-400 transition-colors">
              Portfolio
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/kidpreneur.journey/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              title="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/96179332143" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 The Kidpreneur Journey. All rights reserved.</p>
          <p className="text-slate-400">Where young minds learn to think, create, and lead.</p>
        </div>
      </div>
    </footer>
  );
}
