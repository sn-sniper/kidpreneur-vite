const SKILLS = [
  {
    icon: "🔍",
    title: "Opportunity identification",
    description: "Noticing everyday problems and spotting ideas worth pursuing.",
  },
  {
    icon: "✏️",
    title: "Design thinking",
    description: "Understanding people’s needs, brainstorming, prototyping, and improving.",
  },
  {
    icon: "📊",
    title: "Market research",
    description: "Asking questions, gathering feedback, and learning what people really want.",
  },
  {
    icon: "🎨",
    title: "Creativity",
    description: "Thinking freely, imagining boldly, and bringing original ideas to life.",
  },
  {
    icon: "🧩",
    title: "Problem solving",
    description: "Breaking challenges into steps and finding practical solutions.",
  },
  {
    icon: "🤝",
    title: "Teamwork",
    description: "Collaborating, sharing roles, listening, and achieving more together.",
  },
  {
    icon: "🚀",
    title: "Pitching",
    description: "Explaining an idea clearly and persuasively.",
  },
  {
    icon: "🎤",
    title: "Public speaking",
    description: "Speaking with confidence, clarity, and presence.",
  },
];

export default function SkillsWeTeach() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24 bg-[#fffdf7] border-t-2 border-[#dfe6f5]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Title & Introduction */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] mb-4">
          Skills we teach
        </h1>
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed mb-10 max-w-[750px]">
          Our programs are built around eight core skills that prepare children to thrive in school, work, and life.
        </p>

        {/* 8 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="bg-white border-2 border-[#1c2455] rounded-[20px] p-5 sm:p-6 shadow-[3px_3px_0_#1c2455] flex items-start gap-4"
            >
              <div
                className="w-12 h-12 shrink-0 rounded-2xl bg-[#eef5ff] border-2 border-[#dfe6f5] flex items-center justify-center text-2xl"
                aria-hidden="true"
              >
                {skill.icon}
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1c2455] mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-[#4d5580] leading-relaxed m-0">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
