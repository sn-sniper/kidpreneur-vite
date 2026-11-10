export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 bg-[#fffdf7] border-t-2 border-[#dfe6f5]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        
        {/* Title & Introduction */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] mb-4">
          About The Kidpreneur Journey
        </h1>
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed mb-3 max-w-[750px]">
          An initiative founded by Dr. Sarah Sidani to introduce children to entrepreneurship in a way that is practical, creative, and joyful.
        </p>
        <p className="text-base text-[#1c2455] leading-relaxed mb-10 max-w-[700px]">
          We believe young people don’t need to wait until adulthood to create value. With the right guidance, they can start now.
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#2f7de1] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455]">
            <h3 className="font-display text-2xl font-bold text-[#1c2455] mb-2">Our mission</h3>
            <p className="text-base text-[#4d5580] leading-relaxed">
              To nurture the next generation of confident thinkers, creators, and leaders by teaching entrepreneurial skills through hands-on experience.
            </p>
          </div>

          <div className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#0f9b8e] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455]">
            <h3 className="font-display text-2xl font-bold text-[#1c2455] mb-2">Our vision</h3>
            <p className="text-base text-[#4d5580] leading-relaxed">
              A world where every child sees themselves as capable of spotting opportunities, solving problems, and making a difference.
            </p>
          </div>
        </div>

        {/* Our Approach: 3 Steps */}
        <div className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-6">
            Our approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="bg-white border-2 border-[#dfe6f5] rounded-[18px] p-5 sm:p-6 relative pl-16 sm:pl-18">
              <span className="absolute left-4 top-5 w-9 h-9 rounded-full bg-[#ffc93c] text-[#1c2455] font-display font-bold text-lg flex items-center justify-center border border-[#1c2455]">
                1
              </span>
              <b className="block font-display text-lg text-[#1c2455] mb-1">Explore</b>
              <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                Kids discover their interests and the problems around them.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-[#dfe6f5] rounded-[18px] p-5 sm:p-6 relative pl-16 sm:pl-18">
              <span className="absolute left-4 top-5 w-9 h-9 rounded-full bg-[#ffc93c] text-[#1c2455] font-display font-bold text-lg flex items-center justify-center border border-[#1c2455]">
                2
              </span>
              <b className="block font-display text-lg text-[#1c2455] mb-1">Create</b>
              <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                They design and build ideas through teamwork and experimentation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-[#dfe6f5] rounded-[18px] p-5 sm:p-6 relative pl-16 sm:pl-18">
              <span className="absolute left-4 top-5 w-9 h-9 rounded-full bg-[#ffc93c] text-[#1c2455] font-display font-bold text-lg flex items-center justify-center border border-[#1c2455]">
                3
              </span>
              <b className="block font-display text-lg text-[#1c2455] mb-1">Pitch</b>
              <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                They share their ideas with confidence and receive feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Founder with cropped right-half photo and Instagram link */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-6">
            Meet the founder
          </h2>
          <div className="bg-white border-2 border-[#1c2455] rounded-[20px] p-6 sm:p-8 shadow-[3px_3px_0_#1c2455]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Photo of Dr. Sarah (Right half of assets/sara.webp) */}
              <div className="w-40 h-48 sm:w-48 sm:h-56 shrink-0 rounded-2xl overflow-hidden border-2 border-[#1c2455] shadow-sm bg-[#eef5ff]">
                <img
                  src="/sara-dr.jpg"
                  alt="Dr. Sarah Sidani - Founder"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to sara.webp with right-half framing if needed
                    e.currentTarget.src = "/sara.webp";
                    e.currentTarget.style.objectPosition = "75% center";
                  }}
                />
              </div>

              {/* Bio and Instagram */}
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-[#eef5ff] text-[#1c2455] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  Founder & Educator
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-3">
                  Dr. Sarah Sidani
                </h3>
                <p className="text-base text-[#4d5580] leading-relaxed mb-5">
                  Dr. Sarah Sidani created The Kidpreneur Journey to give children the tools to turn curiosity into action. She believes that when children are trusted with real challenges, they rise to meet them.
                </p>

                {/* Direct Link to Dr. Sarah's Instagram (Item 3 in Notes-To-Change.md) */}
                <a
                  href="https://www.instagram.com/dr.sarahsidani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-sun text-sm py-2 px-5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Connect with Dr. Sarah on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
