import React from 'react';
import { Camera, Image as ImageIcon, Play, Smartphone, ArrowRight, Sparkles, Volume2, Scan } from 'lucide-react';

export default function ProductDemo() {
  const steps = [
    {
      num: '1',
      title: 'A Printed Photograph',
      desc: 'An ordinary physical photograph framed on a desk, wall, or printed on a greeting card or album.',
      icon: ImageIcon,
      visualTag: 'Physical Print',
      accent: 'from-[#241A12] to-[#140E0A]',
    },
    {
      num: '2',
      title: 'Scan the Photo',
      desc: 'Point any smartphone camera at the photo. MindAR computer vision instantly recognizes the visual features in milliseconds.',
      icon: Camera,
      visualTag: 'Real-time Vision',
      accent: 'from-[#141A33] to-[#0A0D1A]',
    },
    {
      num: '3',
      title: 'Watch Your Memory Come Alive',
      desc: 'The personal video plays directly anchored to the printed image in 3D perspective with synchronized stereo audio.',
      icon: Play,
      visualTag: 'Augmented Reality',
      accent: 'from-[#251142] to-[#100720]',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0D1122]/60 border-y border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9270FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/25 text-[#B59AFF] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9270FF]" />
            <span>Computer Vision vs Generic QR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            More Than a Photograph.{' '}
            <span className="text-gradient-purple">A Memory You Can Experience.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-2xl mx-auto">
            Real image-target tracking that recognizes your printed photo directly in the physical world and anchors your video directly onto it.
          </p>
        </div>

        {/* 3-Step Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative rounded-2xl bg-[#13172C]/75 hover:bg-[#1A203B]/85 border border-white/[0.08] hover:border-[#9270FF]/40 p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Step Visual Preview Card */}
                <div className={`relative w-full aspect-[16/10] rounded-xl mb-6 bg-gradient-to-br ${step.accent} border border-white/[0.08] overflow-hidden flex items-center justify-center shadow-inner`}>
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#9270FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  
                  {/* Step Illustration Content */}
                  {idx === 0 && (
                    <div className="w-[62%] aspect-[4/3] rounded-lg bg-[#2A1E14] border-2 border-[#5E432F] p-1.5 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full bg-[#0D101D] rounded flex flex-col items-center justify-center text-[#B59AFF]/80 p-2">
                        <ImageIcon className="w-8 h-8 text-[#9270FF] mb-1" />
                        <span className="text-[10px] font-mono text-white/60">Printed Print</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-24 h-36 rounded-2xl bg-[#090C19] border-2 border-[#9270FF]/60 p-1 shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Scanner reticle & scanline */}
                        <div className="w-18 h-24 border border-dashed border-[#9270FF]/70 rounded-lg flex items-center justify-center relative">
                          <Scan className="w-6 h-6 text-[#9270FF]" />
                          <div className="absolute inset-x-0 h-0.5 bg-[#9270FF] shadow-[0_0_8px_#9270FF] animate-scan-line" />
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-28 h-38 rounded-2xl bg-gradient-to-tr from-[#7047EB] to-[#B59AFF] p-0.5 shadow-[0_0_25px_rgba(146,112,255,0.35)]">
                        <div className="w-full h-full bg-[#090C19] rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden p-2">
                          <div className="w-8 h-8 rounded-full bg-[#9270FF] flex items-center justify-center text-white shadow-lg mb-1">
                            <Play className="w-4 h-4 fill-white translate-x-0.5" />
                          </div>
                          <div className="flex items-center gap-1 text-[9px] text-[#B59AFF] font-mono">
                            <Volume2 className="w-2.5 h-2.5" />
                            <span>Playing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#B59AFF]">
                    {step.visualTag}
                  </div>
                </div>

                {/* Step Text Information */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#9270FF]/15 border border-[#9270FF]/30 text-[#B59AFF] font-mono font-bold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#B59AFF] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
