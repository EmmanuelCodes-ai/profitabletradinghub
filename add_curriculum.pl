#!/usr/bin/perl
use strict;
use warnings;

local $/; # Enable slurp mode
open my $fh, '<', 'src/components/CoursePurposeSection.tsx' or die $!;
my $content = <$fh>;
close $fh;

my $replacement = <<'END_REPLACE';
      </div>
    </section>
END_REPLACE

my $new_code = <<'END_NEW_CODE';
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
                 <img src={MentorImg1} alt="Structured Trading Strategy" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
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
                 <img src={MentorImg2} alt="Psychological Training" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
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
                 <img src={MentorImg1} alt="Advanced Trading Psychology" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
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
                 <img src={MentorImg2} alt="Capital Scaling" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
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
                 <img src={MentorImg4} alt="Backtesting Session" className="relative rounded-2xl w-full h-[350px] lg:h-[450px] object-cover border border-zinc-800 shadow-2xl z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
END_NEW_CODE

$content =~ s/\Q$replacement\E/$new_code/g;

open my $fh_out, '>', 'src/components/CoursePurposeSection.tsx' or die $!;
print $fh_out $content;
close $fh_out;
