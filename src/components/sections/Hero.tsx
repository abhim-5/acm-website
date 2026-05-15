import { useEffect, useState, useRef } from 'react';
import { textSplitterIntoChar } from '@/functions';
import './Hero.css';

export default function Hero() {
  const [whoAmI, setWhoAmI] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = 'The official student chapter of ACM at NIT Surat. Fostering a culture of computing, technology, and innovation.';
    setWhoAmI(textSplitterIntoChar(text));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoContainerRef.current) return;
      const rect = logoContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      logoContainerRef.current.style.setProperty('--mouse-x', `${x}px`);
      logoContainerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="mb-[-100svh] py-0 relative">
      <div
        className="sticky top-0 flex min-h-svh w-full pt-24 sm:pt-32 hero-gradient-bg"
      >
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-80">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-grid"></div>

          {/* Vignette Effect */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 50%, rgba(56, 57, 46, 0.25) 100%)'
          }} />

          {/* Logo Container with Highlight Effect */}
          <div 
            ref={logoContainerRef}
            className="absolute size-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          >
            {/* Base Logo (More Prominent) */}
            <img
              src="/logo.png"
              alt="ACM Logo BG Dim"
              className="absolute inset-0 size-full opacity-35 mix-blend-multiply"
              style={{ 
                maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
              }}
            />

            {/* Highlight Logo (Ultra Highlight) */}
            <img
              src="/logo.png"
              alt="ACM Logo BG Highlight"
              className="absolute inset-0 size-full opacity-95 mix-blend-multiply"
              style={{ 
                maskImage: 'radial-gradient(180px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(180px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 30%, transparent 100%)'
              }}
            />
          </div>
          
          {/* Floating Orb 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0ea5e9]/15 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          {/* Floating Orb 2 */}
          <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-flax-smoke-300/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
          {/* Floating Orb 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#0ea5e9]/15 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative flex w-full h-full flex-col items-center justify-start md:justify-center z-10 text-center gap-8 px-4 md:pb-[40vh]">
          
          <div className="flex flex-col items-center gap-2 mt-[15vh] md:mt-8 w-full z-20">
            <div className="flex w-full relative items-center justify-center">
              <h1 className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-none flex flex-wrap justify-center gap-x-4 sm:gap-x-8 text-center w-full max-w-[90%] mx-auto">
                {['ACM', 'NIT', 'SURAT'].map((word, wIdx) => (
                  <div key={wIdx} className="flex overflow-hidden">
                    {word.split('').map((char, cIdx) => (
                      <span key={char + cIdx} className="hero-title-char translate-y-[120%] will-change-transform block text-flax-smoke-900 drop-shadow-sm hover:text-[#0ea5e9] transition-colors duration-300">
                        {char}
                      </span>
                    ))}
                  </div>
                ))}
              </h1>
            </div>

            <p className="sr-only">
              The official student chapter of ACM at NIT Surat. Fostering a culture of computing, technology, and innovation.
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: whoAmI }}
              id="whoAmI"
              className="who-am-i flex flex-wrap justify-center gap-x-[0.25em] heading-4 font-fancy max-w-[50ch] overflow-clip leading-[1.15] font-medium text-balance text-center text-flax-smoke-800 mx-auto w-full px-4"
            ></p>
          </div>
        </div>

        <div
          id="profile-container"
          className="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] overflow-hidden"
        >
          <div className="overlay bg-flax-smoke-50 absolute inset-0 z-30"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
          <img
            id="profile-img"
            src="/group.png"
            alt="ACM NIT SURAT Group"
            className="size-full object-cover object-top brightness-110 hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
      <div className="h-svh"></div>
    </section>
  );
}


