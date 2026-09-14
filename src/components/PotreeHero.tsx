import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Play,
  Activity
} from 'lucide-react';
import { CurrencyCode, ModalType, ActiveNavTab } from '../types';
import { Logo } from './Logo';

import heroBg from '../assets/images/forex_trading_bg_1788569476587.jpg';

interface PotreeHeroProps {
  onOpenModal: (modal: ModalType) => void;
  activeNavTab: ActiveNavTab;
  onSelectNavTab: (tab: ActiveNavTab) => void;
  balanceUSD?: number;
  selectedCurrency?: CurrencyCode;
  onSelectCurrency?: (code: CurrencyCode) => void;
}

export const PotreeHero: React.FC<PotreeHeroProps> = ({
  onOpenModal,
  activeNavTab,
  onSelectNavTab
}) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'FR' | 'DE'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: 'EN' | 'ES' | 'FR' | 'DE'; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
  ];

  const navItems: ActiveNavTab[] = ['Home', 'About Us', 'Contact Us'];

  const scrollToCourseVideo = () => {
    const el = document.getElementById('course-video') || document.getElementById('course-purpose');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item: ActiveNavTab) => {
    onSelectNavTab(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* BACKGROUND PHOTOGRAPHY WITH CALIBRATED CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern institutional forex trading multi-monitor desk with real-time currency charts"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Calibrated dark gradient overlays for rich contrast and readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* TOP HEADER / NAVBAR */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo on Left: Profitable Trading Hub (PTHub) */}
          <div className="flex items-center gap-2">
            <Logo 
              size="md"
              variant="full"
              onClick={() => handleNavClick('Home')}
            />
          </div>

          {/* Center Capsule Navigation (Desktop): Home, About Us, Contact Us */}
          <nav 
            className="hidden md:flex items-center bg-black/45 backdrop-blur-xl border border-white/15 rounded-full p-1.5 shadow-2xl shadow-black/40"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeNavTab === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`px-5 py-1.5 text-[13.5px] rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-300 font-medium hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Language Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="bg-black/45 backdrop-blur-xl border border-white/15 rounded-full px-3.5 py-1.5 sm:py-2 text-xs sm:text-[13px] text-zinc-200 font-medium flex items-center gap-1.5 hover:text-white hover:bg-black/70 active:scale-95 transition-all shadow-md cursor-pointer"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-white/80" />
                <span>{currentLang}</span>
                <ChevronDown className={`w-3 h-3 text-white/70 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {languageDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-zinc-900/95 backdrop-blur-md border border-white/15 rounded-2xl p-1.5 shadow-2xl z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                        currentLang === l.code ? 'bg-white text-zinc-950 font-bold' : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{l.name}</span>
                      {currentLang === l.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden bg-black/40 backdrop-blur-md border border-white/15 text-white p-2 rounded-full hover:bg-black/60 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-zinc-950/95 backdrop-blur-xl border border-white/15 rounded-3xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleNavClick(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-colors cursor-pointer ${
                    activeNavTab === item ? 'bg-white text-zinc-950 font-bold' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Institutional Cohort</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('become_client');
                }}
                className="text-xs font-bold text-white underline cursor-pointer"
              >
                Apply for Mentorship →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO MAIN BODY CONTENT - SIGNATURE EDITORIAL */}
      <main className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 my-auto flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          
          {/* Live Cohort Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-yellow-400/30 text-xs text-zinc-200 mb-5 shadow-lg shadow-black/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider text-[10.5px] text-yellow-400">Cohort Enrollment Open</span>
            <span className="text-white/40">•</span>
            <span className="text-zinc-300 text-[11px]">Limited Monthly Intake</span>
          </div>

          {/* Artistic Multi-Style Headline in Signature Editorial */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-white leading-[1.06] drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]">
              <span className="block font-instrument italic font-normal text-3xl sm:text-5xl md:text-[68px] lg:text-[76px] text-yellow-100/95 tracking-tight">
                The Last
              </span>
              <span className="block font-instrument font-normal text-3xl sm:text-5xl md:text-[76px] lg:text-[88px] tracking-tight uppercase text-white -mt-0.5 sm:-mt-2 break-words">
                Trading Mentorship
              </span>
              <span className="inline-block font-instrument italic font-normal text-3xl sm:text-5xl md:text-[72px] lg:text-[82px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-white tracking-tight -mt-0.5">
                You’ll Ever Need.
              </span>
            </h1>

            {/* Styled Accent Subtext Card */}
            <div className="max-w-2xl pl-3.5 sm:pl-4 border-l-2 border-yellow-400 py-1.5 bg-black/50 backdrop-blur-sm rounded-r-2xl pr-3.5 mt-3 sm:mt-4">
              <p className="text-sm sm:text-base lg:text-[17.5px] text-zinc-200 font-normal leading-relaxed tracking-[-0.01em]">
                Learn how to build, test and execute a complete trading system with the skills, structure and risk management required to work toward your own trading goals, from passing prop challenges to scaling toward larger monthly targets.
              </p>
            </div>

            {/* Action Buttons (Responsive on Mobile) */}
            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenModal('become_client')}
                className="group relative inline-flex items-center justify-center gap-3 bg-yellow-400 text-zinc-950 font-black text-sm sm:text-[16px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full ring-1 ring-yellow-300/60 shadow-[0_14px_36px_rgba(250,204,21,0.35),0_2px_8px_rgba(0,0,0,0.4)] hover:bg-yellow-300 hover:shadow-[0_20px_44px_rgba(250,204,21,0.5),0_0_32px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer min-h-[48px]"
              >
                <span>Apply for Mentorship</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-950 text-yellow-400 flex items-center justify-center group-hover:bg-black group-hover:translate-x-1 transition-all duration-200 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={scrollToCourseVideo}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-yellow-400/60 hover:text-yellow-300 active:scale-95 transition-all cursor-pointer shadow-lg min-h-[48px]"
              >
                <Play className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span>Watch Video Breakdown</span>
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-zinc-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold">
                <span>Single Complete Program: $1,500</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
                <span>Mechanical trading model</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
                <span>Structured Execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
                <span>Weekly trade Audits</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
