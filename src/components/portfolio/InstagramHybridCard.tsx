import React, { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import type { PortfolioItem } from '../../services/portfolioApi';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
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

function getInstagramEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:p|reel|reels|tv)\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/p/${match[1]}/embed/`;
  }
  return null;
}

export const InstagramHybridCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const embedUrl = getInstagramEmbedUrl(item.instagramUrl);

  return (
    <>
      {/* Grid Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col justify-between"
      >
        {/* Thumbnail Banner */}
        <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
          {item.coverImageUrl ? (
            <img
              src={item.coverImageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center">
              <InstagramIcon className="w-16 h-16 text-white/90 animate-pulse" />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Instagram Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram Reel</span>
          </div>

          {/* Play / View Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </div>

          {/* Bottom Card Title over thumbnail */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase tracking-wider text-pink-300 font-bold block mb-1">
              {item.category || 'Classroom Moments'}
            </span>
            <h3 className="font-display font-bold text-lg leading-snug line-clamp-2">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-5 flex items-center justify-between bg-white text-xs text-slate-500 border-t border-slate-50">
          <span className="font-medium text-slate-400">
            {item.eventDate || 'Recent Highlights'}
          </span>
          <span className="text-pink-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Watch Post <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Live Instagram Hybrid Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scaleUp flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-400">Official Instagram Post</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {item.instagramUrl && (
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                    title="Open on Instagram"
                  >
                    Open in IG <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Embed Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 flex flex-col items-center justify-center bg-slate-50 min-h-[460px]">
              {embedUrl ? (
                <div className="w-full flex flex-col items-center gap-3">
                  <iframe
                    src={embedUrl}
                    className="w-full h-[460px] sm:h-[520px] rounded-2xl border-0 shadow-sm bg-white"
                    allowFullScreen
                    title={item.title}
                  />
                  {item.instagramUrl && (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-2 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                      <span>View comments & audio on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>
              ) : (
                <div className="text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 mx-auto flex items-center justify-center">
                    <InstagramIcon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">View this Moment on Instagram</h4>
                  <p className="text-sm text-slate-500 max-w-sm">
                    {item.summary || 'Click below to watch the reel, see comments, and interact on Instagram.'}
                  </p>
                  {item.instagramUrl && (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white font-bold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition-opacity"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      View on Instagram
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
