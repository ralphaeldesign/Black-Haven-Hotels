import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, Star, ChevronRight, Award, Building, Clock, 
  ArrowRight, Check, HelpCircle, ChevronDown, Mail, Send, CheckCircle2 
} from 'lucide-react';
import { BookingBar } from '../components/BookingBar';
import { RoomCard } from '../components/RoomCard';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { TableReservationModal } from '../components/TableReservationModal';
import { 
  HOTEL_INFO, ROOMS_DATA, APARTMENTS_DATA, HOTEL_AMENITIES_LIST, 
  DINING_VENUES, SPA_TREATMENTS, TESTIMONIALS, STATS_DATA, FAQS_DATA, 
  GALLERY_IMAGES 
} from '../data/hotelData';
import { Room, DiningVenue } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setContactSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH CINEMATIC VIDEO & OVERLAY */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Video Stream / Ambient Fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
            className="w-full h-full object-cover scale-105 filter brightness-75"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-resort-with-swimming-pool-and-palm-trees-41527-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark luxury overlay vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />
        </div>

        {/* Hero Headline Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to Black Haven • Mayfair London</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-white leading-tight"
          >
            Experience Luxury <br />
            <span className="italic text-[#D4AF37]">Beyond Expectations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {HOTEL_INFO.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => navigate('/book')}
              className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#c5a02e] transition-all shadow-xl flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
            >
              <span>Explore The Suites</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/rooms')}
              className="w-full sm:w-auto border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37]/10 transition-all cursor-pointer"
            >
              Virtual Tour
            </button>
          </motion.div>
        </div>

        {/* Floating Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-2 text-neutral-400">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-neutral-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-[#D4AF37] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. OVERLAY BOOKING BAR */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20">
        <BookingBar />
      </div>

      {/* 3. WELCOME & HERITAGE INTRODUCTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>The Pinnacle of Opulence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 leading-tight">
              A Haven Crafted for <br />
              <span className="gold-gradient-text italic">Discerning Travelers</span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Founded in Mayfair, Black Haven Hotel & Suites combines 19th-century architectural nobility with state-of-the-art modern automation. Every room is custom-furnished with rare Marquina marble, silk tapestries, and acoustics engineered for whisper-quiet serenity.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-800 text-xs">
              <div>
                <h4 className="text-[#D4AF37] font-serif-luxury text-xl font-bold">24/7 Personal Butler</h4>
                <p className="text-neutral-400 mt-1">Dedicated white-glove team assigned to every suite tier.</p>
              </div>

              <div>
                <h4 className="text-[#D4AF37] font-serif-luxury text-xl font-bold">3 Michelin Stars</h4>
                <p className="text-neutral-400 mt-1">Culinary excellence overseen by Master Chef Julian Vance.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-amber-200 transition-colors"
              >
                <span>Read Our Heritage Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Heritage Image Composition */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                alt="Black Haven Hotel Exterior"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -left-6 bg-[#121212] border border-[#D4AF37]/40 p-5 rounded-lg shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-amber-200 font-bold">5.0 / 5.0 Rating</span>
              </div>
              <p className="text-xs text-neutral-300 italic">
                "The finest luxury hotel experience in Europe today."
              </p>
              <span className="text-[10px] text-[#D4AF37] block mt-2 font-semibold uppercase tracking-wider">
                — Condé Nast Traveler
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED ROOMS & SUITES SECTION */}
      <section className="py-20 bg-[#070707] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block mb-2">
                Opulent Sanctuaries
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
                Featured Suites & Residences
              </h2>
            </div>

            <button
              onClick={() => navigate('/rooms')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold hover:text-amber-200"
            >
              <span>View All 150+ Suites</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.filter(r => r.isFeatured).map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onOpenDetails={(r) => setSelectedRoom(r)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. LUXURY APARTMENTS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
            Extended Stays & Residences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
            Penthouse Luxury Apartments
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            Designed for long-stay diplomats, executives, and families seeking full household amenities with 5-star hotel butler privileges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {APARTMENTS_DATA.map((apt) => (
            <div key={apt.id} className="glass-card rounded-lg overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div className="relative h-60 overflow-hidden">
                <img src={apt.image} alt={apt.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded text-[#D4AF37] text-sm font-bold font-serif-luxury border border-[#D4AF37]/30">
                  ${apt.pricePerNight} <span className="text-[10px] text-neutral-400 font-sans font-normal">/ night</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-serif-luxury font-bold text-amber-100">{apt.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{apt.description}</p>
                
                <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs">
                  {apt.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/book', { state: { roomTypeId: apt.id } })}
                  className="w-full py-2.5 rounded bg-neutral-900 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  Inquire Residence
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOTEL AMENITIES GRID */}
      <section className="py-20 bg-[#070707] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              World-Class Conveniences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
              Comprehensive Hotel Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {HOTEL_AMENITIES_LIST.map((amenity) => (
              <div
                key={amenity.id}
                className="glass-card p-5 rounded-lg border border-neutral-800/80 hover:border-[#D4AF37]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-amber-100 mb-1">{amenity.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{amenity.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. RESTAURANT & BAR PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Culinary Artistry
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-100 leading-tight">
              3 Michelin-Starred <br />
              <span className="gold-gradient-text italic">Fine Dining & Lounge</span>
            </h2>

            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Experience L'Étoile Noir under the direction of Executive Chef Julian Vance. From imperial Osetra caviar tartelettes to 25-year Macallan smoked cocktails in The Gold Vault Bar.
            </p>

            <div className="space-y-4 pt-2">
              {DINING_VENUES.slice(0, 2).map((venue) => (
                <div key={venue.id} className="glass-card p-4 rounded border border-neutral-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-amber-200">{venue.name}</h4>
                    <span className="text-xs text-neutral-400">{venue.tagline} • {venue.cuisine}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVenue(venue)}
                    className="px-3 py-1.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    Reserve Table
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/restaurant')}
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            >
              <span>Explore All Dining Venues & Menus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85"
              alt="L'Étoile Noir Fine Dining"
              className="rounded-lg h-72 w-full object-cover border border-[#D4AF37]/30 shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=85"
              alt="Gold Vault Bar"
              className="rounded-lg h-72 w-full object-cover border border-[#D4AF37]/30 shadow-xl mt-8"
            />
          </div>

        </div>
      </section>

      {/* 8. INFINITY POOL & AURA THERMAL SPA */}
      <section className="relative py-24 bg-neutral-950 border-y border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1600&q=85"
            alt="Rooftop Pool"
            className="w-full h-full object-cover filter blur-sm"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Holistic Renewal
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
              Heated Infinity Rooftop Pool & Aura Spa
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Relax in our 30m temperature-regulated rooftop pool with panoramic skyline views, Finnish saunas, Himalayan salt walls, and La Prairie caviar facial treatments.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="bg-black/60 p-3 rounded border border-neutral-800">
                <span className="text-[#D4AF37] font-bold block">30°C Heated Pool</span>
                <span className="text-neutral-400">Open year-round with private cabanas.</span>
              </div>
              <div className="bg-black/60 p-3 rounded border border-neutral-800">
                <span className="text-[#D4AF37] font-bold block">Aura Thermal Circuit</span>
                <span className="text-neutral-400">Snow rooms, steam caves, and hydro jets.</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/spa')}
              className="px-6 py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110"
            >
              Explore Spa Treatments
            </button>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85"
              alt="Infinity Pool"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 9. HOTEL STATISTICS (ANIMATED COUNTERS) */}
      <section className="py-16 bg-[#050505] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-4">
              <h3 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-amber-200 gold-gradient-text">
                {stat.value}
              </h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. GUEST TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
            Guest Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-100">
            Endorsements of Distinction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-6 rounded-lg border border-neutral-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-neutral-800">
                <img src={t.avatar} alt={t.guestName} className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]" />
                <div>
                  <h4 className="text-xs font-bold text-amber-100">{t.guestName}</h4>
                  <span className="text-[10px] text-neutral-500">{t.title} • {t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="py-20 bg-[#070707] border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Inquiries & Assistance
            </span>
            <h2 className="text-3xl font-serif-luxury font-bold text-amber-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="glass-card rounded-lg border border-neutral-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left flex justify-between items-center text-sm font-semibold text-amber-100 hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CONTACT FORM & MAP EMBED PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-lg border border-neutral-800 space-y-6">
            <div>
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                Direct Concierge Desk
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
                Send an Inquiry
              </h3>
            </div>

            {contactSent ? (
              <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded text-amber-200 text-xs flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Thank you. Your concierge request has been relayed to our Mayfair team.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Lord / Lady / Mr. / Ms."
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="VIP Chauffeur / Custom Suite Request / Event Inquiry"
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="How may our concierge team assist your upcoming visit?"
                    className="w-full bg-[#121212] border border-neutral-700 rounded py-2.5 px-3 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-md"
                >
                  Send Concierge Message
                </button>
              </form>
            )}
          </div>

          {/* Map Preview */}
          <div className="space-y-6">
            <div>
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                Mayfair Location
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-amber-100">
                In the Heart of London
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {HOTEL_INFO.address}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-800 h-80 shadow-2xl">
              <iframe
                src={HOTEL_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                title="Black Haven Hotel Location"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Modals */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />

      <TableReservationModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
      />

    </div>
  );
};
