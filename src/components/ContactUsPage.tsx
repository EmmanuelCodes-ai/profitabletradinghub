import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  Menu, 
  X, 
  Check, 
  Sparkles, 
  HelpCircle,
  Headphones,
  Calendar,
  Lock
} from 'lucide-react';
import { Logo } from './Logo';
import { ActiveNavTab, ModalType } from '../types';

interface ContactUsPageProps {
  activeNavTab: ActiveNavTab;
  onSelectNavTab: (tab: ActiveNavTab) => void;
  onOpenModal: (modal: ModalType) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  activeNavTab,
  onSelectNavTab,
  onOpenModal
}) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'FR' | 'DE'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How does the $1,500 one-time tuition work?",
      a: "Tuition is a single one-time payment of $1,500. Unlike retail signal groups or Discord channels that charge $150 to $250 every single month forever, PTHub provides complete, permanent lifetime access. There are zero recurring subscriptions, hidden upsells, or tiered masterminds."
    },
    {
      q: "I work a full-time 9-to-5 job. Can I still trade this framework?",
      a: "Yes, absolutely. Our strategy is built around strict 90-minute Killzone windows (London Open and New York Open). You do not sit in front of charts for 10 hours. Many students execute during the early morning London killzone or pre-market NY, and utilize our daily institutional bias breakdowns."
    },
    {
      q: "Do you provide automated copy signals?",
      a: "No. We intentionally reject signal copying. Blindly following signals will never make you a professional trader, and when a signal provider blows up, your capital goes with them. We teach you institutional market mechanics so you can confidently execute on any currency pair independently."
    },
    {
      q: "How do the Weekly trade journal desk audits work?",
      a: "Every student receives access to our standardized trade logging sheets. Weekly, a senior desk mentor reviews your logged setups, inspecting entry confirmations, invalidation stops, and psychological discipline to correct leaks before you deploy live prop capital."
    },
    {
      q: "What prop firms do PTHub cohort graduates trade with?",
      a: "Graduates actively trade evaluation and funded accounts with FTMO, FundedNext, Alpha Capital, and other leading firms. Our risk model is engineered specifically to comply with maximum daily drawdown (4-5%) and overall drawdown (8-10%) parameters."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white selection:bg-yellow-400 selection:text-zinc-950 font-sans">
      
      {/* 1. TOP HEADER / NAVBAR */}
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

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Headphones className="w-3.5 h-3.5" />
            <span>Trading Desk Admissions & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-instrument tracking-tight text-white leading-tight">
            Connect Directly with the PTHub Trading Desk
          </h1>

          <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions regarding the $1,500 institutional mentorship curriculum, prop firm challenge readiness, or cohort schedules? Speak with our active desk mentors.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Desk Status: Online • Average response time &lt; 2 hours during market hours</span>
          </div>
        </div>
      </section>

      {/* 3. MAIN INTERACTIVE FORM & CONTACT DETAILS */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Desk Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-400">Direct Desk Lines</span>
              <h2 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                Talk to Real Traders, Not Automated Chatbots
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We respect your time. When you reach out to Profitable Trading Hub, your message goes straight to a funded mentor or admissions analyst.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-3.5">
              
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Admissions & Onboarding</div>
                  <div className="text-sm font-bold text-white mt-0.5">admissions@profitabletradinghub.com</div>
                  <div className="text-[11px] text-zinc-500 mt-1">For cohort enrollment inquiries & syllabus requests</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Telegram Direct Desk Line</div>
                  <div className="text-sm font-bold text-white mt-0.5">@Genesis_Tradess</div>
                  <div className="text-[11px] text-zinc-500 mt-1">Live personal chat with desk coordinators</div>
                </div>
              </div>
            </div>

            {/* Reassurance Callout */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-yellow-400/25 space-y-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict Privacy & Confidentiality</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Your email and trading information are strictly confidential. We never sell trader contact details, run spam auto-dials, or bombard you with fake promotions.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center mx-auto shadow-xl shadow-yellow-400/30">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Sent to the Trading Desk!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name || 'Trader'}</strong>. Our desk has received your message and will reply to <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => onOpenModal('become_client')}
                      className="px-6 py-3 rounded-full bg-yellow-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 transition-colors"
                    >
                      Ready to Apply Now — $1,500
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 font-medium text-xs hover:bg-zinc-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-zinc-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill in the form below and our desk will get back to you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-300 block mb-1">
                        Full Name <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-300 block mb-1">
                        Email Address <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">
                      Message <span className="text-yellow-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl p-3.5 text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-zinc-500 text-center sm:text-left">
                      Confidential • Response sent via email
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm hover:bg-yellow-300 active:scale-95 transition-all shadow-lg shadow-yellow-400/25 cursor-pointer min-h-[44px]"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 4. ADMISSIONS & ENROLLMENT FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 bg-[#080808]">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-400">Common Questions</span>
            <h2 className="text-2xl sm:text-4xl font-instrument tracking-tight text-white">
              Admissions & Mentorship FAQ
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clear answers before you apply for the cohort.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-zinc-900/90 border border-zinc-800/90 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. BOTTOM CONVERSION ACTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900 border border-yellow-400/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/15 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Enrollment Open</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-instrument tracking-tight text-white">
              Ready to Lock In Your Desk for $1,500?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Don't wait for your inquiry if you are already committed to learning Mechanical Trading Model. Seats are strictly limited to our monthly intake.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenModal('become_client')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/25 cursor-pointer min-h-[44px]"
            >
              <span>Apply for Cohort — $1,500</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleNavClick('About Us')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-950 border border-zinc-700 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <span>Read About Our Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. PAGE FOOTER */}
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
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('Contact Us')}
              className="hover:text-white transition-colors cursor-pointer font-bold text-white"
            >
              Contact Us
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
