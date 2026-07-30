import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle } from 'lucide-react';
import { SpaTreatment } from '../types';

interface SpaBookingModalProps {
  treatment: SpaTreatment | null;
  onClose: () => void;
}

export const SpaBookingModal: React.FC<SpaBookingModalProps> = ({ treatment, onClose }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('11:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!treatment) return null;

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
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif-luxury font-bold text-amber-100">
                Aura Thermal Spa Ritual
              </h3>
              <p className="text-xs text-neutral-400">{treatment.title}</p>
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
              Spa Ritual Booked
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Your appointment for <span className="text-[#D4AF37] font-semibold">{treatment.title}</span> ({treatment.duration}) on {date} at {time} has been scheduled.
            </p>
            <div className="bg-neutral-900/80 p-4 rounded border border-neutral-800 text-xs text-neutral-400 text-left space-y-1 font-mono">
              <p>Appointment ID: BH-SPA-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p>Treatment Duration: {treatment.duration}</p>
              <p>Investment: ${treatment.price}</p>
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
            
            <div className="bg-neutral-900/80 p-3 rounded border border-neutral-800 flex justify-between items-center text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase">Selected Ritual</span>
                <span className="text-amber-200 font-semibold">{treatment.title}</span>
              </div>
              <div className="text-right">
                <span className="text-[#D4AF37] font-bold text-sm block">${treatment.price}</span>
                <span className="text-neutral-500 text-[10px]">{treatment.duration}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-400 mb-1 flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#D4AF37]" />
                  <span>Preferred Date</span>
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
                  <span>Time Slot</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 rounded py-2 px-2.5 text-white focus:border-[#D4AF37]"
                >
                  <option value="09:00">09:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-400 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
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

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg"
              >
                Schedule Spa Ritual
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
