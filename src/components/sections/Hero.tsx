import { Sparkles, ArrowRight } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-kidpreneur-lightblue shadow-sm mb-8 text-kidpreneur-teal font-semibold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Placeholder for an exciting announcement!</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-kidpreneur-slate mb-6 leading-tight">
          Inspiring the Next <br />
          <span className="text-kidpreneur-blue">Generation of Leaders</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 mx-auto mb-10 leading-relaxed font-sans">
          This is a placeholder description. The Kidpreneur Journey helps young minds turn ideas into extraordinary solutions through an interactive adventure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-kidpreneur-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all hover:shadow-lg hover:-translate-y-1">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-kidpreneur-slate border-2 border-kidpreneur-slate/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
