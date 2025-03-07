
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
    window.open('https://wa.me/5515988065326?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20', '_blank');

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
      <img
  src="/whatsapp.png"
  alt="WhatsApp"
  className="fixed bottom-6 right-6 w-14 h-14 cursor-pointer z-20"
  onClick={openWhatsApp}
/>

    </div>
  );
};

export default Index;
