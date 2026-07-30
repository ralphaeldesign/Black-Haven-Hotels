import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, Home, Shield, Car, UserCheck, Key, PhoneCall } from 'lucide-react';
import { APARTMENTS_DATA, HOTEL_INFO } from '../data/hotelData';

export const Apartments: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Residences</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Luxury Penthouse Apartments
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Extended stay residences featuring gourmet Gaggenau kitchens, private direct elevator access, and full 5-star hotel butler services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Apartment Cards */}
        {APARTMENTS_DATA.map((apt, index) => (
          <div
            key={apt.id}
            className={`glass-card rounded-xl border border-neutral-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Col */}
            <div className={`lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[350px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img src={apt.image} alt={apt.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-[#D4AF37]/40">
                <span className="text-[#D4AF37] text-2xl font-bold font-serif-luxury">${apt.pricePerNight}</span>
                <span className="text-neutral-400 text-xs block uppercase">/ night</span>
              </div>
            </div>

            {/* Info Col */}
            <div className={`lg:col-span-5 p-8 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-[#D4AF37] uppercase font-semibold">
                  <Home className="w-4 h-4" />
                  <span>{apt.bedrooms} Bedrooms • {apt.bathrooms} Baths • {apt.sqft} sq ft</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-amber-100">
                  {apt.name}
                </h2>

                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {apt.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <h4 className="text-xs uppercase tracking-widest text-amber-200 font-semibold mb-2">
                    Residence Privileges
                  </h4>
                  {apt.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => navigate('/book', { state: { roomTypeId: apt.id } })}
                  className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110 shadow-lg"
                >
                  Reserve Residence
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Benefits Grid */}
        <div className="bg-[#070707] p-8 rounded-xl border border-neutral-800 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
              Long-Stay Privileges
            </h3>
            <p className="text-xs text-neutral-400">
              For stays exceeding 14 nights, our residence desk offers bespoke concierge privileges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-neutral-900/60 p-4 rounded border border-neutral-800 space-y-2">
              <Car className="w-6 h-6 text-[#D4AF37]" />
              <h4 className="font-bold text-amber-100">Unlimited Rolls-Royce Fleet</h4>
              <p className="text-neutral-400">Dedicated chauffeur available on call for transfers within London.</p>
            </div>

            <div className="bg-neutral-900/60 p-4 rounded border border-neutral-800 space-y-2">
              <UserCheck className="w-6 h-6 text-[#D4AF37]" />
              <h4 className="font-bold text-amber-100">Private Resident Butler</h4>
              <p className="text-neutral-400">Exclusive butler attending to wardrobe, dining, and errand requests.</p>
            </div>

            <div className="bg-neutral-900/60 p-4 rounded border border-neutral-800 space-y-2">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
              <h4 className="font-bold text-amber-100">High-Security Floor Matrix</h4>
              <p className="text-neutral-400">Biometric keycard security matrix with diplomatic protection capabilities.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
