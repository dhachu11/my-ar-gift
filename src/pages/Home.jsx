import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductDemo from '../components/ProductDemo';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import Pricing from '../components/Pricing';
import WhoAndPrivacy from '../components/WhoAndPrivacy';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import LegalModal from '../components/LegalModal';
import ContactModal from '../components/ContactModal';
import CheckoutModal from '../components/CheckoutModal';

export default function Home() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B18] text-white flex flex-col font-sans selection:bg-[#9270FF] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenLegal={(type) => setLegalModal({ isOpen: true, type })}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExplorePricing={() => scrollToSection('pricing')}
          onSeeHowItWorks={() => scrollToSection('how-it-works')}
        />

        {/* 3. Product Demonstration */}
        <ProductDemo />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Features Grid */}
        <Features />

        {/* 6. Use Cases */}
        <UseCases />

        {/* 7. Pricing Cards */}
        <Pricing onSelectPlan={(plan) => setSelectedPlan(plan)} />

        {/* 8 & 9. Who It Is For + Trust and Privacy */}
        <WhoAndPrivacy />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Emotional Final CTA */}
        <FinalCTA
          onExplorePlans={() => scrollToSection('pricing')}
          onStartCreating={() => scrollToSection('pricing')}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModal({ isOpen: true, type })}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <CheckoutModal
        isOpen={!!selectedPlan}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </div>
  );
}

