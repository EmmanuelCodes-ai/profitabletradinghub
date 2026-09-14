import React from 'react';
import { TrendingUp, LineChart, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const LearningSolutionsSection = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-instrument italic text-yellow-400 tracking-tight">
            We Bring You Proven Learning Solutions
          </h2>
          <p className="text-lg sm:text-xl font-medium text-white">
            Step-by-step guidance from beginner to expert
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-yellow-400/30 text-left flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="mb-12">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/5 border border-yellow-400/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400/10 transition-transform duration-500 shadow-sm shadow-yellow-400/5">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            
            <div className="space-y-4 mt-auto relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Learn the Real Way</h3>
              <p className="text-zinc-400 leading-relaxed text-base">
                At our Academy, you'll gain real trading skills through expert lessons and live sessions that guide you to trade confidently and independently.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-yellow-400/30 text-left flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="mb-12">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/5 border border-yellow-400/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400/10 transition-transform duration-500 shadow-sm shadow-yellow-400/5">
                <LineChart className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            
            <div className="space-y-4 mt-auto relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Education That Delivers Results</h3>
              <p className="text-zinc-400 leading-relaxed text-base">
                Our platform offers structured lessons, real-world examples, and proven strategies to help you master the "why" and "how" of successful trading.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-yellow-400/30 text-left flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="mb-12">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/5 border border-yellow-400/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400/10 transition-transform duration-500 shadow-sm shadow-yellow-400/5">
                <Users className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            
            <div className="space-y-4 mt-auto relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">A Community That Elevates You</h3>
              <p className="text-zinc-400 leading-relaxed text-base">
                Join a vibrant trading community where you learn, share, and grow with others in real time
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
