
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/your-number-here?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20agentes%20de%20IA.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedSection className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-secondary">
              Automatize o seu atendimento com agentes de IA que trabalham por você.
            </h1>
            
            <AnimatedSection delay={300} className="mb-8 text-lg text-gray-600">
              <p>
                Revolucione seu negócio com agentes de IA que oferecem atendimento 24/7, 
                reduzem erros, e aumentam a eficiência no suporte e vendas. 
                Escale seus processos sem aumentar custos.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <button 
                onClick={openWhatsApp}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                Fale com a gente <ArrowRight className="ml-2" size={20} />
              </button>
            </AnimatedSection>
          </AnimatedSection>
          
          <AnimatedSection className="lg:w-1/2" animation="fade-in-right" delay={300}>
          <div className="relative">
            {/* Ajustando o tamanho da imagem */}
            <div className="shadow-xl rounded-xl overflow-hidden">
              <img 
                src="/imagem-celular.png" 
                alt="Conversa com assistente Pearfy" 
                className="w-64 h-auto mx-auto" // Tamanho fixo ou responsivo
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary rounded-lg shadow-lg rotate-12" />
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary/20 rounded-full shadow-lg" />
          </div>
        </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Hero;
