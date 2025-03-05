
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/your-number-here?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Pearfy.', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      
      {/* WhatsApp Button - removed hover scale effect */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-20 hover:bg-green-600"
        onClick={openWhatsApp}
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default Index;
