import React from 'react';
import {
  Focus,
  Film,
  Box,
  Layers,
  HardDrive,
  Upload,
  Cpu,
  Archive,
  QrCode,
  Monitor,
  Smartphone,
  Apple,
  Globe,
  Server,
  Sparkles
} from 'lucide-react';

export default function Features() {
  const flagshipFeatures = [
    {
      title: 'Real Image-Target Tracking',
      desc: 'Point your camera directly at the physical photo. Our engine anchors the video memory directly onto the print in true 3D spatial alignment.',
      icon: Focus,
      highlight: 'Computer Vision',
    },
    {
      title: 'Synchronized Video & Audio Overlay',
      desc: 'Projects your video memory anchored in 3D perspective with synchronized sound, intuitive pause/play controls, and matching aspect ratio.',
      icon: Film,
      highlight: 'WebGL 3D Plane',
    },
    {
      title: 'In-Browser Feature Compiler',
      desc: 'Compiles complex multi-scale feature points into high-speed .mind binary targets directly inside your browser without any external cloud rendering.',
      icon: Cpu,
      highlight: 'Instant Processing',
    },
    {
      title: '100% Standalone Self-Hosted ZIP',
      desc: 'Exports completely independent, self-contained HTML/JS/WASM bundles. Host on Netlify, Vercel, GitHub Pages, or any HTTPS server.',
      icon: Archive,
      highlight: 'Zero Lock-in',
    },
  ];

  const standardFeatures = [
    {
      title: 'MindAR-Powered Engine',
      desc: 'Proven open-source computer vision for fast, robust target recognition.',
      icon: Box,
    },
    {
      title: 'Three.js 60FPS Video Rendering',
      desc: 'Calibrated aspect ratios with smooth hardware-accelerated WebGL playback.',
      icon: Layers,
    },
    {
      title: 'Local Project Storage (IndexedDB)',
      desc: 'Your photos, videos, and settings remain stored on your private device.',
      icon: HardDrive,
    },
    {
      title: 'Instant Photo & Video Ingestion',
      desc: 'Accepts standard JPG, PNG photographs and MP4 video memory files.',
      icon: Upload,
    },
    {
      title: 'Print-Ready QR Code Generation',
      desc: 'Generates crisp vector SVG and high-resolution PNG QR codes for gifts.',
      icon: QrCode,
    },
    {
      title: 'Windows Desktop Studio (EXE)',
      desc: 'Native desktop application built with Tauri for heavy offline creators.',
      icon: Monitor,
    },
    {
      title: 'Android Native APK & Chrome WebAR',
      desc: 'Native signed release APK support along with instant mobile web access.',
      icon: Smartphone,
    },
    {
      title: 'iPhone Safari & iOS WebAR',
      desc: 'Seamless camera feed tracking directly in Safari with zero app store installs.',
      icon: Apple,
    },
    {
      title: 'Responsive Web Creator Studio',
      desc: 'Full-featured studio available across any desktop, tablet, or phone browser.',
      icon: Globe,
    },
    {
      title: 'Customer-Controlled Hosting',
      desc: 'Total data sovereignty — you own your files and choose where to host them.',
      icon: Server,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-[#0D1122]/50 border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#9270FF]/08 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9270FF]" />
            <span>Complete AR Production Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything You Need to Create{' '}
            <span className="text-gradient-purple">AR Memories.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-2xl mx-auto">
            From professional image-target tracking to standalone bundle exports — built with cutting-edge WebAR, computer vision, and Three.js.
          </p>
        </div>

        {/* Flagship Breakthrough Features (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {flagshipFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="relative rounded-2xl bg-gradient-to-b from-[#181E3B] to-[#12162C] border border-[#9270FF]/30 p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(146,112,255,0.1)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#9270FF]/20 border border-[#9270FF]/40 flex items-center justify-center text-[#B59AFF] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(146,112,255,0.4)] transition-all">
                      <Icon className="w-5 h-5 text-[#9270FF]" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#9270FF]/15 border border-[#9270FF]/30 text-[#B59AFF]">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4C4FF] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Features Grid (10 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {standardFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl bg-[#13172C]/70 hover:bg-[#1A203B]/85 border border-white/[0.07] hover:border-[#9270FF]/35 p-4 transition-all duration-200 transform hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#B59AFF] group-hover:text-white group-hover:bg-[#9270FF]/20 group-hover:border-[#9270FF]/40 transition-colors mb-3">
                  <Icon className="w-4 h-4 text-[#9270FF]" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-[#B59AFF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#A3AABF] leading-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
