
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.faq.questions.q1.question,
      answer: t.faq.questions.q1.answer
    },
    {
      question: t.faq.questions.q2.question,
      answer: t.faq.questions.q2.answer
    },
    {
      question: t.faq.questions.q3.question,
      answer: t.faq.questions.q3.answer
    },
    {
      question: t.faq.questions.q4.question,
      answer: t.faq.questions.q4.answer
    },
    {
      question: t.faq.questions.q5.question,
      answer: t.faq.questions.q5.answer
    },
    {
      question: t.faq.questions.q6.question,
      answer: t.faq.questions.q6.answer
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.faq.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.faq.subtitle}
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
