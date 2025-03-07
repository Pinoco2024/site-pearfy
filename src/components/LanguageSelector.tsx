
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  mobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ mobile = false }) => {
  const { language, setLanguage, t, flags } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt-BR', name: t.language.portuguese },
    { code: 'en-US', name: t.language.english },
    { code: 'es-ES', name: t.language.spanish },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'pt-BR' | 'en-US' | 'es-ES');
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center transition-colors",
          mobile ? "px-3 py-2" : "px-4 py-2 rounded-md hover:bg-gray-100"
        )}
      >
        <span className="text-xl mr-1">{flags[language]}</span>
        {!mobile && (
          <>
            <ChevronDown size={16} className="text-gray-500" />
          </>
        )}
      </button>

      {isOpen && (
        <div 
          className={cn(
            "absolute right-0 mt-2 bg-white rounded-md shadow-lg z-50 overflow-hidden min-w-[150px]",
            mobile ? "right-0" : ""
          )}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "w-full text-left px-4 py-2 flex items-center hover:bg-gray-100 transition-colors",
                language === lang.code ? "bg-gray-50 font-medium" : ""
              )}
            >
              <span className="text-xl mr-2">{flags[lang.code as 'pt-BR' | 'en-US' | 'es-ES']}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
