import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Maximize, Bed, Check, Eye } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onOpenDetails?: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onOpenDetails }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="glass-card rounded-lg overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col h-full shadow-xl">
      {/* Room Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-600 text-xs">
            Loading Luxury Suite...
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
          {room.type}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#D4AF37]/40 text-right">
          <span className="text-amber-200 text-lg font-bold font-serif-luxury">${room.pricePerNight}</span>
          <span className="text-neutral-400 text-[10px] block uppercase tracking-wider">/ night</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold ml-1 text-amber-200">{room.rating.toFixed(1)}</span>
            </div>
            <span className="text-neutral-500 text-xs">({room.reviewsCount} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-serif-luxury font-bold text-amber-100 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
            {room.name}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 text-xs leading-relaxed mt-2 line-clamp-2">
            {room.description}
          </p>

          {/* Room Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-neutral-800 text-neutral-300 text-xs">
            <div className="flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{room.capacity.adults} Adults</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Maximize className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{room.sqft} sq ft</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="truncate">{room.bed.split(' ')[0]}</span>
            </div>
          </div>

          {/* Top Amenities Pills */}
          <div className="flex flex-wrap gap-1.5">
            {room.amenities.slice(0, 4).map((amenity, idx) => (
              <span key={idx} className="bg-neutral-900/90 text-neutral-300 border border-neutral-800 text-[10px] px-2 py-0.5 rounded flex items-center space-x-1">
                <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                <span className="truncate">{amenity}</span>
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-[10px] text-[#D4AF37] px-1 py-0.5 font-medium">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => onOpenDetails ? onOpenDetails(room) : navigate('/rooms')}
            className="w-full py-2 px-3 rounded border border-neutral-700 text-neutral-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <button
            onClick={() => navigate('/book', { state: { roomTypeId: room.id } })}
            className="w-full py-2 px-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold transition-all hover:brightness-110 text-xs uppercase tracking-wider shadow-md"
          >
            Book Suite
          </button>
        </div>
      </div>
    </div>
  );
};
