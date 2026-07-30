import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: 'Concierge', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({ name: '', email: '', phone: '', department: 'Concierge', message: '' });
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 VIP Concierge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Contact & Location
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Our Mayfair concierge desk is at your service 24 hours a day, 7 days a week to arrange private transfers, dining, and custom suite amenities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-6 rounded-xl border border-neutral-800 space-y-6">
              <h2 className="text-2xl font-serif-luxury font-bold text-amber-100">
                Direct Sanctuaries
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-100 block">Hotel Address</strong>
                    <span>{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-300">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-100 block">Main Telephone Desk</strong>
                    <span>{HOTEL_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-300">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-100 block">General Concierge Email</strong>
                    <span>{HOTEL_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-300">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-100 block">Check-In / Out Policy</strong>
                    <span>Check-In: {HOTEL_INFO.checkInTime} • Check-Out: {HOTEL_INFO.checkOutTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Extensions */}
            <div className="bg-[#070707] p-6 rounded-xl border border-neutral-800 space-y-3 text-xs">
              <h3 className="font-serif-luxury font-bold text-amber-200 text-sm">Department Extensions</h3>
              <div className="grid grid-cols-2 gap-2 text-neutral-400">
                <div><span className="text-neutral-200 block">Suite Reservations:</span> Ext. 101</div>
                <div><span className="text-neutral-200 block">L'Étoile Noir Dining:</span> Ext. 202</div>
                <div><span className="text-neutral-200 block">Aura Thermal Spa:</span> Ext. 303</div>
                <div><span className="text-neutral-200 block">Rolls-Royce Chauffeur:</span> Ext. 404</div>
              </div>
            </div>
          </div>

          {/* Form Col */}
          <div className="lg:col-span-7 glass-card p-8 rounded-xl border border-neutral-800 space-y-6">
            <h2 className="text-2xl font-serif-luxury font-bold text-amber-100">
              Send a Concierge Inquiry
            </h2>

            {formSent ? (
              <div className="p-6 bg-amber-950/40 border border-amber-500/40 rounded text-center space-y-2 text-amber-200 text-xs">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" />
                <h4 className="font-bold text-base">Message Sent</h4>
                <p>Your inquiry has been logged with Mayfair VIP Concierge. We shall respond promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lord / Lady / Mr. / Ms."
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 20 7946 0000"
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    >
                      <option value="Concierge">VIP Concierge</option>
                      <option value="Reservations">Room & Penthouse Booking</option>
                      <option value="Dining">Michelin Restaurant Table</option>
                      <option value="Spa">Aura Spa & Wellness</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Your Message / Special Requests</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding arrival times, dietary preferences, or custom arrangements..."
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg"
                >
                  Send Inquiry to Concierge Desk
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Map Section */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 h-96 shadow-2xl">
          <iframe
            src={HOTEL_INFO.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
            allowFullScreen={false}
            loading="lazy"
            title="Black Haven Hotel Map Location"
          />
        </div>

      </div>
    </div>
  );
};
