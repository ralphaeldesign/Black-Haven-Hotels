import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const categories = ['All', 'Rooms', 'Dining', 'Spa', 'Grounds', 'Events'];

  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeCategory === 'All' ? true : img.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Splendor</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Image Gallery
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            A visual tour through the grand architecture, opulent suites, Michelin dining, and serene spa sanctuaries of Black Haven.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-lg'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveLightboxImage(img)}
              className="group relative h-72 rounded-lg overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/60 cursor-pointer shadow-xl transition-all duration-300 bg-neutral-900"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-amber-100">
                <div>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block font-medium">
                    {img.category}
                  </span>
                  <h3 className="text-sm font-serif-luxury font-bold">{img.title}</h3>
                </div>
                <div className="p-2 bg-black/60 rounded-full text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#D4AF37]"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.title}
              className="w-full max-h-[80vh] object-contain rounded border border-[#D4AF37]/40 shadow-2xl"
            />

            <div className="text-center text-amber-100">
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest">{activeLightboxImage.category}</span>
              <h3 className="text-xl font-serif-luxury font-bold">{activeLightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
