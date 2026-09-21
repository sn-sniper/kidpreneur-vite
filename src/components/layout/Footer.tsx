import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-kidpreneur-teal" />
            <span className="text-xl font-display font-bold text-kidpreneur-slate">
              The Kidpreneur Journey
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-kidpreneur-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-kidpreneur-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-kidpreneur-blue transition-colors">Placeholder Link</a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Kidpreneur Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
