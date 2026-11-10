import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-kidpreneur-offwhite bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/kidpreneur_hero_background.svg')" }}
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-16 left-8 w-72 h-72 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute top-36 right-8 w-80 h-80 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
          Where young minds learn to <br className="hidden sm:inline" />
          <span className="text-kidpreneur-teal">think</span>,{' '}
          <span className="text-amber-500">create</span>, and{' '}
          <span className="text-indigo-600">lead</span>.
        </h1>
        
        {/* Subtitle / Lead */}
        <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-600 mx-auto mb-10 leading-relaxed font-sans font-medium">
          The Kidpreneur Journey helps children discover their ideas, build real-world skills, and gain the confidence to turn curiosity into action.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#pathways" 
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 border-2 border-slate-900 px-8 py-3.5 rounded-full font-bold text-base shadow-[3px_3px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <span>Explore pathways</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-900 px-8 py-3.5 rounded-full font-bold text-base shadow-[3px_3px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <span>Meet Dr. Sarah</span>
          </a>
        </div>

        {/* Journey Path SVG Illustration: 💡 Spark -> 🛠️ Build -> 🎤 Pitch */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white/80 backdrop-blur-xs rounded-3xl border-2 border-slate-900/10 shadow-sm">
            <svg 
              className="w-full h-auto max-h-36 sm:max-h-44" 
              viewBox="0 0 900 160" 
              role="img" 
              aria-label="A path from a spark of an idea, through building, to a pitch on stage"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#0f9b8e" />
                  <stop offset="100%" stopColor="#7b4bd1" />
                </linearGradient>
              </defs>

              {/* Connecting Dotted / Dashed Path */}
              <path 
                d="M60 100 C 220 20, 320 150, 450 85 S 720 20, 840 95" 
                fill="none" 
                stroke="url(#pathGradient)" 
                strokeWidth="5" 
                strokeDasharray="6 12" 
                strokeLinecap="round"
              />
              
              {/* Step 1: Spark */}
              <g transform="translate(60, 100)">
                <circle cx="0" cy="0" r="32" fill="#ffc93c" stroke="#1e293b" strokeWidth="3" />
                <text x="0" y="10" textAnchor="middle" fontSize="30">💡</text>
                <text x="0" y="52" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e293b" fontFamily="sans-serif">Spark an Idea</text>
              </g>

              {/* Step 2: Build */}
              <g transform="translate(450, 85)">
                <circle cx="0" cy="0" r="32" fill="#14baa9" stroke="#1e293b" strokeWidth="3" />
                <text x="0" y="10" textAnchor="middle" fontSize="30">🛠️</text>
                <text x="0" y="52" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e293b" fontFamily="sans-serif">Build & Test</text>
              </g>

              {/* Step 3: Pitch */}
              <g transform="translate(840, 95)">
                <circle cx="0" cy="0" r="32" fill="#a78bfa" stroke="#1e293b" strokeWidth="3" />
                <text x="0" y="10" textAnchor="middle" fontSize="30">🎤</text>
                <text x="0" y="52" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e293b" fontFamily="sans-serif">Pitch with Confidence</text>
              </g>
            </svg>
          </div>
        </div>

      </div>

      {/* Highlight Mission Band */}
      <div className="mt-16 sm:mt-20 border-y-2 border-slate-900 bg-amber-50/90 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Our Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 leading-snug">
            Every child has ideas worth listening to.
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            Entrepreneurship is more than starting a business. It is a way of seeing problems as opportunities, working with others, and speaking up with confidence. Through hands-on, playful, and purposeful learning, we help kids build a mindset and skills they will use for life.
          </p>
        </div>
      </div>
    </section>
  );
}
