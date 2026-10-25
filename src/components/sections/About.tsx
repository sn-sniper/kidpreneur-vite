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
            <div className="flex items-center gap-2">
              <span className="text-kidpreneur-blue font-bold tracking-widest uppercase text-sm">About Us</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                Founded by Dr. Sarah Sidani
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-kidpreneur-slate leading-tight">
              Welcome to The Kidpreneur Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Where curiosity meets creativity, and young minds are empowered to explore, build, and grow. Founded by academic and youth entrepreneurship educator <strong className="text-slate-800">Dr. Sarah Sidani</strong>, we shift children from passive consumers of tech into confident inventors.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                {
                  title: "F.A.I.L. = First Attempt In Learning",
                  desc: "We celebrate mistakes as essential stepping stones. Children learn resilience and problem-solving without fear of getting things wrong."
                },
                {
                  title: "Active Creation Over Passive Screen Time",
                  desc: "Instead of endless scrolling, kids craft digital stories, program interactive robotics, and explore AI logic through fun play."
                },
                {
                  title: "Hands-on Entrepreneurship & Financial Smarts",
                  desc: "From understanding cost margins to pitching in front of parents and peers, learners discover the true power of value creation."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-kidpreneur-teal font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
