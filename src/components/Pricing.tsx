
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Pricing: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/your-number-here?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20agentes%20de%20IA.', '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Preços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções personalizadas com preços adaptados às suas necessidades específicas.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="bg-primary text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Orçamento Personalizado</h3>
                  <p className="text-white/90">
                    Desenvolvemos soluções sob medida para seu negócio
                  </p>
                </div>
                <div className="mt-6 sm:mt-0">
                  <MessageSquare size={48} className="opacity-80" />
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-10">
              <p className="text-gray-600 mb-8">
                Cada negócio tem necessidades únicas, por isso não trabalhamos com pacotes padronizados. 
                Desenvolvemos uma solução personalizada para atender exatamente às demandas da sua empresa, 
                considerando:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Volume de Interações</h4>
                  <p className="text-gray-600">Dimensionamos a solução de acordo com o volume esperado de interações mensais.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Complexidade</h4>
                  <p className="text-gray-600">Avaliamos a complexidade dos fluxos de atendimento e processos a serem automatizados.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Integrações</h4>
                  <p className="text-gray-600">Consideramos quais sistemas precisarão ser integrados à solução de IA.</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Personalização</h4>
                  <p className="text-gray-600">Definimos o nível de personalização necessário para os agentes de IA.</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Para receber um orçamento detalhado adaptado à sua realidade, entre em contato conosco. 
                Analisaremos suas necessidades e apresentaremos a melhor solução com um investimento adequado 
                para o seu negócio.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={openWhatsApp}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Solicitar Orçamento <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
