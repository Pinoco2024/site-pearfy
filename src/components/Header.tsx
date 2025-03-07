
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'faq', 'pricing'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    closeMenu();
  };

  const getNavLinkClass = (section: string) =>
    `font-medium transition-colors ${
      activeSection === section ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
    }`;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="icone-sem-fundo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold text-primary">Pearfy</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-4">
            <button onClick={() => scrollToSection('home')} className={getNavLinkClass('home')}>
              {t.navbar.home}
            </button>
            <button onClick={() => scrollToSection('services')} className={getNavLinkClass('services')}>
              {t.navbar.services}
            </button>
            <button onClick={() => scrollToSection('faq')} className={getNavLinkClass('faq')}>
              {t.navbar.faq}
            </button>
            <button onClick={() => scrollToSection('pricing')} className={getNavLinkClass('pricing')}>
              {t.navbar.pricing}
            </button>
          </nav>
          
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSelector mobile={true} />
          <button className="text-primary focus:outline-none ml-2" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[300px] border-t' : 'max-h-0'
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button onClick={() => scrollToSection('home')} className={getNavLinkClass('home')}>
            {t.navbar.home}
          </button>
          <button onClick={() => scrollToSection('services')} className={getNavLinkClass('services')}>
            {t.navbar.services}
          </button>
          <button onClick={() => scrollToSection('faq')} className={getNavLinkClass('faq')}>
            {t.navbar.faq}
          </button>
          <button onClick={() => scrollToSection('pricing')} className={getNavLinkClass('pricing')}>
            {t.navbar.pricing}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
