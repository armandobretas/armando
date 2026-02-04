'use client';

import { useState, useEffect, useRef } from 'react';

const Duration = 1500;
const Easing = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(
  end: number,
  isInView: boolean,
  suffix = '',
  prefix = '',
): string {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      startTimeRef.current = null;
      return undefined;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / Duration, 1);
      const easedProgress = Easing(progress);
      const currentValue = Math.round(end * easedProgress);
      setDisplayValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [end, isInView]);

  return `${prefix}${displayValue}${suffix}`;
}
