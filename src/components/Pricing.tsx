
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  
  const openWhatsApp = () => {
    window.open('https://wa.me/5515988065326?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20', '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="bg-primary text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.pricing.customQuote.title}</h3>
                  <p className="text-white/90">
                    {t.pricing.customQuote.description}
                  </p>
                </div>
                <div className="mt-6 sm:mt-0">
                  <MessageSquare size={48} className="opacity-80" />
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-10">
              <p className="text-gray-600 mb-8">
                {t.pricing.quoteDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{t.pricing.volumeTitle}</h4>
                  <p className="text-gray-600">{t.pricing.volumeDescription}</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{t.pricing.complexityTitle}</h4>
                  <p className="text-gray-600">{t.pricing.complexityDescription}</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{t.pricing.integrationsTitle}</h4>
                  <p className="text-gray-600">{t.pricing.integrationsDescription}</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{t.pricing.customizationTitle}</h4>
                  <p className="text-gray-600">{t.pricing.customizationDescription}</p>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={openWhatsApp}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t.pricing.requestButton} <ArrowRight className="ml-2" size={20} />
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
