import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Image as ImageIcon } from 'lucide-react';
import type { PortfolioItem } from '../../services/portfolioApi';

export const WorkshopCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const isPast = Boolean(
    item.eventDate &&
    !isNaN(new Date(item.eventDate).getTime()) &&
    new Date(item.eventDate) < new Date(new Date().setHours(0, 0, 0, 0))
  );
  const isUpcoming = item.status === 'UPCOMING' && !isPast;

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Banner Image */}
        <Link to={`/portfolio/${item.slug}`} className="block relative aspect-video w-full bg-slate-100 overflow-hidden">
          {item.coverImageUrl ? (
            <img
              src={item.coverImageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
              <ImageIcon className="w-12 h-12" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                isUpcoming
                  ? 'bg-emerald-600/90 text-white'
                  : 'bg-kidpreneur-teal text-white'
              }`}
            >
              {isUpcoming ? 'Upcoming Workshop' : 'Past Highlights'}
            </span>
            {item.category && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md">
                {item.category}
              </span>
            )}
          </div>

          {item.galleryImages && item.galleryImages.length > 0 && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{item.galleryImages.length} Photos</span>
            </div>
          )}
        </Link>

        {/* Content Body */}
        <div className="p-6">
          <Link to={`/portfolio/${item.slug}`}>
            <h3 className="font-display font-bold text-2xl text-kidpreneur-slate mb-3 group-hover:text-kidpreneur-teal transition-colors line-clamp-2">
              {item.title}
            </h3>
          </Link>

          {item.summary && (
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {item.summary}
            </p>
          )}

          {/* Meta Info */}
          <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
            {item.eventDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-kidpreneur-teal shrink-0" />
                <span className="font-medium text-slate-700">
                  {item.eventDate} {item.eventTime ? `• ${item.eventTime}` : ''}
                </span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{item.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/portfolio/${item.slug}`}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-5 rounded-2xl transition-all duration-300 text-sm ${
            isUpcoming
              ? 'bg-kidpreneur-teal hover:bg-teal-700 text-white shadow-md hover:shadow-teal-200'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <span>{isUpcoming ? (item.ctaText || 'View & Register') : 'View Story & Gallery'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
