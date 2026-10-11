import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Share2,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
  Check,
} from 'lucide-react';
import { fetchPortfolioItemBySlug } from '../services/portfolioApi';
import type { PortfolioItem } from '../services/portfolioApi';
import { LightboxModal } from '../components/portfolio/LightboxModal';

export const WorkshopDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;

    const loadItem = async () => {
      setLoading(true);
      const data = await fetchPortfolioItemBySlug(slug);
      setItem(data);
      setLoading(false);
    };

    loadItem();
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-kidpreneur-offwhite pt-36 pb-20 flex flex-col items-center justify-center text-kidpreneur-teal">
        <div className="w-12 h-12 border-4 border-kidpreneur-teal border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 font-medium">Loading event details...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-kidpreneur-offwhite pt-36 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-kidpreneur-slate mb-4">
            Activity Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The event or workshop you are looking for may have been moved or unpublished.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-kidpreneur-teal text-white font-bold px-6 py-3 rounded-2xl shadow-md hover:bg-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Activities & Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const isUpcoming = item.status === 'UPCOMING';
  const gallery = item.galleryImages || [];

  return (
    <div className="min-h-screen bg-kidpreneur-offwhite pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center justify-between">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-kidpreneur-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Activities
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm transition-all"
            title="Copy link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {item.coverImageUrl && (
            <div className="relative aspect-[21/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={item.coverImageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}

          <div className="p-8 sm:p-12 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isUpcoming
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-kidpreneur-lightblue text-kidpreneur-slate'
                }`}
              >
                {isUpcoming ? 'Upcoming Workshop' : 'Past Highlights'}
              </span>

              {item.category && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {item.category}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-kidpreneur-slate leading-tight">
              {item.title}
            </h1>

            {/* Quick Details Bar */}
            <div className="flex flex-wrap gap-6 py-4 border-y border-slate-100 text-sm text-slate-700">
              {item.eventDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-kidpreneur-teal" />
                  <span className="font-semibold">{item.eventDate}</span>
                </div>
              )}

              {item.eventTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-kidpreneur-teal" />
                  <span>{item.eventTime}</span>
                </div>
              )}

              {item.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-kidpreneur-teal" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>

            {/* Teaser Summary */}
            {item.summary && (
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {item.summary}
              </p>
            )}
          </div>
        </div>

        {/* Content Details & Action Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story & Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6 text-slate-700 leading-relaxed">
              <h2 className="text-2xl font-display font-bold text-kidpreneur-slate">
                About This Experience
              </h2>

              <div className="prose prose-slate max-w-none text-base whitespace-pre-line leading-relaxed">
                {item.content || item.summary || 'Details coming soon.'}
              </div>
            </div>

            {/* Event Photo Gallery */}
            {gallery.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ImageIcon className="w-5 h-5 text-kidpreneur-teal" />
                    <h2 className="text-2xl font-display font-bold text-kidpreneur-slate">
                      Photo Gallery ({gallery.length})
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">Click any photo to expand</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {gallery.map((photoUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={photoUrl}
                        alt={`Event photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Sparkles className="w-6 h-6 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-kidpreneur-teal">
                  {isUpcoming ? 'Reserve Your Seat' : 'Explore The Journey'}
                </span>
                <h3 className="text-2xl font-display font-bold text-kidpreneur-slate">
                  {isUpcoming ? 'Join This Workshop' : 'Get Involved'}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl">
                {item.eventDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-kidpreneur-teal" />
                    <span className="font-semibold text-slate-800">{item.eventDate}</span>
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-kidpreneur-teal" />
                    <span>{item.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Age-appropriate mentor supervision</span>
                </div>
              </div>

              <a
                href={item.ctaUrl || 'https://lab.the-kidpreneur-journey.com/register/lab'}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-kidpreneur-teal hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-teal-200 transition-all text-sm group"
              >
                <span>{item.ctaText || 'Register for Workshop'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Need more information? Message us directly on WhatsApp or contact our mentors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </div>
  );
};
