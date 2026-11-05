import React from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  Smartphone,
  Monitor,
  Globe,
  Apple,
  CheckCircle2,
  Volume2,
  Maximize2,
  Scan,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ onExplorePricing, onSeeHowItWorks }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial violet & indigo atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[1000px] h-[550px] bg-[#9270FF]/12 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#7047EB]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#3B2D71]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Typography */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(146,112,255,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#9270FF]" />
              <span>Image-Target Augmented Reality</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Your Photos Have Stories.{' '}
              <span className="text-gradient-purple">Bring Them to Life.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-semibold text-[#D4C4FF]/90">
              Turn Ordinary Photographs Into Extraordinary AR Video Memories.
            </p>

            {/* Body Copy */}
            <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Create unforgettable augmented reality gifts by connecting printed photographs with personal videos. Scan a photo, relive a memory, and experience something magical.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplorePricing}
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7047EB] via-[#9270FF] to-[#B59AFF] shadow-[0_0_30px_rgba(146,112,255,0.4)] hover:shadow-[0_0_40px_rgba(146,112,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              >
                <span>Explore Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSeeHowItWorks}
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#A3AABF] hover:text-white bg-[#13172C]/80 hover:bg-[#13172C] border border-white/10 hover:border-[#9270FF]/30 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              >
                <Play className="w-4 h-4 text-[#9270FF] fill-[#9270FF]" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Supported Creator Platforms */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#A3AABF] font-mono">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#9270FF]/30 hover:text-white transition-all">
                  <Monitor className="w-3.5 h-3.5 text-[#9270FF]" /> Windows
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#9270FF]/30 hover:text-white transition-all">
                  <Smartphone className="w-3.5 h-3.5 text-[#9270FF]" /> Android
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#9270FF]/30 hover:text-white transition-all">
                  <Globe className="w-3.5 h-3.5 text-[#9270FF]" /> Web Browser
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#9270FF]/30 hover:text-white transition-all">
                  <Apple className="w-3.5 h-3.5 text-[#9270FF]" /> iPhone (Safari/PWA)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Product Mockup Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center select-none pt-4 lg:pt-0">
            {/* Glowing ambient energy field behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7047EB]/25 via-[#9270FF]/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Composition Wrapper */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              
              {/* 1. Physical Photo Frame (Background Element) */}
              <div className="relative w-[70%] aspect-[4/3] rounded-2xl p-3 bg-gradient-to-b from-[#3D2C1E] via-[#2A1E14] to-[#1C140D] border-4 border-[#5E432F] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Frame Inner Matting */}
                <div className="w-full h-full bg-[#0D101D] rounded-lg p-2.5 overflow-hidden flex flex-col justify-between border border-[#443021]">
                  {/* Photo content: Warm couple portrait simulation */}
                  <div className="relative w-full h-full rounded overflow-hidden bg-gradient-to-tr from-[#1E2542] via-[#2C1D4D] to-[#401C38] flex items-center justify-center">
                    
                    {/* Artistic silhouette / scene simulating framed photograph */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* Bokeh warm fairy lights */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-amber-300/40 blur-sm" />
                        <div className="absolute top-4 right-1 w-3 h-3 rounded-full bg-amber-200/50 blur-sm" />
                        <div className="absolute -bottom-1 right-6 w-4 h-4 rounded-full bg-purple-300/30 blur-sm" />
                        
                        {/* Simulated Couple Silhouette in warm studio lighting */}
                        <div className="relative flex items-end justify-center gap-3">
                          {/* Person Left */}
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 shadow-inner" />
                            <div className="w-16 h-20 rounded-t-3xl bg-gradient-to-b from-slate-700 to-slate-900 mt-1 shadow-md" />
                          </div>
                          {/* Person Right */}
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-amber-100 to-amber-600 shadow-inner" />
                            <div className="w-14 h-18 rounded-t-3xl bg-gradient-to-b from-rose-400 to-purple-900 mt-1 shadow-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle photo frame glare line */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                    {/* Printed Photo label tag */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/70 border border-white/10">
                      Physical Photo
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Overlapping AR Smartphone (Foreground Experience) */}
              <div className="absolute right-0 sm:right-2 top-2 sm:top-4 w-[62%] sm:w-[58%] aspect-[9/18] rounded-[32px] p-2 bg-[#090C19] border-2 border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(146,112,255,0.35)] transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden z-20">
                
                {/* Phone Speaker Notch & Camera */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-18 h-4 bg-black rounded-full flex items-center justify-center gap-2 z-30">
                  <div className="w-2 h-2 rounded-full bg-[#1A1D2E]" />
                  <div className="w-8 h-1 rounded-full bg-[#1A1D2E]" />
                </div>

                {/* Smartphone Screen Viewport */}
                <div className="relative w-full h-full rounded-[24px] bg-[#070914] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-2.5">
                  
                  {/* AR HUD Header: Status Banner */}
                  <div className="relative z-20 flex items-center justify-between px-2 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#9270FF]/40 shadow-lg">
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

                  {/* Camera Viewfinder with Live Scanning Target & Video Overlay */}
                  <div className="relative my-2 w-full flex-1 rounded-xl overflow-hidden border border-[#9270FF]/50 bg-gradient-to-tr from-[#1E1738] via-[#2D1B4E] to-[#45183D] flex items-center justify-center shadow-inner">
                    
                    {/* Computer Vision Corner Tracking Reticles */}
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#9270FF] z-20" />
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#9270FF] z-20" />
                    <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#9270FF] z-20" />
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#9270FF] z-20" />

                    {/* Animated Scanning Beam */}
                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9270FF] to-transparent shadow-[0_0_12px_#9270FF] z-10 animate-scan-line pointer-events-none" />

                    {/* Video Simulation Inside Viewfinder */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 text-center">
                      {/* Play Action / Playing State */}
                      <div className="w-10 h-10 rounded-full bg-[#9270FF]/80 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(146,112,255,0.7)] animate-pulse">
                        <Play className="w-4 h-4 fill-white translate-x-0.5" />
                      </div>

                      {/* Video memory caption overlay */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] text-white/90 bg-black/60 backdrop-blur-md px-2 py-1 rounded">
                        <span className="font-medium truncate">Wedding_Dance.mp4</span>
                        <span className="font-mono text-[#B59AFF]">0:48 / 2:30</span>
                      </div>
                    </div>
                  </div>

                  {/* AR Viewport Bottom Controls */}
                  <div className="relative z-20 space-y-1.5 px-1">
                    {/* Scrub bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#9270FF] to-[#B59AFF] h-full w-[35%]" />
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

                {/* Light Ray Connection between Frame and Phone */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-14 h-24 bg-gradient-to-r from-[#9270FF]/30 to-transparent blur-md pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
