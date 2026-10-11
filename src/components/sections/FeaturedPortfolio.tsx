import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { fetchPortfolioItems } from '../../services/portfolioApi';
import type { PortfolioItem } from '../../services/portfolioApi';
import { WorkshopCard } from '../portfolio/WorkshopCard';
import { InstagramHybridCard } from '../portfolio/InstagramHybridCard';

export const FeaturedPortfolio: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        setLoading(true);
        // Fetch up to 3 items
        const data = await fetchPortfolioItems();
        setItems(data.slice(0, 3));
      } catch (err) {
        console.error('Failed to load featured portfolio:', err);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);

  if (!loading && items.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full text-kidpreneur-teal text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Live Highlights & Events
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-kidpreneur-slate">
              Recent Workshops & Moments
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              See what our young entrepreneurs have been building and join our upcoming hands-on experiences.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-bold text-kidpreneur-teal hover:text-teal-700 transition-colors group text-base"
          >
            <span>View All Activities & Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="py-16 flex justify-center text-kidpreneur-teal">
            <div className="w-10 h-10 border-4 border-kidpreneur-teal border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item =>
              item.type === 'INSTAGRAM' ? (
                <InstagramHybridCard key={item.id} item={item} />
              ) : (
                <WorkshopCard key={item.id} item={item} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};
