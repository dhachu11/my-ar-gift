import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onExplorePlans }) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#9270FF]/14 rounded-full blur-[160px] pointer-events-none -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#151933] via-[#0E1120] to-[#080B18] border border-[#9270FF]/35 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#9270FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual: Gift Box + Framed Photo Composition */}
            <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[360px] aspect-[4/3] flex items-center justify-center">
                
                {/* 1. Wrapped Gift Box with Ribbon */}
                <div className="absolute left-0 bottom-2 w-[48%] aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/gift-box.jpg"
                    alt="Luxury wrapped gift box with ribbon"
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* 2. Framed Couple Photograph */}
                <div className="absolute right-2 top-0 w-[62%] aspect-[4/3] rounded-2xl p-2 bg-gradient-to-b from-[#3D2C1E] to-[#1C140D] border-2 border-[#5E432F] shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  <img
                    src="/images/couple-portrait.jpg"
                    alt="Framed couple anniversary photograph"
                    className="w-full h-full object-cover rounded-lg filter brightness-105"
                  />
                </div>

              </div>
            </div>

            {/* Right text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Don't Just Give a Photograph.{' '}
                <span className="block font-editorial-italic text-[#B59AFF] font-normal">
                  Give a Memory That Comes Alive.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#A3AABF] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Create something unforgettable with the photographs that matter most.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onExplorePlans}
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] shadow-[0_0_30px_rgba(146,112,255,0.4)] hover:shadow-[0_0_40px_rgba(146,112,255,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
                >
                  <span>Explore Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
