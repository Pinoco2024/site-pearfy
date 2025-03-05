
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
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Fale com a gente <ArrowRight className="ml-2" size={20} />
              </button>
            </AnimatedSection>
          </AnimatedSection>
          
          <AnimatedSection className="lg:w-1/2" animation="fade-in-right" delay={300}>
            <div className="relative">
              {/* Main Image */}
              <div className="glass rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gray-100 p-6 rounded-t-2xl border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="mx-auto max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-5 mb-4">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div>
                        <div className="font-semibold">Assistente IA</div>
                        <div className="text-xs text-gray-500">Online agora</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[80%]">
                        Olá! Como posso ajudar sua empresa hoje?
                      </div>
                      <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none ml-auto max-w-[80%] text-right">
                        Preciso automatizar o atendimento ao cliente
                      </div>
                      <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[80%]">
                        Posso ajudar com isso! Nossos agentes de IA podem lidar com:
                        <ul className="text-sm list-disc pl-5 pt-2">
                          <li>Atendimento 24/7</li>
                          <li>Qualificação de leads</li>
                          <li>Agendamentos automáticos</li>
                          <li>Suporte pós-venda</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary rounded-lg shadow-lg rotate-12 animate-float" />
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary/20 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
