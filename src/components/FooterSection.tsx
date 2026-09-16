import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { ActiveNavTab, ModalType } from '../types';

interface FooterSectionProps {
  onSelectNavTab?: (tab: ActiveNavTab) => void;
  onOpenModal?: (modal: ModalType) => void;
}

export const FooterSection = ({ onSelectNavTab, onOpenModal }: FooterSectionProps) => {
  const handleNavClick = (tab: ActiveNavTab) => {
    if (onSelectNavTab) {
      onSelectNavTab(tab);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-instrument italic text-yellow-400">
              The Trading Academy
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Empowering traders with the knowledge, tools, and confidence to achieve lasting success in the financial markets.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/genesis_trades?stkn=Z2xqdWo2emowcnM5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@nmesoma_marvelous?si=6pEQDHA2IRN6Ymap" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wide uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('Home')} className="text-zinc-400 hover:text-yellow-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('About Us')} className="text-zinc-400 hover:text-yellow-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('Contact Us')} className="text-zinc-400 hover:text-yellow-400 transition-colors">Contact Us</button></li>
              <li><button onClick={() => onOpenModal && onOpenModal('become_client')} className="text-zinc-400 hover:text-yellow-400 transition-colors">Apply Now</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold tracking-wide uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span>admissions@profitabletradinghub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} The Trading Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
