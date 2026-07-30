import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 pt-16 pb-12 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#D4AF37]/30 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 border-2 border-[#D4AF37] flex items-center justify-center rotate-45">
                <span className="-rotate-45 font-serif text-lg font-bold text-[#D4AF37]">B</span>
              </div>
              <div className="ml-1">
                <h3 className="text-xl font-serif tracking-[0.2em] text-white uppercase font-bold">
                  Black Haven
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                  Hotel & Suites • Mayfair
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed pr-4">
              A sanctuary of unmatched European luxury, 3 Michelin-starred gastronomy, and holistic thermal wellness. Crafted for world travelers seeking timeless elegance.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center space-x-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{HOTEL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-serif-luxury tracking-widest uppercase text-amber-100 mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              Sanctuaries
            </h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/" className="hover:text-[#D4AF37] transition-colors">Home Page</NavLink></li>
              <li><NavLink to="/rooms" className="hover:text-[#D4AF37] transition-colors">Rooms & Suites</NavLink></li>
              <li><NavLink to="/apartments" className="hover:text-[#D4AF37] transition-colors">Luxury Apartments</NavLink></li>
              <li><NavLink to="/restaurant" className="hover:text-[#D4AF37] transition-colors">Michelin Dining</NavLink></li>
              <li><NavLink to="/spa" className="hover:text-[#D4AF37] transition-colors">Aura Thermal Spa</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-[#D4AF37] transition-colors">Photo Gallery</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Experiences */}
          <div>
            <h4 className="text-sm font-serif-luxury tracking-widest uppercase text-amber-100 mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/events" className="hover:text-[#D4AF37] transition-colors">Weddings & Galas</NavLink></li>
              <li><NavLink to="/events" className="hover:text-[#D4AF37] transition-colors">Executive Forums</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#D4AF37] transition-colors">Our Heritage</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#D4AF37] transition-colors">VIP Concierge</NavLink></li>
              <li><NavLink to="/book" className="hover:text-[#D4AF37] transition-colors">Reserve Your Stay</NavLink></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 className="text-sm font-serif-luxury tracking-widest uppercase text-amber-100 mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              The Gazette
            </h4>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Subscribe to receive private invitations, seasonal tasting announcements, and exclusive suite privileges.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#121212] border border-neutral-700/80 rounded-sm py-2.5 px-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] text-black rounded-sm flex items-center justify-center hover:bg-amber-300 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {subscribed && (
              <div className="flex items-center space-x-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 p-2 rounded mt-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>You are subscribed to Black Haven Privileges.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Black Haven Hotel & Suites Mayfair London. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6 text-neutral-400">
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Terms of Luxury Service</span>
            <span>•</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
