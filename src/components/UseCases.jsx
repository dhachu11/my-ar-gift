import React from 'react';

export default function UseCases() {
  const useCases = [
    {
      title: 'Birthday Gifts',
      image: '/images/birthday-cake.jpg',
      alt: 'Birthday cake with lit candles',
    },
    {
      title: 'Anniversary Memories',
      image: '/images/anniversary.jpg',
      alt: 'Romantic couple silhouette at sunset beach',
    },
    {
      title: 'Wedding Memories',
      image: '/images/wedding.jpg',
      alt: 'Wedding ceremony bride and groom',
    },
    {
      title: 'Personalized Photo Frames',
      image: '/images/photo-frame.jpg',
      alt: 'Cozy wooden framed photograph on desk',
    },
    {
      title: 'Family Memories',
      image: '/images/family.jpg',
      alt: 'Happy multi-generation family smiling outdoors',
    },
    {
      title: 'Gift Shops',
      image: '/images/gift-shop.jpg',
      alt: 'Charming boutique gift shop storefront',
    },
    {
      title: 'Photo Frame Businesses',
      image: '/images/frame-business.jpg',
      alt: 'Gallery wall of wooden framed art and photography',
    },
    {
      title: 'Freelance AR Creators',
      image: '/images/freelancer.jpg',
      alt: 'Modern creative workspace with laptop and phone',
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#7047EB]/07 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B59AFF] uppercase">
            <span className="w-6 h-[1.5px] bg-[#9270FF]" />
            <span>Real-World Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Make Every Memory{' '}
            <span className="font-editorial-italic text-[#B59AFF] font-normal">
              Unforgettable.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3AABF] leading-relaxed max-w-xl mx-auto">
            Perfect for personal gifting, creative businesses, and photo frame services.
          </p>
        </div>

        {/* 8 Real Photographic Gallery Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-[#14172B] border border-white/[0.08] hover:border-[#9270FF]/40 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Title Bar below / overlaid */}
              <div className="p-3.5 sm:p-4 bg-[#14172B]/95 border-t border-white/[0.06] text-center">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#B59AFF] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
