import React, { useState } from 'react';
import { RoomCard } from '../components/RoomCard';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types';
import { Search, Filter, Sparkles } from 'lucide-react';

export const RoomsSuites: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { label: 'All Sanctuaries', value: 'all' },
    { label: 'Penthouse', value: 'penthouse' },
    { label: 'Presidential', value: 'presidential' },
    { label: 'Executive', value: 'executive' },
    { label: 'Suites', value: 'suite' },
    { label: 'Deluxe', value: 'deluxe' }
  ];

  const filteredRooms = ROOMS_DATA.filter((room) => {
    const matchesFilter = activeFilter === 'all' || room.type === activeFilter;
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          room.amenities.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 pt-28 pb-24">
      {/* Page Header Banner */}
      <div className="relative py-16 bg-[#070707] border-b border-neutral-800 text-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mayfair Accommodations</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-amber-100">
            Rooms & Opulent Suites
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Every suite is an architectural masterpiece featuring handcrafted furnishings, acoustics engineered for absolute quietude, and 24-hour white-glove butler care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-card p-4 rounded-lg border border-neutral-800">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-medium transition-all ${
                  activeFilter === opt.value
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suites, amenities..."
              className="w-full bg-[#121212] border border-neutral-700/80 rounded py-2 pl-9 pr-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

        </div>

        {/* Rooms Grid */}
        {filteredRooms.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/40 rounded-lg border border-neutral-800 space-y-3">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto" />
            <h3 className="text-xl font-serif-luxury text-amber-100">No Suites Match Your Criteria</h3>
            <p className="text-xs text-neutral-400">Try adjusting your category filter or search terms.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-2 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onOpenDetails={(r) => setSelectedRoom(r)}
              />
            ))}
          </div>
        )}

      </div>

      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />
    </div>
  );
};
