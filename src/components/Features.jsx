import React from 'react';
import {
  Focus,
  Film,
  Box,
  Layers,
  HardDrive,
  QrCode,
  Globe,
  Server,
  Sparkles,
  Play
} from 'lucide-react';

export default function Features() {
  const technicalPills = [
    { title: 'MindAR Engine', icon: Box },
    { title: 'Three.js Rendering', icon: Layers },
    { title: 'Local Storage (IndexedDB)', icon: HardDrive },
    { title: 'QR Code Generation', icon: QrCode },
    { title: 'Browser-Based Creator Studio', icon: Globe },
    { title: 'Customer-Controlled Hosting', icon: Server },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-[#0E1120]/70 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#9270FF]/08 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B59AFF] uppercase">
            <span className="w-5 h-[1.5px] bg-[#9270FF]" />
            <span>Powered by Real AR Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Powerful Technology.{' '}
            <span className="font-editorial-italic text-[#B59AFF] font-normal">
              Beautifully Simple.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-2xl mx-auto">
            A complete AR gift creation suite with real image-target tracking, video rendering, local storage, and multi-platform support.
          </p>
        </div>

        {/* 3 Editorial Photographic Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Spotlight 1: Real Image-Target Tracking */}
          <div className="relative rounded-2xl bg-[#14172B] border border-white/[0.08] hover:border-[#9270FF]/40 overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
              <img
                src="/images/couple-portrait.jpg"
                alt="Real image-target tracking on desk"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14172B] via-transparent to-black/40" />
              {/* Camera reticle simulation */}
              <div className="absolute inset-4 border border-dashed border-[#9270FF]/60 rounded-lg flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#B59AFF] border border-[#9270FF]/30">
                  Target Identified
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#D4C4FF] transition-colors">
                Real Image-Target Tracking
              </h3>
              <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                Accurately recognizes your printed photograph in real time with high-speed feature point extraction.
              </p>
            </div>
          </div>

          {/* Spotlight 2: Video Overlay on Photo */}
          <div className="relative rounded-2xl bg-[#14172B] border border-white/[0.08] hover:border-[#9270FF]/40 overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
              <img
                src="/images/couple-portrait.jpg"
                alt="Video overlay playing on printed photo"
                className="w-full h-full object-cover filter brightness-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14172B] via-transparent to-black/40" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#9270FF]/80 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(146,112,255,0.7)]">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#D4C4FF] transition-colors">
                Video Overlay on Photo
              </h3>
              <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                Plays your video directly on the physical photo with matching aspect ratio and synchronized stereo audio.
              </p>
            </div>
          </div>

          {/* Spotlight 3: Multi-Platform & Export */}
          <div className="relative rounded-2xl bg-[#14172B] border border-white/[0.08] hover:border-[#9270FF]/40 overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
              <img
                src="/images/laptop-studio.jpg"
                alt="Multi-platform creator studio on laptop"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14172B] via-transparent to-black/40" />
              {/* Creator Studio Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#9270FF]/30 backdrop-blur-md border border-[#9270FF]/50 text-[10px] font-mono text-white">
                ZIP Export Ready
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#D4C4FF] transition-colors">
                Multi-Platform & Export
              </h3>
              <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                Create, export (ZIP), and share across Windows desktop, Android APK, Web Browser, and iPhone Safari.
              </p>
            </div>
          </div>

        </div>

        {/* Compact Technical Capability Grid (Bottom Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {technicalPills.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-[#14172B]/80 hover:bg-[#1A1F38] border border-white/[0.08] hover:border-[#9270FF]/30 transition-all text-xs font-medium text-white shadow-sm"
              >
                <Icon className="w-4 h-4 text-[#9270FF] shrink-0" />
                <span className="truncate">{item.title}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
