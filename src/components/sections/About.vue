<template>
  <section id="services" class="padding-x mb-20">
    <div class="flex w-full flex-col">
      <h3
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold capitalize"
      ></h3>

      <hr class="border-t border-flax-smoke-800 my-10" />

      <div
        id="services-text"
        class="grid grid-cols-1 md:grid-cols-12 gap-10 opacity-0 items-start"
      >
        <div class="md:col-span-4 flex flex-col items-center justify-start text-center">
          <img src="/acm-customlogo.png" alt="ACM Custom Logo" class="w-48 h-48 object-contain mb-4" />
          <h4 class="text-2xl font-bold text-white mb-1">ACM NIT Surat</h4>
          <p class="text-flax-smoke-400 font-medium">Student Chapter</p>
        </div>
        <div class="md:col-span-8">
          <p class="text-flax-smoke-300 text-lg sm:text-xl leading-relaxed font-medium font-sans text-balance">
            ACM NIT Surat student chapter, established in 2005, is an integral part of the
            International Learned Society for Computing, ACM. Comprising a dedicated team of
            computing educators, researchers, and professionals, the chapter aims to inspire
            dialogue, resource-sharing, and tackling challenges in the field of computing. Through a
            wide array of engaging activities like coding challenges, hackathons, quizzes, and
            application development, the chapter has fostered an environment of learning, fun, and
            productivity. Its reputation within the institute is exceptional, evident from the massive
            turnout at every event. With its ambitious goals, including the nationwide recognition of
            events like Epiphany and Dotslash, ACM NIT Surat is constantly raising the bar and
            making a significant impact in the world of technology and education.
          </p>
        </div>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="mt-12 flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="border-flax-smoke-500/50 sticky border-t bg-[#0B0B0A]"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import ServicesCard from '@/components/AboutCard.vue';

  const whatIDo = ref('WHY JOIN US');

  const servicesCardProps = [
    {
      title: 'Technical Growth',
      body: 'Gain hands-on experience through our coding challenges, competitive programming contests, and expert-led development workshops. We push you to elevate your technical skills to industry standards.',
      headings: ['Hackathons', 'Coding Contests', 'Workshops'],
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
    },
    {
      title: 'Vibrant Community',
      body: 'Join a welcoming network of tech enthusiasts and professionals. Forge valuable connections, find mentors, and collaborate on exciting projects with like-minded peers.',
      headings: [
        'Mentorship',
        'Tech Talks',
        'Networking',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
    },
    {
      title: 'Real-world Impact',
      body: 'Participate in our flagship events like Epiphany and Dotslash. Work on large-scale applications and hackathons that tackle complex challenges and showcase your talent to the nation.',
      headings: [
        'Flagship Events',
        'Project Building',
        'Leadership',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
    },
  ];

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar(whatIDo.value, true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
  });

  const getStyle = (index: number) => {
    if (index === 0) {
      return 'top-[calc(20vh_+_0em)] mb-[17.25em]';
    }

    if (index === 1) {
      return 'top-[calc(20vh_+_5.75em)] mb-[11.5em]';
    }

    if (index === 2) {
      return 'top-[calc(20vh_+_11.5em)] mb-[5.75em]';
    }
  };
</script>
