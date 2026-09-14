import React, { useState, useEffect } from 'react';
import { 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Check, 
  TrendingUp, 
  Users, 
  Clock, 
  Scale, 
  Award, 
  BarChart3, 
  Lock, 
  Sparkles,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Logo } from './Logo';
import { ActiveNavTab, ModalType } from '../types';

import clientImg from '../assets/images/female_youtuber_trader_1789334244440.jpg';

interface AboutUsPageProps {
  activeNavTab: ActiveNavTab;
  onSelectNavTab: (tab: ActiveNavTab) => void;
  onOpenModal: (modal: ModalType) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  activeNavTab,
  onSelectNavTab,
  onOpenModal
}) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'FR' | 'DE'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const languages: { code: 'EN' | 'ES' | 'FR' | 'DE'; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
  ];

  const navItems: ActiveNavTab[] = ['Home', 'About Us', 'Contact Us'];

  const handleNavClick = (item: ActiveNavTab) => {
    onSelectNavTab(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white selection:bg-yellow-400 selection:text-zinc-950 font-sans">
      
      {/* 1. TOP HEADER / NAVBAR (Matching PotreeHero design) */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo 
                size="md"
                variant="full"
                onClick={() => handleNavClick('Home')}
              />
            </div>

            {/* Center Capsule Navigation */}
            <nav 
              className="hidden md:flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-1.5 shadow-xl"
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
                        : 'text-zinc-400 font-medium hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Apply CTA + Language */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenModal('become_client')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 active:scale-95 transition-all shadow-md shadow-yellow-400/20 cursor-pointer"
              >
                <span>Apply — $1,500</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 sm:py-2 text-xs text-zinc-300 font-medium flex items-center gap-1.5 hover:text-white hover:border-zinc-700 active:scale-95 transition-all cursor-pointer"
                  aria-label="Change Language"
                >
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{currentLang}</span>
                  <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {languageDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-800 rounded-2xl p-1.5 shadow-2xl z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
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
                          currentLang === l.code ? 'bg-white text-zinc-950 font-bold' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        <span>{l.name}</span>
                        {currentLang === l.code && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden bg-zinc-900 border border-zinc-800 text-white p-2 rounded-full hover:bg-zinc-800 transition cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
              <div className="grid grid-cols-3 gap-2 pb-3 border-b border-zinc-800">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      handleNavClick(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center transition-colors cursor-pointer ${
                      activeNavTab === item ? 'bg-white text-zinc-950 font-bold' : 'text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-xs text-zinc-400">Strict Desk Allocation</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('become_client');
                  }}
                  className="px-4 py-2 rounded-full bg-yellow-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 cursor-pointer"
                >
                  Apply — $1,500
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. SIMPLE ABOUT US PLACEHOLDER - SIDE BY SIDE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 relative">
            <img 
              src={clientImg}
              alt="PTHub professional trader at their desk"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Users className="w-4 h-4" />
                <span>PTHub Founder</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-400">About The Founder</span>
              <h1 className="text-4xl sm:text-5xl font-instrument tracking-tight text-white leading-tight">
                Hi, I’m Mav.
              </h1>
            </div>
            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I’m a professional trader and trading educator passionate about helping traders develop the knowledge, systems and discipline required to approach the markets professionally.
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={() => onOpenModal('become_client')}
                className="group relative inline-flex items-center justify-center gap-3 bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full ring-1 ring-yellow-300/60 shadow-[0_14px_36px_rgba(250,204,21,0.35),0_2px_8px_rgba(0,0,0,0.4)] hover:bg-yellow-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer min-h-[48px]"
              >
                <span>Apply for Mentorship</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. PAGE FOOTER */}
      <footer className="w-full border-t border-zinc-900 py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="icon-only" />
            <span className="text-zinc-400 font-semibold">Profitable Trading Hub (PTHub)</span>
            <span>•</span>
            <span>Dedicated Mentorship Desk</span>
          </div>

          <div className="flex items-center gap-5 text-zinc-400">
            <button 
              onClick={() => handleNavClick('Home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('About Us')}
              className="hover:text-white transition-colors cursor-pointer font-bold text-white"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('Contact Us')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact Desk
            </button>
            <button 
              onClick={() => onOpenModal('become_client')}
              className="text-yellow-400 font-semibold hover:underline cursor-pointer"
            >
              Apply — $1,500
            </button>
          </div>

          <div>
            <span>© 2026 PTHub Mentorship. All rights reserved.</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-zinc-900/60 text-[11px] text-zinc-600 leading-relaxed text-center sm:text-left">
          <strong>Risk Disclaimer:</strong> Trading foreign exchange, commodities, and derivatives on margin carries a high level of risk and may not be suitable for all investors. High leverage can work against you as well as for you. Before deciding to trade foreign exchange or prop firm challenges, you should carefully consider your investment objectives, level of experience, and risk appetite. Past performance is not indicative of future results.
        </div>
      </footer>

    </div>
  );
};
