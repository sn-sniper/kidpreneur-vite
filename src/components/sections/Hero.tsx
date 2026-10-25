import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-kidpreneur-offwhite bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/kidpreneur_hero_background.svg')" }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-kidpreneur-lightblue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-kidpreneur-yellow/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <a
          href="https://www.instagram.com/kidpreneur.journey/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-pink-200/80 shadow-sm mb-8 text-slate-700 hover:text-pink-600 font-semibold text-xs sm:text-sm group transition-all hover:scale-105"
        >
          <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
          <span>Founded by Dr. Sarah Sidani</span>
          <span className="text-gray-300">•</span>
          <span className="text-pink-600 font-bold group-hover:underline">@kidpreneur.journey</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-1" />
        </a>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-kidpreneur-slate mb-6 leading-tight">
          Inspiring the Next <br />
          <span className="text-kidpreneur-blue">Generation of Leaders</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 mx-auto mb-10 leading-relaxed font-sans">
          Instead of asking <span className="font-semibold text-kidpreneur-slate">"What will they become?"</span>, we ask <span className="font-semibold text-kidpreneur-teal">"What skills are we helping them build today?"</span> We turn passive screen time into active creation through hands-on entrepreneurship, AI logic, and robotics labs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 bg-kidpreneur-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Explore Activities & Labs <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href="#about" 
            className="bg-white text-kidpreneur-slate border-2 border-kidpreneur-slate/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
          >
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
}
