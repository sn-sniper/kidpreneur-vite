import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="home" className="scroll-mt-24 pt-12 sm:pt-16 pb-16 bg-[#fffdf7]">
      {/* Hero Header Area */}
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Subheader Pill (Item 1 in Notes-To-Change.md) */}
        <div className="mb-4">
          <span className="inline-block bg-[#eef5ff] text-[#1c2455] border border-[#dfe6f5] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Where Kids Turn Ideas into Actions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c2455] leading-[1.12] mb-5 tracking-tight max-w-[850px]">
          Where young minds learn to think, create, and lead.
        </h1>

        {/* Lead Paragraph */}
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed max-w-[700px] mb-8 font-sans">
          The Kidpreneur Journey helps children discover their ideas, build
          real-world skills, and gain the confidence to turn curiosity into
          action.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <a
            href="#pathways"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("pathways");
            }}
            className="btn-sun text-base"
          >
            Explore pathways
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
            className="btn-alt text-base"
          >
            Meet Dr. Sarah
          </a>
        </div>

        {/* Interactive SVG Path: Spark 💡 -> Build 🛠️ -> Pitch 🎤 */}
        <div className="w-full my-6">
          <svg
            className="w-full h-auto max-h-36 sm:max-h-44"
            viewBox="0 0 900 150"
            role="img"
            aria-label="A path from a spark of an idea, through building, to a pitch on stage"
          >
            <path
              d="M40 100 C200 20 300 150 450 80 S740 20 860 90"
              fill="none"
              stroke="#1c2455"
              strokeWidth="4"
              strokeDasharray="4 14"
              strokeLinecap="round"
            />
            {/* Spark */}
            <circle cx="40" cy="100" r="26" fill="#ffc93c" stroke="#1c2455" strokeWidth="3" />
            <text x="40" y="109" textAnchor="middle" fontSize="26">💡</text>
            <text x="40" y="142" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1c2455">Spark</text>

            {/* Build */}
            <circle cx="450" cy="80" r="26" fill="#0f9b8e" stroke="#1c2455" strokeWidth="3" />
            <text x="450" y="89" textAnchor="middle" fontSize="26">🛠️</text>
            <text x="450" y="122" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1c2455">Build</text>

            {/* Pitch */}
            <circle cx="860" cy="90" r="26" fill="#7b4bd1" stroke="#1c2455" strokeWidth="3" />
            <text x="860" y="99" textAnchor="middle" fontSize="26">🎤</text>
            <text x="860" y="132" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1c2455">Pitch</text>
          </svg>
        </div>
      </div>

      {/* Band: Every child has ideas worth listening to */}
      <div className="bg-[#eef5ff] border-y-2 border-[#dfe6f5] py-10 sm:py-12 mt-6">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-3">
            Every child has ideas worth listening to.
          </h2>
          <p className="text-[#4d5580] text-base sm:text-lg leading-relaxed max-w-[800px] m-0">
            Entrepreneurship is more than starting a business. It is a way of seeing
            problems as opportunities, working with others, and speaking up with
            confidence. Through hands-on, playful, and purposeful learning, we help
            kids build a mindset and skills they will use for life.
          </p>
        </div>
      </div>

      {/* Choose your pathway Preview Cards */}
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-6">
          Choose your pathway
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Workshops */}
          <article className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#2f7de1] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1c2455] mb-2">Workshops</h3>
              <p className="text-sm text-[#4d5580] leading-relaxed mb-4">
                Short, energizing, hands-on sessions where kids experiment, create, and pitch. See what’s coming up and what we’ve done.
              </p>
            </div>
            <a
              href="#pathways"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pathways");
              }}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#2f7de1] hover:underline"
            >
              <span>View workshops</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          {/* Card 2: Courses */}
          <article className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#0f9b8e] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1c2455] mb-2">Courses</h3>
              <p className="text-sm text-[#4d5580] leading-relaxed mb-4">
                Structured learning journeys, online and in person, that take children step by step from first idea to confident pitch.
              </p>
            </div>
            <a
              href="#pathways"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pathways");
              }}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#0f9b8e] hover:underline"
            >
              <span>Explore courses</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          {/* Card 3: Collabs */}
          <article className="bg-white border-2 border-[#1c2455] border-t-[10px] border-t-[#7b4bd1] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1c2455] mb-2">Collabs</h3>
              <p className="text-sm text-[#4d5580] leading-relaxed mb-4">
                Bring entrepreneurship to your schools, scouts, sports academies, or camps with a program tailored to your group.
              </p>
            </div>
            <a
              href="#pathways"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pathways");
              }}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#7b4bd1] hover:underline"
            >
              <span>Partner with us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>

        {/* 8 Skills Chips */}
        <div className="mt-12 sm:mt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-4">
            Eight skills in every pathway
          </h2>
          <div className="flex flex-wrap gap-2.5 mb-6">
            {[
              "Opportunity identification",
              "Design thinking",
              "Market research",
              "Creativity",
              "Problem solving",
              "Teamwork",
              "Pitching",
              "Public speaking",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white border-2 border-[#1c2455] rounded-full px-4 py-2 font-bold text-xs sm:text-sm text-[#1c2455]"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("skills");
            }}
            className="btn-alt text-sm"
          >
            See all skills
          </a>
        </div>

        {/* Why parents and educators choose us */}
        <div className="mt-14 sm:mt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-6">
            Why parents and educators choose us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-[#1c2455] rounded-[20px] p-5 shadow-[3px_3px_0_#1c2455]">
              <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2">Learning by doing</h3>
              <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed">
                Kids build, test, and present real ideas instead of only listening to lessons.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1c2455] rounded-[20px] p-5 shadow-[3px_3px_0_#1c2455]">
              <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2">Led by an expert</h3>
              <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed">
                Every program is designed and led by Dr. Sarah Sidani.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1c2455] rounded-[20px] p-5 shadow-[3px_3px_0_#1c2455]">
              <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2">Fun & age-appropriate</h3>
              <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed">
                Activities spark curiosity at every age, from first-time explorers to confident creators.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1c2455] rounded-[20px] p-5 shadow-[3px_3px_0_#1c2455]">
              <h3 className="font-display text-lg font-bold text-[#1c2455] mb-2">Confidence for life</h3>
              <p className="text-xs sm:text-sm text-[#4d5580] leading-relaxed">
                Children leave with a stronger voice and a “can-do” mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
