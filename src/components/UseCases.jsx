import React from 'react';
import {
  Cake,
  Heart,
  Sparkles,
  Frame,
  Users,
  Store,
  Camera,
  Briefcase
} from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      title: 'Birthday Gifts',
      desc: 'Deliver touching video wishes and nostalgic video clips anchored to a birthday photograph.',
      icon: Cake,
      tag: 'Celebrations',
      gradient: 'from-[#4D1C3C]/80 via-[#2A1021] to-[#12070E]',
      iconColor: '#FF7EA5',
    },
    {
      title: 'Anniversary Gifts',
      desc: 'Celebrate relationship milestones with wedding videos playing directly on the framed couple portrait.',
      icon: Heart,
      tag: 'Milestones',
      gradient: 'from-[#441738]/80 via-[#220B1C] to-[#0E050C]',
      iconColor: '#F472B6',
    },
    {
      title: 'Wedding Memories',
      desc: 'Offer couples an interactive wedding album where vows and joyful dances play over still prints.',
      icon: Sparkles,
      tag: 'Keepsakes',
      gradient: 'from-[#3A1F5E]/80 via-[#1E1033] to-[#0E071A]',
      iconColor: '#C084FC',
    },
    {
      title: 'Personalized Photo Frames',
      desc: 'Upgrade static wooden, acrylic, or canvas photo prints into interactive multimedia centerpieces.',
      icon: Frame,
      tag: 'Decor',
      gradient: 'from-[#1E2D4F]/80 via-[#0F182C] to-[#070C17]',
      iconColor: '#60A5FA',
    },
    {
      title: 'Family Heritage Moments',
      desc: 'Preserve generational memories and voices anchored to heritage family portraits.',
      icon: Users,
      tag: 'Family',
      gradient: 'from-[#193B36]/80 via-[#0C211E] to-[#05110F]',
      iconColor: '#34D399',
    },
    {
      title: 'Gift Boutiques & Stores',
      desc: 'Add high-margin personalized living photo frames to your physical or online specialty shop.',
      icon: Store,
      tag: 'Retail',
      gradient: 'from-[#3D251A]/80 via-[#20130D] to-[#100A06]',
      iconColor: '#FBBF24',
    },
    {
      title: 'Photo Frame Businesses',
      desc: 'Partner with local printing studios to offer a premium "Living Photo" add-on package.',
      icon: Camera,
      tag: 'Studios',
      gradient: 'from-[#332219]/80 via-[#1A110C] to-[#0D0806]',
      iconColor: '#FB923C',
    },
    {
      title: 'Freelance AR Creators',
      desc: 'Launch a personalized AR gift service with zero infrastructure cost and instant delivery.',
      icon: Briefcase,
      tag: 'Commercial',
      gradient: 'from-[#281D4C]/80 via-[#140E29] to-[#0A0717]',
      iconColor: '#A78BFA',
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#7047EB]/07 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9270FF]/10 border border-[#9270FF]/30 text-[#B59AFF] text-xs font-mono">
            <span>Endless Possibilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Make Every Occasion{' '}
            <span className="text-gradient-purple">More Memorable.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto">
            From heartfelt personal gifts to new high-margin offerings for photo framing and gift studios.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-[#13172C]/75 hover:bg-[#1A203B]/90 border border-white/[0.08] hover:border-[#9270FF]/40 p-5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div>
                  {/* Decorative Header Banner */}
                  <div className={`w-full h-24 rounded-xl mb-4 bg-gradient-to-tr ${item.gradient} border border-white/[0.08] flex items-center justify-between px-4 relative overflow-hidden shadow-inner`}>
                    <div className="w-11 h-11 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-5 h-5" style={{ color: item.iconColor }} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-white/70">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white mb-2 group-hover:text-[#D4C4FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3AABF] leading-relaxed">
                    {item.desc}
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
