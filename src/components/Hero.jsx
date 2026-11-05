import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Monitor,
  Globe,
  Apple,
  CheckCircle2,
  Volume2,
  Maximize2,
  Play
} from 'lucide-react';

export default function Hero({ onExplorePricing }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial violet atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[600px] bg-[#9270FF]/12 rounded-full blur-[150px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-[#7047EB]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Category Label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B59AFF] uppercase">
              <span className="w-6 h-[1.5px] bg-[#9270FF]" />
              <span>Image-Target Augmented Reality</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your Photos Have Stories.{' '}
              <span className="font-editorial-italic text-[#B59AFF] font-normal">
                Bring Them
              </span>{' '}
              to Life.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A3AABF] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Turn ordinary printed photographs into extraordinary AR video memories. A simple scan brings your favorite moments back to life.
            </p>

            {/* Action Button: Explore Pricing */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplorePricing}
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] shadow-[0_0_30px_rgba(146,112,255,0.4)] hover:shadow-[0_0_40px_rgba(146,112,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              >
                <span>Explore Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Creator Platform Badges */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#A3AABF] font-mono">
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Monitor className="w-3.5 h-3.5 text-[#9270FF]" /> Windows
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Smartphone className="w-3.5 h-3.5 text-[#9270FF]" /> Android
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Globe className="w-3.5 h-3.5 text-[#9270FF]" /> Web Browser
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Apple className="w-3.5 h-3.5 text-[#9270FF]" /> iPhone (Safari/PWA)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Product Demonstration Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center select-none pt-4 lg:pt-0">
            {/* Glowing ambient energy field behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7047EB]/25 via-[#9270FF]/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Composition Wrapper */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              
              {/* 1. Physical Wood-Framed Couple Photograph (Real Image Asset) */}
              <div className="relative w-[68%] aspect-[4/3] rounded-2xl p-3.5 bg-gradient-to-b from-[#4A3525] via-[#2F2116] to-[#1C140D] border-4 border-[#6E4F38] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Frame Inner Matting */}
                <div className="w-full h-full bg-[#FAF7F2] rounded-lg p-2.5 overflow-hidden flex flex-col justify-between shadow-inner">
                  {/* Real Couple Photography */}
                  <div className="relative w-full h-full rounded overflow-hidden">
                    <img
                      src="/images/couple-portrait.jpg"
                      alt="Printed couple anniversary photograph"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Subtle photo frame glare line */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 2. Paper Handwritten Note Card resting beside frame */}
              <div className="absolute -bottom-4 left-6 sm:left-10 z-30 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="px-4 py-2.5 rounded-lg bg-[#FFF9E6] text-[#2D241E] shadow-[0_10px_25px_rgba(0,0,0,0.6)] border border-[#EADBBD]">
                  <p className="font-handwriting text-base sm:text-lg leading-tight tracking-wide font-bold">
                    A Printed Photo + A Video Memory = Magic ✨
                  </p>
                </div>
              </div>

              {/* 3. Overlapping AR Smartphone (Foreground Experience with Matching Photo) */}
              <div className="absolute right-0 sm:right-2 top-0 sm:top-2 w-[58%] sm:w-[54%] aspect-[9/18] rounded-[34px] p-2 bg-[#090C19] border-2 border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(146,112,255,0.35)] transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden z-20">
                
                {/* Phone Speaker Notch & Camera */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-18 h-4 bg-black rounded-full flex items-center justify-center gap-2 z-30">
                  <div className="w-2 h-2 rounded-full bg-[#1A1D2E]" />
                  <div className="w-8 h-1 rounded-full bg-[#1A1D2E]" />
                </div>

                {/* Smartphone Screen Viewport */}
                <div className="relative w-full h-full rounded-[26px] bg-[#070914] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-2.5">
                  
                  {/* AR HUD Header: Status Banner */}
                  <div className="relative z-20 flex items-center justify-between px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#9270FF]/40 shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400 -ml-2" />
                      <span className="text-[10px] font-semibold text-white tracking-tight">AR Mode</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-[#B59AFF]">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      <span>Photo Recognized</span>
                    </div>
                  </div>

                  {/* Camera Viewfinder with Matching Video Overlay */}
                  <div className="relative my-2 w-full flex-1 rounded-xl overflow-hidden border border-[#9270FF]/50 bg-black flex items-center justify-center shadow-inner">
                    
                    {/* Real matching couple photograph playing as AR video memory */}
                    <img
                      src="/images/couple-portrait.jpg"
                      alt="AR Video memory overlay playback"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-105"
                    />

                    {/* Dark gradient overlay for HUD controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

                    {/* Computer Vision Corner Tracking Reticles */}
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#9270FF] z-20" />
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#9270FF] z-20" />
                    <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#9270FF] z-20" />
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#9270FF] z-20" />

                    {/* Animated Scanning Beam */}
                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9270FF] to-transparent shadow-[0_0_12px_#9270FF] z-10 animate-scan-line pointer-events-none" />

                    {/* Circular Play button centered on phone video */}
                    <div className="relative z-20 w-11 h-11 rounded-full bg-[#9270FF]/80 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(146,112,255,0.7)] hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* AR Viewport Bottom Controls */}
                  <div className="relative z-20 space-y-1 px-1">
                    {/* Scrub bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#7047EB] to-[#B59AFF] h-full w-[45%]" />
                    </div>

                    <div className="flex items-center justify-between text-[#A3AABF] text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <Volume2 className="w-3 h-3 text-[#9270FF]" />
                        <span className="font-mono text-[9px]">Audio On</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-white/80" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Violet Curved Connection Ray from Frame to Phone */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-28 bg-gradient-to-r from-[#9270FF]/35 to-transparent blur-md pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
