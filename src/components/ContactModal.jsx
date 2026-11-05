import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg bg-[#0D1122] border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#9270FF]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 id="contact-modal-title" className="text-lg font-bold text-white">
                Contact & Support
              </h3>
              <p className="text-xs text-[#A3AABF]">We are here to help you get started.</p>
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

        {/* Content */}
        <div className="py-6 space-y-6">
          {/* Quick Connect Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={siteConfig.urls.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-[#13172C] hover:bg-[#1A203B] border border-white/[0.08] hover:border-emerald-500/40 flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">WhatsApp Chat</span>
                <span className="text-[11px] text-emerald-400 font-mono">Instant Support</span>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.urls.supportEmail}`}
              className="p-3.5 rounded-2xl bg-[#13172C] hover:bg-[#1A203B] border border-white/[0.08] hover:border-[#9270FF]/40 flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#9270FF]/15 border border-[#9270FF]/30 flex items-center justify-center text-[#B59AFF] group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Email Us</span>
                <span className="text-[11px] text-[#A3AABF] font-mono">{siteConfig.urls.supportEmail}</span>
              </div>
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="text-sm font-bold text-white">Message Received!</p>
              <p className="text-xs text-[#A3AABF]">Our support team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono text-[#A3AABF] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#13172C] border border-white/[0.08] text-xs text-white placeholder-[#646C86] focus:outline-none focus:border-[#9270FF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#A3AABF] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#13172C] border border-white/[0.08] text-xs text-white placeholder-[#646C86] focus:outline-none focus:border-[#9270FF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#A3AABF] mb-1">How can we help?</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your AR gift project or business question..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#13172C] border border-white/[0.08] text-xs text-white placeholder-[#646C86] focus:outline-none focus:border-[#9270FF] resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-press w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#7047EB] to-[#9270FF] hover:shadow-[0_0_20px_rgba(146,112,255,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#9270FF] focus-visible:outline-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/[0.06] text-center text-[11px] font-mono text-[#646C86]">
          Direct response within 24 business hours
        </div>
      </div>
    </div>
  );
}
