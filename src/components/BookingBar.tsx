import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BedDouble, ChevronDown, Sparkles } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

export const BookingBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const navigate = useNavigate();

  // Default dates: today and 3 days from now
  const today = new Date().toISOString().split('T')[0];
  const threeDaysLater = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(threeDaysLater);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [roomType, setRoomType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/book', {
      state: {
        checkIn,
        checkOut,
        adults: parseInt(adults, 10),
        children: parseInt(children, 10),
        roomTypeId: roomType
      }
    });
  };

  return (
    <div className={`bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl ${className}`}>
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        
        {/* Check-In Date */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-[#D4AF37]" />
            <span>Check In</span>
          </label>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>

        {/* Check-Out Date */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-[#D4AF37]" />
            <span>Check Out</span>
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>

        {/* Adults */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium flex items-center space-x-1">
            <Users className="w-3 h-3 text-[#D4AF37]" />
            <span>Guests</span>
          </label>
          <div className="relative">
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none pr-8 transition-colors cursor-pointer"
            >
              <option value="1">01 Adult</option>
              <option value="2">02 Adults</option>
              <option value="3">03 Adults</option>
              <option value="4">04 Adults</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Children */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium flex items-center space-x-1">
            <Users className="w-3 h-3 text-[#D4AF37]" />
            <span>Children</span>
          </label>
          <div className="relative">
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none pr-8 transition-colors cursor-pointer"
            >
              <option value="0">00 Children</option>
              <option value="1">01 Child</option>
              <option value="2">02 Children</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Room Type */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium flex items-center space-x-1">
            <BedDouble className="w-3 h-3 text-[#D4AF37]" />
            <span>Room Type</span>
          </label>
          <div className="relative">
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none pr-8 transition-colors cursor-pointer"
            >
              <option value="all">All Suites</option>
              {ROOMS_DATA.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} (${room.pricePerNight})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#D4AF37] text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c5a02e] transition-all flex items-center justify-center space-x-2 shadow-lg active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Check Rates</span>
          </button>
        </div>

      </form>
    </div>
  );
};
