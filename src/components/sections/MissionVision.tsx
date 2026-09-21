import { Target, Lightbulb } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-24 bg-kidpreneur-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-kidpreneur-slate mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the core values driving The Kidpreneur Journey forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl shadow-kidpreneur-lightblue/20 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-2xl bg-kidpreneur-yellow/20 flex items-center justify-center mb-8">
              <Target className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-display font-bold text-kidpreneur-slate mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our mission is to inspire children to discover their full potential through engaging, hands-on experiences that build confidence, creativity, critical problem-solving, and an entrepreneurial mindset.
            </p>
            <div className="h-1.5 w-20 bg-kidpreneur-yellow rounded-full"></div>
          </div>

          {/* Vision Card */}
          <div
            id="vision"
            className="bg-kidpreneur-slate rounded-4xl p-8 md:p-12 shadow-xl shadow-kidpreneur-slate/30 text-white hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <Lightbulb className="w-10 h-10 text-kidpreneur-yellow" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              We envision a world where every child is empowered to turn curiosity into action, developing the resilience, innovative mindset, and future-ready skills needed to shape tomorrow's world.
            </p>
            <div className="h-1.5 w-20 bg-kidpreneur-teal rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
