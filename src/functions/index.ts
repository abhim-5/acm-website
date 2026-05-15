import { lenis } from '@/main';

// Splits a string into individually wrapped character spans for GSAP animation
const textSplitterIntoChar = (
  text: string,
  isFancyFont: boolean = false,
  isNewLine: boolean = false,
): string => {
  const words = text.split(' ');
  const chars = words.map((word) => word.split(''));

  let result = '';
  chars.forEach((word) => {
    result += '<span class="text-nowrap! overflow-clip ';
    result += isNewLine ? ' leading-none block ' : ' inline-block ';
    result += '">';
    word.forEach((char) => {
      let classes = 'letters translate-y-[120%] inline-block will-change-auto will-change-transform ';
      if (isFancyFont) classes += ' font-fancy ';
      result += `<span class="${classes}">${char}</span>`;
    });
    result += '</span> ';
  });

  return result;
};

// Smooth-scroll to a section using Lenis
const gotoSection = (url: string) => {
  lenis.start();
  lenis.scrollTo(url, { duration: 3 });
};

export { textSplitterIntoChar, gotoSection };
