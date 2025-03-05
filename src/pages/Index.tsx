
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

    // Show/hide scroll to top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Index;
