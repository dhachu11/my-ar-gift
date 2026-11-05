import React from 'react';
import { ArrowRight, Sparkles, Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FinalCTA({ onExplorePlans, onStartCreating }) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#9270FF]/14 rounded-full blur-[160px] pointer-events-none -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#151A33] via-[#0E1225] to-[#080B18] border border-[#9270FF]/35 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#9270FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left mini visual: Framed Photo + Phone AR */}
            <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center">
                {/* Photo Frame */}
                <div className="w-[74%] aspect-[4/3] rounded-2xl p-2.5 bg-gradient-to-b from-[#3D2C1E] to-[#1C140D] border-2 border-[#5E432F] shadow-2xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-[#0D101D] rounded-lg flex flex-col items-center justify-center overflow-hidden relative p-3">
                    <ImageIcon className="w-8 h-8 text-[#B59AFF]/50 mb-1" />
                    <span className="text-[10px] font-mono text-white/50">Printed Frame</span>
                  </div>
                </div>

                {/* Handheld Phone overlay */}
                <div className="absolute right-1 top-1 w-[56%] aspect-[9/18] rounded-2xl p-1 bg-black border-2 border-[#9270FF]/70 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(146,112,255,0.4)] transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-tr from-[#251142] to-[#0B0616] rounded-xl flex flex-col items-center justify-center relative overflow-hidden p-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-[#9270FF] flex items-center justify-center text-white shadow-lg mb-2 animate-pulse">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                    <span className="text-[9px] font-mono text-[#B59AFF]">Living Memory</span>
                    <div className="absolute bottom-2 inset-x-2 h-0.5 bg-[#9270FF] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9270FF]/15 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#9270FF]" />
                <span>Begin Your Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Don't Just Give a Photograph.{' '}
                <span className="text-gradient-purple">Give a Memory That Comes Alive.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Create a gift that makes people stop, smile, and relive their favorite moments with tears of joy.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onExplorePlans}
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] shadow-[0_0_30px_rgba(146,112,255,0.4)] hover:shadow-[0_0_40px_rgba(146,112,255,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
                >
                  <span>Explore Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={siteConfig.urls.creatorStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#19203D] hover:bg-[#222B52] border border-white/10 hover:border-[#9270FF]/40 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
                >
                  <span>Start Creating</span>
                  <ExternalLink className="w-4 h-4 text-[#9270FF]" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
