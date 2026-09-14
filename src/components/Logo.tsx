import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'compact' | 'icon-only';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  onClick
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11.5px]',
  };

  return (
    <div 
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none transition-transform active:scale-95 ${className}`}
      aria-label="Profitable Trading Hub (PTHub)"
    >
      {/* BESPOKE VECTOR ICON EMBLEM */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {/* Ambient Glow in Golden Yellow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-500/35 via-amber-400/25 to-yellow-300/15 blur-md group-hover:blur-lg transition-all duration-300" />
        
        {/* Outer Shield Frame */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-zinc-800/90 via-zinc-900/95 to-black p-[1px] shadow-[0_4px_16px_rgba(0,0,0,0.7)] ring-1 ring-white/20 group-hover:ring-yellow-400/60 transition-all duration-300">
          <div className="w-full h-full rounded-[11px] sm:rounded-[15px] bg-[#0c0c0c] flex items-center justify-center overflow-hidden relative">
            
            {/* Subtle grid background lines */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:6px_6px]" />
            
            {/* Geometric Candlestick & PT Monogram Mark */}
            <svg 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[78%] h-[78%] relative z-10 drop-shadow-[0_2px_8px_rgba(250,204,21,0.45)]"
            >
              <defs>
                <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
                <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>

              {/* Background Volume / Candlestick Wicks */}
              <line x1="12" y1="14" x2="12" y2="28" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <line x1="28" y1="8" x2="28" y2="26" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
              
              {/* Bullish Momentum Candlestick (Left) */}
              <rect x="10" y="17" width="4" height="8" rx="1" fill="#eab308" opacity="0.6" />

              {/* Main "P" Curve & Ascending Stem */}
              <path 
                d="M14 30V10H22C24.8 10 27 12.2 27 15C27 17.8 24.8 20 22 20H14" 
                stroke="url(#yellowGrad)" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Dynamic Institutional "T" Crossbar & Ascending Arrow */}
              <path 
                d="M10 10H28L32 6" 
                stroke="url(#whiteGrad)" 
                strokeWidth="2.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Upward Profitability Apex Arrow Head */}
              <polyline 
                points="27,6 32,6 32,11" 
                stroke="url(#whiteGrad)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Golden Peak Node (Alpha Dot) */}
              <circle cx="32" cy="6" r="2" fill="url(#goldAccent)" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>

      {/* TYPOGRAPHIC BRAND WORDMARK */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-syne font-extrabold tracking-tight text-white ${titleSizes[size]}`}>
              PT<span className="text-yellow-400">Hub</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block group-hover:scale-125 transition-transform" />
          </div>

          {variant === 'full' && (
            <span className={`font-sans font-semibold tracking-[0.14em] uppercase text-zinc-400 text-[9px] sm:text-[10.5px] mt-0.5 leading-tight group-hover:text-yellow-200/90 transition-colors`}>
              Profitable Trading Hub
            </span>
          )}
        </div>
      )}
    </div>
  );
};
