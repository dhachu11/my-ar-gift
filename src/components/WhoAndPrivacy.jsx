import React from 'react';
import { Users, Shield, CheckCircle2, Lock } from 'lucide-react';

export default function WhoAndPrivacy() {
  const whoList = [
    'Individual gift creators',
    'Freelancers',
    'Gift shop owners',
    'Photo frame businesses',
    'Personalized gift businesses',
    'Small business owners',
  ];

  const privacyPoints = [
    'Creator projects are processed locally on your device.',
    'Photos & videos are stored in local browser/app storage.',
    'No mandatory cloud account for local creation.',
    'Exported AR packages are self-contained (ZIP).',
    'You host your experiences on a public HTTPS link.',
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Who Is It For? (With real framed photo) */}
          <div className="rounded-3xl bg-[#14172B]/85 border border-white/[0.08] hover:border-[#9270FF]/35 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF]">
                  <Users className="w-5 h-5 text-[#9270FF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Who Is It For?
                </h3>
              </div>

              {/* Real Framed Photo and Checklist composition */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Framed Photo Visual */}
                <div className="sm:col-span-5">
                  <div className="relative aspect-[4/3] rounded-xl p-2 bg-gradient-to-b from-[#3D2C1E] to-[#1C140D] border-2 border-[#5E432F] shadow-xl overflow-hidden">
                    <img
                      src="/images/couple-portrait.jpg"
                      alt="Framed couple anniversary photograph"
                      className="w-full h-full object-cover rounded filter brightness-95"
                    />
                  </div>
                </div>

                {/* Checklist */}
                <div className="sm:col-span-7 space-y-2.5">
                  {whoList.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A3AABF]">
                      <CheckCircle2 className="w-4 h-4 text-[#9270FF] shrink-0" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] text-[11px] font-mono text-[#646C86]">
              Made for heartfelt individual creators and custom gift businesses alike.
            </div>
          </div>

          {/* Card 2: Your Memories Stay in Your Control */}
          <div className="rounded-3xl bg-[#14172B]/85 border border-white/[0.08] hover:border-[#9270FF]/35 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF]">
                  <Shield className="w-5 h-5 text-[#9270FF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Your Memories Stay in Your Control.
                </h3>
              </div>

              {/* Glowing Shield & Checklist composition */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Glowing Shield Icon */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="w-24 h-28 rounded-2xl bg-gradient-to-b from-[#7047EB]/20 to-[#14172B] border-2 border-[#9270FF]/50 shadow-[0_0_30px_rgba(146,112,255,0.25)] flex items-center justify-center relative">
                    <Lock className="w-10 h-10 text-[#B59AFF] animate-pulse" />
                    <div className="absolute inset-0 bg-[#9270FF]/10 rounded-2xl blur-sm" />
                  </div>
                </div>

                {/* Checklist */}
                <div className="sm:col-span-8 space-y-2.5">
                  {privacyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3AABF]">
                      <CheckCircle2 className="w-4 h-4 text-[#9270FF] shrink-0 mt-0.5" />
                      <span className="text-white/90 leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] text-[11px] font-mono text-[#646C86]">
              Private on-device compilation • No account lock-in • 100% data sovereignty.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
