import React, { useState } from 'react';
import { Sparkles, Utensils, Clock, Wine, ChevronRight } from 'lucide-react';
import { TableReservationModal } from '../components/TableReservationModal';
import { DINING_VENUES } from '../data/hotelData';
import { DiningVenue } from '../types';

export const Restaurant: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);
  const [activeVenueTab, setActiveVenueTab] = useState<string>(DINING_VENUES[0].id);
  const [activeMenuCategory, setActiveMenuCategory] = useState<'Starters' | 'Mains' | 'Desserts' | 'Cocktails'>('Starters');

  const currentVenue = DINING_VENUES.find(v => v.id === activeVenueTab) || DINING_VENUES[0];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Michelin Gastronomy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Restaurant & Fine Dining
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Four distinctive dining sanctuaries overseen by Master Chef Julian Vance, presenting 3-Michelin-star tasting menus and rare vintage wine pairings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Venue Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {DINING_VENUES.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVenueTab(v.id)}
              className={`px-6 py-3 rounded-md text-xs uppercase tracking-widest font-semibold transition-all border ${
                activeVenueTab === v.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black border-[#D4AF37] shadow-lg scale-105'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-[#D4AF37]/40'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* Selected Venue Main Spotlight */}
        <div className="glass-card rounded-xl border border-neutral-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
          <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[380px]">
            <img src={currentVenue.image} alt={currentVenue.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/30">
              {currentVenue.tagline}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif-luxury font-bold text-amber-100">
                {currentVenue.name}
              </h2>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {currentVenue.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs pt-3 border-t border-neutral-800">
                <div className="space-y-1">
                  <span className="text-neutral-500 uppercase text-[10px]">Cuisine Style</span>
                  <p className="text-amber-200 font-semibold">{currentVenue.cuisine}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 uppercase text-[10px]">Dress Code</span>
                  <p className="text-amber-200 font-semibold">{currentVenue.dressCode}</p>
                </div>
                <div className="col-span-2 space-y-1">
                  <span className="text-neutral-500 uppercase text-[10px]">Operating Hours</span>
                  <p className="text-neutral-300 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{currentVenue.timing}</span>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedVenue(currentVenue)}
              className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110 shadow-lg"
            >
              Reserve Table at {currentVenue.name}
            </button>
          </div>
        </div>

        {/* Menu Highlights Interactive Section */}
        {currentVenue.menuHighlights && currentVenue.menuHighlights.length > 0 && (
          <div className="space-y-8 bg-[#070707] p-8 rounded-xl border border-neutral-800">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-neutral-800 pb-4 gap-4">
              <div>
                <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
                  Menu Highlights
                </h3>
                <p className="text-xs text-neutral-400">Curated by Executive Chef Julian Vance</p>
              </div>

              {/* Menu Categories */}
              <div className="flex space-x-2">
                {(['Starters', 'Mains', 'Desserts', 'Cocktails'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveMenuCategory(cat)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                      activeMenuCategory === cat
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentVenue.menuHighlights
                .filter(item => item.category === activeMenuCategory || currentVenue.menuHighlights.length <= 2)
                .map((item, idx) => (
                  <div key={idx} className="bg-neutral-900/60 p-4 rounded border border-neutral-800 flex justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-amber-100">{item.name}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-amber-200 font-bold font-serif-luxury text-base shrink-0">{item.price}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>

      <TableReservationModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
      />
    </div>
  );
};
