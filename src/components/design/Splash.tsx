import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// @ts-expect-error flubber has no types
import { interpolate } from 'flubber';
import { animateHeroNav } from '@/animations';

export default function Splash() {
  const [isLoading, setIsLoading] = useState(false);
  const triangleRef = useRef<SVGPathElement>(null);
  const squareRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    document.body.classList.add('stop-scrolling');

    const pathA = "M234.8 264.5c0-0.7 0.2-1.6 0.6-2.8l48.4-134.1c0.7-2.2 3.4-3.3 8.2-3.3h6c4.7 0 7.4 1.1 8 3.3l48.4 134.3c0.5 1 0.7 1.8 0.7 2.6 0 2.3-3 3.5-8.8 3.5h-1.7c-4.7 0-7.4-1-8.1-3.3l-12-33.4h-60l-11.7 33.4c-0.7 2.2-3.4 3.3-8.2 3.3h-1c-5.8 0-8.8-1.2-8.8-3.5z m35.3-48.8H319L297.5 155l-2.7-11.8-3.2 11.8-21.5 60.8z";
    const pathC = "M356.7 197.7c0-48.5 22-72.7 66.2-72.7a82 82 0 0 1 26.8 4.2c8.1 2.8 12.1 5.6 12.1 8.5 0 1.9-0.8 4.3-2.5 7.3s-3.2 4.5-4.4 4.5c-0.3 0-1.7-0.8-4.4-2.3a59.3 59.3 0 0 0-27.2-6.7c-16.5 0-28.6 4.6-36.4 13.7-7.7 9.1-11.6 23.6-11.6 43.4s3.9 34.2 11.5 43.4c7.7 9.2 19.6 13.8 35.7 13.8a66.6 66.6 0 0 0 30-7.7 25 25 0 0 1 5-2.5c1.3 0 2.8 1.5 4.6 4.5 1.7 3 2.6 5.2 2.6 6.5 0 3.2-4.2 6.4-12.7 9.7-8.6 3.4-18.4 5-29.5 5-22.5 0-39-5.9-49.7-17.6-10.7-11.8-16-30.1-16-55z";
    const pathM = "M470 264.5v-134h17.5l35 90.3 35-90.3h17.5v134h-13v-102.5l-33 85h-13l-33-85v102.5h-13z";

    if (!triangleRef.current || !squareRef.current || !circleRef.current) return;

    const interpA = interpolate(triangleRef.current.getAttribute('d')!, pathA);
    const interpC = interpolate(squareRef.current.getAttribute('d')!, pathC);
    const interpM = interpolate(circleRef.current.getAttribute('d')!, pathM);

    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { ease: "power2.inOut" },
    });

    const dummyA = { p: 0 };
    const dummyC = { p: 0 };
    const dummyM = { p: 0 };

    const morphTl = gsap.timeline({
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.4,
      defaults: { ease: "power2.inOut", duration: 0.6 }
    });

    morphTl.to(dummyA, {
      p: 1,
      onUpdate: () => triangleRef.current!.setAttribute('d', interpA(dummyA.p))
    }, 0)
    .to(dummyC, {
      p: 1,
      onUpdate: () => squareRef.current!.setAttribute('d', interpC(dummyC.p))
    }, 0.2)
    .to(dummyM, {
      p: 1,
      onUpdate: () => circleRef.current!.setAttribute('d', interpM(dummyM.p))
    }, 0.4);

    tl.add(morphTl);

    tl.to('#loading-screen', {
      bottom: '100%',
      duration: 1,
      ease: 'power2.inOut',
      delay: 0.5,
      onStart: () => {
        setTimeout(() => {
          document.body.classList.remove('stop-scrolling');
          window.scrollTo(0, 0);
          animateHeroNav();
        }, 120);
      },
      onComplete: () => {
        gsap.set('#loading-screen', { display: 'none' });
        setIsLoading(true);
      }
    });
  }, []);

  if (isLoading) return null;

  return (
    <div
      id="loading-screen"
      className="flex-center fixed bottom-0 z-[99999] size-full cursor-wait bg-[#0e100f]"

    >
      <div className="size-full flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 400" className="max-w-[1200px] w-full px-4">
          <defs>
            <linearGradient id="grad-1" x1="200" y1="300" x2="255" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0ea5e9"></stop>
              <stop offset="0.5" stopColor="#ffffff"></stop>
            </linearGradient>
            
            <linearGradient id="grad-2" x1="340" y1="42" x2="240" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0.1" stopColor="#0ea5e9"></stop>
              <stop offset="0.5" stopColor="#ffffff"></stop>
            </linearGradient>
            
            <radialGradient id="grad-3" cx="460" cy="280" gradientUnits="userSpaceOnUse">
              <stop offset="0.1" stopColor="#0ea5e9"></stop>
              <stop offset="0.35" stopColor="#ffffff"></stop>
            </radialGradient>
          </defs>
          
          <path id="triangle" ref={triangleRef} fill="url(#grad-1)" d="M241,242 L283,157 L326,242 Z"/>
          <path id="square" ref={squareRef} fill="url(#grad-2)" d="M363,157 L448,157 L448,242 L363,242 Z"/>
          <path id="circle" ref={circleRef} fill="url(#grad-3)" d="M530,157.5 A42.5,42.5 0 1,1 529.9,157.5 Z"/>
        </svg>
      </div>
    </div>
  );
}
