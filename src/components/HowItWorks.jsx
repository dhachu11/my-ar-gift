import React from 'react';
import { Image as ImageIcon, Play, Layers, QrCode, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload Your Photo',
      desc: 'Choose the printed photo you want to bring to life.',
      icon: ImageIcon,
    },
    {
      num: '02',
      title: 'Add Your Video',
      desc: 'Connect a birthday message, wedding clip, or personal video.',
      icon: Play,
    },
    {
      num: '03',
      title: 'Generate Your AR Experience',
      desc: 'Compile the image target and export your standalone package.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'Share the QR Code',
      desc: 'Host the exported files on a public HTTPS link and share the QR code.',
      icon: QrCode,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From Photograph to Experience.
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed">
            Create your first AR gift in four simple steps.
          </p>
        </div>

        {/* 4 Connected Step Cards with sleek arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative rounded-2xl bg-[#14172B]/80 hover:bg-[#1A1F38] border border-white/[0.08] hover:border-[#9270FF]/40 p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.5)] group"
              >
                <div>
                  {/* Step Header with Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF] mb-6 group-hover:scale-105 group-hover:bg-[#9270FF]/25 transition-all">
                    <Icon className="w-6 h-6 text-[#9270FF]" />
                  </div>

                  {/* Number Badge + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#9270FF] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {item.num}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#D4C4FF] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow to Next Step on Desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-[#9270FF]/60 pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
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
