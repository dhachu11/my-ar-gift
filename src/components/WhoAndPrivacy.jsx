import React from 'react';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Lock,
  Globe2,
  Sparkles
} from 'lucide-react';

export default function WhoAndPrivacy() {
  const whoList = [
    'Individual gift creators seeking a unique, heartfelt sentimental surprise',
    'Freelancers offering custom AR interactive memory packages',
    'Gift shop owners seeking differentiated, high-margin boutique items',
    'Photo frame businesses modernizing traditional prints and frames',
    'Wedding & event photographers offering interactive "Living Albums"',
    'Small business owners delivering novel branded AR keepsakes',
  ];

  const privacyPoints = [
    'Creator projects are processed 100% locally on your own private device.',
    'Customer media (photos & videos) is stored in local browser IndexedDB.',
    'No mandatory cloud account or account registration required for creation.',
    'Exported AR packages are completely self-contained (zero CDN lock-in).',
    'Recipients access the hosted AR experience over public HTTPS with standard browser camera permissions.',
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Who Is It For? */}
          <div className="rounded-3xl bg-[#13172C]/85 border border-white/[0.08] hover:border-[#9270FF]/35 p-7 sm:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF] shadow-[0_0_15px_rgba(146,112,255,0.2)]">
                  <Users className="w-6 h-6 text-[#9270FF]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#B59AFF] border border-white/[0.06]">
                    Target Audience
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Built for People Who Love Creating Memories.
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                Whether you want to create a single emotional gift for a loved one or expand your creative business portfolio with living interactive prints.
              </p>

              <div className="space-y-3 pt-2">
                {whoList.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#A3AABF]">
                    <CheckCircle2 className="w-4 h-4 text-[#9270FF] shrink-0 mt-0.5" />
                    <span className="leading-snug text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-[11px] font-mono text-[#646C86]">
              Empowering creators worldwide • No 3D modeling expertise required
            </div>
          </div>

          {/* Card 2: Trust and Privacy */}
          <div className="rounded-3xl bg-[#13172C]/85 border border-white/[0.08] hover:border-emerald-500/35 p-7 sm:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Data Sovereignty
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Your Memories Stay in Your Control.
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                We believe personal memories should never be held hostage by closed cloud servers, tracking cookies, or recurring storage subscription fees.
              </p>

              <div className="space-y-3 pt-2">
                {privacyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#A3AABF]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug text-white/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-[11px] font-mono text-[#646C86]">
              Private by design • Local IndexedDB processing • Zero cloud lock-in
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
