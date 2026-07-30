import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Utensils } from 'lucide-react';
import { DiningVenue } from '../types';

interface TableReservationModalProps {
  venue: DiningVenue | null;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({ venue, onClose }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!venue) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0D0D0D] border border-[#D4AF37]/40 rounded-lg shadow-2xl overflow-hidden p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30 text-[#D4AF37]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif-luxury font-bold text-amber-100">
                Reserve Table • {venue.name}
              </h3>
              <p className="text-xs text-neutral-400">{venue.tagline}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isConfirmed ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto animate-bounce" />
            <h4 className="text-2xl font-serif-luxury text-amber-100 font-bold">
              Table Reservation Confirmed
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="text-[#D4AF37] font-semibold">{name}</span>. We have reserved a table for {guests} guests at {venue.name} on {date} at {time}. A confirmation email has been sent to {email}.
            </p>
            <div className="bg-neutral-900/80 p-4 rounded border border-neutral-800 text-xs text-neutral-400 text-left space-y-1 font-mono">
              <p>Reservation Ref: BH-DIN-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p>Dress Code: {venue.dressCode}</p>
              <p>Timing: {venue.timing}</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-neutral-400 mb-1 flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#D4AF37]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>Time</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                >
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#D4AF37]" />
                  <span>Guests</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8+ Party</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Lord / Lady / Mr. / Ms."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+44 20 7946 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Special Dietary / Seating Preferences</label>
              <textarea
                rows={2}
                placeholder="e.g. Anniversary celebration, vegan menu, booth seating..."
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg"
              >
                Confirm Dining Table
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
