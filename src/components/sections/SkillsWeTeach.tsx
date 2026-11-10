import { Sparkles, CheckCircle2, Award, Smile, ShieldCheck } from 'lucide-react';

const SKILLS = [
  {
    icon: "🔍",
    title: "Opportunity identification",
    desc: "Noticing everyday problems and spotting ideas worth pursuing.",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    icon: "✏️",
    title: "Design thinking",
    desc: "Understanding people’s needs, brainstorming, prototyping, and improving.",
    badgeColor: "bg-teal-100 text-teal-800"
  },
  {
    icon: "📊",
    title: "Market research",
    desc: "Asking questions, gathering feedback, and learning what people really want.",
    badgeColor: "bg-sky-100 text-sky-800"
  },
  {
    icon: "🎨",
    title: "Creativity",
    desc: "Thinking freely, imagining boldly, and bringing original ideas to life.",
    badgeColor: "bg-pink-100 text-pink-800"
  },
  {
    icon: "🧩",
    title: "Problem solving",
    desc: "Breaking challenges into steps and finding practical, resilient solutions.",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    icon: "🤝",
    title: "Teamwork",
    desc: "Collaborating, sharing roles, listening, and achieving more together.",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    icon: "🚀",
    title: "Pitching",
    desc: "Explaining an idea clearly, concisely, and persuasively.",
    badgeColor: "bg-indigo-100 text-indigo-800"
  },
  {
    icon: "🎤",
    title: "Public speaking",
    desc: "Speaking with poise, clarity, voice presence, and stage confidence.",
    badgeColor: "bg-rose-100 text-rose-800"
  }
];

const REASONS = [
  {
    icon: CheckCircle2,
    title: "Learning by doing",
    desc: "Kids build, test, and present real ideas instead of only listening to passive lectures.",
    color: "text-amber-600 bg-amber-50 border-amber-200"
  },
  {
    icon: Award,
    title: "Led by an expert",
    desc: "Every curriculum track is designed and personally overseen by academic educator Dr. Sarah Sidani.",
    color: "text-teal-600 bg-teal-50 border-teal-200"
  },
  {
    icon: Smile,
    title: "Fun and age-appropriate",
    desc: "Interactive tools and games spark curiosity at every age, from first-time explorers to confident creators.",
    color: "text-purple-600 bg-purple-50 border-purple-200"
  },
  {
    icon: ShieldCheck,
    title: "Confidence for life",
    desc: "Children leave with a stronger voice, resilient problem-solving habits, and a fearless “can-do” mindset.",
    color: "text-sky-600 bg-sky-50 border-sky-200"
  }
];

export default function SkillsWeTeach() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-kidpreneur-offwhite border-b-2 border-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            The Skills We Teach
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Our programs are built around eight core skills that prepare children to thrive in school, work, and life.
          </p>
        </div>

        {/* 8 Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] hover:shadow-[5px_5px_0px_#1e293b] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-3xl shadow-xs">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-snug">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {skill.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${skill.badgeColor}`}>
                  Skill {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "Why parents and educators choose us" subsection */}
        <div className="mt-24 pt-16 border-t-2 border-slate-900/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mb-3">
              Why Parents & Educators Choose Us
            </h3>
            <p className="text-slate-600 text-base font-sans">
              Designed around how children naturally discover, test, and grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${reason.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
