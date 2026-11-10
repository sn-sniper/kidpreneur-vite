export default function Pathways() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="pathways" className="scroll-mt-24 py-16 sm:py-24 bg-[#fffdf7] border-t-2 border-[#dfe6f5]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        
        {/* Title & Introduction */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] mb-4">
          Pathways
        </h1>
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed mb-10 max-w-[800px]">
          Whether you’re a parent looking for a weekend experience, a family seeking a full course, or an organization that wants to bring entrepreneurship to children, there is a pathway for you.
        </p>

        <div className="space-y-8">
          {/* Card 1: Workshops - Brand Blue Accent */}
          <div className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#2f7de1] rounded-[20px] p-6 sm:p-8 shadow-[3px_3px_0_#1c2455]">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-2">
              Workshops
            </h2>
            <p className="text-base text-[#4d5580] leading-relaxed mb-6 max-w-[700px]">
              Interactive, high-energy sessions where children practice entrepreneurial thinking in a single experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#dfe6f5]">
              {/* Upcoming activities */}
              <div>
                <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2 flex items-center gap-2">
                  <span>📅</span>
                  <span>Upcoming activities</span>
                </h3>
                <p className="inline-block bg-[#eef5ff] border-2 border-dashed border-[#1c2455]/30 rounded-xl px-4 py-2 text-xs sm:text-sm text-[#4d5580] font-semibold">
                  New dates are on the way. Message us to join the list.
                </p>
              </div>

              {/* Past activities */}
              <div>
                <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2 flex items-center gap-2">
                  <span>🏆</span>
                  <span>Past activities</span>
                </h3>
                <p className="text-sm text-[#4d5580] leading-relaxed mb-3">
                  A look back at our recent workshops: kids brainstorming, building prototypes, and pitching their ideas to the room.
                </p>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2f7de1] hover:underline"
                >
                  <span>View past workshops & photos</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Courses - Brand Yellow Accent */}
          <div className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#ffc93c] rounded-[20px] p-6 sm:p-8 shadow-[3px_3px_0_#1c2455]">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-2">
              Courses
            </h2>
            <p className="text-base text-[#4d5580] leading-relaxed mb-6 max-w-[700px]">
              In-depth learning journeys that build skills week by week and end with a final pitch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border-l-[6px] border-[#ffc93c] pl-4 py-1">
                <h3 className="font-display text-lg font-bold text-[#1c2455] mb-1">Online courses</h3>
                <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                  Learn from anywhere with live guidance and interactive activities.
                </p>
              </div>

              <div className="border-l-[6px] border-[#ffc93c] pl-4 py-1">
                <h3 className="font-display text-lg font-bold text-[#1c2455] mb-1">In-person courses</h3>
                <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                  Face-to-face, collaborative learning in a creative, supportive space.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="btn-sun text-sm"
            >
              Ask about enrollment
            </a>
          </div>

          {/* Card 3: Collabs - Brand Navy Accent */}
          <div className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#1c2455] rounded-[20px] p-6 sm:p-8 shadow-[3px_3px_0_#1c2455]">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-2">
              Collabs
            </h2>
            <p className="text-base text-[#4d5580] leading-relaxed mb-4 max-w-[750px]">
              Bring The Kidpreneur Journey to your community. We design programs to fit your group’s age, goals, and schedule.
            </p>
            <p className="text-sm font-bold uppercase tracking-wider text-[#2f7de1] mb-4">
              Bring Entrepreneurship to life in your:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="border-l-[6px] border-[#2f7de1] pl-3 py-1">
                <h3 className="font-display text-base font-bold text-[#1c2455] mb-1">Schools</h3>
                <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed m-0">
                  Enrich your curriculum with entrepreneurship and life skills.
                </p>
              </div>

              <div className="border-l-[6px] border-[#2f7de1] pl-3 py-1">
                <h3 className="font-display text-base font-bold text-[#1c2455] mb-1">Scouts</h3>
                <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed m-0">
                  Add problem-solving and teamwork challenges to your programs.
                </p>
              </div>

              <div className="border-l-[6px] border-[#2f7de1] pl-3 py-1">
                <h3 className="font-display text-base font-bold text-[#1c2455] mb-1">Sports academies</h3>
                <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed m-0">
                  Help young athletes build leadership, resilience, and communication.
                </p>
              </div>

              <div className="border-l-[6px] border-[#2f7de1] pl-3 py-1">
                <h3 className="font-display text-base font-bold text-[#1c2455] mb-1">Camps</h3>
                <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed m-0">
                  Make your summer or seasonal program memorable and meaningful.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="btn-sun text-sm"
            >
              Request a collaboration
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
