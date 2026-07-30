import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Crown, Menu, X, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Apartments', path: '/apartments' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Spa & Wellness', path: '/spa' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`bg-[#070707] text-neutral-400 text-xs py-2 px-4 border-b border-neutral-800/80 hidden lg:block transition-all ${isScrolled ? 'h-0 overflow-hidden py-0 border-none' : 'h-auto'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${HOTEL_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Mayfair, London W1J</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase font-medium bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Forbes 5-Star Certified
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-300">24/7 VIP Concierge Service</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-black/30 backdrop-blur-md border-b border-white/10 py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 border-2 border-[#D4AF37] flex items-center justify-center rotate-45 group-hover:bg-[#D4AF37]/10 transition-all">
              <span className="-rotate-45 font-serif text-lg font-bold text-[#D4AF37]">B</span>
            </div>
            <div className="flex flex-col ml-1">
              <span className="text-lg sm:text-xl font-serif tracking-[0.2em] text-white uppercase font-bold group-hover:text-[#D4AF37] transition-colors">
                Black Haven
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37]/90 font-medium">
                Hotel & Suites
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.2em] font-medium transition-all relative py-1 hover:text-white ${
                    isActive ? 'text-[#D4AF37] border-b border-[#D4AF37] pb-1' : 'text-white/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Book Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/book')}
              className="hidden sm:inline-flex items-center space-x-2 bg-[#D4AF37] text-black px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#c5a02e] transition-all shadow-lg active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-amber-200 hover:text-white hover:bg-neutral-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 px-6 py-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm tracking-widest uppercase font-medium py-2 border-b border-neutral-800/60 flex items-center justify-between ${
                      isActive ? 'text-[#D4AF37] font-semibold pl-2 border-[#D4AF37]/50' : 'text-neutral-300 hover:text-[#D4AF37]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-[#D4AF37] opacity-60">›</span>
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => navigate('/book')}
                  className="w-full py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-black font-semibold text-xs tracking-widest uppercase text-center shadow-lg"
                >
                  Book Your Stay Now
                </button>
                <div className="text-center text-xs text-neutral-400 pt-2 flex flex-col space-y-1">
                  <span>Mayfair, London • {HOTEL_INFO.phone}</span>
                  <span className="text-[#D4AF37]">concierge@blackhavenhotel.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
