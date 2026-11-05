import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function LegalModal({ type = 'privacy', isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = activeTab === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl max-h-[85vh] bg-[#0D1122] border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#9270FF]">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-lg font-bold text-white">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-[#A3AABF]">
                Last updated: November 2026 • {siteConfig.productName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-[#A3AABF] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 pt-4 pb-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              isPrivacy
                ? 'bg-[#9270FF]/20 text-[#B59AFF] border border-[#9270FF]/40'
                : 'bg-white/[0.04] text-[#A3AABF] hover:text-white border border-transparent'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              !isPrivacy
                ? 'bg-[#9270FF]/20 text-[#B59AFF] border border-[#9270FF]/40'
                : 'bg-white/[0.04] text-[#A3AABF] hover:text-white border border-transparent'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-[#A3AABF] leading-relaxed pr-2">
          {isPrivacy ? (
            <>
              <h4 className="font-bold text-white text-sm">1. Local-First Data Processing</h4>
              <p>
                AR Gift Creator operates on a privacy-first, on-device architecture. When you upload photographs and video files into the Creator Studio, they are processed locally within your device using client-side Web Workers, WebGL, and IndexedDB. We do not transmit, collect, or store your private media on external centralized cloud servers.
              </p>

              <h4 className="font-bold text-white text-sm">2. Camera & Sensor Access</h4>
              <p>
                The augmented reality viewer requires temporary camera access to perform real-time optical image tracking. Camera frames are processed strictly in local device memory and are never recorded, transmitted, or saved to any remote infrastructure.
              </p>

              <h4 className="font-bold text-white text-sm">3. Customer-Hosted Experiences</h4>
              <p>
                When you export an AR gift package (ZIP), all tracking data, HTML, and media files are provided directly to you. You retain complete ownership and control over where and how your exported packages are hosted.
              </p>

              <h4 className="font-bold text-white text-sm">4. Contact Information</h4>
              <p>
                If you contact us via email or WhatsApp for support or order assistance, we only use your provided contact details to address your direct inquiry. We never sell or share user contact data.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-white text-sm">1. Software Licence & Scope</h4>
              <p>
                The "Creator Licence" grants a personal or commercial non-exclusive, perpetual licence to use the AR Gift Creator software to compile and export standalone WebAR gift packages.
              </p>

              <h4 className="font-bold text-white text-sm">2. Hosting Responsibilities</h4>
              <p>
                Individual AR experiences exported by creators require public HTTPS hosting to be accessible to recipients. The Creator Licence does not include third-party hosting server fees. Users may utilize free or paid static HTTPS hosting providers (e.g. Netlify, Vercel, GitHub Pages, or private hosting).
              </p>

              <h4 className="font-bold text-white text-sm">3. Business Academy & Educational Materials</h4>
              <p>
                The Business Academy tier provides software access, tutorials, and operational templates. We make no representations or guarantees of specific financial earnings, business revenue, or customer acquisition. Business success depends solely on individual execution and market demand.
              </p>

              <h4 className="font-bold text-white text-sm">4. Acceptable Content</h4>
              <p>
                Users agree not to use the software to create, compile, or distribute unlawful, defamatory, or infringing media content.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#19203D] hover:bg-[#222B52] text-white border border-white/10 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
