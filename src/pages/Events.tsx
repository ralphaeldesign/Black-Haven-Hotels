import React, { useState } from 'react';
import { Sparkles, Users, Maximize, Calendar, CheckCircle2 } from 'lucide-react';
import { EVENT_VENUES } from '../data/hotelData';

export const Events: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [eventData, setEventData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Wedding',
    date: '',
    guests: '100',
    venueId: EVENT_VENUES[0].id,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Celebrations</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Weddings & Event Venues
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            From regal weddings under Baccarat crystal chandeliers to high-level diplomatic summits with private butler catering.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Venues Showcase */}
        <div className="space-y-12">
          {EVENT_VENUES.map((venue) => (
            <div key={venue.id} className="glass-card rounded-xl border border-neutral-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
              <div className="lg:col-span-6 relative h-72 lg:h-auto min-h-[350px]">
                <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif-luxury font-bold text-amber-100">
                    {venue.name}
                  </h2>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {venue.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-3 border-t border-neutral-800">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-neutral-300">Up to {venue.capacity} Guests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-neutral-300">{venue.areaSqFt} sq ft</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold block mb-2">Suitable For</span>
                    <div className="flex flex-wrap gap-2">
                      {venue.suitableFor.map((item, idx) => (
                        <span key={idx} className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] px-2.5 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#inquiry-form"
                  onClick={() => setEventData({ ...eventData, venueId: venue.id })}
                  className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110 text-center shadow-lg block"
                >
                  Inquire Venue Availability
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Event Inquiry Form */}
        <div id="inquiry-form" className="glass-card p-8 sm:p-12 rounded-xl border border-neutral-800 space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-serif-luxury font-bold text-amber-100">
              Event Planning Inquiry
            </h3>
            <p className="text-xs text-neutral-400">
              Our Senior Director of Special Events will curate a customized proposal for your occasion.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-amber-950/40 border border-amber-500/40 rounded-lg text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto animate-bounce" />
              <h4 className="text-xl font-serif-luxury text-amber-100 font-bold">Inquiry Received</h4>
              <p className="text-xs text-neutral-300">
                Thank you, <span className="text-[#D4AF37] font-semibold">{eventData.name}</span>. Our Mayfair Events Director will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={eventData.name}
                    onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                    placeholder="Lord / Lady / Mr. / Ms."
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={eventData.email}
                    onChange={(e) => setEventData({ ...eventData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-1">Event Type</label>
                  <select
                    value={eventData.type}
                    onChange={(e) => setEventData({ ...eventData, type: e.target.value })}
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  >
                    <option value="Wedding">Wedding Ceremony / Reception</option>
                    <option value="Gala">Gala Dinner</option>
                    <option value="Corporate">Executive Summit</option>
                    <option value="Fashion">Fashion Show / Launch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Target Date</label>
                  <input
                    type="date"
                    required
                    value={eventData.date}
                    onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Expected Guests</label>
                  <input
                    type="number"
                    value={eventData.guests}
                    onChange={(e) => setEventData({ ...eventData, guests: e.target.value })}
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Special Vision / Technical Requirements</label>
                <textarea
                  rows={3}
                  value={eventData.notes}
                  onChange={(e) => setEventData({ ...eventData, notes: e.target.value })}
                  placeholder="e.g. Michelin 5-course tasting menu, live orchestra staging, floral design..."
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110 shadow-lg"
              >
                Submit Event Proposal Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
