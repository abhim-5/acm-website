<template>
  <Splash v-cloak="true" />

  <div class="pointer-events-none fixed inset-0 z-50">
    <svg
      class="h-[150vh] w-full object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect ref="noise" class="size-full" filter="url(#noise)" opacity="0.15" />

      <filter id="noise2">
        <feTurbulence
          type="fractalNoise"
          base-frequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect
        ref="noise"
        class="size-full"
        filter="url(#noise2)"
        opacity="-0.88"
      />
    </svg>
  </div>

  <Cursor />
  <Navbar @isLocked="LockeScroll" />

  <main class="relative min-h-full">
    <Hero />
    <div
      class="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]"
    >
      <About />
      <EventTicker />
      <Events />
    </div>

    <Team />
    <Community />
    <SiteFooter />
  </main>
</template>

<script setup lang="ts">
  import Hero from '@/components/sections/Hero.vue';
  import About from '@/components/sections/About.vue';
  import Events from '@/components/sections/Events.vue';
  import Team from '@/components/sections/Team.vue';
  import Community from '@/components/sections/Community.vue';
  import SiteFooter from '@/components/sections/SiteFooter.vue';
  import { onMounted, type Ref, ref, watch } from 'vue';

  import Splash from '@/components/design/Splash.vue';
  import EventTicker from '@/components/design/EventTicker.vue';
  import Cursor from '@/components/design/Cursor.vue';
  import { useWindowSize } from '@vueuse/core';

  import Navbar from '@/components/common/Nav.vue';
  import { lenis, raf } from './main';

  const { width, height } = useWindowSize();
  const noise: Ref<HTMLElement | null> = ref(null);

  const LockeScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  watch([width, height], () => {
    if (noise.value) {
      noise.value.style.height = `${height.value * 2}px`;
      noise.value.style.width = `${width.value}px`;
    }
  });

  onMounted(() => {
    document.body.classList.add('stop-scrolling');
    setTimeout(() => {
      requestAnimationFrame(raf);
    }, 2000);
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
