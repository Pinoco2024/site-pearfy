
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define all translations
export type Translation = {
  navbar: {
    home: string;
    services: string;
    faq: string;
    pricing: string;
  };
  hero: {
    title: string;
    description: string;
    button: string;
  };
  services: {
    title: string;
    subtitle: string;
    agency: {
      title: string;
      description: string;
    };
    scheduling: {
      title: string;
      description: string;
    };
    leads: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    automation: {
      title: string;
      description: string;
    };
    sales: {
      title: string;
      description: string;
    };
    custom: {
      title: string;
      description: string;
      integration: string;
      reports: string;
      training: string;
      support: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      q1: {
        question: string;
        answer: string;
      };
      q2: {
        question: string;
        answer: string;
      };
      q3: {
        question: string;
        answer: string;
      };
      q4: {
        question: string;
        answer: string;
      };
      q5: {
        question: string;
        answer: string;
      };
      q6: {
        question: string;
        answer: string;
      };
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    customQuote: {
      title: string;
      description: string;
    };
    volumeTitle: string;
    volumeDescription: string;
    complexityTitle: string;
    complexityDescription: string;
    integrationsTitle: string;
    integrationsDescription: string;
    customizationTitle: string;
    customizationDescription: string;
    quoteDescription: string;
    requestButton: string;
  };
  footer: {
    companyDescription: string;
    contact: string;
    address: string;
    rights: string;
  };
  language: {
    portuguese: string;
    english: string;
    spanish: string;
  };
};

// Define all languages
export type Language = 'pt-BR' | 'en-US' | 'es-ES';

// Translations object
const translations: Record<Language, Translation> = {
  'pt-BR': {
    navbar: {
      home: 'Home',
      services: 'Serviços',
      faq: 'Dúvidas',
      pricing: 'Preços',
    },
    hero: {
      title: 'Automatize o seu atendimento com agentes de IA que trabalham por você.',
      description: 'Revolucione seu negócio com agentes de IA que oferecem atendimento 24/7, reduzem erros, e aumentam a eficiência no suporte e vendas. Escale seus processos sem aumentar custos.',
      button: 'Fale com a gente',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções de automação com IA para diversos tipos de negócios e necessidades, proporcionando eficiência e escalabilidade.',
      agency: {
        title: 'Agências',
        description: 'Aprimore o atendimento e os processos para seus clientes, automatizando tarefas repetitivas e liberando tempo para estratégia.',
      },
      scheduling: {
        title: 'Negócios com Agendamentos',
        description: 'Elimine o trabalho manual de marcar e gerenciar compromissos com um sistema inteligente disponível 24/7.',
      },
      leads: {
        title: 'Qualificação de Leads',
        description: 'Identifique e priorize automaticamente os leads mais promissores, aumentando a taxa de conversão das suas equipes.',
      },
      support: {
        title: 'Suporte Escalável',
        description: 'Atenda mais clientes simultaneamente sem aumentar custos, com respostas rápidas e precisas a dúvidas comuns.',
      },
      automation: {
        title: 'Automação de Processos',
        description: 'Transforme processos internos lentos em fluxos eficientes com automações personalizadas para sua realidade.',
      },
      sales: {
        title: 'Pré e Pós-vendas',
        description: 'Otimize a jornada do cliente com orientações pré-compra e acompanhamento pós-venda automático e personalizado.',
      },
      custom: {
        title: 'Automações Personalizadas',
        description: 'Além dos serviços padrão, desenvolvemos soluções sob medida para cada cliente, automatizando processos específicos do seu negócio.',
        integration: 'Integração com suas ferramentas atuais',
        reports: 'Relatórios de desempenho e análises',
        training: 'Treinamento para casos específicos',
        support: 'Suporte contínuo e atualizações',
      },
    },
    faq: {
      title: 'Dúvidas Frequentes',
      subtitle: 'Encontre respostas para as perguntas mais comuns sobre nossos serviços de automação com IA.',
      questions: {
        q1: {
          question: 'O atendimento funciona 24/7?',
          answer: 'Sim, nossos agentes de IA funcionam 24 horas por dia, 7 dias por semana, garantindo que seus clientes nunca fiquem sem atendimento, mesmo fora do horário comercial. Isso permite que sua empresa esteja sempre disponível para responder dúvidas, qualificar leads e realizar atendimentos.',
        },
        q2: {
          question: 'O sistema apresenta muitos erros?',
          answer: 'Nossa solução é construída com tecnologia avançada de IA que aprende constantemente. Os agentes são treinados especificamente para o seu negócio, o que minimiza erros. Além disso, oferecemos monitoramento contínuo e ajustes para garantir que o sistema melhore com o tempo. Para casos muito complexos, existe a possibilidade de escalonamento para atendimento humano.',
        },
        q3: {
          question: 'Como funciona a automação?',
          answer: 'O processo começa com a análise das necessidades específicas do seu negócio. Em seguida, desenvolvemos agentes de IA personalizados que automatizam tarefas como atendimento ao cliente, qualificação de leads e agendamentos. Os agentes são integrados aos seus canais de comunicação existentes (site, WhatsApp, etc.) e começam a interagir com seus clientes seguindo fluxos predefinidos, mas com a inteligência para lidar com variações nas conversas.',
        },
        q4: {
          question: 'Os agentes de IA podem ser personalizados para meu negócio?',
          answer: 'Absolutamente. Cada agente é desenvolvido considerando as especificidades do seu negócio, incluindo tom de voz da marca, processos internos e necessidades particulares. Treinamos os modelos com informações do seu produto ou serviço, perguntas frequentes e cenários comuns de atendimento, garantindo que o agente represente adequadamente sua empresa.',
        },
        q5: {
          question: 'Quanto tempo leva para implementar a solução?',
          answer: 'O tempo de implementação varia de acordo com a complexidade da solução e as necessidades específicas do seu negócio. Projetos simples podem ser implementados em poucas semanas, enquanto soluções mais complexas podem levar alguns meses. Durante todo o processo, trabalhamos em estreita colaboração com sua equipe para garantir que a implementação seja suave e eficaz.',
        },
        q6: {
          question: 'É possível integrar com os sistemas que já uso?',
          answer: 'Sim, nossa solução foi projetada para ser altamente integrável. Podemos conectar nossos agentes de IA com CRMs, plataformas de e-commerce, sistemas de agendamento, ferramentas de marketing e muitos outros sistemas. Isso permite que a automação se encaixe perfeitamente no seu fluxo de trabalho atual, potencializando os resultados sem substituir ferramentas que já funcionam bem.',
        },
      },
    },
    pricing: {
      title: 'Preços',
      subtitle: 'Soluções personalizadas com preços adaptados às suas necessidades específicas.',
      customQuote: {
        title: 'Orçamento Personalizado',
        description: 'Desenvolvemos soluções sob medida para seu negócio',
      },
      volumeTitle: 'Volume de Interações',
      volumeDescription: 'Dimensionamos a solução de acordo com o volume esperado de interações mensais.',
      complexityTitle: 'Complexidade',
      complexityDescription: 'Avaliamos a complexidade dos fluxos de atendimento e processos a serem automatizados.',
      integrationsTitle: 'Integrações',
      integrationsDescription: 'Consideramos quais sistemas precisarão ser integrados à solução de IA.',
      customizationTitle: 'Personalização',
      customizationDescription: 'Definimos o nível de personalização necessário para os agentes de IA.',
      quoteDescription: 'Para receber um orçamento detalhado adaptado à sua realidade, entre em contato conosco. Analisaremos suas necessidades e apresentaremos a melhor solução com um investimento adequado para o seu negócio.',
      requestButton: 'Solicitar Orçamento',
    },
    footer: {
      companyDescription: 'Transformando empresas com soluções de automação alimentadas por inteligência artificial.',
      contact: 'Contato',
      address: 'Sorocaba, SP - Brasil',
      rights: 'Todos os direitos reservados.',
    },
    language: {
      portuguese: 'Português',
      english: 'Inglês',
      spanish: 'Espanhol',
    },
  },
  'en-US': {
    navbar: {
      home: 'Home',
      services: 'Services',
      faq: 'FAQ',
      pricing: 'Pricing',
    },
    hero: {
      title: 'Automate your customer service with AI agents that work for you.',
      description: 'Revolutionize your business with AI agents that offer 24/7 service, reduce errors, and increase efficiency in support and sales. Scale your processes without increasing costs.',
      button: 'Talk to us',
    },
    services: {
      title: 'Our Services',
      subtitle: 'AI automation solutions for various types of businesses and needs, providing efficiency and scalability.',
      agency: {
        title: 'Agencies',
        description: 'Improve service and processes for your clients by automating repetitive tasks and freeing up time for strategy.',
      },
      scheduling: {
        title: 'Scheduling Businesses',
        description: 'Eliminate the manual work of scheduling and managing appointments with an intelligent system available 24/7.',
      },
      leads: {
        title: 'Lead Qualification',
        description: 'Automatically identify and prioritize the most promising leads, increasing your teams\' conversion rate.',
      },
      support: {
        title: 'Scalable Support',
        description: 'Serve more customers simultaneously without increasing costs, with quick and accurate responses to common questions.',
      },
      automation: {
        title: 'Process Automation',
        description: 'Transform slow internal processes into efficient workflows with custom automations for your reality.',
      },
      sales: {
        title: 'Pre and Post-sales',
        description: 'Optimize the customer journey with pre-purchase guidance and automatic, personalized post-sale follow-up.',
      },
      custom: {
        title: 'Custom Automations',
        description: 'In addition to standard services, we develop tailored solutions for each client, automating specific processes for your business.',
        integration: 'Integration with your current tools',
        reports: 'Performance reports and analytics',
        training: 'Training for specific cases',
        support: 'Continuous support and updates',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about our AI automation services.',
      questions: {
        q1: {
          question: 'Does service work 24/7?',
          answer: 'Yes, our AI agents work 24 hours a day, 7 days a week, ensuring that your customers never go without service, even outside business hours. This allows your company to always be available to answer questions, qualify leads, and provide service.',
        },
        q2: {
          question: 'Does the system present many errors?',
          answer: 'Our solution is built with advanced AI technology that is constantly learning. The agents are trained specifically for your business, which minimizes errors. In addition, we offer continuous monitoring and adjustments to ensure the system improves over time. For very complex cases, there is the possibility of escalation to human service.',
        },
        q3: {
          question: 'How does automation work?',
          answer: 'The process begins with an analysis of your business\'s specific needs. We then develop custom AI agents that automate tasks such as customer service, lead qualification, and scheduling. The agents are integrated with your existing communication channels (website, WhatsApp, etc.) and begin to interact with your customers following predefined flows, but with the intelligence to handle variations in conversations.',
        },
        q4: {
          question: 'Can AI agents be customized for my business?',
          answer: 'Absolutely. Each agent is developed considering the specifics of your business, including brand voice, internal processes, and particular needs. We train the models with information about your product or service, frequently asked questions, and common service scenarios, ensuring that the agent adequately represents your company.',
        },
        q5: {
          question: 'How long does it take to implement the solution?',
          answer: 'Implementation time varies according to the complexity of the solution and the specific needs of your business. Simple projects can be implemented in a few weeks, while more complex solutions may take a few months. Throughout the process, we work closely with your team to ensure that implementation is smooth and effective.',
        },
        q6: {
          question: 'Is it possible to integrate with the systems I already use?',
          answer: 'Yes, our solution is designed to be highly integrable. We can connect our AI agents with CRMs, e-commerce platforms, scheduling systems, marketing tools, and many other systems. This allows automation to fit perfectly into your current workflow, enhancing results without replacing tools that already work well.',
        },
      },
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Customized solutions with prices adapted to your specific needs.',
      customQuote: {
        title: 'Custom Quote',
        description: 'We develop tailored solutions for your business',
      },
      volumeTitle: 'Interaction Volume',
      volumeDescription: 'We size the solution according to the expected volume of monthly interactions.',
      complexityTitle: 'Complexity',
      complexityDescription: 'We evaluate the complexity of the service flows and processes to be automated.',
      integrationsTitle: 'Integrations',
      integrationsDescription: 'We consider which systems will need to be integrated with the AI solution.',
      customizationTitle: 'Customization',
      customizationDescription: 'We define the level of customization needed for AI agents.',
      quoteDescription: 'To receive a detailed quote adapted to your reality, contact us. We will analyze your needs and present the best solution with an appropriate investment for your business.',
      requestButton: 'Request Quote',
    },
    footer: {
      companyDescription: 'Transforming companies with automation solutions powered by artificial intelligence.',
      contact: 'Contact',
      address: 'Sorocaba, SP - Brazil',
      rights: 'All rights reserved.',
    },
    language: {
      portuguese: 'Portuguese',
      english: 'English',
      spanish: 'Spanish',
    },
  },
  'es-ES': {
    navbar: {
      home: 'Inicio',
      services: 'Servicios',
      faq: 'Preguntas',
      pricing: 'Precios',
    },
    hero: {
      title: 'Automatiza tu servicio al cliente con agentes de IA que trabajan para ti.',
      description: 'Revoluciona tu negocio con agentes de IA que ofrecen servicio 24/7, reducen errores y aumentan la eficiencia en soporte y ventas. Escala tus procesos sin aumentar costos.',
      button: 'Habla con nosotros',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones de automatización con IA para diversos tipos de negocios y necesidades, proporcionando eficiencia y escalabilidad.',
      agency: {
        title: 'Agencias',
        description: 'Mejora el servicio y los procesos para tus clientes automatizando tareas repetitivas y liberando tiempo para la estrategia.',
      },
      scheduling: {
        title: 'Negocios con Agendamientos',
        description: 'Elimina el trabajo manual de agendar y gestionar citas con un sistema inteligente disponible 24/7.',
      },
      leads: {
        title: 'Calificación de Leads',
        description: 'Identifica y prioriza automáticamente los leads más prometedores, aumentando la tasa de conversión de tus equipos.',
      },
      support: {
        title: 'Soporte Escalable',
        description: 'Atiende a más clientes simultáneamente sin aumentar costos, con respuestas rápidas y precisas a preguntas comunes.',
      },
      automation: {
        title: 'Automatización de Procesos',
        description: 'Transforma procesos internos lentos en flujos eficientes con automatizaciones personalizadas para tu realidad.',
      },
      sales: {
        title: 'Pre y Post-ventas',
        description: 'Optimiza el recorrido del cliente con orientación previa a la compra y seguimiento post-venta automático y personalizado.',
      },
      custom: {
        title: 'Automatizaciones Personalizadas',
        description: 'Además de los servicios estándar, desarrollamos soluciones a medida para cada cliente, automatizando procesos específicos para tu negocio.',
        integration: 'Integración con tus herramientas actuales',
        reports: 'Informes de rendimiento y análisis',
        training: 'Capacitación para casos específicos',
        support: 'Soporte continuo y actualizaciones',
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de automatización con IA.',
      questions: {
        q1: {
          question: '¿El servicio funciona 24/7?',
          answer: 'Sí, nuestros agentes de IA funcionan 24 horas al día, 7 días a la semana, asegurando que tus clientes nunca se queden sin atención, incluso fuera del horario comercial. Esto permite que tu empresa esté siempre disponible para responder preguntas, calificar leads y realizar atenciones.',
        },
        q2: {
          question: '¿El sistema presenta muchos errores?',
          answer: 'Nuestra solución está construida con tecnología avanzada de IA que aprende constantemente. Los agentes son entrenados específicamente para tu negocio, lo que minimiza errores. Además, ofrecemos monitoreo continuo y ajustes para garantizar que el sistema mejore con el tiempo. Para casos muy complejos, existe la posibilidad de escalamiento a atención humana.',
        },
        q3: {
          question: '¿Cómo funciona la automatización?',
          answer: 'El proceso comienza con el análisis de las necesidades específicas de tu negocio. Luego, desarrollamos agentes de IA personalizados que automatizan tareas como atención al cliente, calificación de leads y agendamientos. Los agentes se integran a tus canales de comunicación existentes (sitio web, WhatsApp, etc.) y comienzan a interactuar con tus clientes siguiendo flujos predefinidos, pero con la inteligencia para manejar variaciones en las conversaciones.',
        },
        q4: {
          question: '¿Los agentes de IA pueden ser personalizados para mi negocio?',
          answer: 'Absolutamente. Cada agente es desarrollado considerando las especificidades de tu negocio, incluyendo tono de voz de la marca, procesos internos y necesidades particulares. Entrenamos los modelos con información de tu producto o servicio, preguntas frecuentes y escenarios comunes de atención, garantizando que el agente represente adecuadamente a tu empresa.',
        },
        q5: {
          question: '¿Cuánto tiempo lleva implementar la solución?',
          answer: 'El tiempo de implementación varía de acuerdo con la complejidad de la solución y las necesidades específicas de tu negocio. Proyectos simples pueden ser implementados en pocas semanas, mientras que soluciones más complejas pueden llevar algunos meses. Durante todo el proceso, trabajamos en estrecha colaboración con tu equipo para garantizar que la implementación sea suave y eficaz.',
        },
        q6: {
          question: '¿Es posible integrar con los sistemas que ya uso?',
          answer: 'Sí, nuestra solución fue diseñada para ser altamente integrable. Podemos conectar nuestros agentes de IA con CRMs, plataformas de e-commerce, sistemas de agendamiento, herramientas de marketing y muchos otros sistemas. Esto permite que la automatización se encaje perfectamente en tu flujo de trabajo actual, potenciando los resultados sin sustituir herramientas que ya funcionan bien.',
        },
      },
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Soluciones personalizadas con precios adaptados a tus necesidades específicas.',
      customQuote: {
        title: 'Presupuesto Personalizado',
        description: 'Desarrollamos soluciones a medida para tu negocio',
      },
      volumeTitle: 'Volumen de Interacciones',
      volumeDescription: 'Dimensionamos la solución de acuerdo con el volumen esperado de interacciones mensuales.',
      complexityTitle: 'Complejidad',
      complexityDescription: 'Evaluamos la complejidad de los flujos de atención y procesos a ser automatizados.',
      integrationsTitle: 'Integraciones',
      integrationsDescription: 'Consideramos qué sistemas necesitarán ser integrados a la solución de IA.',
      customizationTitle: 'Personalización',
      customizationDescription: 'Definimos el nivel de personalización necesario para los agentes de IA.',
      quoteDescription: 'Para recibir un presupuesto detallado adaptado a tu realidad, contacta con nosotros. Analizaremos tus necesidades y presentaremos la mejor solución con una inversión adecuada para tu negocio.',
      requestButton: 'Solicitar Presupuesto',
    },
    footer: {
      companyDescription: 'Transformando empresas con soluciones de automatización alimentadas por inteligencia artificial.',
      contact: 'Contacto',
      address: 'Sorocaba, SP - Brasil',
      rights: 'Todos los derechos reservados.',
    },
    language: {
      portuguese: 'Portugués',
      english: 'Inglés',
      spanish: 'Español',
    },
  },
};

// Language context configuration
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  flags: Record<Language, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  // Flag images
  const flags: Record<Language, string> = {
    'pt-BR': '🇧🇷',
    'en-US': '🇺🇸',
    'es-ES': '🇪🇸',
  };

  useEffect(() => {
    // Detect browser language and set default
    const detectLanguage = () => {
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt')) {
        return 'pt-BR';
      } else if (browserLang.startsWith('es')) {
        return 'es-ES';
      } else if (browserLang.startsWith('en')) {
        return 'en-US';
      }
      return 'pt-BR'; // Default to Portuguese
    };

    // Get saved language from localStorage or use browser detection
    const savedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = savedLanguage || detectLanguage();
    setLanguage(initialLanguage);
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    flags,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
