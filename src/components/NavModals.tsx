import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Globe, 
  Sparkles, 
  BookOpen,
  Mail,
  MessageSquare,
  Clock,
  Send,
  TrendingUp,
  Target
} from 'lucide-react';
import { FEATURES, PRICING_TIERS, ARTICLES } from '../data';
import { ModalType } from '../types';

interface NavModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  onOpenClient: () => void;
}

export const NavModals: React.FC<NavModalsProps> = ({ activeModal, onClose, onOpenClient }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    experience: 'Intermediate (1-2 years)',
    message: ''
  });

  if (!activeModal || ['top_up', 'transfer', 'more_options', 'become_client', 'register', 'statement'].includes(activeModal)) {
    return null;
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 text-white border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl shadow-black/90 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ABOUT US CONTENT */}
        {(activeModal === 'about' || activeModal === 'about_us') && (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 text-xs font-semibold mb-2">
                <Target className="w-3.5 h-3.5" />
                <span>About Profitable Trading Hub (PTHub)</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                The Last Trading Mentorship You’ll Ever Need
              </h2>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                Most retail traders spend years jumping from indicator to indicator, hoping a magical oscillator will solve emotional discipline and poor risk sizing. We replace retail guesswork with an institutional, rules-based framework focused on real bank liquidity, market structure, and ruthless trade risk management.
              </p>
            </div>

            {/* Core Track Records & Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2,400+</div>
                <div className="text-xs text-zinc-400">Funded Accounts Passed</div>
              </div>
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">Mechanical</div>
                <div className="text-xs text-zinc-400">Minimum Target R:R</div>
              </div>
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Structured</div>
                <div className="text-xs text-zinc-400">Prop Evaluation Pass Rate</div>
              </div>
            </div>

            {/* Why This Mentorship is Different */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 mb-6 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">Our 3-Pillar Execution Standard:</h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Institutional Liquidity Framework: </span>
                    <span>Identify smart money accumulation, fair value gaps, and liquidity sweeps before placing a single order.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Daily personal Trade Journal Audits: </span>
                    <span>Direct desk reviews of your trading entries, trade logs, and psychological triggers so bad habits are eliminated immediately.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Prop Firm Funding Protocol: </span>
                    <span>Structured scaling plan designed to comfortably pass $100k to $400k evaluations and retain payouts consistently.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('course-purpose')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-yellow-400 hover:border-yellow-400 text-xs font-semibold transition-colors cursor-pointer"
              >
                View Full Course Breakdown Below ↓
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenClient();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-yellow-400 text-zinc-950 text-xs sm:text-sm font-bold hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                Apply for Mentorship
              </button>
            </div>
          </div>
        )}

        {/* CONTACT US CONTENT */}
        {activeModal === 'contact_us' && (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 text-xs font-semibold mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Trader Desk Communications</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-instrument tracking-tight text-white">
                Contact Our Mentorship Desk
              </h2>
              <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                Have questions about cohort availability, custom personal audits, or prop firm roadmap requirements? Reach out directly to our lead desk.
              </p>
            </div>

            {/* Desk Contact Information Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                <Mail className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Direct Desk</div>
                <div className="text-xs font-semibold text-white mt-1">desk@pthub-trading.com</div>
              </div>
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Desk Hours</div>
                <div className="text-xs font-semibold text-white mt-1">London & NY Sessions</div>
              </div>
              <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                <MessageSquare className="w-5 h-5 text-white mb-2" />
                <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Community</div>
                <div className="text-xs font-semibold text-white mt-1">Private VIP Telegram</div>
              </div>
            </div>

            {/* Direct Message Form */}
            {contactSubmitted ? (
              <div className="p-8 rounded-2xl bg-zinc-900 border border-yellow-400/40 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-yellow-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                  A mentor on our trading desk will review your trading background and reply via email within 2 to 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. alex@tradingdesk.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Current Trading Experience</label>
                  <select
                    value={contactForm.experience}
                    onChange={(e) => setContactForm({ ...contactForm, experience: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition cursor-pointer"
                  >
                    <option value="Beginner (< 1 year)">Beginner (&lt; 1 year of charting)</option>
                    <option value="Intermediate (1-2 years)">Intermediate (1-2 years, struggling with consistency)</option>
                    <option value="Seeking Prop Funding">Seeking Prop Firm Evaluation ($100k-$400k)</option>
                    <option value="Full-Time Aspirant">Full-Time Aspirant / Transitioning to Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">What is your biggest roadblock in Forex?</label>
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us what pairs you trade and where you are currently getting stuck..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-base sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-zinc-500 text-center sm:text-left">Average desk response time: &lt; 2 hours</span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full bg-yellow-400 text-zinc-950 text-xs sm:text-sm font-bold hover:bg-yellow-300 active:scale-95 transition-all cursor-pointer min-h-[44px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* FEATURES CONTENT (Preserved for Explore Framework trigger) */}
        {activeModal === 'features' && (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-2">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>Enterprise Feature Suite</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Everything Your Treasury Needs to Thrive
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Engineered for speed, resilience, and maximum capital efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {FEATURES.map((feat) => (
                <div key={feat.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-semibold">
                      {feat.badge}
                    </span>
                    <span className="text-xs font-bold text-yellow-400">{feat.stat}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
              <span className="text-xs text-zinc-500">Deploy sandbox credentials in under 2 minutes.</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenClient();
                }}
                className="px-5 py-2.5 rounded-full bg-yellow-400 text-zinc-950 text-xs font-bold hover:bg-yellow-300 cursor-pointer"
              >
                Request Access
              </button>
            </div>
          </div>
        )}

        {/* PRICING CONTENT - SINGLE PROGRAM: $1,500 */}
        {activeModal === 'pricing' && (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 text-xs font-bold mb-2">
                <Zap className="w-3.5 h-3.5 fill-yellow-400" />
                <span>One Program • Lifetime Access</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Profitable Trading mentorship cohort
              </h2>
              <p className="text-sm text-zinc-300 mt-1">
                We only have one program. Everything you need for consistent profitability and funded capital is included for a single one-time investment.
              </p>
            </div>

            <div className="bg-zinc-900 border-2 border-yellow-400 rounded-3xl p-6 sm:p-8 shadow-xl shadow-yellow-400/10 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-zinc-950 text-[10px] font-extrabold uppercase">
                    Complete Program
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Full Mentorship Tuition</h3>
                  <p className="text-xs text-zinc-400">Strictly 25 seats per cohort to preserve personal desk audits</p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">$1,500</span>
                  </div>
                  <div className="text-xs text-yellow-400 font-semibold">One-time payment • No monthly fees</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 text-xs text-zinc-300">
                {[
                  'Lifetime Access to Mechanical Trading Model',
                  'Weekly Private Trade Journal Desk Audits',
                  'London & New York 90-Min Killzone Framework',
                  'Mechanical trading model',
                  'Prop Firm Drawdown Protection Blueprint ($100K-$400K)',
                  'Direct Head Trader Discord & Telegram Desk Channel'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenClient();
                }}
                className="w-full mt-6 py-4 rounded-full bg-yellow-400 text-zinc-950 font-black text-sm sm:text-base hover:bg-yellow-300 active:scale-95 transition-all shadow-lg shadow-yellow-400/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply Now — $1,500 Complete</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* ARTICLES CONTENT */}
        {activeModal === 'article' && (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Thought Leadership & Research</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Potree Insights & Technical Briefs
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Deep dives into real-time payments, cross-border treasury, and ISO 20022 compliance.
              </p>
            </div>

            <div className="space-y-3.5 mb-6">
              {ARTICLES.map((art) => (
                <div 
                  key={art.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium text-[11px]">
                      {art.category}
                    </span>
                    <span>{art.readTime} • {art.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{art.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">{art.summary}</p>
                  <button
                    onClick={() => {
                      alert(`Opening whitepaper: "${art.title}"`);
                    }}
                    className="text-xs font-semibold text-white hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Executive Report</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
