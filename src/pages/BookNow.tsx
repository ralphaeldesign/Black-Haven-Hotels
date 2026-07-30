import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, Users, BedDouble, CheckCircle2, ShieldCheck, Printer, ArrowRight, Check } from 'lucide-react';
import { ROOMS_DATA, APARTMENTS_DATA } from '../data/hotelData';
import { Room } from '../types';

export const BookNow: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Location state parameters or defaults
  const state = location.state || {};
  
  const today = new Date().toISOString().split('T')[0];
  const threeDaysLater = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(state.checkIn || today);
  const [checkOut, setCheckOut] = useState(state.checkOut || threeDaysLater);
  const [adults, setAdults] = useState(state.adults || 2);
  const [children, setChildren] = useState(state.children || 0);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    state.roomTypeId && state.roomTypeId !== 'all' ? state.roomTypeId : ROOMS_DATA[0].id
  );

  // Add-ons state
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Guest details state
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Confirmation state
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, end.getTime() - start.getTime());
  const nightsCount = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  // Find selected room or apartment
  const selectedRoom: Room | undefined = 
    ROOMS_DATA.find((r) => r.id === selectedRoomId) ||
    (APARTMENTS_DATA.find((a) => a.id === selectedRoomId) as unknown as Room) ||
    ROOMS_DATA[0];

  const roomPriceTotal = (selectedRoom?.pricePerNight || 500) * nightsCount;

  // Addon costs
  const addonOptions = [
    { id: 'chauffeur', title: 'Rolls-Royce Chauffeur Transfer', price: 180, desc: 'Private airport arrival & departure in Rolls-Royce Phantom' },
    { id: 'champagne', title: 'Vintage Dom Pérignon on Arrival', price: 220, desc: 'Ice-chilled 2012 Dom Pérignon with caviar tartelettes in suite' },
    { id: 'spa-pass', title: 'Daily Thermal Spa Unlimited Pass', price: 90, desc: 'Unlimited hydrotherapy, saunas, and rooftop pool access' },
    { id: 'butler', title: 'Dedicated 24/7 Personal Butler', price: 250, desc: 'Personal attendant for wardrobe, dining, and daily errands' }
  ];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonOptions.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = roomPriceTotal + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'BH-MAYFAIR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <div className="relative py-12 bg-[#070707] border-b border-neutral-800 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Reservation Engine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100">
            Reserve Your Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light">
            Best direct rate guarantee with complimentary champagne on arrival for direct suite bookings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {bookingConfirmed ? (
          /* Confirmation Receipt Screen */
          <div className="max-w-2xl mx-auto glass-card-gold p-8 rounded-xl border border-[#D4AF37]/50 shadow-2xl space-y-6 animate-fadeIn">
            <div className="text-center space-y-3 border-b border-neutral-800 pb-6">
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto animate-bounce" />
              <h2 className="text-3xl font-serif-luxury font-bold text-amber-100">
                Reservation Confirmed
              </h2>
              <p className="text-xs text-neutral-300">
                We look forward to welcoming you to Black Haven Hotel, <span className="text-[#D4AF37] font-semibold">{guestName}</span>.
              </p>
            </div>

            <div className="bg-[#070707] p-5 rounded border border-neutral-800 text-xs space-y-3 font-mono text-neutral-300">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-500 uppercase">Booking Reference:</span>
                <span className="text-[#D4AF37] font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 uppercase">Suite Selected:</span>
                <span className="text-amber-100 font-bold">{selectedRoom?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 uppercase">Stay Duration:</span>
                <span>{checkIn} to {checkOut} ({nightsCount} Night{nightsCount > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 uppercase">Guests:</span>
                <span>{adults} Adults, {children} Children</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Add-ons:</span>
                  <span>{selectedAddons.length} Custom Services Included</span>
                </div>
              )}
              <div className="flex justify-between border-t border-neutral-800 pt-2 text-sm">
                <span className="text-amber-200 font-bold">Grand Total Paid:</span>
                <span className="text-[#D4AF37] font-bold">${grandTotal}</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
              A detailed confirmation docket and chauffeur instructions have been sent to <span className="text-amber-200">{guestEmail}</span>.
            </p>

            <div className="flex items-center justify-center space-x-4 pt-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase flex items-center space-x-2 hover:border-[#D4AF37]"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          /* Multi-column Booking Engine */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Dates & Room Selection */}
              <div className="glass-card p-6 rounded-xl border border-neutral-800 space-y-6">
                <h3 className="text-xl font-serif-luxury font-bold text-amber-100 border-b border-neutral-800 pb-3 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-xs font-bold flex items-center justify-center">1</span>
                  <span>Dates & Accommodation</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div>
                    <label className="block text-neutral-400 mb-1">Check-In</label>
                    <input
                      type="date"
                      value={checkIn}
                      min={today}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Check-Out</label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || today}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Adults</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Children</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(parseInt(e.target.value, 10))}
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>
                </div>

                {/* Suite Selector Grid */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs uppercase tracking-widest text-amber-200 font-semibold">
                    Select Your Suite Sanctuary
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ROOMS_DATA.map((room) => (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                          selectedRoomId === room.id
                            ? 'bg-[#18150D] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                            : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <img src={room.image} alt={room.name} className="w-16 h-12 rounded object-cover" />
                          <div>
                            <h4 className="text-xs font-bold text-amber-100">{room.name}</h4>
                            <span className="text-[10px] text-neutral-400">{room.sqft} sq ft • {room.bed}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[#D4AF37] font-serif-luxury font-bold text-sm block">${room.pricePerNight}</span>
                          <span className="text-[9px] text-neutral-500 block uppercase">/ night</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 2: Custom Add-on Privileges */}
              <div className="glass-card p-6 rounded-xl border border-neutral-800 space-y-4">
                <h3 className="text-xl font-serif-luxury font-bold text-amber-100 border-b border-neutral-800 pb-3 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-xs font-bold flex items-center justify-center">2</span>
                  <span>Bespoke Add-on Privileges</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addonOptions.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all flex items-start justify-between ${
                          isSelected
                            ? 'bg-[#18150D] border-[#D4AF37]'
                            : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="space-y-1 pr-2">
                          <h4 className="text-xs font-bold text-amber-200 flex items-center space-x-1">
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                            <span>{addon.title}</span>
                          </h4>
                          <p className="text-[11px] text-neutral-400 leading-tight">{addon.desc}</p>
                        </div>
                        <span className="text-xs font-bold text-[#D4AF37] shrink-0">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Guest Info & Payment Form */}
              <form onSubmit={handleConfirmBooking} className="glass-card p-6 rounded-xl border border-neutral-800 space-y-4">
                <h3 className="text-xl font-serif-luxury font-bold text-amber-100 border-b border-neutral-800 pb-3 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-xs font-bold flex items-center justify-center">3</span>
                  <span>Guest Details & Guarantee</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Lord / Lady / Mr. / Ms."
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Telephone Number</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+44 20 7946 0000"
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1">Special Suite Requests</label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="High floor, extra pillows, late check-in..."
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-neutral-900 rounded border border-neutral-800 flex items-center space-x-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>No upfront credit card charge required now. Pay directly upon Mayfair arrival.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-xl"
                >
                  Confirm Suite Reservation
                </button>
              </form>

            </div>

            {/* Summary Sidebar Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="glass-card-gold p-6 rounded-xl border border-[#D4AF37]/40 shadow-2xl space-y-4">
                <h3 className="text-lg font-serif-luxury font-bold text-amber-100 border-b border-neutral-800 pb-3">
                  Reservation Summary
                </h3>

                {selectedRoom && (
                  <div className="flex items-center space-x-3">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-16 h-12 rounded object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-amber-100">{selectedRoom.name}</h4>
                      <span className="text-[10px] text-[#D4AF37]">${selectedRoom.pricePerNight} / night</span>
                    </div>
                  </div>
                )}

                <div className="space-y-2 text-xs text-neutral-300 border-t border-b border-neutral-800 py-3">
                  <div className="flex justify-between">
                    <span>Stay Duration:</span>
                    <span className="font-semibold text-amber-100">{nightsCount} Night{nightsCount > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-In:</span>
                    <span>{checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-Out:</span>
                    <span>{checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suite Subtotal:</span>
                    <span>${roomPriceTotal}</span>
                  </div>
                  {addonsTotal > 0 && (
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Add-ons Total:</span>
                      <span>+${addonsTotal}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm font-bold text-amber-100 pt-1">
                  <span>Grand Total:</span>
                  <span className="text-2xl font-serif-luxury text-[#D4AF37]">${grandTotal}</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
