
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
              {/* Phone/Device Simulation - Enhanced Version */}
              <div className="glass rounded-3xl overflow-hidden shadow-2xl max-w-xs mx-auto transform hover:-rotate-2 transition-all duration-300">
                {/* Phone Frame */}
                <div className="bg-gray-900 p-4 rounded-t-3xl border-b border-gray-800 flex justify-center relative">
                  <div className="absolute w-24 h-6 bg-black rounded-b-xl top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="h-1.5 w-12 rounded-full bg-gray-700 mt-4"></div>
                </div>
                
                {/* Phone Screen */}
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white h-[500px] overflow-hidden">
                  {/* Chat Interface */}
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                      <img 
                        src="https://www.shutterstock.com/image-vector/kyiv-ukraine-sep-09-2024-600nw-2517391429.jpg" 
                        alt="Assistente virtual" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Assistente Pearfy</div>
                      <div className="text-xs text-green-500">Online agora</div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
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
                    <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none ml-auto max-w-[80%] text-right">
                      Quanto custa esse serviço?
                    </div>
                    <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[80%]">
                      Temos planos a partir de R$197/mês. Posso te apresentar as opções!
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2">
                      <input type="text" placeholder="Digite sua mensagem..." className="flex-1 outline-none text-sm" disabled />
                      <button className="ml-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ArrowRight size={16} className="text-white" />
                      </button>
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
