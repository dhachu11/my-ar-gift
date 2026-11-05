/**
 * Centralized Site & Business Configuration
 * Central point for URLs, contact info, pricing parameters, and placeholders.
 */

export const siteConfig = {
  productName: 'AR Gift Creator',
  tagline: 'Turn Ordinary Photographs Into Extraordinary AR Video Memories',
  description:
    'Create unforgettable augmented reality gifts by connecting printed photographs with personal videos. Scan a photo, relive a memory, and experience something magical.',
  
  // URLs & Links (centralized placeholders)
  urls: {
    // Creator Studio Web Application (points to Netlify web app or local dev)
    creatorStudio: 'https://dainty-profiterole-9d80d4.netlify.app',
    
    // Purchase Links (Placeholders - configured before production launch)
    starterPlanCheckout: '#checkout-starter',
    creatorLicenceCheckout: '#checkout-creator',
    businessAcademyCheckout: '#checkout-academy',
    
    // WhatsApp Support & Inquiries Placeholder
    whatsappNumber: '+91 98765 43210',
    whatsappLink: 'https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20AR%20Gift%20Creator!',
    
    // Support & Legal
    supportEmail: 'support@argiftcreator.com',
    githubRepo: 'https://github.com/Dharanikumar/ar-gift-creator',
  },

  // Pricing Plans (Accurate specifications matching product limitations)
  pricing: [
    {
      id: 'starter',
      name: 'Starter Setup',
      badge: 'Done For You',
      price: '₹49',
      period: 'per memory',
      description: 'Let us create your first augmented reality gift for you.',
      features: [
        'One photograph image target setup',
        'One matching video overlay connection',
        'Done-for-you AR experience setup',
        'High-resolution QR code generation',
        'Live AR experience link delivery',
      ],
      disclosures: [
        'Strictly 1 photo and 1 video per order',
        'Experience hosting duration specified before order',
        'Includes 1 free preview revision before final delivery',
      ],
      ctaText: 'Get Started',
      ctaType: 'starter',
      popular: false,
    },
    {
      id: 'creator',
      name: 'Creator Licence',
      badge: 'Most Popular',
      price: '₹249',
      period: 'one-time licence',
      description: 'Create personalized AR gifts whenever you want from any device.',
      features: [
        'One-time software licence (lifetime access)',
        'Windows desktop application access (EXE)',
        'Android native application access (APK)',
        'Browser-based Creator Studio (PWA / Web)',
        'Unlimited photo & video target compilation',
        'Self-hosted standalone AR package export (ZIP)',
        'Automated printable QR code generator',
        '100% private, local on-device processing',
      ],
      disclosures: [
        'Hosting for individual customer experiences is customer-managed',
        'Users host exported AR packages on public HTTPS (Netlify/Vercel/etc.)',
        'Software licence — does not include ongoing cloud hosting charges',
      ],
      ctaText: 'Get Creator Licence',
      ctaType: 'creator',
      popular: true,
    },
    {
      id: 'academy',
      name: 'Business Academy',
      badge: 'For Entrepreneurs',
      price: '₹499',
      period: 'complete bundle',
      description: 'Learn to create, sell, and grow a profitable AR personalized gift business.',
      features: [
        'Everything included in Creator Licence',
        'Step-by-step video tutorials & operational manual',
        'AR gift business setup & photo-frame partner pitching',
        'Gift shops & photographers partnership pitch deck',
        'Pricing & packaging calculator templates',
        'Social media & Instagram Reels marketing guidance',
        'Client handover contracts & order form templates',
      ],
      disclosures: [
        'Educational & template bundle — no guaranteed income',
        'Customer acquisition & business results depend on individual effort',
        'No income or client guarantees are made or implied',
      ],
      ctaText: 'Join Business Academy',
      ctaType: 'academy',
      popular: false,
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: 'What is AR Gift Creator?',
      a: 'AR Gift Creator is a modern software studio that anchors personal video memories directly to printed physical photographs using image-target Augmented Reality. When recipients scan a QR code and point their phone camera at the photo, the photograph comes alive and plays the associated video directly on the physical print.',
    },
    {
      q: 'How does augmented reality work with a printed photo?',
      a: 'Our software uses computer vision (MindAR & Three.js) to compile the unique feature points of your photograph into an image tracking target (.mind file). When viewed through a phone camera, the browser detects these feature points in real-time, calculates the photo’s 3D position and orientation, and seamlessly projects your video overlay directly onto the physical print with audio.',
    },
    {
      q: 'Does the recipient need to install an application?',
      a: 'No! The recipient does not need to install an app or download software. They simply scan the QR code with their standard phone camera, which opens the WebAR viewer in Safari (iPhone) or Chrome (Android) over secure HTTPS.',
    },
    {
      q: 'Does it work on Android?',
      a: 'Yes! Recipients can view experiences instantly in Google Chrome on any modern Android device. Creators can also use the Android app or browser to build and compile AR gifts.',
    },
    {
      q: 'Does it work on iPhone?',
      a: 'Yes! Recipients can view AR experiences in Safari on iOS 14+ with full camera tracking and audio playback. Creators can also build projects on iPhone Safari and install the Creator Studio PWA.',
    },
    {
      q: 'Can I use it on Windows?',
      a: 'Yes! We provide both a native Windows desktop executable (Tauri EXE) and browser access for Windows PC users.',
    },
    {
      q: 'Is internet required?',
      a: 'For creators, the software runs locally on your computer or phone using IndexedDB and Web Workers. For recipients to view the experience, an active internet connection is required to load the WebAR webpage via HTTPS.',
    },
    {
      q: 'Where are my photos and videos stored?',
      a: 'In the Creator Studio, your photos, videos, and compiled target files are stored locally in your browser/app storage (IndexedDB). We never store or upload your private media to a central cloud server.',
    },
    {
      q: 'Is hosting included with the Creator Licence?',
      a: 'The Creator Licence gives you software access to compile and export unlimited standalone WebAR packages (ZIP). You can host these exported files on free static HTTPS hosts (such as Netlify, Vercel, or GitHub Pages). If you want done-for-you hosting, our Starter Setup includes hosted link delivery.',
    },
    {
      q: 'Can I create multiple AR gifts?',
      a: 'Yes! With the Creator Licence and Business Academy plans, you can create and export an unlimited number of AR gift packages with no recurring software fees.',
    },
    {
      q: 'Can gift shops and photographers use this software?',
      a: 'Absolutely! Many gift shops, wedding photographers, frame businesses, and freelancers use AR Gift Creator to offer premium personalized AR frames to their clients.',
    },
    {
      q: 'What is included in each pricing plan?',
      a: 'Starter Setup (₹49) is a done-for-you single gift creation. Creator Licence (₹249) is lifetime software access to create unlimited gifts. Business Academy (₹499) includes the software licence plus comprehensive business guides, pitch templates, and marketing strategies.',
    },
  ],
};

