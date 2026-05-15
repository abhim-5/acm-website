import { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { activateMagneto, resetMagneto } from '@/animations';

interface MagneticEffectProps {
  divId: string;
  textId: string;
  magnetoStrengthVal?: number;
  magnetoTextStrengthVal?: number;
  children: React.ReactNode;
}

export default function MagneticEffect({
  divId,
  textId,
  magnetoStrengthVal = 70,
  magnetoTextStrengthVal = 50,
  children,
}: MagneticEffectProps) {
  const { width } = useWindowSize();
  const magnetoRef = useRef<HTMLElement | null>(null);
  const magnetoTextRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    magnetoRef.current = document.getElementById(divId);
    magnetoTextRef.current = document.getElementById(textId);

    const handleMouseMove = (e: MouseEvent) => {
      if (magnetoRef.current && magnetoTextRef.current) {
        activateMagneto(
          e,
          magnetoRef.current,
          magnetoTextRef.current,
          magnetoStrengthVal,
          magnetoTextStrengthVal
        );
      }
    };

    const handleMouseLeave = () => {
      if (magnetoRef.current && magnetoTextRef.current) {
        resetMagneto(
          magnetoRef.current,
          magnetoTextRef.current
        );
      }
    };

    if (width > 700 && magnetoRef.current) {
      magnetoRef.current.addEventListener('mousemove', handleMouseMove);
      magnetoRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (magnetoRef.current) {
        magnetoRef.current.removeEventListener('mousemove', handleMouseMove);
        magnetoRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [divId, textId, width, magnetoStrengthVal, magnetoTextStrengthVal]);

  return <>{children}</>;
}
