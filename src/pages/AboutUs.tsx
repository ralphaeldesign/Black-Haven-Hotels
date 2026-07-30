import React from 'react';
import { Sparkles, Award, Shield, Heart, Star } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Noble Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            About Black Haven Hotel
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Where Mayfair tradition meets modern architectural mastery. Built on the principles of discretion, craftsmanship, and timeless grandeur.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              100 Years of Mayfair Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100 leading-tight">
              A Legacy Born of <br />
              <span className="gold-gradient-text italic">Uncompromising Perfection</span>
            </h2>

            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Originally commissioned in 1924 as a private estate for European nobility, Black Haven was transformed into London’s premier 5-star sanctuary. Preserving its historic Marquina marble facades, the hotel was fully restored with acoustic soundproofing, smart lighting automation, and thermal hydrotherapy chambers.
            </p>

            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Our philosophy is rooted in intuitive hospitality: anticipating every desire before it is spoken. Whether welcoming world leaders, artists, or privacy-seeking travelers, Black Haven remains an oasis of quiet dignity.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800 text-center">
              <div>
                <span className="text-2xl font-serif-luxury font-bold text-[#D4AF37]">1924</span>
                <span className="text-[10px] text-neutral-400 block uppercase">Founded</span>
              </div>
              <div>
                <span className="text-2xl font-serif-luxury font-bold text-[#D4AF37]">150+</span>
                <span className="text-[10px] text-neutral-400 block uppercase">Opulent Suites</span>
              </div>
              <div>
                <span className="text-2xl font-serif-luxury font-bold text-[#D4AF37]">3 Stars</span>
                <span className="text-[10px] text-neutral-400 block uppercase">Michelin Guide</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl h-96">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
              alt="Black Haven History"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Accolades & Awards */}
        <div className="bg-[#070707] p-8 sm:p-12 rounded-xl border border-neutral-800 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Global Distinction
            </span>
            <h3 className="text-3xl font-serif-luxury font-bold text-amber-100">
              Awards & Accolades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass-card p-6 rounded-lg border border-neutral-800 space-y-3">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
              <h4 className="font-bold text-amber-100 text-sm">Forbes 5-Star Hotel Rating</h4>
              <p className="text-xs text-neutral-400">Awarded annually for 12 consecutive years for flawless luxury service standards.</p>
            </div>

            <div className="glass-card p-6 rounded-lg border border-neutral-800 space-y-3">
              <Star className="w-8 h-8 text-[#D4AF37] mx-auto" />
              <h4 className="font-bold text-amber-100 text-sm">3 Michelin Stars</h4>
              <p className="text-xs text-neutral-400">Conferred upon L'Étoile Noir and Executive Chef Julian Vance.</p>
            </div>

            <div className="glass-card p-6 rounded-lg border border-neutral-800 space-y-3">
              <Shield className="w-8 h-8 text-[#D4AF37] mx-auto" />
              <h4 className="font-bold text-amber-100 text-sm">Condé Nast Gold List</h4>
              <p className="text-xs text-neutral-400">Voted #1 Luxury Boutique Hotel in the United Kingdom.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
