import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    name: "Nikky",
    role: "Funded Trader",
    content: "This Mentorship was everything I wanted, Very informative and Straight to the Point.Wow! I Finally got the Concept of Supply and demand. I Wish I had Seen you before now, it would’ve Saved me from Many Losses. Your Faith in God is Superb! Keep up the good work My best Mentor so far!!",
  },
  {
    name: "Mr Louis",
    role: "Academy Graduate",
    content: "I love how everything is simplified in this program, few weeks into the mentorship and I’m gradually pulling out from draw down on my prop account, GOD really use ur mentorship to help my trading journey",
  },
  {
    name: "Kingsley",
    role: "Independent Trader",
    content: "I thank God for this program, God have used this program to enlighten me on many things Prior to now, I’ve been confused in my trading, not having clarity on what to actually look out for, for 4 years, I really thank God for this mentorship, the wisdom of God therein is amazing, now I have clarity on the chart, I recommend this for any trader that is struggling and she will guide you to a place you would want to be",
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h3 className="text-sm uppercase font-bold tracking-widest text-yellow-400">Student Success Stories</h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-instrument italic text-white tracking-tight">
            What Our Students Are Saying
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-[#0a0a0a] border border-zinc-800/80 hover:border-yellow-400/30 rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg overflow-hidden"
            >
              {/* Decorative Quote Icon Background */}
              <div className="absolute -top-6 -right-4 text-zinc-800/30 group-hover:text-yellow-400/10 transition-colors duration-700 pointer-events-none">
                <Quote className="w-32 h-32 rotate-12" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review Content */}
              <p className="text-zinc-300 leading-relaxed text-base md:text-[1.1rem] mb-10 relative z-10 flex-grow font-instrument font-normal italic">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="mt-auto relative z-10 border-t border-zinc-800/80 pt-6 flex items-center">
                <div>
                  <p className="text-white font-bold text-lg">{testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
