
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQGIDCEWUNy_aQ/company-logo_200_200/company-logo_200_200/0/1708393291420?e=2147483647&v=beta&t=KUM9ipnnAEn6OMhrVjL9RPfd6_zF99oOFe_hCIdjYjw" 
            alt="Logo" 
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-primary">Pearfy</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="nav-link font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="nav-link font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="nav-link font-medium"
          >
            Dúvidas
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="nav-link font-medium"
          >
            Preços
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[300px] border-t" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Dúvidas
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Preços
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
