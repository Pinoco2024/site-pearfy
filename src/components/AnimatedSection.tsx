
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-right' | 'zoom-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  id,
  delay = 0,
  animation = 'fade-in'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0', 'scale-95', 'translate-x-20');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-in':
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
      case 'fade-in-right':
        return 'opacity-0 translate-x-20 transition-all duration-700 ease-out';
      case 'zoom-in':
        return 'opacity-0 scale-95 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
    }
  };

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
