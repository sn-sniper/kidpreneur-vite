import { Target, Sparkles, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b-2 border-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Our Origin & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            About The Kidpreneur Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            An initiative founded by <strong className="text-slate-900 font-bold">Dr. Sarah Sidani</strong> to introduce children to entrepreneurship in a way that is practical, creative, and joyful.
          </p>
          <p className="text-slate-600 text-base leading-relaxed font-sans mt-2">
            We believe young people don’t need to wait until adulthood to create value. With the right guidance, they can start now.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-amber-50/60 rounded-3xl p-8 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-200/80 border-2 border-slate-900 flex items-center justify-center text-amber-900">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed font-sans text-base">
              To nurture the next generation of confident thinkers, creators, and leaders by teaching entrepreneurial skills through hands-on experience.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-teal-50/60 rounded-3xl p-8 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-200/80 border-2 border-slate-900 flex items-center justify-center text-teal-900">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed font-sans text-base">
              A world where every child sees themselves as capable of spotting opportunities, solving problems, and making a difference.
            </p>
          </div>

        </div>

        {/* Our 3-Step Approach */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
              Our 3-Step Approach
            </h3>
            <p className="text-slate-600 text-sm font-sans">
              Simple, experiential, and proven framework for young innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-amber-400 border-2 border-slate-900 font-bold flex items-center justify-center text-slate-900 font-display text-lg">
                1
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">Explore</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Kids discover their passions, spot hidden frustrations around them, and map opportunities in their everyday world.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-slate-900 font-bold flex items-center justify-center text-slate-900 font-display text-lg">
                2
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">Create</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                They design, sketch, and build concrete prototypes through iterative teamwork, problem-solving, and fun experimentation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-slate-900 font-bold flex items-center justify-center text-slate-900 font-display text-lg">
                3
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">Pitch</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                They share their solutions with courage and clarity, receive constructive feedback, and celebrate their growth.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Founder Profile Card */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 sm:p-12 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b]">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-3xl overflow-hidden border-3 border-slate-900 shadow-md">
              <img 
                src="/About.png" 
                alt="Dr. Sarah Sidani - Founder of The Kidpreneur Journey" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold uppercase tracking-wider">
                <span>Meet the Founder</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
                Dr. Sarah Sidani
              </h3>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
                Dr. Sarah Sidani created The Kidpreneur Journey to give children the tools to turn curiosity into action. She believes that when children are trusted with real challenges, they rise to meet them.
              </p>
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/kidpreneur.journey/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-bold text-sm"
                >
                  <span>Connect with Dr. Sarah on Instagram</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
