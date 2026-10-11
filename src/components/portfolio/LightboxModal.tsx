import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (!images.length || currentIndex < 0 || currentIndex >= images.length) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex flex-col items-center justify-center"
      >
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between text-white/80 pb-4">
          <span className="text-sm font-semibold tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            title="Close Gallery (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Photo */}
        <div className="relative max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src={images[currentIndex]}
            alt={`Gallery photo ${currentIndex + 1}`}
            className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-300 select-none"
          />
        </div>

        {/* Prev & Next Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all shadow-lg backdrop-blur-sm"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all shadow-lg backdrop-blur-sm"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Thumbnails Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 max-w-full overflow-x-auto py-2 px-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-white scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
