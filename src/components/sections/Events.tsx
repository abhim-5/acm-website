import { useEffect, useRef, useState } from 'react';
import { animateSplitText } from '@/animations';
import { textSplitterIntoChar } from '@/functions';
import gsap from 'gsap';
import { useWindowSize } from '@/hooks/useWindowSize';
import { lenis } from '@/main';

export default function Events() {
  const { width } = useWindowSize();
  const isSmallScreen = width < 768;
  const [index, setIndex] = useState(0);
  const [selectedWorks, setSelectedWorks] = useState('');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const selectedWorksProps = [
    {
      name: 'Hour of Code',
      category: '5th-7th December 2022',
      tags: ['School Initiative', 'Education'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'hourofcode.jpg',
      url: '#',
      year: '2022',
      description: 'During December 2022, the NIT Surat ACM Student chapter celebrated Computer Science Week by conducting the Hour of Code event, wherein ACM executives visited five schools, over Surat and Vadodara and collectively educated over 500 school students from grades 8 - 10. Each school was visited by a group of executives who gave one or more 1-hour talks that covered the importance of computer science, some CS basics like HTML and CSS, and future opportunities in this field. For this endeavor, we received a special mention for one of the best regional student chapters as well!'
    },
    {
      name: 'Epiphany 12.1',
      category: '23rd January 2023',
      tags: ['Competitive Programming', 'National Level'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'epiphany12.jpg',
      url: '#',
      year: '2023',
      description: 'Epiphany is a National level competitive programming contest conducted at least once every year by ACM NIT Surat. This contest involves a 2-3 hour long contest where the problems are carefully curated by the problems setters in our core team - and hence are unique, interesting problems in their own right. Solutions are later sent and winners are awarded with monetary rewrads.'
    },
    {
      name: 'DotSlash',
      category: '18th - 19th February 2023',
      tags: ['Hackathon', 'Flagship Event'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'dotslash6.jpg',
      url: '#',
      year: '2023',
      description: 'The flagship event of ACM NIT Surat, DotSlash, is a 30-Hour national-level Hackathon organized annually by ACM in association with Research Park at SVNIT, Surat. DotSlash is one of the biggest Hackathons in Gujarat, where teams from all over India register; 40 of which are selected to compete offline. The qualifying teams work for 30 hours straight to build innovative solutions for given problem statements. Mentors guide the students throughout this period, providing assistance in the form of ideas, inspiration, technical help and critiques - thus striving to remove all roadblocks to innovation:) Top three winning teams are then selected through combined scores given by these mentors and experienced judges, who are then provided with benefits and monetary rewards.'
    },
    {
      name: 'CodeWars',
      category: '31st March 2023',
      tags: ['Programming Contest', 'MINDBEND'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'codewars.jpg',
      url: '#',
      year: '2023',
      description: 'CodeWars is a programming contest held by ACM in association with MINDBEND, which is one of the biggest technical events in Gujarat.'
    },
    {
      name: 'ACM Summer Challenge',
      category: '8th July - 10th August 2023',
      tags: ['Bootcamp', 'Algorithms'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'acmSummerChallenge.jpg',
      url: '#',
      year: '2023',
      description: 'The Summer Challenge is a unique endeavor by ACM NIT Surat, which strives to teach young computer science enthusiasts the fundamentals of data structures, algorithms and programming over a 30-day period. No prior experience form the students is expected. During this period, problem setters from our team hand-pick, curate, and create problems tailored to the students’ current progress every week. Time is given to the students to attempt said problems, after which one of the problem setters solve those problems live, teaching students the right approach. This is repeated for 4 weeks, incrementing the conceptual difficulty every week, giving a complete understanding of various CP topics by the end of the month.'
    },
    {
      name: 'SIH 2023 Stage 1: Ideathon',
      category: '16th September 2023',
      tags: ['Ideathon', 'SIH'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'SIH.jpg',
      url: '#',
      year: '2023',
      description: 'SIH is a national level Hackathon facilitated by the government of India. To help filter the top-30 teams from SVNIT, and to allow those teams to submit their best ideas going forward, ACM NIT Surat, in collaboration with DSC NIT Surat, conducted a faculty mentorship session, where participants presented their ideas to a panel of faculty members, who graded them, and gave appropriate critiques that allowed said teams to improve their pitch.'
    },
    {
      name: 'Open Source Workshop',
      category: '9th October 2023',
      tags: ['Workshop', 'Open Source'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'opensource.jpg',
      url: '#',
      year: '2023',
      description: 'ACM NIT Surat hosted a highly informative workshop on Git/Github and open-source contributions, which drew a strong participation of 57 attendees from second year students and featured the active involvement of 9 core committee members. The workshop, held on October 9th in the Old CSE Dept Classroom, spanned two hours and proved to be a valuable learning experience for all involved. The attendees gained comprehensive insights into Git commands, understanding the mechanics of Github, and the significance of Hacktoberfest in the open-source community'
    },
    {
      name: 'Inception 8.0',
      category: '27th October 2023',
      tags: ['Competitive Programming'],
      videoSrc: '',
      imageBg: import.meta.env.BASE_URL + 'inception8.jpg',
      url: '#',
      year: '2023',
      description: 'On 27th of October, 2023, ACM NIT Surat conducted the 8th iteration of our college-level competitive programming contest - Inception 8.0. The contest took place between 1:30pm and 4:30pm in the ground-floor labs - labI and labII, of the Central Computer Center (CCC). Students participated by forming groups of two or three members, who then, in the stipulated time, solved programming questions set by the problem setters at ACM. Both second and third year students participated in the event, and a prize money worth INR 3000 will be distributed amongst the three winning teams from the second year students.'
    }
  ];

  const createForwardTimeline = (i: number) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        setIndex(Math.min(i, selectedWorksProps.length - 1));
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });
    return tl;
  };

  const createBackwardTimeline = (i: number) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        setIndex(Math.max(i, 0));
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });
    return tl;
  };

  const goExit = () => {
    const nextSection = document.getElementById('team-section');
    if (nextSection) {
      lenis?.scrollTo(nextSection, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  };

  useEffect(() => {
    setSelectedWorks(textSplitterIntoChar('ACM Events', true));
  }, []);

  useEffect(() => {
    if (selectedWorks) {
      animateSplitText(
        '#selectedWorks .letters',
        '#selected-works-text',
        0.7,
        0.01,
        0,
      );
    }
  }, [selectedWorks]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          video.play();
          video.classList.remove('blur');
        }
      });
    }, { threshold: 0.75 });

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    const tlCursor = gsap
      .timeline({ defaults: { duration: 0.25 } })
      .to(['#cursor', '#inner'], {
        scale: 1,
        opacity: 1,
      })
      .paused(true);

    const aside = document.querySelector('aside');
    if (aside) {
      aside.addEventListener('mouseenter', () => tlCursor.play());
      aside.addEventListener('mouseleave', () => tlCursor.reverse());
    }

    if (!isSmallScreen) {
      gsap.utils.toArray<HTMLElement>('.work-card').forEach((div, i) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            start: 'top 25%',
            end: 'bottom 25%',
            scrub: 0.01,
            onLeaveBack: () => {
              if (i > 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            if (i < selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(i + 1);
                },
              });
            }
          },
        });
      });
    }

    return () => {
      observer.disconnect();
      if (aside) {
        aside.removeEventListener('mouseenter', () => tlCursor.play());
        aside.removeEventListener('mouseleave', () => tlCursor.reverse());
      }
    };
  }, [isSmallScreen]);

  return (
    <section id="works" className="common-padding mb-20 relative">
      <div className="sticky top-6 md:top-12 left-0 z-50 w-full pointer-events-none mb-8">
        <div className="flex pointer-events-auto">
          <button 
            onClick={goExit}
            className="group flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
          >
            <span className="text-lg md:text-2xl leading-none font-bold">&times;</span>
            <span className="text-xs md:text-sm">Skip Events</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-flax-smoke-800/50 pb-6 md:pb-10">
          <h3
            id="selectedWorks"
            dangerouslySetInnerHTML={{ __html: selectedWorks }}
            className="heading-1 text-start leading-none font-black uppercase tracking-tighter"
          ></h3>
          <p className="heading-2 text-flax-smoke-400/30 hidden font-bold sm:block mb-2 md:mb-4">
            ( {selectedWorksProps.length} )
          </p>
        </div>

        <div
          id="selected-works-text"
          className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 opacity-0 mt-4 md:mt-0"
        >
          <p className="heading-6 text-flax-smoke-500 font-mono tracking-widest uppercase md:w-1/4 text-nowrap">
            [ Our Legacy ]
          </p>
          <p className="heading-4 font-fancy w-full text-balance font-medium leading-relaxed md:w-3/4">
            Discover the impactful events, workshops, and hackathons hosted by ACM NIT Surat to foster learning, collaboration, and technological innovation.
          </p>
        </div>
      </div>

      <div className="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]">
        <div className="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex">
          <span className="font-title! relative -tracking-wider">0</span>
          <span
            id="index"
            className="font-title! relative -tracking-wider will-change-transform"
          >
            {index + 1}.
          </span>
        </div>
        <aside className="relative col-span-full flex flex-col space-y-10 md:col-span-7">
          {selectedWorksProps.map((work, i) => (
            <div key={i} className="work-card @container">
              <a className="group" target="_blank" href={work.url} rel="noreferrer">
                <div className="flex-center relative aspect-[4/3] overflow-clip rounded-lg">
                  <img
                    alt="work-background"
                    loading="lazy"
                    className="absolute size-full object-cover select-none"
                    src={work.imageBg}
                  />
                  <div className="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={work.videoSrc}
                      muted
                      autoPlay={false}
                      className="size-[80%] rounded-md object-contain blur transition-all duration-500 ease-in-out"
                    ></video>

                  </div>
                </div>
                <div className="mt-6 flex flex-col">
                  <p className="mb-3 text-xs md:text-sm font-mono tracking-widest uppercase text-flax-smoke-500">
                    {work.category}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="items-start justify-between sm:flex">
                      <h3 className="heading-3 font-title! font-bold uppercase tracking-tight sm:max-w-[70%]">
                        {work.name}
                      </h3>
                      <div className="flex gap-2 select-none mt-3 sm:mt-0 flex-wrap justify-start sm:justify-end">
                        {work.tags.map((tag) => (
                          <p
                            key={tag}
                            className="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-1.5 transition-[background-color,color] duration-500 ease-in-out text-xs font-medium"
                          >
                            <span>{tag}</span>
                          </p>
                        ))}
                        <p className="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-4 py-1.5 transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent text-xs font-bold">
                          <span>{work.year}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-flax-smoke-300 text-sm md:text-base leading-relaxed text-balance opacity-85">
                      {work.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
