import React from 'react';
import { Layers, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ onOpenLegal, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080B18] border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#9270FF]">
                <Layers className="w-5 h-5 text-[#9270FF]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                AR Gift Creator
              </span>
            </div>
            
            <p className="text-xs text-[#A3AABF] max-w-sm leading-relaxed">
              Transform ordinary printed photographs into extraordinary augmented reality video memories. Built with modern, private, 100% on-device WebAR computer vision.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Client-Side Processing • Zero Cloud Media Lock-in</span>
            </div>
          </div>

          {/* Col 1: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A3AABF]">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')} className="hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Pricing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Pricing
            </h4>
            <ul className="space-y-2 text-xs text-[#A3AABF]">
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">
                  Starter Setup (₹49)
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">
                  Creator Licence (₹249)
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">
                  Business Academy (₹499)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs text-[#A3AABF]">
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contact Support
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#646C86]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} AR Gift Creator. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13172C] hover:bg-[#1A203B] text-[#A3AABF] hover:text-white border border-white/[0.08] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
