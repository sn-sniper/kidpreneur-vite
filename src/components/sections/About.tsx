export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square bg-kidpreneur-yellow/20 rounded-[3rem] p-6 relative">
              <div className="w-full h-full bg-kidpreneur-lightblue/40 rounded-[2.5rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative">
                <img src="/About.png" alt="About The Kidpreneur Journey" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-kidpreneur-teal rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-center leading-tight">Since<br/>2024</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-kidpreneur-blue font-bold tracking-widest uppercase text-sm">About Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-kidpreneur-slate leading-tight">
              Welcome to The Kidpreneur Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Where curiosity meets creativity, and young minds are empowered to explore, build, and grow. We inspire children to discover their potential through hands-on experiences.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Learning should be interactive and hands-on, where mistakes are welcomed as essential parts of growth.",
                "Curiosity is where innovation begins, spark it and extraordinary things happen.",
                "We focus on future-focused skills to empower lasting creativity and adaptability."
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-kidpreneur-offwhite flex items-center justify-center text-kidpreneur-teal font-bold shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
