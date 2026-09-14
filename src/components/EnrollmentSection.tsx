import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ModalType } from '../types';
import bgImage from '../assets/images/vertical_trading_desk_1788918420064.jpg';

interface EnrollmentSectionProps {
  onOpenModal: (modal: ModalType) => void;
}

export const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({ onOpenModal }) => {
  return (
    <section 
      id="enrollment-section"
      className="relative w-full bg-[#080808] text-white py-16 sm:py-24 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full shadow-2xl relative h-full min-h-[450px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0 bg-yellow-400/5 mix-blend-overlay pointer-events-none rounded-xl" />
            <img 
              src={bgImage} 
              alt="Trader at desk" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl border border-zinc-800/80"
            />
          </motion.div>
          
          {/* Right Column: Copy & Call to Action */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 lg:pl-8 flex flex-col justify-center py-4 lg:py-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-instrument tracking-tight text-white leading-tight">
              Secure Your Spot Now
            </h2>
            
            <div className="space-y-5 text-zinc-300 text-[15px] sm:text-lg font-normal leading-relaxed">
              <p>
                To maintain high-quality mentorship and proper guidance, I only accept limited students per month.
              </p>
              <p>
                Once the spots are filled, enrollment closes until the next intake.
              </p>
              <p>
                Secure your position before the cohort is full.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                $1,500
              </div>
              
              <button
                onClick={() => onOpenModal('become_client')}
                className="bg-yellow-400 text-zinc-950 px-8 py-4 font-black tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors w-fit shadow-[0_0_20px_rgba(250,204,21,0.25)] rounded-full"
              >
                APPLY NOW <ArrowRight className="w-4 h-4 ml-1 stroke-[3]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
