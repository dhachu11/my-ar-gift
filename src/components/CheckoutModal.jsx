import React, { useEffect } from 'react';
import { X, Check, ShieldCheck, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CheckoutModal({ plan, isOpen, onClose }) {
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

  if (!isOpen || !plan) return null;

  const whatsappOrderUrl = `https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(
    plan.name
  )}%20(${encodeURIComponent(plan.price)})%20for%20AR%20Gift%20Creator.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-plan-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-[#0D1122] border border-[#9270FF]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(146,112,255,0.15)] relative overflow-hidden">
        
        {/* Top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#9270FF]/15 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#9270FF]/15 text-[#B59AFF] border border-[#9270FF]/30 uppercase font-semibold">
              {plan.badge}
            </span>
            <h3 id="modal-plan-title" className="text-xl font-bold text-white mt-1.5">
              {plan.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-[#A3AABF] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="py-6 space-y-5 relative z-10">
          {/* Price display */}
          <div className="p-4 rounded-2xl bg-[#13172C] border border-white/[0.08] flex items-baseline justify-between shadow-inner">
            <span className="text-xs text-[#A3AABF] font-mono">Total Payable:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-white font-mono">{plan.price}</span>
              <span className="text-xs text-[#A3AABF] font-mono">/{plan.period}</span>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#A3AABF] font-semibold">Included in this plan:</span>
            {plan.features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs sm:text-sm text-[#A3AABF]">
                <Check className="w-4 h-4 text-[#9270FF] shrink-0" />
                <span className="text-white/90">{f}</span>
              </div>
            ))}
          </div>

          {/* Payment gateway notice */}
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] text-[#A3AABF] leading-relaxed">
            ℹ️ <strong>Instant Order Activation:</strong> Automated payment gateway integration is currently in sandbox setup. Click below to connect directly with our fulfillment team on WhatsApp for instant digital delivery and licence activation.
          </div>

          {/* Primary Action Button: WhatsApp Order */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Complete Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#646C86] relative z-10">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine Software
          </span>
          <button onClick={onClose} className="hover:text-white transition cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
