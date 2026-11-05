import React from 'react';
import { ArrowRight, Play, Camera, Scan, Sparkles } from 'lucide-react';

export default function ProductDemo() {
  return (
    <section className="py-20 md:py-28 bg-[#0E1120]/60 border-y border-white/[0.06] relative overflow-hidden">
      {/* Background radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#9270FF]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Explanation */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Not Just a Picture.{' '}
            <span className="font-editorial-italic text-[#B59AFF] font-normal">
              A Memory That Moves.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-2xl mx-auto">
            The QR code opens a hosted AR viewer. The viewer then uses image-target tracking to recognize your printed photo and play the video directly on it.
          </p>
        </div>

        {/* 3 Connected Photographic Storytelling Stages */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* Stage 1: The Printed Memory */}
          <div className="w-full md:w-1/3 flex flex-col items-center group">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#9270FF]/40 shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 bg-[#14172B]">
              {/* Actual framed photograph */}
              <img
                src="/images/couple-portrait.jpg"
                alt="The Printed Memory"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#B59AFF]">
                Step 01
              </div>
            </div>
            
            {/* Stage Pill Label */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14172B] border border-white/10 text-xs font-semibold text-white shadow-md">
              <span className="w-5 h-5 rounded-full bg-[#9270FF] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                1
              </span>
              <span>The Printed Memory</span>
            </div>
          </div>

          {/* Connector Arrow 1 */}
          <div className="hidden md:flex items-center justify-center text-[#9270FF]/70">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>

          {/* Stage 2: The Recognition */}
          <div className="w-full md:w-1/3 flex flex-col items-center group">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#9270FF]/40 shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 bg-[#090C19]">
              {/* Photo being scanned through camera */}
              <img
                src="/images/couple-portrait.jpg"
                alt="Smartphone recognizing printed photograph"
                className="w-full h-full object-cover object-center filter brightness-75 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Optical scanning reticle overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full border-2 border-dashed border-[#9270FF] rounded-xl flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />
                  <div className="absolute inset-x-0 h-0.5 bg-[#9270FF] shadow-[0_0_12px_#9270FF] animate-scan-line" />
                  
                  <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#9270FF]/50 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Optical Match 99.4%</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#B59AFF]">
                Step 02
              </div>
            </div>

            {/* Stage Pill Label */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14172B] border border-white/10 text-xs font-semibold text-white shadow-md">
              <span className="w-5 h-5 rounded-full bg-[#9270FF] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                2
              </span>
              <span>The Recognition</span>
            </div>
          </div>

          {/* Connector Arrow 2 */}
          <div className="hidden md:flex items-center justify-center text-[#9270FF]/70">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>

          {/* Stage 3: The Living Memory */}
          <div className="w-full md:w-1/3 flex flex-col items-center group">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#9270FF]/60 shadow-[0_0_30px_rgba(146,112,255,0.25)] transition-all duration-300 transform group-hover:-translate-y-1 bg-[#14172B]">
              {/* Video overlay playing on photo */}
              <img
                src="/images/couple-portrait.jpg"
                alt="AR Video memory active playback"
                className="w-full h-full object-cover object-center filter brightness-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 text-[9px] font-mono text-emerald-300">
                    ● Video Playing 3D
                  </span>
                  <span className="text-[10px] font-mono text-white/80">0:45 / 2:30</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#9270FF]/90 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#7047EB] to-[#B59AFF] h-full w-[45%]" />
                </div>
              </div>

              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#B59AFF]">
                Step 03
              </div>
            </div>

            {/* Stage Pill Label */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14172B] border border-[#9270FF]/40 text-xs font-semibold text-white shadow-md">
              <span className="w-5 h-5 rounded-full bg-[#9270FF] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                3
              </span>
              <span>The Living Memory</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
