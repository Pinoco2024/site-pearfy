
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay }) => {
  return (
    <AnimatedSection 
      delay={delay} 
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        className="w-full text-left py-5 pr-10 flex justify-between items-center group"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
          {question}
        </h3>
        <div className="text-gray-500 transition-colors duration-200">
          {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown />}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-600 pr-10">{answer}</p>
      </div>
    </AnimatedSection>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O atendimento funciona 24/7?",
      answer: "Sim, nossos agentes de IA funcionam 24 horas por dia, 7 dias por semana, garantindo que seus clientes nunca fiquem sem atendimento, mesmo fora do horário comercial. Isso permite que sua empresa esteja sempre disponível para responder dúvidas, qualificar leads e realizar atendimentos."
    },
    {
      question: "O sistema apresenta muitos erros?",
      answer: "Nossa solução é construída com tecnologia avançada de IA que aprende constantemente. Os agentes são treinados especificamente para o seu negócio, o que minimiza erros. Além disso, oferecemos monitoramento contínuo e ajustes para garantir que o sistema melhore com o tempo. Para casos muito complexos, existe a possibilidade de escalonamento para atendimento humano."
    },
    {
      question: "Como funciona a automação?",
      answer: "O processo começa com a análise das necessidades específicas do seu negócio. Em seguida, desenvolvemos agentes de IA personalizados que automatizam tarefas como atendimento ao cliente, qualificação de leads e agendamentos. Os agentes são integrados aos seus canais de comunicação existentes (site, WhatsApp, etc.) e começam a interagir com seus clientes seguindo fluxos predefinidos, mas com a inteligência para lidar com variações nas conversas."
    },
    {
      question: "Os agentes de IA podem ser personalizados para meu negócio?",
      answer: "Absolutamente. Cada agente é desenvolvido considerando as especificidades do seu negócio, incluindo tom de voz da marca, processos internos e necessidades particulares. Treinamos os modelos com informações do seu produto ou serviço, perguntas frequentes e cenários comuns de atendimento, garantindo que o agente represente adequadamente sua empresa."
    },
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer: "O tempo de implementação varia de acordo com a complexidade da solução e as necessidades específicas do seu negócio. Projetos simples podem ser implementados em poucas semanas, enquanto soluções mais complexas podem levar alguns meses. Durante todo o processo, trabalhamos em estreita colaboração com sua equipe para garantir que a implementação seja suave e eficaz."
    },
    {
      question: "É possível integrar com os sistemas que já uso?",
      answer: "Sim, nossa solução foi projetada para ser altamente integrável. Podemos conectar nossos agentes de IA com CRMs, plataformas de e-commerce, sistemas de agendamento, ferramentas de marketing e muitos outros sistemas. Isso permite que a automação se encaixe perfeitamente no seu fluxo de trabalho atual, potencializando os resultados sem substituir ferramentas que já funcionam bem."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços de automação com IA.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto glass rounded-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
