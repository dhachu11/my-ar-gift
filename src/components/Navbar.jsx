import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ onOpenLegal, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'how-it-works', 'features', 'use-cases', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'use-cases', label: 'Use Cases', href: '#use-cases' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B18]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none rounded-xl p-1"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="AR Gift Creator Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#9270FF] group-hover:scale-105 group-hover:bg-[#9270FF]/25 group-hover:border-[#9270FF]/50 transition-all duration-300 shadow-[0_0_20px_rgba(146,112,255,0.25)]">
              <Layers className="w-5 h-5 text-[#9270FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#B59AFF] transition-colors">
                  AR Gift Creator
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#14172B] text-[#B59AFF] border border-[#9270FF]/30">
                  WebAR
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean, minimal, no huge pill) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none py-1 ${
                    isActive
                      ? 'text-white font-semibold border-b-2 border-[#9270FF]'
                      : 'text-[#A3AABF] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Open Creator Studio */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.urls.creatorStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] hover:shadow-[0_0_25px_rgba(146,112,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
            >
              <span>Open Creator Studio</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/90" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.urls.creatorStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#9270FF] text-[11px] btn-press"
            >
              Studio ↗
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#14172B] border border-white/10 text-[#A3AABF] hover:text-white hover:border-[#9270FF]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080B18]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-[#A3AABF] hover:text-white hover:bg-[#14172B] transition-colors border border-transparent hover:border-white/[0.08]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#9270FF]" />
              </a>
            ))}
          </nav>

          <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
            <a
              href={siteConfig.urls.creatorStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7047EB] to-[#9270FF] shadow-lg shadow-[#9270FF]/25"
            >
              <span>Open Creator Studio</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-[#646C86]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegal('privacy');
                }}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
