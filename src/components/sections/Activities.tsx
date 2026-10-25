import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Compass, Map, Rocket, CheckCircle2, Heart, Award, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { fetchPortfolioItems } from '../../services/portfolioApi';
import type { PortfolioItem } from '../../services/portfolioApi';
import { WorkshopCard } from '../portfolio/WorkshopCard';
import { InstagramHybridCard } from '../portfolio/InstagramHybridCard';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const disciplines = [
  {
    id: 1,
    title: 'Entrepreneurship',
    description: 'Empowering young minds with business fundamentals, leadership skills, financial literacy, and the confidence to turn ideas into reality.',
    icon: Compass,
    color: 'bg-kidpreneur-lightblue',
    textColor: 'text-kidpreneur-slate'
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    description: 'Demystifying modern technology by introducing kids to smart concepts and logical thinking through fun, age-appropriate tools.',
    icon: Rocket,
    color: 'bg-kidpreneur-yellow',
    textColor: 'text-yellow-800'
  },
  {
    id: 3,
    title: 'Robotics',
    description: 'Engaging children in hands-on building, coding, and problem-solving to bring interactive machines to life.',
    icon: Star,
    color: 'bg-kidpreneur-teal',
    textColor: 'text-white'
  },
  {
    id: 4,
    title: 'Healthy Habits',
    description: 'Cultivating physical and mental well-being by teaching mindful daily routines, nutrition, and personal growth strategies.',
    icon: Heart,
    color: 'bg-kidpreneur-blue',
    textColor: 'text-white'
  },
  {
    id: 5,
    title: 'Agriculture',
    description: 'Connecting kids with nature through sustainable gardening practices, environmental awareness, and seed-to-table experiences.',
    icon: Map,
    color: 'bg-white',
    textColor: 'text-kidpreneur-slate'
  },
  {
    id: 6,
    title: 'And More',
    description: "Continuously introducing fresh, innovative learning modules designed to inspire every child's unique passion.",
    icon: CheckCircle2,
    color: 'bg-kidpreneur-slate',
    textColor: 'text-white'
  }
];

export default function Activities() {
  const [activeTab, setActiveTab] = useState<'DISCIPLINES' | 'HIGHLIGHTS' | 'INSTAGRAM'>('DISCIPLINES');
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadItems = async () => {
      try {
        setLoading(true);
        const data = await fetchPortfolioItems();
        if (isMounted) setItems(data);
      } catch (err) {
        console.error('Failed to load portfolio items for activities:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadItems();
    return () => { isMounted = false; };
  }, []);

  const pastHighlights = items.filter(i => i.type !== 'INSTAGRAM' && i.status === 'COMPLETED');
  const instagramPosts = items.filter(i => i.type === 'INSTAGRAM');

  return (
    <section id="activities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full text-kidpreneur-teal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do & What We Build
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-kidpreneur-slate mb-4">
            Our Activities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From foundational learning tracks to live market pitch days and social reels with Dr. Sarah Sidani, discover how our young innovators shine.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap p-1.5 bg-slate-100 rounded-3xl gap-1.5 shadow-inner border border-slate-200/60 max-w-full justify-center">
            <button
              onClick={() => setActiveTab('DISCIPLINES')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === 'DISCIPLINES'
                  ? 'bg-white text-kidpreneur-slate shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-kidpreneur-teal" />
              <span>Core Disciplines</span>
            </button>

            <button
              onClick={() => setActiveTab('HIGHLIGHTS')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === 'HIGHLIGHTS'
                  ? 'bg-kidpreneur-teal text-white shadow-md shadow-teal-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Past Highlights</span>
              {pastHighlights.length > 0 && (
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'HIGHLIGHTS' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {pastHighlights.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('INSTAGRAM')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === 'INSTAGRAM'
                  ? 'bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram Stories & Posts</span>
              {instagramPosts.length > 0 && (
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'INSTAGRAM' ? 'bg-white/20 text-white' : 'bg-pink-100 text-pink-700'
                }`}>
                  {instagramPosts.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tab 1: Core Disciplines */}
        {activeTab === 'DISCIPLINES' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div 
                    key={activity.id}
                    id={`activity-${activity.id}`}
                    className={`${activity.color} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100/50`}
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <Icon className={`w-7 h-7 ${activity.textColor}`} />
                    </div>
                    <h3 className={`text-2xl font-display font-bold mb-3 ${activity.textColor}`}>
                      {activity.title}
                    </h3>
                    <p className={`${activity.textColor} opacity-90 leading-relaxed`}>
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-bold text-kidpreneur-teal hover:text-teal-700 transition-colors text-base group"
              >
                <span>Explore all active workshops and student projects in our Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2: Past Highlights */}
        {activeTab === 'HIGHLIGHTS' && (
          <div className="animate-fadeIn">
            {loading ? (
              <div className="py-20 flex justify-center text-kidpreneur-teal">
                <div className="w-10 h-10 border-4 border-kidpreneur-teal border-t-transparent rounded-full animate-spin" />
              </div>
            ) : pastHighlights.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 p-8">
                <Award className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-kidpreneur-slate mb-1">No Past Highlights Found</h3>
                <p className="text-sm text-gray-500">Check back soon as our young learners complete their cohorts!</p>
              </div>
            ) : (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastHighlights.map(item => (
                    <WorkshopCard key={item.id} item={item} />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link
                    to="/portfolio?filter=COMPLETED"
                    className="inline-flex items-center gap-2 bg-kidpreneur-teal hover:bg-teal-600 text-white font-bold px-7 py-3 rounded-2xl shadow-md transition-all hover:scale-105"
                  >
                    <span>View All Past Cohorts & Markets</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Instagram Stories & Posts */}
        {activeTab === 'INSTAGRAM' && (
          <div className="animate-fadeIn">
            {loading ? (
              <div className="py-20 flex justify-center text-pink-600">
                <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div>
                {/* Community Header Banner */}
                <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-purple-500/10 border border-pink-100 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Follow @kidpreneur.journey on Instagram</h4>
                      <p className="text-xs text-slate-500">Watch classroom reels, student prototyping sessions, and parenting tips with Dr. Sarah Sidani.</p>
                    </div>
                  </div>
                  <a
                    href="https://www.instagram.com/kidpreneur.journey/"
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 px-4 py-2 rounded-xl shadow-sm hover:opacity-95 transition-all"
                  >
                    Follow @kidpreneur.journey
                  </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instagramPosts.map(item => (
                    <InstagramHybridCard key={item.id} item={item} />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link
                    to="/portfolio?filter=INSTAGRAM"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 hover:opacity-95 text-white font-bold px-7 py-3 rounded-2xl shadow-md transition-all hover:scale-105"
                  >
                    <span>Browse All Instagram Moments</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
