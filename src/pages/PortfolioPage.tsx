import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { fetchPortfolioItems } from '../services/portfolioApi';
import type { PortfolioItem } from '../services/portfolioApi';
import { WorkshopCard } from '../components/portfolio/WorkshopCard';
import { InstagramHybridCard } from '../components/portfolio/InstagramHybridCard';

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

const VALID_FILTERS = ['ALL', 'UPCOMING', 'COMPLETED', 'INSTAGRAM'] as const;
type FilterType = typeof VALID_FILTERS[number];

export const PortfolioPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter')?.toUpperCase() as FilterType | undefined;
  
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [internalFilter, setInternalFilter] = useState<FilterType>('ALL');
  const activeFilter: FilterType = (filterParam && VALID_FILTERS.includes(filterParam))
    ? filterParam
    : internalFilter;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadItems = async () => {
      setLoading(true);
      const data = await fetchPortfolioItems();
      setItems(data);
      setLoading(false);
    };
    loadItems();
  }, []);

  const handleTabChange = (tabId: FilterType) => {
    setInternalFilter(tabId);
    if (tabId === 'ALL') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: tabId });
    }
  };

  const filteredItems = items.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'INSTAGRAM') return item.type === 'INSTAGRAM';
    if (activeFilter === 'UPCOMING') return item.type === 'WORKSHOP' && item.status === 'UPCOMING';
    if (activeFilter === 'COMPLETED') return item.type !== 'INSTAGRAM' && item.status === 'COMPLETED';

    return true;
  });

  return (
    <div className="min-h-screen bg-kidpreneur-offwhite pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full text-kidpreneur-teal text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Kidpreneur Showcase
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-kidpreneur-slate mb-6">
            Our Activities & Portfolio
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover upcoming hands-on bootcamps, explore highlights from our young founders, and browse live moments from our workshops.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-sm">
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            {[
              { id: 'ALL', label: 'All Activities', icon: Layers },
              { id: 'UPCOMING', label: 'Upcoming Workshops', icon: Calendar },
              { id: 'COMPLETED', label: 'Past Highlights', icon: CheckCircle2 },
              { id: 'INSTAGRAM', label: 'Instagram Stories', icon: InstagramIcon },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as FilterType)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-kidpreneur-teal text-white shadow-md shadow-teal-200'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, skill..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-2xl border border-slate-200 focus:ring-2 focus:ring-kidpreneur-teal focus:border-transparent outline-none bg-slate-50/50"
            />
          </div>
        </div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-kidpreneur-teal gap-3">
            <div className="w-10 h-10 border-4 border-kidpreneur-teal border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-slate-500">Loading portfolio activities...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-kidpreneur-slate mb-1">No activities found</h3>
            <p className="text-sm text-gray-500">
              Try adjusting your search query or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item =>
              item.type === 'INSTAGRAM' ? (
                <InstagramHybridCard key={item.id} item={item} />
              ) : (
                <WorkshopCard key={item.id} item={item} />
              )
            )}
          </div>
        )}

        {/* Instagram Community Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-purple-500/10 border border-pink-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <InstagramIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Instagram Community</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500">@kidpreneur.journey</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800">Catch Live Moments with Dr. Sarah Sidani</h3>
              <p className="text-sm text-slate-600 mt-0.5">
                Watch young innovators celebrate F.A.I.L. milestones, pitch their prototypes, and explore weekly parenting tips.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/kidpreneur.journey/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white font-bold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition-all hover:scale-105 text-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-kidpreneur-slate via-slate-800 to-kidpreneur-slate rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Ready to Spark Your Child's Potential?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Enroll them in our upcoming sessions and watch them transform real ideas into working inventions and businesses.
            </p>
            <div className="pt-2">
              <a
                href="https://lab.the-kidpreneur-journey.com/register/lab"
                className="inline-flex items-center gap-2 bg-kidpreneur-teal hover:bg-teal-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <span>Register for The Kidpreneur Lab</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
