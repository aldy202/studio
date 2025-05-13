
'use client';

import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  initialClass?: string;
  animateInClass?: string;
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number; 
  duration?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  initialClass = 'opacity-0 translate-y-5',
  animateInClass = 'opacity-100 translate-y-0',
  triggerOnce = true,
  threshold = 0.1,
  delay = 0,
  duration = 700,
}: ScrollAnimationWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';
  const durationClass = duration > 0 ? `duration-[${duration}ms]` : 'duration-700';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        durationClass,
        delayClass,
        className,
        inView ? animateInClass : initialClass
      )}
    >
      {children}
    </div>
  );
}
