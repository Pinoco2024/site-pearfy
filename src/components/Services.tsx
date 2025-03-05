
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
  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Agências",
      description: "Aprimore o atendimento e os processos para seus clientes, automatizando tarefas repetitivas e liberando tempo para estratégia.",
      delay: 0
    },
    {
      icon: <CalendarClock size={32} />,
      title: "Negócios com Agendamentos",
      description: "Elimine o trabalho manual de marcar e gerenciar compromissos com um sistema inteligente disponível 24/7.",
      delay: 100
    },
    {
      icon: <Users size={32} />,
      title: "Qualificação de Leads",
      description: "Identifique e priorize automaticamente os leads mais promissores, aumentando a taxa de conversão das suas equipes.",
      delay: 200
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: "Suporte Escalável",
      description: "Atenda mais clientes simultaneamente sem aumentar custos, com respostas rápidas e precisas a dúvidas comuns.",
      delay: 300
    },
    {
      icon: <Bot size={32} />,
      title: "Automação de Processos",
      description: "Transforme processos internos lentos em fluxos eficientes com automações personalizadas para sua realidade.",
      delay: 400
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Pré e Pós-vendas",
      description: "Otimize a jornada do cliente com orientações pré-compra e acompanhamento pós-venda automático e personalizado.",
      delay: 500
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-gradient-to-t from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções de automação com IA para diversos tipos de negócios e necessidades,
            proporcionando eficiência e escalabilidade.
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
              <h3 className="text-xl font-semibold">Automações Personalizadas</h3>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-6">
                Além dos serviços padrão, desenvolvemos soluções sob medida para cada cliente,
                automatizando processos específicos do seu negócio.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>Integração com suas ferramentas atuais</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>Relatórios de desempenho e análises</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>Treinamento para casos específicos</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <p>Suporte contínuo e atualizações</p>
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
