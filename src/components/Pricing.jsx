import React from 'react';
import { Check, AlertCircle, ArrowRight, Gift, Layers, GraduationCap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Pricing({ onSelectPlan }) {
  const plans = [
    {
      id: 'starter',
      name: 'Starter Setup',
      badge: 'Single Memory',
      icon: Gift,
      price: '₹49',
      period: 'per memory',
      description: 'Let us create your first AR gift for you.',
      popular: false,
      cta: 'Get Started',
      features: [
        'One photograph',
        'One video',
        'Done-for-you AR setup',
        'QR code generation',
        'Live experience link delivery',
      ],
      disclosures: [
        'One photo & one video per order.',
        'Hosting duration & revision terms must be confirmed before payment.',
      ],
    },
    {
      id: 'creator',
      name: 'Creator Licence',
      badge: 'Most Popular',
      icon: Layers,
      price: '₹249',
      period: 'one-time licence',
      description: 'Create personalized AR gifts whenever you want.',
      popular: true,
      cta: 'Get Creator Licence',
      features: [
        'Windows desktop application (EXE)',
        'Android application (APK)',
        'Browser-based Creator Studio',
        'Photo & video upload',
        'Image-target compilation',
        'Export standalone AR package (ZIP)',
        'QR code generation',
      ],
      disclosures: [
        'Hosting is not included.',
        'You must host this exported AR package on a public HTTPS service.',
      ],
    },
    {
      id: 'academy',
      name: 'Business Academy',
      badge: 'Complete Bundle',
      icon: GraduationCap,
      price: '₹499',
      period: 'complete bundle',
      description: 'Learn to create, sell, and grow an AR gift business.',
      popular: false,
      cta: 'Join Business Academy',
      features: [
        'Everything in Creator Licence',
        'Step-by-step video tutorials',
        'AR gift business setup guidance',
        'Approaching gift shops & frame stores',
        'Pricing & packaging guidance',
        'Instagram marketing guidance',
        'Ready-to-use business templates',
      ],
      disclosures: [
        'No guaranteed income or customers.',
        'Business results depend on individual effort.',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0E1120]/70 border-t border-white/[0.06] relative overflow-hidden">
      {/* Glow highlight for recommended plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-[#9270FF]/14 rounded-full blur-[150px] pointer-events-none -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B59AFF] uppercase">
            <span className="w-5 h-[1.5px] bg-[#9270FF]" />
            <span>Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Find Your Way{' '}
            <span className="font-editorial-italic text-[#B59AFF] font-normal">
              to Create.
            </span>
          </h2>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const PlanIcon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#151933] border-2 border-[#9270FF] shadow-[0_0_40px_rgba(146,112,255,0.25),0_20px_40px_rgba(0,0,0,0.8)] lg:-translate-y-2'
                    : 'bg-[#14172B]/85 border border-white/[0.08] hover:border-white/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7047EB] to-[#B59AFF] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 z-10">
                    <span>★ MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Icon & Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF]">
                      <PlanIcon className="w-5 h-5 text-[#9270FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#A3AABF]">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 py-5 border-y border-white/[0.08] my-5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#A3AABF] font-mono">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#A3AABF]">
                        <Check className="w-4 h-4 text-[#9270FF] shrink-0 mt-0.5" />
                        <span className="leading-tight text-white/90">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transparent Disclosures Box */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5 mb-8">
                    {plan.disclosures.map((disc) => (
                      <p key={disc} className="text-[11px] text-[#A3AABF]/80 leading-snug flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#B59AFF] shrink-0 mt-0.5" />
                        <span>{disc}</span>
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
                      : 'bg-[#1F2544] hover:bg-[#283058] text-white border border-white/10 hover:border-white/20'
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
