import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Users, Laptop, Building2, Tent, Trophy, School, Sparkles } from 'lucide-react';
import { fetchPortfolioItems } from '../../services/portfolioApi';
import type { PortfolioItem } from '../../services/portfolioApi';

export default function Pathways() {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    const loadItems = async () => {
      try {
        const data = await fetchPortfolioItems();
        if (isMounted) setItems(data);
      } catch (err) {
        console.error('Failed to load portfolio items for pathways:', err);
      }
    };
    loadItems();
    return () => { isMounted = false; };
  }, []);

  const upcomingWorkshops = items.filter(i => i.type === 'WORKSHOP' && i.status === 'UPCOMING');
  const pastActivitiesCount = items.filter(i => i.status === 'COMPLETED').length;

  return (
    <section id="pathways" className="py-20 lg:py-28 bg-white border-b-2 border-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Learning Formats</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Choose Your Pathway
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Whether you’re a parent looking for a weekend experience, a family seeking a full course, or an organization that wants to bring entrepreneurship to children, there is a pathway for you.
          </p>
        </div>

        {/* 3 Pathways Grid (Matching the handwritten sketch) */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pathway 1: Workshops */}
          <div className="flex flex-col justify-between bg-kidpreneur-offwhite rounded-3xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🚀</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                  Pathway 1
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Workshops</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Short, energizing, hands-on sessions where kids experiment, create, and pitch.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Upcoming Activities */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wide">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Upcoming Activities</span>
                  </div>
                  {upcomingWorkshops.length > 0 ? (
                    <div className="space-y-2 pt-1">
                      {upcomingWorkshops.slice(0, 2).map(ws => (
                        <div key={ws.id} className="text-xs text-slate-700 font-medium">
                          <span className="font-bold text-slate-900">{ws.title}</span> • {ws.eventDate || 'Coming soon'}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 font-medium">
                      New dates are on the way. Message us below to join the priority invite list.
                    </p>
                  )}
                </div>

                {/* Past Activities */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Past Activities {pastActivitiesCount > 0 ? `(${pastActivitiesCount})` : ''}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A look back at recent sessions: kids brainstorming, building functional prototypes, and pitching to the room.
                  </p>
                  <a href="/portfolio" className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 pt-1">
                    <span>View photo gallery & past highlights</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/80">
              <a 
                href="/portfolio" 
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-900 py-3 rounded-2xl font-bold text-sm shadow-[2px_2px_0px_#1e293b] transition-all"
              >
                <span>View all workshops</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pathway 2: Courses */}
          <div className="flex flex-col justify-between bg-kidpreneur-offwhite rounded-3xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📚</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  Pathway 2
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Courses</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Structured learning journeys that take children step by step from first idea to confident pitch.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Online Courses */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wide">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Online Courses</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Learn from anywhere with interactive live mentor guidance, digital tools, and self-paced challenges.
                  </p>
                </div>

                {/* In-Person Courses */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wide">
                    <Users className="w-3.5 h-3.5" />
                    <span>In-Person Courses</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Face-to-face collaborative team challenges, maker prototyping, and pitch day showcases in a creative space.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/80">
              <a 
                href="#contact" 
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 border-2 border-slate-900 py-3 rounded-2xl font-bold text-sm shadow-[2px_2px_0px_#1e293b] transition-all"
              >
                <span>Ask about enrollment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pathway 3: Collabs */}
          <div className="flex flex-col justify-between bg-kidpreneur-offwhite rounded-3xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🤝</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  Pathway 3
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Collabs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bring entrepreneurship to life in your community with tailored programs for your group.
                </p>
              </div>

              {/* 4 Collab Partners from Sketch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <School className="w-4 h-4 text-amber-600 mb-1" />
                  <div className="font-bold text-xs text-slate-900">Schools</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Curriculum enrichment & life skills</div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <Tent className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="font-bold text-xs text-slate-900">Scouts</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Team challenges & problem solving</div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <Trophy className="w-4 h-4 text-indigo-600 mb-1" />
                  <div className="font-bold text-xs text-slate-900">Sports Academies</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Leadership & athletic resilience</div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <Building2 className="w-4 h-4 text-rose-600 mb-1" />
                  <div className="font-bold text-xs text-slate-900">Camps</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Hands-on holiday bootcamps</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/80">
              <a 
                href="#contact" 
                className="w-full flex items-center justify-center gap-2 bg-kidpreneur-teal hover:bg-teal-600 text-white border-2 border-slate-900 py-3 rounded-2xl font-bold text-sm shadow-[2px_2px_0px_#1e293b] transition-all"
              >
                <span>Request a collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
