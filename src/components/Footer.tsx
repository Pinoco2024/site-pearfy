
import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="icone-sem-fundo.png"
                alt="Logo" 
                className="h-10 w-10 mr-2 rounded-full"
              />
              <span className="text-xl font-bold">Pearfy</span>
            </div>
            <p className="text-white/80 mb-4">
              Transformando empresas com soluções de automação alimentadas por inteligência artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@pearfy.com" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+123456789" className="text-white/80 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic text-white/80">
              <p className="mb-2">São Paulo, SP - Brasil</p>
              <p className="mb-2">contato@pearfy.com</p>
              <p>(11) 9999-9999</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pearfy. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
