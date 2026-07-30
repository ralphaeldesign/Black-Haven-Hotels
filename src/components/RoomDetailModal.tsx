import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Star, Users, Maximize, Bed, Check, Sparkles, Shield, Wifi, Tv, Coffee } from 'lucide-react';
import { Room } from '../types';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!room) return null;

  const activeImage = selectedImage || room.image;

  const handleBook = () => {
    onClose();
    navigate('/book', { state: { roomTypeId: room.id } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-lg shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Close Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#070707]">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 rounded-sm">
              {room.type} Suite
            </span>
            <span className="text-neutral-400 text-xs">• Mayfair Sanctuary</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Image & Gallery */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src={activeImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-[#D4AF37]/40 text-right">
                <span className="text-[#D4AF37] text-2xl font-bold font-serif-luxury">${room.pricePerNight}</span>
                <span className="text-neutral-400 text-xs block uppercase">/ night</span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {room.gallery && room.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-1">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-16 rounded overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img ? 'border-[#D4AF37] scale-95' : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Title & Rating */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-4 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-amber-100">
                {room.name}
              </h2>
              <p className="text-xs text-[#D4AF37] mt-1 font-medium tracking-wide">
                View: {room.view}
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-neutral-900/80 px-4 py-2 rounded border border-neutral-800">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold ml-1.5 text-amber-200">{room.rating.toFixed(1)}</span>
              </div>
              <span className="text-neutral-500 text-xs">({room.reviewsCount} verified guest reviews)</span>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800 text-xs">
            <div className="space-y-1">
              <span className="text-neutral-500 uppercase text-[10px]">Capacity</span>
              <p className="font-semibold text-neutral-200 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{room.capacity.adults} Adults, {room.capacity.children} Child</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-500 uppercase text-[10px]">Suite Space</span>
              <p className="font-semibold text-neutral-200 flex items-center space-x-1">
                <Maximize className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{room.sqft} sq ft / {Math.round(room.sqft * 0.0929)} m²</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-500 uppercase text-[10px]">Bedding</span>
              <p className="font-semibold text-neutral-200 flex items-center space-x-1">
                <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{room.bed}</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-500 uppercase text-[10px]">Privileges</span>
              <p className="font-semibold text-amber-300 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>24/7 Butler Service</span>
              </p>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-widest text-amber-100 font-semibold border-l-2 border-[#D4AF37] pl-3">
              The Sanctuary Experience
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              {room.longDescription || room.description}
            </p>
          </div>

          {/* Full Amenities Grid */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-widest text-amber-100 font-semibold border-l-2 border-[#D4AF37] pl-3">
              Inclusive Amenities & Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="text-neutral-300">{amenity}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
                <Wifi className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-neutral-300">1Gbps Dedicated Fiber Wi-Fi</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
                <Tv className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-neutral-300">8K OLED TV & Bang & Olufsen Audio</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
                <Coffee className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-neutral-300">Nespresso Atelier Espresso Console</span>
              </div>
            </div>
          </div>

          {/* Guarantee Footer Strip */}
          <div className="flex items-center space-x-3 bg-amber-950/20 border border-[#D4AF37]/30 p-3 rounded text-xs text-amber-200">
            <Shield className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <span>Best Rate Guaranteed when booking directly with Black Haven. Complimentary Champagne on arrival for direct suite reservations.</span>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 bg-[#070707] border-t border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-neutral-400 block">Total from</span>
            <span className="text-xl font-serif-luxury font-bold text-amber-200">${room.pricePerNight} <span className="text-xs text-neutral-400 font-normal">/ night</span></span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded border border-neutral-700 text-neutral-300 text-xs font-medium uppercase hover:border-neutral-500"
            >
              Close
            </button>
            <button
              onClick={handleBook}
              className="px-6 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
            >
              Reserve Suite
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
