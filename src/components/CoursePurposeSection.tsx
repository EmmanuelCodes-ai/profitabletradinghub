import React, { useState } from 'react';
import { 
  Target, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Layers, 
  Clock, 
  BrainCircuit, 
  Zap,
  HelpCircle,
  ChevronRight,
  Flame,
  Users
} from 'lucide-react';
import { ModalType, ActiveNavTab } from '../types';
import { motion } from 'motion/react';
import { CourseVideoPlayer } from './CourseVideoPlayer';

// Import images for the benefits section
import MentorImg1 from '../assets/images/sarah_forex_mentor_1788450520227.jpg';
import MentorImg2 from '../assets/images/forex_trading_bg_1788569476587.jpg';
import MentorImg3 from '../assets/images/funded_trader_success_1788450536494.jpg';
import MentorImg4 from '../assets/images/vertical_trading_desk_1788918420064.jpg';

interface CoursePurposeSectionProps {
  onOpenModal: (modal: ModalType) => void;
  onSelectNavTab?: (tab: ActiveNavTab) => void;
}

export const CoursePurposeSection: React.FC<CoursePurposeSectionProps> = ({ onOpenModal, onSelectNavTab }) => {
  // Interactive checklist state for candidate self-assessment
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  });

  const checklistCriteria = [
    {
      id: 0,
      title: "I am ready to stop strategy-hopping and master ONE institutional framework.",
      desc: "You understand that hopping between 10 indicators on YouTube has only created analysis paralysis."
    },
    {
      id: 1,
      title: "My objective is to secure & retain $50K to $400K in prop firm funding.",
      desc: "You want to trade institutional capital with structured drawdown buffers rather than risking personal savings."
    },
    {
      id: 2,
      title: "I require a minimum 1:3 Risk-to-Reward model to ensure mathematical edge.",
      desc: "You want setups where a 40% win-rate produces consistent profitability and low psychological pressure."
    },
    {
      id: 3,
      title: "I am open to Weekly trade journal audits and constructive feedback.",
      desc: "You welcome having your actual entries and exits analyzed by seasoned mentors to eliminate costly trading leaks."
    }
  ];

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeCount = Object.values(checkedItems).filter(Boolean).length;

  const curriculumPillars = [
    {
      number: '01',
      title: 'Institutional Market Structure & Liquidity',
      subtitle: 'Smart Money Footprints',
      description: 'Decode how central banks, hedge funds, and liquidity providers engineer retail liquidity traps. Learn to recognize inducement, fair value gaps (FVG), and order blocks before price expands.',
      highlight: 'Wholesale vs. Retail Pricing'
    },
    {
      number: '02',
      title: 'Precision Session Timing & Killzones',
      subtitle: 'London & New York Execution',
      description: 'Stop staring at screens for 10 hours a day. Master the specific 90-minute windows where institutional algorithms execute daily highs and lows with asymmetric reward setups.',
      highlight: 'Zero Screentime Burnout'
    },
    {
      number: '03',
      title: 'The 1:3+ Asymmetric Risk Protocol',
      subtitle: 'Mathematical Edge',
      description: 'Shift from gambling to professional portfolio protection. Calculate exact pip risk, execute invalidation-tight stops, and let trades run to mathematical liquidity targets.',
      highlight: 'Profitable at 38% Winrate'
    },
    {
      number: '04',
      title: 'personal Trade Journal Desk Audits',
      subtitle: 'Personal Mentorship & Accountability',
      description: 'Submit your live and simulated trading logs weekly. A dedicated desk mentor inspects entry reasons, psychological notes, and risk adherence to fast-track your progression.',
      highlight: 'Direct Mentorship Feedback'
    }
  ];

  return (
    <section 
      id="course-purpose" 
      className="relative w-full bg-[#080808] text-white py-12 sm:py-24 px-3 sm:px-6 lg:px-8 border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient background glow accents in theme yellow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-24">

        {/* TOP ROW: Course Purpose & Video Stacked */}
        <div className="space-y-12 sm:space-y-16">
          {/* SECTION HEADER */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="space-y-6 sm:space-y-8 px-1 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-yellow-400/30 text-yellow-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
              <Target className="w-3.5 h-3.5" />
              <span>Course Mission & Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-instrument tracking-tight text-white leading-tight">
              What Is This Course For?
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 pt-2 pb-4">
              <p className="text-lg sm:text-xl text-white font-medium">
                This mentorship is for you if you:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  "Are a beginner or struggling to become consistent",
                  "Keep changing strategies",
                  "Understand concepts but struggle with execution",
                  "Want a structured trading process",
                  "Are serious about becoming an independent trader"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 hover:border-yellow-400/40 transition-colors ${
                      i === 4 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto w-full' : ''
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PROMINENT VIDEO PLACEMENT */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="w-full max-w-5xl mx-auto">
            <CourseVideoPlayer onOpenModal={onOpenModal} />
          </motion.div>
        </div>

        {/* 1. HOW THE MENTORSHIP WORKS (5 STEP PROCESS) */}
        <div className="space-y-8">
          <div className="pb-8 border-b border-zinc-800/80 space-y-4 flex flex-col items-center text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-instrument italic text-yellow-400 tracking-tight">
              How the mentorship works.
            </h3>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed">
              Students receive structured lessons, complete hands-on assignments, get personalized feedback, join live Q&A support, and master practical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "LEARN",
                desc: "Study the core institutional curriculum through structured video modules and guides and live sessions covering market mechanics."
              },
              {
                step: "02",
                title: "APPLY",
                desc: "Put theory into practice immediately with hands-on chart assignments and tasks designed to test your understanding."
              },
              {
                step: "03",
                title: "GET REVIEWED",
                desc: "Submit your chart markups for review and receive actionable feedback to help refine your trading edge."
              },
              {
                step: "04",
                title: "EXECUTE",
                desc: "Take your refined edge to the live markets or prop firm challenges utilizing strict, pre-defined risk management rules."
              },
              {
                step: "05",
                title: "IMPROVE",
                desc: "Continuous refinement through weekly personal trade journal audits, live Q&A sessions, and psychological development."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 flex flex-col hover:border-yellow-400/40 transition-colors group relative overflow-hidden"
              >
                {/* Subtle step number background */}
                <div className="absolute -top-4 -right-2 text-[80px] font-instrument font-black text-white/[0.03] pointer-events-none group-hover:text-yellow-400/[0.05] transition-colors">
                  {item.step}
                </div>
                
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20 text-yellow-400 font-bold text-sm shadow-sm group-hover:bg-yellow-400 group-hover:text-zinc-950 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

        {/* WHAT YOU WILL GET SECTION */}
        <div className="pt-24 lg:pt-32 space-y-20 lg:space-y-32 border-t border-zinc-900 mt-16">
          <div className="text-center space-y-4">
             <h3 className="text-sm uppercase font-bold tracking-widest text-yellow-400">The Curriculum</h3>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-instrument italic text-white tracking-tight">
               What you will get.
             </h2>
          </div>

          <div className="space-y-24 lg:space-y-32 max-w-6xl mx-auto px-4">
            {/* Block 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">My Structured & Simplified Trading Strategy</h4>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>Learn a clear step-by-step strategy for analyzing the market and identifying high-probability trading opportunities.</p>
                  <ul className="space-y-4 py-2">
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                      <span className="text-zinc-300">No confusion.</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                      <span className="text-zinc-300">No randomness.</span>
                    </li>
                  </ul>
                  <p>Just a repeatable trading system you can rely on.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative group">
                 <div className="absolute inset-0 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" alt="Structured Trading Strategy" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Psychological Training That Sharpens Your Execution</h4>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>Most traders don't fail because of strategy.</p>
                  <p>They fail because of emotion and poor execution.</p>
                  <p>Inside this mentorship you'll learn the mental frameworks I developed through experience that helped me build confidence, discipline, and patience as a trader.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative group">
                 <div className="absolute inset-0 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200" alt="Psychological Training" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Advanced Trading Psychology Training</h4>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>Consistency in trading requires a strong mindset.</p>
                  <p>Inside this mentorship you'll learn how to:</p>
                  <ul className="space-y-4 py-2">
                    {["Avoid revenge trading.", "Control emotional decisions.", "Execute your strategy with confidence.", "Maintain discipline during losing streaks."].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative group">
                 <div className="absolute inset-0 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200" alt="Advanced Trading Psychology" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Capital Scaling Mechanics</h4>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>Making profits is one thing.</p>
                  <p>Growing capital safely is another.</p>
                  <p>You'll learn how to properly scale your trading using:</p>
                  <ul className="space-y-4 py-2">
                    {["Smart risk management.", "Correct position sizing.", "A structured account growth model."].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative group">
                 <div className="absolute inset-0 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <img src="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?auto=format&fit=crop&q=80&w=1200" alt="Capital Scaling" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Trade Ideas & Backtesting Session</h4>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>You'll get access to trade ideas and breakdowns showing exactly how opportunities are identified and executed.</p>
                  <p>This allows you to see the strategy applied in real market conditions.</p>
                  <div className="pt-4">
                    <button className="bg-white text-zinc-950 font-bold px-10 py-4 rounded-xl hover:bg-yellow-400 transition-colors uppercase text-[13px] tracking-widest shadow-lg hover:shadow-yellow-400/20 w-full sm:w-auto">
                      About Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative group">
                 <div className="absolute inset-0 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Backtesting Session" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
