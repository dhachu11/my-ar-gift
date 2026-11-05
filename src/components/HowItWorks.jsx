import React from 'react';
import { UploadCloud, Film, Cpu, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Upload Your Photo',
      description: 'Choose the printed photograph you want to bring to life (JPG or PNG).',
      icon: UploadCloud,
      tag: 'Target Image',
    },
    {
      step: '02',
      title: 'Add Your Video',
      description: 'Connect a birthday message, wedding clip, anniversary video, or personal memory (MP4).',
      icon: Film,
      tag: 'Video Overlay',
    },
    {
      step: '03',
      title: 'Generate Your AR Experience',
      description: 'Our engine compiles the image tracking target and bundles a self-contained WebAR package.',
      icon: Cpu,
      tag: 'Local Compiler',
    },
    {
      step: '04',
      title: 'Share the QR Code',
      description: 'Host your exported package on public HTTPS and print or share the generated QR code.',
      icon: QrCode,
      tag: 'Zero-App Delivery',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#7047EB]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Create Your First AR Gift in{' '}
            <span className="text-gradient-purple">Simple Steps.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto">
            From physical photograph to interactive augmented reality experience in minutes.
          </p>
        </div>

        {/* 4 Cards Grid with Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#13172C]/75 hover:bg-[#1A203B]/90 border border-white/[0.08] hover:border-[#9270FF]/40 p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group"
              >
                {/* Step Top Bar: Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-mono text-[#9270FF]/80 group-hover:text-[#B59AFF] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF] group-hover:scale-110 group-hover:bg-[#9270FF]/25 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#9270FF]" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#A3AABF] mb-3">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4C4FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer Indicator */}
                <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#646C86]">
                  <span>Phase {index + 1} of 4</span>
                  {index < 3 ? (
                    <ArrowRight className="w-4 h-4 text-[#9270FF]/70 hidden lg:block group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/80 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
