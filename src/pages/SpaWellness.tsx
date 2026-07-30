import React, { useState } from 'react';
import { Sparkles, Clock, Dumbbell, Waves, HeartPulse } from 'lucide-react';
import { SpaBookingModal } from '../components/SpaBookingModal';
import { SPA_TREATMENTS } from '../data/hotelData';
import { SpaTreatment } from '../types';

export const SpaWellness: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<SpaTreatment | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thermal Sanctuary</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Aura Thermal Spa & Fitness
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Rejuvenate body and mind in our subterranean hydrotherapy thermal circuit, heated rooftop pool, and Technogym bio-tracking fitness studio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Spa Treatments Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Signature Rituals
            </span>
            <h2 className="text-3xl font-serif-luxury font-bold text-amber-100">
              Spa & Wellness Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPA_TREATMENTS.map((treatment) => (
              <div key={treatment.id} className="glass-card rounded-lg overflow-hidden border border-neutral-800 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded text-[#D4AF37] text-xs font-bold font-serif-luxury border border-[#D4AF37]/30">
                      ${treatment.price}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
                      <span>{treatment.category}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        <span>{treatment.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-serif-luxury font-bold text-amber-100">
                      {treatment.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="w-full py-2.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    Schedule Ritual
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Spotlight: Rooftop Pool & Gym */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="glass-card p-8 rounded-xl border border-neutral-800 space-y-4">
            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
              Heated Infinity Rooftop Pool
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Suspended above the skyline, our 30-meter heated rooftop infinity pool features underwater acoustics, hydromassage jets, and climate-sheltered cabanas. Open 6:00 AM to 10:00 PM daily.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl border border-neutral-800 space-y-4">
            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
              24/7 Technogym Fitness Club
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Equipped with Technogym Biostrength AI machinery, cardiovascular tracking, private yoga sanctuary, and resident Olympic-level personal trainers upon request.
            </p>
          </div>

        </div>

      </div>

      <SpaBookingModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
};
