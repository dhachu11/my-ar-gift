import React from 'react';
import { Check, AlertCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0D1122]/70 border-t border-white/[0.06] relative overflow-hidden">
      {/* Glow highlight for recommended plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-[#9270FF]/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9270FF]" />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Choose How You{' '}
            <span className="text-gradient-purple">Want to Create.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto">
            Start with a single personalized AR gift setup, or unlock complete software access to build your own AR memory business.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#151A33] border-2 border-[#9270FF] shadow-[0_0_40px_rgba(146,112,255,0.22),0_15px_30px_rgba(0,0,0,0.7)] lg:-translate-y-2'
                    : 'bg-[#13172C]/85 border border-white/[0.08] hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7047EB] to-[#B59AFF] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 z-10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Recommended Plan</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-[#B59AFF] border border-white/[0.08]">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3AABF] min-h-[36px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 pb-6 border-b border-white/[0.08] mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#A3AABF] font-mono">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                      What's Included:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3AABF]">
                        <Check className="w-4 h-4 text-[#9270FF] shrink-0 mt-0.5" />
                        <span className="leading-tight text-white/90">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transparent Disclosures Box */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3AABF] flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3 text-[#B59AFF]" />
                      Full Disclosure & Terms:
                    </span>
                    {plan.disclosures.map((disc) => (
                      <p key={disc} className="text-[11px] text-[#A3AABF]/80 leading-snug">
                        • {disc}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`btn-press w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] text-white shadow-[0_0_30px_rgba(146,112,255,0.4)] hover:shadow-[0_0_40px_rgba(146,112,255,0.6)] transform hover:-translate-y-0.5'
                      : 'bg-[#1F2646] hover:bg-[#28325C] text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
