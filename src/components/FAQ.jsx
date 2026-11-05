import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#0E1120]/60 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#7047EB]/08 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B59AFF] uppercase">
            <span className="w-5 h-[1.5px] bg-[#9270FF]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked{' '}
            <span className="font-editorial-italic text-[#B59AFF] font-normal">
              Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about creating, hosting, and experiencing augmented reality gifts.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#151933] border-[#9270FF]/40 shadow-[0_4px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(146,112,255,0.1)]'
                    : 'bg-[#14172B]/75 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-bold text-sm sm:text-base text-white hover:text-[#B59AFF] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#B59AFF] transition-all duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#9270FF]/25 border-[#9270FF]/50 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#A3AABF] leading-relaxed border-t border-white/[0.06] pt-4"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
