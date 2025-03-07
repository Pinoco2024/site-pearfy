
import React from 'react';
import { 
  Building2, 
  CalendarClock, 
  Users, 
  HeadphonesIcon, 
  Bot, 
  ShoppingCart,
  Check 
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, className }) => {
  return (
    <AnimatedSection 
      delay={delay} 
      className={cn("glass rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1", className)}
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Building2 size={32} />,
      title: t.services.agency.title,
      description: t.services.agency.description,
      delay: 0
    },
    {
      icon: <CalendarClock size={32} />,
      title: t.services.scheduling.title,
      description: t.services.scheduling.description,
      delay: 100
    },
    {
      icon: <Users size={32} />,
      title: t.services.leads.title,
      description: t.services.leads.description,
      delay: 200
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: t.services.support.title,
      description: t.services.support.description,
      delay: 300
    },
    {
      icon: <Bot size={32} />,
      title: t.services.automation.title,
      description: t.services.automation.description,
      delay: 400
    },
    {
      icon: <ShoppingCart size={32} />,
      title: t.services.sales.title,
      description: t.services.sales.description,
      delay: 500
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-gradient-to-t from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>

        <AnimatedSection className="mt-20 glass rounded-xl p-8" delay={600}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t.services.custom.title}</h3>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-6">
                {t.services.custom.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>{t.services.custom.integration}</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>{t.services.custom.reports}</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>{t.services.custom.training}</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>{t.services.custom.support}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
