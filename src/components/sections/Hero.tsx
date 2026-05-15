import { useEffect, useState } from 'react';
import { textSplitterIntoChar } from '@/functions';
import './Hero.css';

export default function Hero() {
  const [whoAmI, setWhoAmI] = useState('');

  useEffect(() => {
    const text = 'The official student chapter of ACM at NIT Surat. Fostering a culture of computing, technology, and innovation.';
    setWhoAmI(textSplitterIntoChar(text));
  }, []);

  return (
    <section id="hero" className="mb-[-100svh] py-0">
      <div
        className="sticky top-0 flex min-h-svh w-full pt-24 sm:pt-32"
      >

        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-80">
          {/* Floating Orb 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0ea5e9]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          {/* Floating Orb 2 */}
          <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-flax-smoke-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
          {/* Floating Orb 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#0ea5e9]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative flex w-full h-full flex-col items-center justify-start md:justify-center z-10 text-center gap-8 px-4 md:pb-[40vh]">
          
          <div className="flex flex-col items-center gap-2 mt-[15vh] md:mt-8 w-full z-20">
            <div className="flex w-full relative items-center justify-center">
              <h1 className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-none flex flex-wrap justify-center gap-x-4 sm:gap-x-8 text-center w-full max-w-[90%] mx-auto">
                {['ACM', 'NIT', 'SURAT'].map((word, wIdx) => (
                  <div key={wIdx} className="flex overflow-hidden">
                    {word.split('').map((char, cIdx) => (
                      <span key={char + cIdx} className="hero-title-char translate-y-[120%] will-change-transform block text-flax-smoke-900 drop-shadow-sm">
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
