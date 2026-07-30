import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070707] text-white flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 bg-neutral-900 mx-auto flex items-center justify-center">
          <Crown className="w-8 h-8 text-[#D4AF37]" />
        </div>

        <h1 className="text-6xl font-serif-luxury font-bold text-amber-200">404</h1>
        <h2 className="text-xl font-serif-luxury text-amber-100">Sanctuary Not Found</h2>
        <p className="text-xs text-neutral-400 leading-relaxed font-light">
          The sanctuary page you requested does not exist or has been moved within our Mayfair estate.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase hover:brightness-110"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Sanctuaries</span>
        </button>
      </div>
    </div>
  );
};
